import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');
const headMatch = html.match(/<head[^>]*>(.*?)<\/head>/s);
if (headMatch) {
  const styles = [...headMatch[1].matchAll(/<style[^>]*>(.*?)<\/style>/gs)].map(m => m[1].trim());
  console.log('Total head styles:', styles.length);
  styles.forEach((s, idx) => {
    console.log(`Style ${idx + 1} (${s.length} chars):`, s.slice(0, 100).replace(/\n/g, ' '));
  });
}
