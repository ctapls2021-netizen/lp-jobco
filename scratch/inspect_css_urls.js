import fs from 'node:fs';
import path from 'node:path';

const cssFiles = [
  'public/assets/natural-stone/scl-dev.webflow.shared.b948b5259.min.css',
  'public/assets/natural-stone/styles__ltr.css',
  'public/assets/natural-stone/nice-select2.css',
  'public/assets/natural-stone/swiper-bundle.min.css'
];

for (const file of cssFiles) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const urls = [...content.matchAll(/url\((['"]?)(.*?)\1\)/g)].map(m => m[2]);
    console.log(`\nURLs in ${path.basename(file)}: (Total: ${urls.length})`);
    console.log(urls.slice(0, 10));
  }
}
