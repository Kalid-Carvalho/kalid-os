const { chromium } = require('../../../../node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const slideUrl = 'file:///' + path.resolve(__dirname, 'slide-07.html').replace(/\\/g, '/');
  const outputDir = __dirname;

  console.log('Abrindo slide-07.html...');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1350 },
    recordVideo: {
      dir: outputDir,
      size: { width: 1080, height: 1350 }
    }
  });

  const page = await context.newPage();
  await page.goto(slideUrl, { waitUntil: 'networkidle' });

  // Esconder badge "AO VIVO" e qualquer indicador de gravação
  await page.addStyleTag({
    content: `
      .live-badge { display: none !important; }
      [data-playwright-recording] { display: none !important; }
    `
  });

  // Remover loop para o vídeo tocar uma vez só até o final
  await page.evaluate(() => {
    const video = document.querySelector('.site-video');
    if (video) {
      video.removeAttribute('loop');
      video.play();
    }
  });

  console.log('Aguardando o vídeo tocar até o final...');

  // Aguarda o vídeo terminar (timeout máximo: 3 minutos)
  await page.waitForFunction(() => {
    const video = document.querySelector('.site-video');
    if (!video) return true;
    return video.ended;
  }, { timeout: 180000 });

  // Pausa de 0.5s no frame final antes de fechar
  await page.waitForTimeout(500);

  const videoPath = await page.video().path();
  await context.close();
  await browser.close();

  // Renomear pro nome final
  const finalPath = path.join(outputDir, 'slide-07.webm');
  if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
  fs.renameSync(videoPath, finalPath);

  console.log('Vídeo salvo em: slide-07.webm');
})();
