import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

const bodyOpen = html.indexOf('<body');
const bodyClose = html.lastIndexOf('</body>');
const bodyTag = html.match(/<body[^>]*>/)[0];
console.log('Body tag:', bodyTag);

const beforeHeader = html.slice(bodyOpen, html.indexOf('<header'));
console.log('\n--- Content before <header> ---');
console.log(beforeHeader);

const afterFooter = html.slice(html.lastIndexOf('</footer>') + 9, bodyClose);
console.log('\n--- Content after </footer> ---');
console.log(afterFooter);
