const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ deviceScaleFactor: 3 });
  const page = await context.newPage();
  await page.setViewportSize({ width: 820, height: 1200 });

  const filePath = 'file:///C:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html';
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Remove background e margens para captura limpa
  await page.evaluate(() => {
    document.body.style.background = 'white';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.querySelectorAll('.page').forEach(p => {
      p.style.margin = '0';
      p.style.boxShadow = 'none';
    });
  });

  await page.waitForTimeout(300);

  const pages = await page.$$('.page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({
      path: `C:/Users/kalid/Downloads/KalidCarvalho-os/dados/page-capture-${i+1}.png`,
      type: 'png'
    });
    console.log(`page ${i+1} capturada`);
  }

  await browser.close();
})();
