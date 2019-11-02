const puppeteer = require('puppeteer-core');
 
(async () => {
  const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium'});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/');
  await page.screenshot({path: 'SnipHub.png'});
 
  await browser.close();
})();
