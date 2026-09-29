import fs from 'node:fs';

const css = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files/css', 'utf8');
const fonts = [...new Set([...css.matchAll(/font-family:\s*['"]?([^'";]+)['"]?/g)].map(m => m[1]))];
console.log('Fonts defined in css:', fonts);
