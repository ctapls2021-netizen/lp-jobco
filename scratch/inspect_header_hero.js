import fs from 'node:fs';

const html = fs.readFileSync('Remoda_ Home Remodeling Website Next.js Template#567179_files/saved_resource.html', 'utf8');

// Find Header
const headerMatch = html.match(/<header[^>]*>.*?<\/header>/s);
if (headerMatch) {
  console.log('--- HEADER ---');
  console.log(headerMatch[0]);
}

// Find Hero section
const heroMatch = html.match(/<section[^>]*id="d2c_hero"[^>]*>.*?<\/section>/s);
if (heroMatch) {
  console.log('\n--- HERO SECTION (first 1500 chars) ---');
  console.log(heroMatch[0].slice(0, 1500));
  
  // Find all buttons or links inside hero
  const heroBtns = heroMatch[0].match(/<a[^>]+>.*?<\/a>/gs);
  console.log('\n--- HERO BUTTONS ---', heroBtns);
}
