const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1080 * 4 + 24 * 5, height: 1920 });

  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/clientes/Alexandre%20Neto/conteudo/semana-01/stories.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const outDir = 'C:/Users/kalid/Downloads/KalidCarvalho-os/clientes/Alexandre Neto/conteudo/semana-01';
  const labels = ['01-capa', '02-reel', '03-carrossel-1', '04-carrossel-2'];

  const stories = await page.$$('.story');
  for (let i = 0; i < stories.length; i++) {
    const outPath = path.join(outDir, `story-${labels[i]}.png`);
    await stories[i].screenshot({ path: outPath, type: 'png' });
    console.log(`story ${i + 1} -> story-${labels[i]}.png`);
  }

  await browser.close();
  console.log('done');
})();
