const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium', slowMo: 100, defaultViewport: null, devtools: true});
    const page = await browser.newPage()
    page.on('console', consoleMessageObject => function (consoleMessageObject) {
        if (consoleMessageObject._type !== 'warning') {
            console.debug(consoleMessageObject._text)
        }
    });
    // await page.goto('https://google.com');
    const result = await page.evaluate(() => {
        console.log('Browser scope.');
        return 'Normal scope.';
    });
    console.log(result)
    await browser.waitForTarget(() => false);
    await browser.close()
})()