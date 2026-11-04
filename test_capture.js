const { spawn } = require('child_process');
const fs = require('fs');

async function capture() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--disable-gpu',
        '--no-sandbox',
        'file:///d:/BXH%20MDTQ/standalone.html'
    ]);

    await new Promise(r => setTimeout(r, 1500));

    try {
        const res = await fetch('http://127.0.0.1:9222/json');
        const list = await res.json();
        const page = list.find(p => p.type === 'page');
        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise(r => ws.addEventListener('open', r));

        let id = 1;
        function send(method, params = {}) {
            return new Promise((resolve) => {
                const reqId = id++;
                const handler = (evt) => {
                    const msg = JSON.parse(evt.data);
                    if (msg.id === reqId) {
                        ws.removeEventListener('message', handler);
                        resolve(msg.result);
                    }
                };
                ws.addEventListener('message', handler);
                ws.send(JSON.stringify({ id: reqId, method, params }));
            });
        }

        await send('Runtime.enable');
        await send('Page.enable');
        await send('Emulation.setDeviceMetricsOverride', {
            width: 1280,
            height: 900,
            deviceScaleFactor: 1,
            mobile: false
        });

        await new Promise(r => setTimeout(r, 2000));

        // Scroll to supreme-top3-section
        await send('Runtime.evaluate', {
            expression: 'document.getElementById("supreme-top3-section").scrollIntoView()'
        });

        await new Promise(r => setTimeout(r, 800));

        const screenshot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync('C:/Users/katof/.gemini/antigravity/brain/b17fb8ad-97c7-407a-8c17-09e5989af1ee/test_screenshot_top3.png', Buffer.from(screenshot.data, 'base64'));
        console.log('Screenshot saved!');

        ws.close();
    } catch(e) {
        console.error(e);
    } finally {
        chrome.kill();
    }
}
capture();

