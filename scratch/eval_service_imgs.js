import { spawn } from 'node:child_process';

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempDir = "C:\\Users\\Diego\\AppData\\Local\\Temp\\edge_cdp_eval_imgs";

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9228',
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    'http://localhost:4321/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9228/json/list');
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

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('.s-our-serv__item-img');
        if (!img) return 'img not found';
        const s = window.getComputedStyle(img);
        const rect = img.getBoundingClientRect();
        return JSON.stringify({
          src: img.src,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          complete: img.complete,
          width: rect.width,
          height: rect.height,
          display: s.display,
          opacity: s.opacity,
          visibility: s.visibility,
          parentDisplay: window.getComputedStyle(img.parentElement).display,
          parentHeight: img.parentElement.getBoundingClientRect().height
        });
      })()`
    });

    console.log('Evaluated .s-our-serv__item-img:', evalRes.result.value);

    // Also check image network failure if any
    const netRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const imgs = Array.from(document.querySelectorAll('img')).map(i => ({
          src: i.src,
          naturalWidth: i.naturalWidth,
          complete: i.complete
        }));
        const broken = imgs.filter(i => i.complete && i.naturalWidth === 0);
        return JSON.stringify(broken.slice(0, 10));
      })()`
    });
    console.log('Broken images:', netRes.result.value);

    ws.close();
  } catch (err) {
    console.error('Eval error:', err);
  } finally {
    edge.kill();
  }
}

run();
