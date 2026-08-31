const fs = require('fs');
const path = require('path');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

if (!data.categories.Venue.sections.BlogsBreadcrumb) {
  data.categories.Venue.sections.BlogsBreadcrumb = {
    variants: {
      VenueBlogsBreadcrumb1: {
        title: "Our Blogs",
        bgImage: "/banner/banner1.webp",
        paths: [
          { label: "Home", url: "/" },
          { label: "Blogs" }
        ]
      }
    }
  };
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Added BlogsBreadcrumb successfully");
