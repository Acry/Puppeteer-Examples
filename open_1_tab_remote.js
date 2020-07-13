// Remote:
// Start Chromium manually on your host machine in a terminal
// chromium --remote-debugging-port=9222 --user-data-dir=remote-profile
// Chromium will dump the endpoint
// DevTools listening on ws://127.0.0.1:9222/devtools/browser/f1cafe38-2c7e-44f3-bc6f-9d433c850806

// You can also find the webSocketDebuggerUrl from http://localhost:9222/json/version on the remote chromium

// Local:
// Connect to its WebSocket port using puppeteer.connect()
// Don't forgot to open the WS port to container.

// https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerconnectoptions

// puppeteer.connect(<object>) {browserWSEndpoint}
// browserWSEndpoint <string> a browser websocket endpoint to connect to.
// puppeteer.connect({ws://127.0.0.1:9222/devtools/browser/f1cafe38-2c7e-44f3-bc6f-9d433c850806})

const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/chromium',
    defaultViewport: null,
  });
  const page = (await browser.pages())[0];
  await page.goto('http://example.com/', {
    waitUntil: 'load',
  });
  await browser.waitForTarget(() => false);
  await browser.close();
})();
