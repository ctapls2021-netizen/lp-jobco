import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');
const headMatch = html.match(/<head[^>]*>(.*?)<\/head>/s);

let headStyles = '';
if (headMatch) {
  const styles = [...headMatch[1].matchAll(/<style[^>]*>(.*?)<\/style>/gs)]
    .map(m => m[1].trim())
    // Exclude third-party termly and google maps clutter
    .filter(s => !s.includes('termly-') && !s.includes('.LGLeeN-') && !s.includes('.gm-style'));
  
  headStyles = styles.join('\n\n');
}

const customCss = `
/* ========================================================
   NATURAL STONE (STONE CENTER) - ASTRO MASTER STYLESHEET
   ======================================================== */

@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Marcellus&display=swap');

/* Webflow / Head Styles from Original Template */
${headStyles}

/* Clean Overrides and Polish */
.m-first-heading,
.m-second-heading,
.m-third-heading,
.m-fourth-heading {
  font-family: 'Marcellus', Georgia, serif !important;
}

body {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow-x: hidden !important;
}

img {
  max-width: 100%;
  height: auto;
}
`;

fs.writeFileSync('src/styles/natural-stone.css', customCss);
console.log('src/styles/natural-stone.css created successfully (' + customCss.length + ' bytes)');
