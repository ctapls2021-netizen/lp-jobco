import fs from 'node:fs';
import path from 'node:path';

const folder = 'Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files';

// Check CSS files in folder
const files = fs.readdirSync(folder);
const cssFiles = files.filter(f => f.endsWith('.css') || f === 'css' || f === 'css(1)');
console.log('CSS files:', cssFiles);

cssFiles.forEach(f => {
  const p = path.join(folder, f);
  const stat = fs.statSync(p);
  console.log(`- ${f}: ${stat.size} bytes`);
});
