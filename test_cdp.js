const { spawn } = require('child_process');

async function testPage(url) {
    console.log('Testing:', url);
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--disable-gpu',
        '--no-sandbox',
        url
    ]);

    await new Promise(r => setTimeout(r, 1500));

    try {
        const res = await fetch('http://127.0.0.1:9222/json');
        const list = await res.json();
        const page = list.find(p => p.type === 'page');
        if (!page) {
            console.log('No page found');
            chrome.kill();
            return;
        }

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise((resolve) => {
            ws.addEventListener('open', resolve);
        });

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

        await new Promise(r => setTimeout(r, 2000));

        const resDom = await send('Runtime.evaluate', {
            expression: 'document.getElementById("supreme-cards-container")?.innerHTML'
        });
        console.log('supreme-cards-container innerHTML length:', resDom?.result?.value?.length || 0);

        const resCards = await send('Runtime.evaluate', {
            expression: 'document.querySelectorAll(".supreme-champ-card").length'
        });
        console.log('supreme-champ-card count:', resCards?.result?.value);

        const resMembers = await send('Runtime.evaluate', {
            expression: 'document.querySelectorAll(".elite-member-card").length'
        });
        console.log('elite-member-card count:', resMembers?.result?.value);

        const resRows = await send('Runtime.evaluate', {
            expression: 'document.querySelectorAll("#leaderboard-table tbody tr").length'
        });
        console.log('leaderboard table row count:', resRows?.result?.value);

        ws.close();
    } catch(err) {
        console.error('Error:', err);
    } finally {
        chrome.kill();
    }
}

testPage('file:///d:/BXH%20MDTQ/standalone.html');
