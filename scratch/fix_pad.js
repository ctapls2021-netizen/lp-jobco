import fs from 'fs';
let c = fs.readFileSync('src/components/natural/Services.astro', 'utf8');
c = c.replace('<div class="s-our-serv__head">', '<div class="s-our-serv__head" style="padding: 0 20px;">');
fs.writeFileSync('src/components/natural/Services.astro', c);
