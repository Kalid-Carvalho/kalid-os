const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1300, height: 2000 });
  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const box = await page.$eval('.page:first-child .assinatura', el => {
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });
  await page.screenshot({
    path: 'C:/Users/kalid/Downloads/KalidCarvalho-os/dados/html-sig.png',
    clip: { x: box.x - 10, y: box.y - 130, width: box.width + 20, height: 350 }
  });
  console.log('done');
  await browser.close();
})();
