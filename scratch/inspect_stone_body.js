import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

// Find all elements with class containing 'hero', 'section', 'header', 'banner'
const bodyMatch = html.match(/<body[^>]*>(.*?)<\/body>/s);
if (bodyMatch) {
  const bodyContent = bodyMatch[1];
  console.log('Body length:', bodyContent.length);

  // Top level tags inside body
  const topTags = [...bodyContent.matchAll(/<(header|section|footer|div|main)[^>]*class="([^"]*)"[^>]*>/g)]
    .map(m => `<${m[1]} class="${m[2]}">`);
  
  console.log('Top tags sample:', topTags.slice(0, 30));
}
