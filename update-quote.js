const fs = require('fs');
const path = require('path');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

if (!data.categories.Venue.sections.QuoteBreadcrumb) {
  data.categories.Venue.sections.QuoteBreadcrumb = { variants: {} };
}
if (!data.categories.Venue.sections.QuotePageContent) {
  data.categories.Venue.sections.QuotePageContent = { variants: {} };
}

const breadcrumbs = data.categories.Venue.sections.QuoteBreadcrumb.variants;
const pages = data.categories.Venue.sections.QuotePageContent.variants;

breadcrumbs.VenueQuoteBreadcrumb1 = {
  title: "Get A Quote",
  bgImage: "/banner/banner1.webp",
  paths: [
    { label: "Home", url: "/" },
    { label: "Get a Quote" }
  ]
};

pages.VenueQuotePage1 = {
  badge: "GET A QUOTE",
  title: "Let's Plan Something",
  titleHighlight: "Extraordinary",
  description: "Share your event details with us and our team will get back to you with a customized quote tailored to your needs.",
  features: [
    {
      id: "f1",
      title: "Personalized Solutions",
      description: "Custom packages designed for your unique event.",
      icon: "FaCalendarAlt"
    },
    {
      id: "f2",
      title: "Expert Guidance",
      description: "Our event experts are here to help you every step.",
      icon: "FaUsers"
    },
    {
      id: "f3",
      title: "Best Value",
      description: "Premium services that fit your budget perfectly.",
      icon: "FaShieldAlt"
    }
  ],
  image: "/banner/banner1.webp",
  form: {
    icon: "FaClipboardList",
    title: "Tell us about your event",
    subtitle: "Fill out the details and we'll get back to you shortly.",
    buttonText: "Get My Quote",
    footerText: "Your information is safe with us. We respect your privacy."
  }
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Added Quote data successfully");
