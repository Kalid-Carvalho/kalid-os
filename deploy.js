/**
 * deploy.js — Upload FTP para grovw.com.br
 *
 * Uso:
 *   node deploy.js                        → sobe tudo (site + subpáginas)
 *   node deploy.js briefings/alexandreneto → sobe só essa pasta
 *   node deploy.js site                   → sobe só o site principal (ads-grovw)
 *
 * Credenciais lidas do .env (nunca hardcoded aqui)
 */

require('dotenv').config();
const ftp = require('basic-ftp');
const path = require('path');
const fs = require('fs');

const FTP = {
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  port: parseInt(process.env.FTP_PORT) || 21,
  root: process.env.FTP_ROOT || '/public_html',
};

// Mapa: pasta local → destino no servidor
// Estrutura local confirmada em 10/04/2026
// ATENÇÃO: só adicionar entradas com caminho local existente
const DEPLOY_MAP = {
  // Site principal
  'site':                    { local: 'projetos/site-grovw/index.html',               remote: '/ads-grovw/index.html' },
  'site-assets':             { local: 'projetos/site-grovw/assets',                  remote: '/ads-grovw/assets' },

  // Formulários (arquivos únicos)
  'briefing':                { local: 'projetos/formulario-briefing.html',                  remote: '/briefing/index.html' },
  'contrato':                { local: 'projetos/formulario-contrato.html',                  remote: '/contrato/index.html' },

  // Subpáginas estáticas
  'privacidade':             { local: 'projetos/site-grovw/_raiz/privacidade/index.html',   remote: '/privacidade/index.html' },
  'termos':                  { local: 'projetos/site-grovw/_raiz/termos/index.html',        remote: '/termos/index.html' },
  'obrigado':                { local: 'projetos/site-grovw/_raiz/obrigado/index.html',      remote: '/obrigado/index.html' },

  // Links
  'links':                   { local: 'projetos/links-grovw',                               remote: '/links' },

  // Briefings de clientes/parceiros
  'briefings/alexandreneto': { local: 'projetos/site-grovw/briefings/alexandreneto',        remote: '/briefings/alexandreneto' },
};

async function deploy(target) {
  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    console.log(`\n Conectando em ${FTP.host}:${FTP.port}...`);
    await client.access({
      host: FTP.host,
      user: FTP.user,
      password: FTP.password,
      port: FTP.port,
      secure: false,
    });
    console.log(' Conectado.\n');

    const targets = target ? [target] : Object.keys(DEPLOY_MAP);

    for (const key of targets) {
      const entry = DEPLOY_MAP[key];
      if (!entry) {
        console.warn(` Alvo desconhecido: "${key}". Alvos válidos: ${Object.keys(DEPLOY_MAP).join(', ')}`);
        continue;
      }

      const localPath = path.join(__dirname, entry.local);
      const remotePath = FTP.root + entry.remote;

      if (!fs.existsSync(localPath)) {
        console.warn(` Caminho local não encontrado: ${localPath}`);
        continue;
      }

      const isFile = fs.statSync(localPath).isFile();

      if (isFile) {
        const remoteDir = remotePath.substring(0, remotePath.lastIndexOf('/'));
        console.log(` Subindo arquivo: ${entry.local} → ${remotePath}`);
        await client.ensureDir(remoteDir);
        await client.uploadFrom(localPath, remotePath);
      } else {
        console.log(` Subindo pasta: ${entry.local} → ${remotePath}`);
        await client.ensureDir(remotePath);
        await client.uploadFromDir(localPath, remotePath);
      }

      console.log(` Concluído: ${key}\n`);
    }

    console.log(' Deploy finalizado com sucesso.');

  } catch (err) {
    console.error('\n Erro no deploy:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Lê argumento da linha de comando
const target = process.argv[2] || null;
deploy(target);
