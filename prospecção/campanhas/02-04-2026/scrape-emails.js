const https = require('https');
const http = require('http');
const fs = require('fs');

const input = fs.readFileSync('c:/Users/kalid/Downloads/KalidCarvalho-os/prospecção/campanhas/02-04-2026/advogados-enxuto.csv', 'utf-8').replace(/^\uFEFF/, '');
const lines = input.trim().split('\n').slice(1);

const EMAIL_REGEX = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
const IGNORE = ['@sentry', '@example', '@email', 'favicon', '.png', '.jpg', '.gif', '.svg', 'wix.com', 'wordpress.com', 'google.com', 'schema.org', 'w3.org'];

function parseLine(line) {
  const parts = line.split(',');
  const nome = parts[0] || '';
  const sobrenome = (parts[1] || '').replace(/"/g, '');
  const dominio = parts[2] || '';
  return { nome, sobrenome, dominio };
}

function fetchPage(url, timeout = 8000) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location;
        const next = loc.startsWith('http') ? loc : `https://${url.split('/')[2]}${loc}`;
        fetchPage(next, timeout).then(resolve);
        return;
      }
      let data = '';
      res.on('data', chunk => { data += chunk; if (data.length > 200000) req.destroy(); });
      res.on('end', () => resolve(data));
      res.on('error', () => resolve(''));
    });
    req.setTimeout(timeout, () => { req.destroy(); resolve(''); });
    req.on('error', () => resolve(''));
  });
}

function extractEmails(html, dominio) {
  const matches = html.match(EMAIL_REGEX) || [];
  return [...new Set(matches)].filter(e => {
    if (IGNORE.some(i => e.includes(i))) return false;
    const parts = e.split('@');
    if (parts[1] && parts[1].length < 4) return false;
    return true;
  });
}

async function processAll() {
  const results = [];
  const SKIP_DOMAINS = ['instagram.com', 'facebook.com', 'wa.me', 'linktr.ee', 'youtube.com'];
  const rows = lines.map(parseLine).filter(r => {
    if (!r.dominio) return false;
    if (SKIP_DOMAINS.some(s => r.dominio.includes(s))) return false;
    if (!r.dominio.includes('.')) return false;
    if (r.dominio.includes(' ') || r.dominio.includes('&')) return false;
    return true;
  });

  console.log(`Processando ${rows.length} dominios...`);

  for (let i = 0; i < rows.length; i++) {
    const { nome, sobrenome, dominio } = rows[i];
    const url = `https://${dominio}`;
    process.stdout.write(`[${i+1}/${rows.length}] ${dominio} ... `);

    const html = await fetchPage(url);
    const emails = extractEmails(html, dominio);

    if (emails.length === 0) {
      // tenta pagina de contato
      const html2 = await fetchPage(`${url}/contato`);
      const emails2 = extractEmails(html2, dominio);
      emails.push(...emails2);
    }

    const email = emails[0] || '';
    console.log(email || 'nao encontrado');
    results.push({ nome, sobrenome, dominio, email });
  }

  const csv = '\uFEFF' + 'nome,sobrenome,dominio,email\n' + results.map(r =>
    `${r.nome},"${r.sobrenome}",${r.dominio},${r.email}`
  ).join('\n');

  fs.writeFileSync('c:/Users/kalid/Downloads/KalidCarvalho-os/prospecção/campanhas/02-04-2026/advogados-com-email.csv', csv, 'utf-8');
  const encontrados = results.filter(r => r.email).length;
  console.log(`\nPronto. ${encontrados}/${rows.length} emails encontrados.`);
  console.log('Salvo em: advogados-com-email.csv');
}

processAll();
