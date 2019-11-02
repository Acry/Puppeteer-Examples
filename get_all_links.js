const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium'});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/');
  const hrefs = await page.$$eval('a', as => as.map(a => a.href));
  console.log(hrefs);
  await browser.close();
})();
