import { spawn } from 'node:child_process';
import fs from 'node:fs';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempDir = "C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_profile";

async function run() {
  console.log('Launching Edge headless...');
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    '--window-size=1440,900',
    'http://localhost:4321/'
  ]);

  // Wait 2s for Edge to start
  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    console.log('Open tabs:', tabs.map(t => ({ title: t.title, url: t.url, ws: t.webSocketDebuggerUrl })));

    const tab = tabs.find(t => t.url.includes('localhost:4321')) || tabs[0];
    if (!tab) throw new Error('No tab found');

    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });
    console.log('WebSocket connected to Edge CDP');

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

    // Wait 1s for layout/fonts
    await new Promise(r => setTimeout(r, 1000));

    // Get page metrics
    const layout = await send('Page.getLayoutMetrics');
    console.log('Layout content size:', layout.contentSize);

    // Full page screenshot
    console.log('Taking full page screenshot...');
    const fullShot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true
    });
    fs.writeFileSync('C:\\Users\\Diego\\AppData\\Local\\Temp\\landing_full.png', Buffer.from(fullShot.data, 'base64'));
    console.log('Saved C:\\Users\\Diego\\AppData\\Local\\Temp\\landing_full.png');

    // Scroll to sections and take viewport shots
    const sections = ['d2c_hero', 'd2c_about', 'd2c_transform', 'd2c_services', 'd2c_projects', 'd2c_testimonials', 'service-area', 'd2c_faq', 'd2c_cta', 'd2c_contact'];
    for (const sec of sections) {
      await send('Runtime.evaluate', {
        expression: `document.getElementById('${sec}')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
      });
      await new Promise(r => setTimeout(r, 500));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`C:\\Users\\Diego\\AppData\\Local\\Temp\\sec_${sec}.png`, Buffer.from(shot.data, 'base64'));
      console.log(`Saved sec_${sec}.png`);
    }

    ws.close();
  } catch (err) {
    console.error('CDP error:', err);
  } finally {
    edge.kill();
  }
}

run();
