const fs = require('fs');
const path = require('path');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const breadcrumbs = data.categories.Venue.sections.BlogDetailBreadcrumb.variants;
const pages = data.categories.Venue.sections.BlogDetailPageContent.variants;

const sourceSlug = "creating-unforgettable-corporate-events";
const sourceBreadcrumb = breadcrumbs[sourceSlug];
const sourcePage = pages[sourceSlug];

const targetSlugs = [
  "10-stunning-wedding-decor-ideas-2024",
  "how-to-plan-a-successful-corporate-event",
  "checklist-for-planning-the-perfect-private-party"
];

for (const slug of targetSlugs) {
  // Deep clone
  breadcrumbs[slug] = JSON.parse(JSON.stringify(sourceBreadcrumb));
  pages[slug] = JSON.parse(JSON.stringify(sourcePage));
  
  // Update title based on slug
  let title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  pages[slug].title = title;
  breadcrumbs[slug].paths[2].label = title;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Added missing slugs successfully");
