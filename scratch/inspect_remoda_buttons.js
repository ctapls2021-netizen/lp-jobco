import fs from 'node:fs';

const html = fs.readFileSync('Remoda_ Home Remodeling Website Next.js Template#567179.html', 'utf8');

const regex = /<a[^>]+href="[^"]*"[^>]*>.*?<\/a>/gs;
const matches = html.match(regex) || [];

console.log('Total <a> tags:', matches.length);
matches.slice(0, 20).forEach((tag, i) => {
  if (tag.includes('Estimate') || tag.includes('btn') || tag.includes('button') || tag.includes('Touch')) {
    console.log(`\n--- Match ${i} ---`);
    console.log(tag);
  }
});

const buttonRegex = /<button[^>]*>.*?<\/button>/gs;
const buttonMatches = html.match(buttonRegex) || [];
console.log('\nTotal <button> tags:', buttonMatches.length);
buttonMatches.forEach((tag, i) => {
  console.log(`\n--- Button ${i} ---`);
  console.log(tag);
});
