import fs from 'node:fs';
import path from 'node:path';

const compDir = 'src/components/natural';
const files = fs.readdirSync(compDir);

let totalSrcset = 0;
for (const file of files) {
  const p = path.join(compDir, file);
  let content = fs.readFileSync(p, 'utf8');
  const count = (content.match(/srcset="[^"]*"/g) || []).length;
  if (count > 0) {
    totalSrcset += count;
    console.log(`${file}: ${count} srcset found`);
    // Remove srcset attribute so browser uses local src
    content = content.replace(/\s+srcset="[^"]*"/gi, '');
    // URL encode spaces in src="/assets/natural-stone/..."
    content = content.replace(/src="(\/assets\/natural-stone\/[^"]+)"/g, (match, src) => {
      return `src="${encodeURI(src)}"`;
    });
    fs.writeFileSync(p, content);
  }
}

console.log(`Total srcset removed: ${totalSrcset}`);
