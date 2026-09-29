import fs from 'node:fs';
import path from 'node:path';

const srcDir = 'Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files';
const destDir = 'public/assets/natural-stone';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
let copied = 0;

for (const file of files) {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  if (fs.statSync(srcPath).isFile()) {
    fs.copyFileSync(srcPath, destPath);
    copied++;
  }
}

console.log(`Copied ${copied} files from "${srcDir}" to "${destDir}".`);
