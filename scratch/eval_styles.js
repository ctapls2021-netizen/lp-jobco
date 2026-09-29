import { spawn } from 'node:child_process';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempDir = "C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_profile_eval";

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    '--window-size=1440,900',
    'http://localhost:4321/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9224/json/list');
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

    // Evaluate why titles and eyebrows overlap
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const res = {};
        const about = document.querySelector('#d2c_about .grid');
        if (about) {
          const style = window.getComputedStyle(about);
          res.aboutDisplay = style.display;
          res.aboutGridTemplateColumns = style.gridTemplateColumns;
        }
        const col4 = document.querySelector('#d2c_about .col-span-12.md\\\\:col-span-4') || document.querySelector('#d2c_about .md\\\\:col-span-4');
        if (col4) {
          const style = window.getComputedStyle(col4);
          res.col4GridColumn = style.gridColumn;
          res.col4Position = style.position;
        }
        const col8 = document.querySelector('#d2c_about .md\\\\:col-span-8');
        if (col8) {
          const style = window.getComputedStyle(col8);
          res.col8GridColumn = style.gridColumn;
          res.col8Position = style.position;
        }
        return JSON.stringify(res);
      })()`
    });

    console.log('Grid Evaluation:', evalRes.result.value);

    // Check button styles
    const btnRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('.btn-remoda-primary');
        if (!btn) return 'btn not found';
        const s = window.getComputedStyle(btn);
        return JSON.stringify({
          bg: s.backgroundColor,
          color: s.color,
          padding: s.padding,
          display: s.display,
          border: s.border
        });
      })()`
    });
    console.log('Button Evaluation:', btnRes.result.value);

    ws.close();
  } catch (err) {
    console.error('Eval error:', err);
  } finally {
    edge.kill();
  }
}

run();
