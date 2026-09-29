import fs from 'node:fs';

const html = fs.readFileSync('Remoda_ Home Remodeling Website Next.js Template#567179_files/saved_resource.html', 'utf8');

// Find about header
const aboutMatch = html.match(/<section[^>]*id="d2c_about"[^>]*>(.*?)<\/section>/s);
if (aboutMatch) {
  console.log('--- ABOUT IN SAVED_RESOURCE ---');
  console.log(aboutMatch[0].slice(0, 1000));
}

// Find services header
const servicesMatch = html.match(/<section[^>]*id="d2c_services"[^>]*>(.*?)<\/section>/s);
if (servicesMatch) {
  console.log('--- SERVICES IN SAVED_RESOURCE ---');
  console.log(servicesMatch[0].slice(0, 1000));
}

// Find projects in saved_resource
const projectsMatch = html.match(/<section[^>]*id="d2c_projects"[^>]*>(.*?)<\/section>/s);
if (projectsMatch) {
  console.log('--- PROJECTS IN SAVED_RESOURCE ---');
  console.log(projectsMatch[0].slice(0, 1500));
}
