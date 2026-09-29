import fs from 'node:fs';

const css = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files/scl-dev.webflow.shared.b948b5259.min.css', 'utf8');
const fonts = [...new Set([...css.matchAll(/font-family:\s*([^;]+);/g)].map(m => m[1].trim()))];
console.log('Fonts in webflow css:', fonts.slice(0, 15));
