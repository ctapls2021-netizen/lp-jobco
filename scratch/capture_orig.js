import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempDir = "C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_profile_orig";
const filePath = path.resolve('Remoda_ Home Remodeling Website Next.js Template#567179_files/saved_resource.html');

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    '--window-size=1440,900',
    `file://${filePath}`
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9223/json/list');
    const tabs = await listRes.json();
    const tab = tabs[0];
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
    await new Promise(r => setTimeout(r, 1000));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\Diego\\AppData\\Local\\Temp\\orig_remoda_hero.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved orig_remoda_hero.png');

    const sections = ['d2c_about', 'd2c_services', 'd2c_projects', 'd2c_testimonials', 'd2c_faq', 'd2c_contact'];
    for (const sec of sections) {
      await send('Runtime.evaluate', {
        expression: `document.getElementById('${sec}')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
      });
      await new Promise(r => setTimeout(r, 500));
      const s = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`C:\\Users\\Diego\\AppData\\Local\\Temp\\orig_${sec}.png`, Buffer.from(s.data, 'base64'));
      console.log(`Saved orig_${sec}.png`);
    }

    ws.close();
  } catch (err) {
    console.error('Orig capture error:', err);
  } finally {
    edge.kill();
  }
}

run();
