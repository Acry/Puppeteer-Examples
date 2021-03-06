const CREDS = require('./creds');
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium', slowMo: 100, defaultViewport: null});
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  const USERNAME_SELECTOR = '#login_field';
  const PASSWORD_SELECTOR = '#password';
  const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
  
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);
  
  await page.click(BUTTON_SELECTOR);
  
  await page.waitForNavigation();
  await browser.waitForTarget(() => false);
  await browser.close();
})();
