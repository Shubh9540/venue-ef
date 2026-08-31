const fs = require('fs');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const sections = data.categories.Venue.sections;

if (sections.Header && sections.Header.variants && sections.Header.variants.VenueHeader1) {
  sections.Header.variants.VenueHeader1.navLinks = [
    {
      id: "nav-home",
      label: "Home",
      url: "/"
    },
    {
      id: "nav-about",
      label: "About Us",
      subLinks: [
        { id: "about-1", label: "About Us", url: "/about" },
        { id: "about-2", label: "Our Story", url: "/our-story" },
        { id: "about-3", label: "Our Mission", url: "/our-mission" },
        { id: "about-4", label: "Our Vision", url: "/our-vision" },
        { id: "about-5", label: "Our Awards", url: "/our-awards" },
        { id: "about-6", label: "Testimonials", url: "/testimonials" },
        { id: "about-7", label: "Why Choose Us", url: "/why-choose-us" }
      ]
    },
    {
      id: "nav-services",
      label: "Services",
      subLinks: [
        { id: "serv-1", label: "All Services", url: "/services" },
        { id: "serv-2", label: "Corporate Event Planning", url: "/services/corporate-event-planning" },
        { id: "serv-3", label: "Wedding Planning", url: "/services/wedding-planning" },
        { id: "serv-4", label: "Engagement Planning", url: "/services/engagement-planning" },
        { id: "serv-5", label: "Private Parties", url: "/services/private-parties" },
        { id: "serv-6", label: "Product Launches", url: "/services/product-launches" }
      ]
    },
    {
      id: "nav-events",
      label: "Events",
      subLinks: [
        { id: "event-1", label: "All Events", url: "/events" },
        { id: "event-2", label: "Corporate Events", url: "/events/corporate-events" },
        { id: "event-3", label: "Weddings", url: "/events/weddings" },
        { id: "event-4", label: "Social Celebrations", url: "/events/social-celebrations" },
        { id: "event-5", label: "Exhibitions", url: "/events/exhibitions" },
        { id: "event-6", label: "Seminars", url: "/events/seminars" },
        { id: "event-7", label: "Entertainment", url: "/events/entertainment" }
      ]
    },
    {
      id: "nav-work-team",
      label: "Our Work & Team",
      subLinks: [
        { id: "work-1", label: "Gallery Overview", url: "/gallery" },
        { id: "team-1", label: "Our Team", url: "/team" },
        { id: "team-2", label: "Team Detail", url: "/team/tm2" }
      ]
    },
    {
      id: "nav-careers",
      label: "Careers",
      subLinks: [
        { id: "car-1", label: "Careers Overview", url: "/careers" },
        { id: "car-2", label: "Career Detail", url: "/careers/event-manager" }
      ]
    },
    {
      id: "nav-blogs",
      label: "Blogs",
      subLinks: [
        { id: "blog-1", label: "All Blogs", url: "/blogs" },
        { id: "blog-2", label: "Event Planning Tips", url: "/blogs/planning-tips" },
        { id: "blog-3", label: "Industry Insights", url: "/blogs/industry-insights" }
      ]
    },
    {
      id: "nav-contact",
      label: "Contact",
      subLinks: [
        { id: "con-1", label: "Get in Touch", url: "/contact" },
        { id: "con-2", label: "Get a Quote", url: "/get-a-quote" },
        { id: "con-3", label: "FAQ", url: "/faq" }
      ]
    },
    {
      id: "nav-utility",
      label: "Utility Pages",
      subLinks: [
        { id: "ut-1", label: "404 Page", url: "/broken-link" },
        { id: "ut-2", label: "Terms & Conditions", url: "/terms-conditions" },
        { id: "ut-3", label: "Privacy Policy", url: "/privacy-policy" },
        { id: "ut-4", label: "Cookies Policy", url: "/cookies-policy" },
        { id: "ut-5", label: "Disclaimer", url: "/disclaimer" },
        { id: "ut-6", label: "Refund Policy", url: "/refund-policy" },
        { id: "ut-7", label: "Sitemap", url: "/sitemap" }
      ]
    }
  ];
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Updated Header navigation!");
