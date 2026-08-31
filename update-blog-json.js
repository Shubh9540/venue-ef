const fs = require('fs');
const path = require('path');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Initialize section variants
if (!data.categories.Venue.sections.BlogDetailBreadcrumb) {
  data.categories.Venue.sections.BlogDetailBreadcrumb = { variants: {} };
}
if (!data.categories.Venue.sections.BlogDetailPageContent) {
  data.categories.Venue.sections.BlogDetailPageContent = { variants: {} };
}

const breadcrumbs = data.categories.Venue.sections.BlogDetailBreadcrumb.variants;
const pages = data.categories.Venue.sections.BlogDetailPageContent.variants;

const slug = "creating-unforgettable-corporate-events";

breadcrumbs[slug] = {
  title: "Blog Details",
  bgImage: "/banner/banner1.webp",
  paths: [
    { label: "Home", url: "/" },
    { label: "Blogs", url: "/blogs" },
    { label: "Creating Unforgettable Corporate Events" }
  ]
};

pages[slug] = {
  badge: "EVENT PLANNING",
  title: "Creating Unforgettable Corporate Events: A Complete Guide",
  date: "May 20, 2025",
  readTime: "8 min read",
  author: "By Venue EF Team",
  image: "/banner/banner1.webp",
  contentSections: [
    {
      type: "text",
      content: "Corporate events are more than just dates on a calendar—they're opportunities to inspire, connect, and create lasting impressions. Whether it's a product launch, annual conference, or team celebration, a well-planned event reflects your brand's values and leaves a meaningful impact on your audience.\n\nIn this guide, we'll walk you through the key steps to planning a corporate event that's seamless, engaging, and truly unforgettable."
    },
    {
      type: "heading",
      content: "1. Define Your Objectives"
    },
    {
      type: "text",
      content: "Start with a clear purpose. Are you launching a new product, building team engagement, or strengthening client relationships? Defining your objectives will shape every decision—from the venue and agenda to the experiences you create."
    },
    {
      type: "quote",
      content: "A clear objective turns an event from good to great."
    },
    {
      type: "heading",
      content: "2. Know Your Audience"
    },
    {
      type: "text",
      content: "Understanding your audience helps you design an experience that resonates with them. Consider their preferences, expectations, and what will provide real value."
    },
    {
      type: "list",
      content: [
        "What motivates them?",
        "What kind of experience will engage them?",
        "What key message do you want them to take away?"
      ]
    },
    {
      type: "heading",
      content: "3. Choose the Right Venue"
    },
    {
      type: "text",
      content: "The venue sets the tone for your event. Look for a space that aligns with your brand image, accommodates your guest list, and offers the right amenities and ambience."
    }
  ],
  sidebar: {
    relatedPosts: [
      {
        id: "rp1",
        image: "/banner/banner1.webp",
        title: "10 Corporate Event Trends to Watch in 2025",
        date: "May 15, 2025",
        url: "/blogs/10-corporate-event-trends"
      },
      {
        id: "rp2",
        image: "/banner/banner1.webp",
        title: "How to Plan a Successful Product Launch Event",
        date: "May 08, 2025",
        url: "/blogs/plan-product-launch"
      },
      {
        id: "rp3",
        image: "/banner/banner1.webp",
        title: "Team Building Events That Inspire and Engage",
        date: "Apr 30, 2025",
        url: "/blogs/team-building-events"
      },
      {
        id: "rp4",
        image: "/banner/banner1.webp",
        title: "Checklist for Planning a Flawless Event",
        date: "Apr 22, 2025",
        url: "/blogs/checklist-planning-event"
      }
    ],
    categories: [
      { id: "c1", name: "Event Planning", count: 12, icon: "FaCalendarAlt" },
      { id: "c2", name: "Corporate Events", count: 9, icon: "FaBriefcase" },
      { id: "c3", name: "Trends & Insights", count: 7, icon: "FaLightbulb" },
      { id: "c4", name: "Tips & Guides", count: 10, icon: "FaInfoCircle" },
      { id: "c5", name: "Venue & Design", count: 6, icon: "FaBuilding" }
    ]
  }
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Added Blog Detail data successfully");
