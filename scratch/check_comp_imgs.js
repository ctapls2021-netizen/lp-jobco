import fs from 'node:fs';

const servicesContent = fs.readFileSync('src/components/natural/Services.astro', 'utf8');
const servImgs = [...servicesContent.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
console.log('Services images:', servImgs);

const purpContent = fs.readFileSync('src/components/natural/PurposesGrid.astro', 'utf8');
const purpImgs = [...purpContent.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
console.log('Purposes images:', purpImgs);
