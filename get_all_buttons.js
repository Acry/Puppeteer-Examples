// https://stackoverflow.com/questions/6564171/get-all-the-button-tag-types

// var buttons = document.getElementsByTagName('button');
// for (var i = 0; i < buttons.length; i++) {
//     var button = buttons[i];
//     var type = button.getAttribute('type') || 'submit'; // Submit is the default
//     // ...
// }

// const text = page.evaluate(() => document.querySelector('.scrape').textContent);

// Bootstrap Classes: btn
// Standard Classes: w3-btn, w3-button

// https://stackoverflow.com/questions/34001917/queryselectorall-with-multiple-conditions
// var list = document.querySelectorAll("foo, bar, baz");

// Can I use a regular expression in querySelectorAll?
// You can't really use a regular expression in a selector but CSS selectors are powerful enough for your need with a "starts with" syntax inspired by regexes.
// https://www.w3.org/TR/selectors/#attribute-substrings

const puppeteer = require('puppeteer-core');

(async () => {
  // const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium', slowMo: 100, defaultViewport: null});
  const browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/chromium'});
  const page = await browser.newPage();
  // await page.goto('http://localhost:5001/snippets/add');
  await page.goto('https://www.w3schools.com/w3css/w3css_buttons.asp', {waitUntil: 'networkidle2'});
  const buttonNames = await page.evaluate(() => Array.from(document.querySelectorAll('.w3-btn'), element => element.textContent));
  if (buttonNames){
    console.log(buttonNames);
  }
  await browser.close();
})();
