import fs from 'node:fs';

const htmlPath = 'Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html';
const html = fs.readFileSync(htmlPath, 'utf8');

console.log('HTML size:', html.length);

// Extract CSS links
const linkMatches = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/gi)].map(m => m[0]);
console.log('\n--- Stylesheet links ---');
console.log(linkMatches);

// Extract title & meta
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('\nTitle:', titleMatch ? titleMatch[1] : 'N/A');

// Extract all <section> or major containers
const sectionMatches = [...html.matchAll(/<(section|header|footer|nav|main|div[^>]*class="[^"]*(section|hero|header|footer|banner)[^"]*")[^>]*>/gi)].map(m => m[0]);
console.log('\n--- Major structure tags (sample) ---');
console.log(sectionMatches.slice(0, 25));

// Check scripts
const scriptMatches = [...html.matchAll(/<script[^>]*src="([^"]*)"[^>]*>/gi)].map(m => m[1]);
console.log('\n--- Script sources ---');
console.log(scriptMatches);
