import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

const footerIdx = html.indexOf('<footer');
console.log('footer index:', footerIdx);

if (footerIdx !== -1) {
  console.log(html.slice(footerIdx, footerIdx + 300));
} else {
  // Search for class with footer
  const matches = [...html.matchAll(/<[^>]+class="[^"]*footer[^"]*"[^>]*>/gi)].map(m => m[0]);
  console.log('Elements with footer class:', matches);
}
