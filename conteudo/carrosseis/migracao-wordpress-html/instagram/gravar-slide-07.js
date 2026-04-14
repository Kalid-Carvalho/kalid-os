const { chromium } = require('../../../../node_modules/playwright');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const FFMPEG = 'C:/Users/kalid/AppData/Local/ms-playwright/ffmpeg-1011/ffmpeg-win64.exe';

(async () => {
  const slideUrl = 'file:///' + path.resolve(__dirname, 'slide-07.html').replace(/\\/g, '/');
  const outputDir = __dirname;
  const tempPath = path.join(outputDir, 'slide-07-temp.webm');
  const finalPath = path.join(outputDir, 'slide-07.webm');

  console.log('Abrindo slide-07.html...');

  const browser = await chromium.launch({
    args: [
      '--disable-infobars',
      '--no-default-browser-check',
      '--disable-notifications',
      '--disable-extensions-except=',
      '--disable-component-extensions-with-background-pages',
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1350 },
    recordVideo: {
      dir: outputDir,
      size: { width: 1080, height: 1350 }
    }
  });

  const page = await context.newPage();
  await page.goto(slideUrl, { waitUntil: 'networkidle' });

  // Esconder badge "AO VIVO" e barras de notificação via CSS
  await page.addStyleTag({
    content: `
      .live-badge { display: none !important; }
      [data-playwright-recording] { display: none !important; }
      div[class*="infob"] { display: none !important; }
    `
  });

  // Tentar clicar no botão "Ocultar" do Screen Recorder se aparecer
  try {
    const ocultarBtn = page.locator('button:has-text("Ocultar"), button:has-text("Hide"), [aria-label="Ocultar"]');
    await ocultarBtn.click({ timeout: 3000 });
    console.log('Botão Ocultar clicado.');
  } catch {
    // Não apareceu — continua normalmente
  }

  // Remover loop — vídeo toca uma vez até o final
  await page.evaluate(() => {
    const video = document.querySelector('.site-video');
    if (video) {
      video.removeAttribute('loop');
      video.play();
    }
  });

  console.log('Aguardando o vídeo tocar até o final...');

  await page.waitForFunction(() => {
    const video = document.querySelector('.site-video');
    return !video || video.ended;
  }, { timeout: 180000 });

  // Pausa de 0.5s no frame final
  await page.waitForTimeout(500);

  const rawVideoPath = await page.video().path();
  await context.close();
  await browser.close();

  // Renomear pra temp
  if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  fs.renameSync(rawVideoPath, tempPath);

  // Obter duração do vídeo com ffmpeg
  console.log('Processando vídeo com ffmpeg...');
  let duration = null;
  try {
    const probe = execSync(
      `"${FFMPEG}" -i "${tempPath}" 2>&1`,
      { encoding: 'utf8', stdio: 'pipe' }
    );
    const match = probe.match(/Duration: (\d+):(\d+):(\d+\.?\d*)/);
    if (match) {
      duration = parseInt(match[1]) * 3600 + parseInt(match[2]) * 60 + parseFloat(match[3]);
      console.log(`Duração detectada: ${duration.toFixed(2)}s`);
    }
  } catch (e) {
    // ffmpeg sempre retorna erro no probe — captura no stderr
    const match = e.stdout ? e.stdout.match(/Duration: (\d+):(\d+):(\d+\.?\d*)/) : null;
    if (match) {
      duration = parseInt(match[1]) * 3600 + parseInt(match[2]) * 60 + parseFloat(match[3]);
      console.log(`Duração detectada: ${duration.toFixed(2)}s`);
    }
  }

  // Cortar últimos 1.5s (onde taskbar aparece) + crop bottom 60px (taskbar de segurança)
  const trimEnd = duration ? Math.max(0, duration - 1.5) : null;
  const trimFlag = trimEnd ? `-t ${trimEnd.toFixed(2)}` : '';

  if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);

  try {
    execSync(
      `"${FFMPEG}" -i "${tempPath}" ${trimFlag} -vf "crop=1080:1290:0:0" -c:v libvpx -b:v 1M -y "${finalPath}"`,
      { encoding: 'utf8' }
    );
    fs.unlinkSync(tempPath);
    console.log('Vídeo final salvo em: slide-07.webm');
  } catch (e) {
    // Fallback sem re-encode
    fs.renameSync(tempPath, finalPath);
    console.log('Vídeo salvo (sem crop): slide-07.webm');
    console.log('Erro ffmpeg:', e.message?.slice(0, 200));
  }
})();
