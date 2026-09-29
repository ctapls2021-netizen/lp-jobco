import { spawn } from 'node:child_process';
import path from 'node:path';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempDir = "C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_profile_console";
const filePath = path.resolve('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html');

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9226',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    `file://${filePath}`
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9226/json/list');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.url.startsWith('file://')) || tabs[0];
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

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Log.entryAdded' || data.method === 'Console.messageAdded') {
        console.log('Console event:', data.params);
      }
    });

    await send('Log.enable');
    await send('Console.enable');
    await send('Network.enable');

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sheets = Array.from(document.styleSheets).map(s => {
          try {
            return { href: s.href, rules: s.cssRules.length };
          } catch(e) {
            return { href: s.href, error: e.message };
          }
        });
        return JSON.stringify(sheets);
      })()`
    });

    console.log('StyleSheets loaded:', evalRes.result.value);
    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    edge.kill();
  }
}

run();
