import { spawn } from 'node:child_process';
import fs from 'node:fs';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempDir = "C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_astro_stone";

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9227',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    '--window-size=1440,900',
    'http://localhost:4321/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9227/json/list');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.url.includes('localhost:4321')) || tabs[0];
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((res, rej) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            if (data.error) rej(data.error);
            else res(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('DOM.enable');

    // Wait 2s for images and fonts to settle
    await new Promise(r => setTimeout(r, 2000));

    // Viewport screenshot (Hero)
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\Diego\\AppData\\Local\\Temp\\astro_stone_hero.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved astro_stone_hero.png');

    // Full page screenshot
    const fullShot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    fs.writeFileSync('C:\\Users\\Diego\\AppData\\Local\\Temp\\astro_stone_full.png', Buffer.from(fullShot.data, 'base64'));
    console.log('Saved astro_stone_full.png');

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    edge.kill();
  }
}

run();
