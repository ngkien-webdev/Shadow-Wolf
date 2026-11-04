const { spawn } = require('child_process');
const fs = require('fs');

async function testFull() {
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

        ws.addEventListener('message', (evt) => {
            const msg = JSON.parse(evt.data);
            if (msg.method === 'Runtime.consoleAPICalled') {
                console.log('[BROWSER CONSOLE]', msg.params.type, msg.params.args.map(a => a.value !== undefined ? a.value : a.description));
            }
            if (msg.method === 'Runtime.exceptionThrown') {
                console.error('[BROWSER ERROR]', msg.params.exceptionDetails.text, msg.params.exceptionDetails.exception?.description);
            }
        });

        await send('Runtime.enable');
        await send('Page.enable');
        await send('Emulation.setDeviceMetricsOverride', {
            width: 1400,
            height: 900,
            deviceScaleFactor: 1,
            mobile: false
        });

        await new Promise(r => setTimeout(r, 1500));

        // 1. Check Top 3 cards
        const top3Count = await send('Runtime.evaluate', {
            expression: 'document.querySelectorAll(".supreme-champ-card").length'
        });
        console.log('Top 3 Card Count:', top3Count?.result?.value);

        // 2. Check Top 5 Podium
        const top5Count = await send('Runtime.evaluate', {
            expression: 'document.querySelectorAll(".podium-card").length'
        });
        console.log('Top 5 Podium Card Count:', top5Count?.result?.value);

        // 3. Check Top 10 Elite
        const top10Count = await send('Runtime.evaluate', {
            expression: 'document.querySelectorAll(".elite-member-card").length'
        });
        console.log('Top 10 Elite Card Count:', top10Count?.result?.value);

        // 4. Capture screenshot of Top 3
        await send('Runtime.evaluate', {
            expression: 'document.getElementById("supreme-top3-section").scrollIntoView()'
        });
        await new Promise(r => setTimeout(r, 600));

        const shotTop3 = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync('C:/Users/katof/.gemini/antigravity/brain/b17fb8ad-97c7-407a-8c17-09e5989af1ee/optimized_top3.png', Buffer.from(shotTop3.data, 'base64'));
        console.log('Captured optimized_top3.png');

        // 5. Scroll to Top 10 Elite
        await send('Runtime.evaluate', {
            expression: 'document.getElementById("elite-top10-section").scrollIntoView()'
        });
        await new Promise(r => setTimeout(r, 600));

        const shotTop10 = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync('C:/Users/katof/.gemini/antigravity/brain/b17fb8ad-97c7-407a-8c17-09e5989af1ee/optimized_top10.png', Buffer.from(shotTop10.data, 'base64'));
        console.log('Captured optimized_top10.png');

        ws.close();
    } catch (e) {
        console.error(e);
    } finally {
        chrome.kill();
    }
}
testFull();

