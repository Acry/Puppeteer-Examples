const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/chromium'});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/snippets/add');
  const formPlaceholders = await page.evaluate(() => Array.from(document.querySelectorAll('input'), element => element.placeholder));
  if (formPlaceholders){
    console.log(formPlaceholders);
  }
  await browser.close();
})();
