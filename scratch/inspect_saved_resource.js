import fs from 'node:fs';

const html = fs.readFileSync('Remoda_ Home Remodeling Website Next.js Template#567179_files/saved_resource.html', 'utf8');

// Find all classes on buttons or links with "Estimate" or "Touch"
const btnRegex = /<(a|button)[^>]+>(.*?)<\/(a|button)>/gs;
let match;
console.log('--- Buttons in saved_resource.html ---');
while ((match = btnRegex.exec(html)) !== null) {
  const full = match[0];
  const text = match[2].replace(/<[^>]+>/g, '').trim();
  if (text.length > 0 && text.length < 50) {
    console.log(`Tag: <${match[1]}> Text: "${text}" Full: ${full.slice(0, 200)}...`);
  }
}

// Find link tags (CSS files)
const linkRegex = /<link[^>]+rel="stylesheet"[^>]+>/g;
console.log('\n--- CSS Links ---');
console.log(html.match(linkRegex));
