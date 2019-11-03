const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/chromium'});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/snippets/add');
  const formPlaceholder = await page.evaluate(() => document.getElementById('name').placeholder);
  if (formPlaceholder){
    console.log(formPlaceholder);
  }
  await browser.close();
})();
