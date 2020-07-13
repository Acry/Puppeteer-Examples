// Code loads 3 pages and loops them

const puppeteer = require('puppeteer-core');
const waitTime = 5 * 1000;
(async () => {
  // await puppeteer.launch({ headless: false, args: [ '--app=https://www.google.com/' ] })
  // Not only removes the automation message but get rids of the url bar too.
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/chromium',
    defaultViewport: null,
    ignoreDefaultArgs: ['--enable-automation'],
    args: ['--start-fullscreen'],
  });
  const urls = [
    'https://apod.nasa.gov/apod/image/1911/ngc5907_gabany_rcl1024.jpg',
    'https://apod.nasa.gov/apod/image/1911/M16_HaSynLumLumRGB1024.jpg',
    'https://apod.nasa.gov/apod/image/1911/jC-L-TM_SunFinal5HRweb1024.jpg',
  ];
  const page = (await browser.pages())[0];
  await page.goto(urls[0], {
    waitUntil: 'load',
  });
  const page1 = await browser.newPage();
  await page1.goto(urls[1], {
    waitUntil: 'load',
  });
  const page2 = await browser.newPage();
  await page2.goto(urls[2], {
    waitUntil: 'load',
  });

  while (true) {
    await page.bringToFront();
    await page.waitFor(waitTime);
    await page1.bringToFront();
    await page.waitFor(waitTime);
    await page2.bringToFront();
    await page.waitFor(waitTime);
  }
})();
