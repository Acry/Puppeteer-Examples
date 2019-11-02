// https://stackoverflow.com/questions/6564171/get-all-the-button-tag-types

// var buttons = document.getElementsByTagName('button');
// for (var i = 0; i < buttons.length; i++) {
//     var button = buttons[i];
//     var type = button.getAttribute('type') || 'submit'; // Submit is the default
//     // ...
// }

// const text = page.evaluate(() => document.querySelector('.scrape').textContent);

// Bootstrap Classes: btn

const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium', slowMo: 100, defaultViewport: null});
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/');
  await page.goto('http://localhost:5001/snippets/add');
  const foo = await page.evaluate(() => document.querySelector('.btn').textContent);
  if (foo){
    console.log(foo);
  }
  await browser.close();
})();
