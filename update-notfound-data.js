const fs = require('fs');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const sections = data.categories.Venue.sections;
if (!sections.NotFoundPageContent) sections.NotFoundPageContent = { variants: {} };

sections.NotFoundPageContent.variants.VenueNotFound1 = {
  backgroundImage: "/banner/ban1.jpg",
  errorCode: "404",
  title: "Oops! This Page\nWent on an Adventure.",
  description: "Looks like the page you're looking for\nhas wandered off the map.",
  buttonText: "BACK TO HOMEPAGE",
  buttonUrl: "/",
  helpfulTitle: "Explore Something Helpful",
  helpfulLinks: [
    { id: "h1", icon: "FaUserFriends", title: "About Us", url: "/about" },
    { id: "h2", icon: "FaClipboardList", title: "What We Do", url: "/services" },
    { id: "h3", icon: "FaBriefcase", title: "Our Work", url: "/gallery" },
    { id: "h4", icon: "FaUsers", title: "Our Team", url: "/team" },
    { id: "h5", icon: "FaEnvelope", title: "Contact Us", url: "/contact" }
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Injected NotFound Data!");
