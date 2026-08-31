const fs = require('fs');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const sections = data.categories.Venue.sections;
if (!sections.SitemapBreadcrumb) sections.SitemapBreadcrumb = { variants: {} };
if (!sections.SitemapPageContent) sections.SitemapPageContent = { variants: {} };

sections.SitemapBreadcrumb.variants.VenueSitemapBreadcrumb1 = {
  title: "Sitemap",
  bgImage: "/banner/banner1.webp",
  paths: [
    { label: "Home", url: "/" },
    { label: "Sitemap" }
  ]
};

sections.SitemapPageContent.variants.VenueSitemap1 = {
  title: "Sitemap",
  subtitle: "An overview of our website structure and content hierarchy.",
  categories: [
    {
      title: "HOME",
      links: [
        { label: "Homepage", url: "/" }
      ]
    },
    {
      title: "ABOUT US",
      links: [
        { label: "About Us", url: "/about" },
        { label: "Our Story", url: "/our-story" },
        { label: "Our Mission", url: "/our-mission" },
        { label: "Our Vision", url: "/our-vision" },
        { label: "Our Awards", url: "/our-awards" },
        { label: "Testimonials", url: "/testimonials" },
        { label: "Why Choose Us", url: "/why-choose-us" }
      ]
    },
    {
      title: "SERVICES",
      links: [
        { label: "All Services", url: "/services" },
        { label: "Corporate Event Planning", url: "/services/corporate-event-planning" },
        { label: "Wedding Planning", url: "/services/wedding-planning" },
        { label: "Engagement Planning", url: "/services/engagement-planning" },
        { label: "Private Parties", url: "/services/private-parties" },
        { label: "Product Launches", url: "/services/product-launches" }
      ]
    },
    {
      title: "EVENTS",
      links: [
        { label: "All Events", url: "/events" },
        { label: "Corporate Events", url: "/events/corporate-events" },
        { label: "Weddings", url: "/events/weddings" },
        { label: "Social Celebrations", url: "/events/social-celebrations" },
        { label: "Exhibitions", url: "/events/exhibitions" },
        { label: "Seminars", url: "/events/seminars" },
        { label: "Entertainment", url: "/events/entertainment" }
      ]
    },
    {
      title: "OUR WORK",
      links: [
        { label: "Gallery Overview", url: "/gallery" }
      ]
    },
    {
      title: "TEAM",
      links: [
        { label: "Our Team", url: "/team" },
        { label: "Team Detail", url: "/team/tm2" }
      ]
    },
    {
      title: "CAREERS",
      links: [
        { label: "Careers Overview", url: "/careers" },
        { label: "Career Detail", url: "/careers/event-manager" }
      ]
    },
    {
      title: "BLOGS",
      links: [
        { label: "All Blogs", url: "/blogs" },
        { label: "Event Planning Tips", url: "/blogs/planning-tips" },
        { label: "Industry Insights", url: "/blogs/industry-insights" }
      ]
    },
    {
      title: "CONTACT",
      links: [
        { label: "Get in Touch", url: "/contact" },
        { label: "Office Locations", url: "/contact#locations" }
      ]
    },
    {
      title: "LET'S CONNECT",
      links: [
        { label: "Facebook", url: "#" },
        { label: "Instagram", url: "#" },
        { label: "LinkedIn", url: "#" }
      ]
    }
  ],
  utilityTitle: "UTILITY PAGES",
  utilityLinks: [
    { label: "404 Page", url: "/some-random-404" },
    { label: "Terms & Conditions", url: "/terms-conditions" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Cookies Policy", url: "/cookies-policy" },
    { label: "Disclaimer", url: "/disclaimer" },
    { label: "Refund Policy", url: "/refund-policy" },
    { label: "Sitemap", url: "/sitemap" }
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Injected Sitemap Data!");
