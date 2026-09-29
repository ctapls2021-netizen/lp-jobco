import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const artifactDir = "C:\\Users\\Diego\\.gemini\\antigravity\\brain\\9526626e-a664-46a1-80da-26cd073a310a";

async function capture(url, width, height, outName) {
  const tempDir = `C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_${outName}_${Date.now()}`;
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9230',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    `--window-size=${width},${height}`,
    url
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch('http://127.0.0.1:9230/json/list');
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
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });

    // Scroll through to load any lazy images
    for (let scrollY = 0; scrollY <= 10000; scrollY += 600) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY});` });
      await new Promise(r => setTimeout(r, 120));
    }
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
    await new Promise(r => setTimeout(r, 800));

    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    const buffer = Buffer.from(shot.data, 'base64');
    const outPath = path.join(artifactDir, `${outName}.png`);
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved ${outPath} (${buffer.length} bytes)`);

    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    edge.kill();
  }
}

async function run() {
  console.log('Capturing Desktop...');
  await capture('http://localhost:4321/', 1440, 900, 'jobco_desktop_landing');
  await new Promise(r => setTimeout(r, 1500));
  console.log('Capturing Mobile...');
  await capture('http://localhost:4321/', 390, 844, 'jobco_mobile_landing');
  console.log('Captures completed!');
}

run();
