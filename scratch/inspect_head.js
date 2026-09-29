import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

const headMatch = html.match(/<head[^>]*>(.*?)<\/head>/s);
if (headMatch) {
  const head = headMatch[1];
  console.log('Head length:', head.length);

  // Extract all <style> tags in head
  const styles = [...head.matchAll(/<style[^>]*>(.*?)<\/style>/gs)].map(m => m[0]);
  console.log('Total <style> in head:', styles.length);

  // Extract all <link> tags in head
  const links = [...head.matchAll(/<link[^>]+>/g)].map(m => m[0]);
  console.log('Total <link> in head:', links.length);
  console.log(links);
}
