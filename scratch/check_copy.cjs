const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

const requiredPhrases = [
  "TOP BAY AREA PAVING CONTRACTOR",
  "Paving Contractors for Bay Area Homes & Commercial Properties",
  "From driveways, patios, and pavers to parking lots, asphalt repair, striping, concrete, and drainage work, we provide the paving services your property needs.",
  "Select your project type, tell us what needs attention, and get your free estimate today.",
  "Get Your Free Estimate",
  "Get your free estimate for your home or commercial paving project.",
  "I Need Paving For",
  "Home",
  "Commercial Property",
  "Full Name",
  "Phone Number",
  "Email",
  "ZIP Code",
  "Message",
  "Tell us what work you need",
  "No obligation. We use your details to review your project request.",
  "The Paving Work You’re Looking For, in One Place.",
  "Whether you are improving your home or managing a commercial property, we help you move the paving project forward with the service that fits the job.",
  "For Homes",
  "Driveway Paving & Replacement",
  "Driveway Repair, Resurfacing & Sealcoating",
  "Pavers, Concrete, Patios & Walkways",
  "For Commercial Properties",
  "Asphalt Paving & Parking Lots",
  "Striping, Pavement Markings & Maintenance",
  "Concrete, Drainage, Masonry & Pathways",
  "Why Property Owners Trust Us",
  "Clear communication, dependable crews, and work that improves the property are what clients value most. Here is what homeowners shared about working with us.",
  "Marie L.",
  "Josh W.",
  "Michael P.",
  "Get Your Paving Project Moving in Three Simple Steps.",
  "Choose Your Project Type",
  "We Review Your Request",
  "Get a Clear Estimate",
  "See the Kind of Work We Can Do for Your Property.",
  "Serving Homes and Commercial Properties Across the Bay Area",
  "We serve San Leandro, Oakland, Fremont, San Jose, Walnut Creek, and surrounding Bay Area communities. Enter the project ZIP code in the form and we’ll confirm whether we can take on your project.",
  "Do you work on both homes and commercial properties?",
  "What should I select in the form if I searched for paving contractors?",
  "How much does paving cost?",
  "Can you repair existing asphalt instead of replacing it?",
  "Do you serve my area?",
  "Ready to Get Your Paving Project Started?",
  "Whether the work is for your home or commercial property, get your free estimate for paving, repair, resurfacing, sealcoating, concrete, pavers, striping, drainage, maintenance, or related surface work.",
  "Prefer to speak with us now? Call (510) 566-5484."
];

// Clean text: strip tags and decode entities
const cleanText = html
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&#39;/g, "'")
  .replace(/&rsquo;/g, "’")
  .replace(/&ldquo;/g, "“")
  .replace(/&rdquo;/g, "”")
  .replace(/\s+/g, ' ');

let missing = [];
for (const phrase of requiredPhrases) {
  if (!cleanText.includes(phrase)) {
    missing.push(phrase);
  }
}

console.log(`Checked ${requiredPhrases.length} core phrases.`);
if (missing.length === 0) {
  console.log("SUCCESS! 100% of required copy phrases are present in rendered text!");
} else {
  console.log("Missing phrases:", missing);
}
