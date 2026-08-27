export interface TopBarData {
  phone: string;
  phoneIcon?: string;
  email: string;
  emailIcon?: string;
  socialTitle: string;
  socialLinks: {
    id: string;
    icon: string;
    url: string;
  }[];
}

export interface HeaderData {
  image: string;
  imageAlt?: string;
  navLinks: {
    id: string;
    label: string;
    url: string;
  }[];
  contactButton: {
    text: string;
    url: string;
  };
}

export interface HeroSlide {
  id: string;
  image: string;
  imageAlt?: string;
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  primaryBtn: { text: string; url: string; icon?: string };
  secondaryBtn: { text: string; url: string; icon?: string };
}

export interface HeroData {
  slides: HeroSlide[];
}

export interface AboutUsData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description1: string;
  description2: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonIcon?: string;
  image1: string;
  image1Alt?: string;
  image2: string;
  image2Alt?: string;
  decorImage?: string;
  decorImageAlt?: string;
}

export interface OurStoryData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  subtitle: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt?: string;
  quoteText: string;
  quoteHighlight: string;
  quoteFooter: string;
  quoteFooterIcon?: string;
  decorImage?: string;
  decorImageAlt?: string;
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsStat {
  id: string;
  icon: string;
  value: string;
  label: string;
  subtitle: string;
}

export interface WhyChooseUsData {
  title: string;
  dividerIcon?: string;
  features: WhyChooseUsFeature[];
  stats: WhyChooseUsStat[];
}

export interface CounterStat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface CounterData {
  stats: CounterStat[];
}

export interface ServiceCard {
  id: string;
  slug: string;
  image: string;
  imageAlt?: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface ServicesData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  items: ServiceCard[];
}

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface OurValuesData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  items: ValueItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  roleIcon: string;
  image: string;
  imageAlt?: string;
  rating: number;
  quote: string;
}

export interface TestimonialsData {
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd?: string;
  dividerIcon?: string;
  description: string;
  items: TestimonialItem[];
}

export interface CtaData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon?: string;
  phoneLabel: string;
  phoneNumber: string;
  phoneUrl: string;
  phoneIcon?: string;
  bgImage: string;
  bgImageAlt?: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  image: string;
  imageAlt?: string;
  icon: string;
  date: string;
  category: string;
  title: string;
  description: string;
  linkUrl: string;
}

export interface BlogsData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  items: BlogItem[];
  viewAllText: string;
  viewAllUrl: string;
  viewAllIcon?: string;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  id: string;
  icon: string;
  text: string;
  url?: string;
}

export interface FooterData {
  logo: string;
  logoAlt?: string;
  description: string;
  socialLinks: {
    id: string;
    icon: string;
    url: string;
  }[];
  columns: FooterColumn[];
  contactTitle: string;
  contactItems: FooterContactItem[];
  copyrightText: string;
  legalLinks: FooterLink[];
  tagline: string;
  taglineIcon?: string;
}

export interface MissionVisionCard {
  icon: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface MissionVisionData {
  id: string;
  badge: string;
  title: string;
  highlightWords: string[];
  description: string;
  visionCard: MissionVisionCard;
  missionCard: MissionVisionCard;
}

export interface MissionFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutMissionData {
  id: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt?: string;
  features: MissionFeature[];
}

export interface CoreValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CoreValuesData {
  id: string;
  items: CoreValueItem[];
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  image: string;
  imageAlt?: string;
}

export interface AwardsData {
  id: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  statsValue: string;
  statsLabel: string;
  items: AwardItem[];
}

export interface TeamMemberStat {
  icon: string;
  title: string;
  value1: string;
  value2?: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  socials: {
    platform: string;
    url: string;
    icon: string;
  }[];
  email?: string;
  bio?: string;
  stats?: TeamMemberStat[];
}

export interface TeamData {
  id: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
}

export interface TeamDetailPageContentData {
  badge: string;
  title: string;
}

export interface BreadcrumbPath {
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  paths: BreadcrumbPath[];
  bgImage: string;
}

export interface SectionVariant<T> {
  variants?: {
    [key: string]: T;
  };
}

export interface VenueCategorySections {
  TopBar?: SectionVariant<TopBarData>;
  Header?: SectionVariant<HeaderData>;
  Hero?: SectionVariant<HeroData>;
  AboutUs?: SectionVariant<AboutUsData>;
  OurStory?: SectionVariant<OurStoryData>;
  Counter?: SectionVariant<CounterData>;
  WhyChooseUs?: SectionVariant<WhyChooseUsData>;
  Services?: SectionVariant<ServicesData>;
  OurValues?: SectionVariant<OurValuesData>;
  CoreValues?: SectionVariant<CoreValuesData>;
  MissionVision?: SectionVariant<MissionVisionData>;
  AboutMission?: SectionVariant<AboutMissionData>;
  AboutVision?: SectionVariant<AboutMissionData>;
  Awards?: SectionVariant<AwardsData>;
  Team?: SectionVariant<TeamData>;
  TeamDetailPageContent?: SectionVariant<TeamDetailPageContentData>;
  Testimonials?: SectionVariant<TestimonialsData>;
  CTA?: SectionVariant<CtaData>;
  Blogs?: SectionVariant<BlogsData>;
  Footer?: SectionVariant<FooterData>;
  AboutBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurMissionBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurVisionBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurStoryBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurAwardsBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurTeamBreadcrumb?: SectionVariant<BreadcrumbData>;
  TeamDetailBreadcrumb?: SectionVariant<BreadcrumbData>;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplatePageConfig {
  components: TemplateComponentItem[];
}

export interface TemplateDefinition {
  shared?: {
    Topbar?: string;
    Header?: string;
    Footer?: string;
    [key: string]: string | undefined;
  };
  pages?: {
    [pageName: string]: TemplatePageConfig;
  };
}

export interface VenueEfTemplateData {
  common?: {
    globalUI?: {
      loading?: string;
      notFound?: string;
    };
    [key: string]: unknown;
  };
  categories?: {
    Venue?: {
      templateComponents?: {
        [templateKey: string]: TemplateDefinition;
      };
      sections?: VenueCategorySections;
    };
  };
}
