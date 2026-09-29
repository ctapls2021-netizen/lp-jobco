import fs from 'node:fs';
import path from 'node:path';

const html = fs.readFileSync('Natural Stone Supplier & Fabricator in Ohio _ Stone Center.html', 'utf8');

// Function to clean asset paths from HTML
function cleanPaths(code) {
  return code
    .replace(/\.\/Natural Stone Supplier &amp; Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/')
    .replace(/\.\/Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/')
    .replace(/Natural Stone Supplier &amp; Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/')
    .replace(/Natural Stone Supplier & Fabricator in Ohio _ Stone Center_files\//g, '/assets/natural-stone/');
}

// 1. Extract TopBar & Header
const headerRegex = /<header id="comradeHeader"[^>]*>.*?<\/header>/s;
const headerMatch = html.match(headerRegex);

// 2. Extract Hero
const heroRegex = /<section class="s-hero">.*?<\/section>/s;
const heroMatch = html.match(heroRegex);

// 3. Extract Welcome/About
const welcomeRegex = /<section id="about" class="s-welcome">.*?<\/section>/s;
const welcomeMatch = html.match(welcomeRegex);

// 4. Extract Purposes/Products
const prodRegex = /<section class="s-top-prod">.*?<\/section>/s;
const prodMatch = html.match(prodRegex);

// 5. Extract Why Choose Us
const whyRegex = /<section class="s-why-choose swiper">.*?<\/section>/s;
const whyMatch = html.match(whyRegex);

// 6. Extract CTA Banner
const ctaRegex = /<section class="s-call-us-banner">.*?<\/section>/s;
const ctaMatch = html.match(ctaRegex);

// 7. Extract Services
const servRegex = /<section id="services" class="s-our-serv s-our-serv_landing">.*?<\/section>/s;
const servMatch = html.match(servRegex);

// 8. Extract Ideas Slider
const ideasRegex = /<section id="ideasSection" class="s-ideas-slider swiper">.*?<\/section>/s;
const ideasMatch = html.match(ideasRegex);

// 9. Extract Who We Serve
const whoRegex = /<section class="s-who-we-serv">.*?<\/section>/s;
const whoMatch = html.match(whoRegex);

// 10. Extract Testimonials
const sayRegex = /<section id="whatSay" class="s-what-say swiper">.*?<\/section>/s;
const sayMatch = html.match(sayRegex);

// 11. Extract Contact
const contactRegex = /<section id="contact" class="s-cont-us">.*?<\/section>/s;
const contactMatch = html.match(contactRegex);

// 12. Extract Articles
const articleRegex = /<section class="s-late-article">.*?<\/section>/s;
const articleMatch = html.match(articleRegex);

// 13. Extract Footer
const footerRegex = /<footer class="s-foo">.*?<\/footer>/s;
const footerMatch = html.match(footerRegex);

const sections = {
  Header: headerMatch ? headerMatch[0] : null,
  Hero: heroMatch ? heroMatch[0] : null,
  Welcome: welcomeMatch ? welcomeMatch[0] : null,
  PurposesGrid: prodMatch ? prodMatch[0] : null,
  WhyChooseUs: whyMatch ? whyMatch[0] : null,
  CtaBanner: ctaMatch ? ctaMatch[0] : null,
  Services: servMatch ? servMatch[0] : null,
  IdeasGallery: ideasMatch ? ideasMatch[0] : null,
  WhoWeServe: whoMatch ? whoMatch[0] : null,
  Testimonials: sayMatch ? sayMatch[0] : null,
  ContactSection: contactMatch ? contactMatch[0] : null,
  ArticlesSection: articleMatch ? articleMatch[0] : null,
  Footer: footerMatch ? footerMatch[0] : null,
};

for (const [name, content] of Object.entries(sections)) {
  if (content) {
    console.log(`[OK] Extracted ${name}: ${content.length} chars`);
  } else {
    console.log(`[FAIL] Could not extract ${name}`);
  }
}
