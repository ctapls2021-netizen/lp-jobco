import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

const sectionRegex = /<section[^>]*>(.*?)<\/section>/gs;
let match;
let i = 1;
while ((match = sectionRegex.exec(html)) !== null) {
  const full = match[0];
  const tagOpen = full.match(/<section[^>]*>/)[0];
  const headings = [...match[1].matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gs)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
  console.log(`\n=== Section ${i++}: ${tagOpen} ===`);
  console.log('Headings:', headings);
}
