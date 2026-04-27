const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 1800 });
  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  // Captura só o trecho do corpo de texto (primeiros ~300px do body)
  await page.screenshot({
    path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/html-zoom.png',
    clip: { x: 30, y: 210, width: 780, height: 400 }
  });
  console.log('done');
  await browser.close();
})();
