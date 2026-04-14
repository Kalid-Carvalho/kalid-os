const { chromium } = require('../../../../node_modules/playwright');
const path = require('path');

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

  console.log('Gravando por 10 segundos...');
  await page.waitForTimeout(10000);

  const videoPath = await page.video().path();
  await context.close();
  await browser.close();

  // Renomear pro nome final
  const fs = require('fs');
  const finalPath = path.join(outputDir, 'slide-07.webm');
  if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
  fs.renameSync(videoPath, finalPath);

  console.log('Vídeo salvo em: slide-07.webm');
})();
