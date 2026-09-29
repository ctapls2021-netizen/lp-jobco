import fs from 'node:fs';
import path from 'node:path';

const htmlPath = 'Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const targetDir = 'src/components/natural';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function cleanContent(str) {
  return str
    .replace(/\.\/Natural Stone Supplier &amp; Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/')
    .replace(/\.\/Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/')
    .replace(/Natural Stone Supplier &amp; Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/')
    .replace(/Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/');
}

// 1. Header
const headerMatch = html.match(/<header id="comradeHeader"[^>]*>.*?<\/header>/s);
if (headerMatch) {
  fs.writeFileSync(path.join(targetDir, 'Header.astro'), `---\n---\n${cleanContent(headerMatch[0])}\n`);
  console.log('Created Header.astro');
}

// 2. Hero
const heroMatch = html.match(/<section class="s-hero">.*?<\/section>/s);
if (heroMatch) {
  fs.writeFileSync(path.join(targetDir, 'Hero.astro'), `---\n---\n${cleanContent(heroMatch[0])}\n`);
  console.log('Created Hero.astro');
}

// 3. Welcome
const welcomeMatch = html.match(/<section id="about" class="s-welcome">.*?<\/section>/s);
if (welcomeMatch) {
  fs.writeFileSync(path.join(targetDir, 'Welcome.astro'), `---\n---\n${cleanContent(welcomeMatch[0])}\n`);
  console.log('Created Welcome.astro');
}

// 4. PurposesGrid
const prodMatch = html.match(/<section class="s-top-prod">.*?<\/section>/s);
if (prodMatch) {
  fs.writeFileSync(path.join(targetDir, 'PurposesGrid.astro'), `---\n---\n${cleanContent(prodMatch[0])}\n`);
  console.log('Created PurposesGrid.astro');
}

// 5. WhyChooseUs
const whyMatch = html.match(/<section class="s-why-choose swiper">.*?<\/section>/s);
if (whyMatch) {
  fs.writeFileSync(path.join(targetDir, 'WhyChooseUs.astro'), `---\n---\n${cleanContent(whyMatch[0])}\n`);
  console.log('Created WhyChooseUs.astro');
}

// 6. CtaBanner
const ctaMatch = html.match(/<section class="s-call-us-banner">.*?<\/section>/s);
if (ctaMatch) {
  fs.writeFileSync(path.join(targetDir, 'CtaBanner.astro'), `---\n---\n${cleanContent(ctaMatch[0])}\n`);
  console.log('Created CtaBanner.astro');
}

// 7. Services
const servMatch = html.match(/<section id="services" class="s-our-serv s-our-serv_landing">.*?<\/section>/s);
if (servMatch) {
  fs.writeFileSync(path.join(targetDir, 'Services.astro'), `---\n---\n${cleanContent(servMatch[0])}\n`);
  console.log('Created Services.astro');
}

// 8. IdeasGallery
const ideasMatch = html.match(/<section id="ideasSection" class="s-ideas-slider swiper">.*?<\/section>/s);
if (ideasMatch) {
  fs.writeFileSync(path.join(targetDir, 'IdeasGallery.astro'), `---\n---\n${cleanContent(ideasMatch[0])}\n`);
  console.log('Created IdeasGallery.astro');
}

// 9. WhoWeServe
const whoMatch = html.match(/<section class="s-who-we-serv">.*?<\/section>/s);
if (whoMatch) {
  fs.writeFileSync(path.join(targetDir, 'WhoWeServe.astro'), `---\n---\n${cleanContent(whoMatch[0])}\n`);
  console.log('Created WhoWeServe.astro');
}

// 10. Testimonials
const sayMatch = html.match(/<section id="whatSay" class="s-what-say swiper">.*?<\/section>/s);
if (sayMatch) {
  fs.writeFileSync(path.join(targetDir, 'Testimonials.astro'), `---\n---\n${cleanContent(sayMatch[0])}\n`);
  console.log('Created Testimonials.astro');
}

// 11. ContactSection
const contactMatch = html.match(/<section id="contact" class="s-cont-us">.*?<\/section>/s);
if (contactMatch) {
  fs.writeFileSync(path.join(targetDir, 'ContactSection.astro'), `---\n---\n${cleanContent(contactMatch[0])}\n`);
  console.log('Created ContactSection.astro');
}

// 12. ArticlesSection
const articleMatch = html.match(/<section class="s-late-article">.*?<\/section>/s);
if (articleMatch) {
  fs.writeFileSync(path.join(targetDir, 'ArticlesSection.astro'), `---\n---\n${cleanContent(articleMatch[0])}\n`);
  console.log('Created ArticlesSection.astro');
}

// 13. Footer
const footerMatch = html.match(/<footer class="s-foo">.*?<\/footer>/s);
if (footerMatch) {
  fs.writeFileSync(path.join(targetDir, 'Footer.astro'), `---\n---\n${cleanContent(footerMatch[0])}\n`);
  console.log('Created Footer.astro');
}

console.log('All components generated successfully in src/components/natural/');
