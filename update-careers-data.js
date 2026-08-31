const fs = require('fs');

const filePath = 'g:/venue-ef/data/templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Initialize objects if they don't exist
const sections = data.categories.Venue.sections;
['CareersBreadcrumb', 'CareersPageContent', 'CareerDetailBreadcrumb', 'CareerDetailPageContent'].forEach(sec => {
  if (!sections[sec]) sections[sec] = { variants: {} };
});

sections.CareersBreadcrumb.variants.VenueCareersBreadcrumb1 = {
  title: "Careers",
  bgImage: "/banner/banner1.webp",
  paths: [
    { label: "Home", url: "/" },
    { label: "Careers" }
  ]
};

sections.CareersPageContent.variants.VenueCareersPage1 = {
  overviewBadge: "OVERVIEW",
  overviewTitle: "Where Passion Meets Purpose",
  overviewDescription: "We're a team of dreamers, doers, and detail-lovers who thrive on creating unforgettable experiences. Here, your ideas matter, your growth is supported, and your work makes an impact.",
  values: [
    {
      id: "v1",
      icon: "FaUsers",
      title: "People First",
      description: "We value respect, collaboration, and a culture of inclusivity where everyone belongs."
    },
    {
      id: "v2",
      icon: "FaLightbulb",
      title: "Creative Freedom",
      description: "You'll have the space to think bold, share ideas, and bring your creativity to life."
    },
    {
      id: "v3",
      icon: "FaChartLine",
      title: "Growth & Learning",
      description: "We invest in your growth with learning opportunities and real career advancement."
    },
    {
      id: "v4",
      icon: "FaHeart",
      title: "Work That Matters",
      description: "Be part of meaningful events that inspire people and create lasting memories."
    },
    {
      id: "v5",
      icon: "FaGift",
      title: "Celebrate Together",
      description: "We celebrate wins, big and small—because great culture creates great results."
    }
  ],
  positionsBadge: "OPEN POSITIONS",
  positionsTitle: "Explore Current Opportunities",
  positionsDescription: "Join us in shaping extraordinary events and growing your career with a team that's as passionate as you are.",
  positions: [
    {
      id: "event-manager",
      title: "Event Manager",
      description: "Lead and manage end-to-end event planning and execution to deliver exceptional experiences.",
      department: "Event Management",
      location: "Mumbai, India",
      type: "Full-time"
    },
    {
      id: "senior-event-planner",
      title: "Senior Event Planner",
      description: "Design creative concepts and manage logistics for corporate, social, and destination events.",
      department: "Event Planning",
      location: "Delhi, India",
      type: "Full-time"
    }
  ]
};

sections.CareerDetailBreadcrumb.variants = {
  "event-manager": {
    title: "Event Manager",
    bgImage: "/banner/banner1.webp",
    paths: [
      { label: "Home", url: "/" },
      { label: "Careers", url: "/careers" },
      { label: "Event Manager" }
    ]
  },
  "senior-event-planner": {
    title: "Senior Event Planner",
    bgImage: "/banner/banner1.webp",
    paths: [
      { label: "Home", url: "/" },
      { label: "Careers", url: "/careers" },
      { label: "Senior Event Planner" }
    ]
  }
};

const commonDetailData = {
  aboutRole: "As an Event Manager at Venu EV, you will be responsible for planning, coordinating, and executing a wide range of corporate, social, and private events. You will work closely with clients, vendors, and internal teams to ensure every event is delivered seamlessly, on time, and within budget.",
  responsibilities: [
    "Manage end-to-end planning and execution of events from concept to completion.",
    "Understand client goals and create event strategies that align with their vision.",
    "Coordinate with vendors, venues, and partners to ensure smooth operations.",
    "Lead and manage the event team to deliver exceptional guest experiences.",
    "Oversee budgets, timelines, logistics, and resources for each event.",
    "Troubleshoot issues on-site and ensure risk management protocols are followed.",
    "Gather post-event feedback and prepare detailed reports."
  ],
  requirements: [
    "Bachelor's degree in Event Management, Hospitality, Marketing, or related field.",
    "3-5 years of experience in event planning or management.",
    "Strong organizational, negotiation, and problem-solving skills.",
    "Excellent communication and interpersonal abilities.",
    "Ability to work under pressure and manage multiple events simultaneously.",
    "Proficiency in event management tools and MS Office."
  ],
  benefits: [
    { id: "b1", icon: "FaChartLine", title: "Career Growth", description: "Opportunities" },
    { id: "b2", icon: "FaBookReader", title: "Learning &", description: "Development" },
    { id: "b3", icon: "FaHeartbeat", title: "Health & Wellness", description: "Programs" },
    { id: "b4", icon: "FaCalendarCheck", title: "Flexible Work", description: "Environment" },
    { id: "b5", icon: "FaUsers", title: "Collaborative", description: "Culture" }
  ],
  stats: [
    { icon: "FaUsers", title: "50+", subtitle: "Passionate Professionals" },
    { icon: "FaStar", title: "500+", subtitle: "Successful Events" },
    { icon: "FaGlobe", title: "10+", subtitle: "Cities Worldwide" },
    { icon: "FaSmile", title: "95%", subtitle: "Employee Satisfaction" },
    { icon: "FaTrophy", title: "Award-Winning", subtitle: "Event Management Company" }
  ]
};

sections.CareerDetailPageContent.variants = {
  "event-manager": { title: "Event Manager", ...commonDetailData },
  "senior-event-planner": { title: "Senior Event Planner", ...commonDetailData }
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Injected Careers Data!");
