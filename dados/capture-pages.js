const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 2000 });
  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const pages = await page.$$('.page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({
      path: `C:/Users/kalid/Downloads/KalidCarvalho-os/dados/page-capture-${i+1}.png`,
      type: 'png'
    });
    console.log(`page ${i+1} captured`);
  }
  await browser.close();
})();
