const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/chromium'});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/snippets/add');
  const element_name = await page.evaluate(() => document.getElementById('name').name);
  if (element_name){
    console.log(element_name);
  }
  await browser.close();
})();
