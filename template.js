const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium', slowMo: 100, defaultViewport: null});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/');
  console.log('foo');
  await browser.close();
})();
