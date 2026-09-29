import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

// Find all <img> tags and background-image in inline styles
const imgMatches = [...html.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/gi)].map(m => m[1]);
console.log('Total <img> tags:', imgMatches.length);
console.log('Sample images:', [...new Set(imgMatches)].slice(0, 20));

const bgMatches = [...html.matchAll(/background-image:\s*url\(['"]?([^'")]+)['"]?\)/gi)].map(m => m[1]);
console.log('\nTotal bg-images:', bgMatches.length);
console.log('Sample bg-images:', [...new Set(bgMatches)].slice(0, 10));
