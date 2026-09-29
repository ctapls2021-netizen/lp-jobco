import fs from 'node:fs';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');
const headMatch = html.match(/<head[^>]*>(.*?)<\/head>/s);

let headStyles = '';
if (headMatch) {
  const styles = [...headMatch[1].matchAll(/<style[^>]*>(.*?)<\/style>/gs)]
    .map(m => m[1].trim())
    .filter(s => !s.includes('termly-') && !s.includes('.LGLeeN-') && !s.includes('.gm-style'));
  headStyles = styles.join('\n\n');
}

const customCss = `
/* ========================================================
   JOBCO PAVING - NATURAL STONE ARCHITECTURE STYLESHEET
   ======================================================== */

@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Marcellus&display=swap');

:root {
  --color-primary: #27A8E1;
  --color-primary-hover: #1994cb;
  --color-secondary: #0A374B;
  --color-secondary-dark: #062330;
  --color-light: #F4F7F9;
  --font-primary: 'Instrument Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-secondary: 'Marcellus', Georgia, serif;
}

/* Strict Zero Radius Mandate from Jobco.md */
*, *::before, *::after, button, input, select, textarea, img, div, span, a, section, header, footer {
  border-radius: 0 !important;
}

html {
  font-family: var(--font-primary);
  font-size: 17px;
  line-height: 1.6;
  color: #1E293B;
  background-color: #FFFFFF;
  scroll-behavior: smooth;
  overflow-x: hidden !important;
}

body {
  font-family: var(--font-primary);
  font-size: 17px;
  line-height: 1.6;
  color: var(--color-secondary);
  background-color: #FFFFFF;
  overflow-x: hidden !important;
  margin: 0;
  padding: 0;
}

/* Typography Rules from Jobco.md */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-secondary) !important;
  font-weight: 400 !important;
  text-transform: capitalize;
  line-height: 1.25;
}

.m-first-heading,
.m-second-heading,
.m-third-heading,
.m-fourth-heading {
  font-family: var(--font-secondary) !important;
  font-weight: 400 !important;
}

p, li, span, input, select, textarea, label {
  font-family: var(--font-primary);
}

.subheadline, .subtitle-accent {
  font-family: var(--font-primary) !important;
  font-weight: 700 !important;
  color: var(--color-primary) !important;
}

/* Buttons System */
.btn-jobco {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 32px;
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box !important;
}

.btn-jobco-primary {
  background-color: var(--color-primary) !important;
  color: #FFFFFF !important;
  border-color: var(--color-primary) !important;
}

.btn-jobco-primary:hover {
  background-color: var(--color-secondary) !important;
  border-color: var(--color-secondary) !important;
  color: #FFFFFF !important;
  transform: translateY(-2px);
}

.btn-jobco-light {
  background-color: #FFFFFF !important;
  color: var(--color-secondary) !important;
  border-color: #FFFFFF !important;
}

.btn-jobco-light:hover {
  background-color: var(--color-primary) !important;
  color: #FFFFFF !important;
  border-color: var(--color-primary) !important;
  transform: translateY(-2px);
}

.btn-jobco-outline {
  background-color: transparent !important;
  color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

.btn-jobco-outline:hover {
  background-color: #FFFFFF !important;
  color: var(--color-secondary) !important;
}

/* Form Controls with Crisp Styling */
.form-control-jobco {
  width: 100%;
  padding: 13px 16px;
  font-family: var(--font-primary);
  font-size: 15px;
  background-color: #F8FAFC;
  border: 1px solid #CBD5E1;
  color: #0F172A;
  outline: none;
  box-sizing: border-box !important;
  transition: border-color 0.2s, background-color 0.2s;
}

.form-control-jobco:focus {
  border-color: var(--color-primary);
  background-color: #FFFFFF;
  box-shadow: 0 0 0 2px rgba(39, 168, 225, 0.2);
}

/* Template Native Styles */
${headStyles}
`;

fs.writeFileSync('src/styles/natural-stone.css', customCss);
console.log('Updated src/styles/natural-stone.css (' + customCss.length + ' bytes)');
