const puppeteer = require('puppeteer-core');
// IIFE
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/chromium',
    defaultViewport: null,
  });
  const page = (await browser.pages())[0];
  await page.goto('http://example.com/', {
    waitUntil: 'load',
  });
  // await browser.waitForTarget(() => true);
  await browser.close();
})();
