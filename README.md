# My Puppeteer Examples

Basic usage of puppeteer - https://github.com/GoogleChrome/puppeteer

Using [puppeteer-core](https://www.npmjs.com/package/puppeteer-core) here, which uses an already installed version of chromium.
Adjust the import to `require('puppeteer');` if you want to use the regular package, which downloads a fitting chroumium version.

```js
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/');
  await browser.close();
})();
```

Happy hacking!
