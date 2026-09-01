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

export interface HeaderNavLink {
  id: string;
  label: string;
  url?: string;
  subLinks?: {
    id: string;
    label: string;
    url: string;
  }[];
}

export interface HeaderData {
  image: string;
  imageAlt?: string;
  navLinks: HeaderNavLink[];
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

export interface WhyChooseUsPageFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsPageBottomItem {
  id: string;
  icon: string;
  text: string;
}

export interface WhyChooseUsPageData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  features: WhyChooseUsPageFeature[];
  bottomItems: WhyChooseUsPageBottomItem[];
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

export interface ServiceDetailOffer {
  id: string;
  title: string;
  description: string;
}

export interface ServiceDetailSidebarData {
  formTitle: string;
  helpTitle: string;
  helpText: string;
  phone: string;
  email: string;
  hours: string;
}

export interface ServiceDetailPageData {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  overviewBadge: string;
  overview: string;
  offerBadge: string;
  offers: ServiceDetailOffer[];
  sidebar: ServiceDetailSidebarData;
}

export interface EventCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface EventsPageData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  items: EventCard[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface EventDetailScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
}

export interface EventDetailSidebarData {
  date: string;
  time: string;
  location: string;
  organizer: string;
  eventType: string;
  bookBtnText: string;
  bookBtnUrl: string;
  helpTitle: string;
  helpText: string;
  phone: string;
  email: string;
}

export interface EventDetailPageData {
  title: string;
  image: string;
  imageAlt?: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  learnTitle: string;
  learnPoints: string[];
  scheduleTitle: string;
  schedule: EventDetailScheduleItem[];
  sidebar: EventDetailSidebarData;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  details: string[];
}

export interface ContactPageData {
  formTitle: string;
  formSubmitText: string;
  infoTitle: string;
  infoItems: ContactInfoItem[];
  mapIframeUrl: string;
  mapOverlayTitle: string;
  mapOverlayAddress: string[];
}

export interface ImageGalleryItem {
  id: string;
  image: string;
  imageAlt?: string;
}

export interface VideoGalleryItem {
  id: string;
  thumbnail: string;
  thumbnailAlt?: string;
  url: string; // YouTube embed URL
  title: string;
  duration: string;
}

export interface GalleryPageData {
  imageSectionTitle: string;
  imageSectionTitleHighlight?: string;
  imageSectionDesc: string;
  images: ImageGalleryItem[];
  
  videoSectionTitle: string;
  videoSectionTitleHighlight?: string;
  videoSectionDesc: string;
  videos: VideoGalleryItem[];
}

export interface PartnerLogo {
  id: string;
  image: string;
  name: string;
}

export interface PartnerCategory {
  id: string;
  title: string;
  dividerIcon?: string;
  logos: PartnerLogo[];
}

export interface PartnersPageData {
  badge: string;
  title: string;
  titleHighlight: string;
  dividerIcon?: string;
  description: string;
  categories: PartnerCategory[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContactInfo {
  icon: string;
  title: string;
  details: string[];
}

export interface FAQSidebar {
  icon: string;
  title: string;
  description: string;
  contactItems: FAQContactInfo[];
  buttonText: string;
  buttonUrl: string;
}

export interface FAQPageData {
  badge: string;
  title: string;
  dividerIcon?: string;
  description: string;
  faqs: FAQItem[];
  sidebar: FAQSidebar;
}

export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalPageData {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

export interface BlogContentSection {
  type: string; // 'text' | 'heading' | 'quote' | 'list'
  content: string | string[]; // string array for lists
}

export interface RelatedPost {
  id: string;
  image: string;
  title: string;
  date: string;
  url: string;
}

export interface BlogCategoryInfo {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export interface BlogDetailSidebarData {
  relatedPosts: RelatedPost[];
  categories: BlogCategoryInfo[];
}

export interface BlogDetailData {
  badge: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  contentSections: BlogContentSection[];
  sidebar: BlogDetailSidebarData;
}

export interface QuoteFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface QuoteFormData {
  icon: string;
  title: string;
  subtitle: string;
  buttonText: string;
  footerText: string;
}

export interface JobPosition {
  id: string; // Used as slug
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
}

export interface CareersPageData {
  overviewBadge: string;
  overviewTitle: string;
  overviewDescription: string;
  values: ValueItem[];
  positionsBadge: string;
  positionsTitle: string;
  positionsDescription: string;
  positions: JobPosition[];
}

export interface CareerDetailData {
  title: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  benefits: ValueItem[];
  stats: { icon: string; title: string; subtitle: string }[];
}

export interface NotFoundHelpfulLink {
  id: string;
  icon: string;
  title: string;
  url: string;
}

export interface NotFoundPageData {
  backgroundImage: string;
  errorCode: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  helpfulTitle: string;
  helpfulLinks: NotFoundHelpfulLink[];
}

export interface SitemapLink {
  label: string;
  url: string;
}

export interface SitemapCategory {
  title: string;
  links: SitemapLink[];
}

export interface SitemapPageData {
  title: string;
  subtitle: string;
  categories: SitemapCategory[];
  utilityTitle: string;
  utilityLinks: SitemapLink[];
}

export interface QuotePageData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: QuoteFeature[];
  image: string;
  form: QuoteFormData;
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
  viewAllText?: string;
  viewAllUrl?: string;
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
  BlogsBreadcrumb?: SectionVariant<BreadcrumbData>;
  Blogs?: SectionVariant<BlogsData>;
  Footer?: SectionVariant<FooterData>;
  AboutBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurMissionBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurVisionBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurStoryBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurAwardsBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurTeamBreadcrumb?: SectionVariant<BreadcrumbData>;
  TeamDetailBreadcrumb?: SectionVariant<BreadcrumbData>;
  WhyChooseUsBreadcrumb?: SectionVariant<BreadcrumbData>;
  OurServicesBreadcrumb?: SectionVariant<BreadcrumbData>;
  ServiceDetailBreadcrumb?: SectionVariant<BreadcrumbData>;
  WhyChooseUsPageContent?: SectionVariant<WhyChooseUsPageData>;
  ServiceDetailPageContent?: SectionVariant<ServiceDetailPageData>;
  EventsBreadcrumb?: SectionVariant<BreadcrumbData>;
  EventDetailBreadcrumb?: SectionVariant<BreadcrumbData>;
  EventsPageContent?: SectionVariant<EventsPageData>;
  EventDetailPageContent?: SectionVariant<EventDetailPageData>;
  ContactBreadcrumb?: SectionVariant<BreadcrumbData>;
  ContactPageContent?: SectionVariant<ContactPageData>;
  GalleryBreadcrumb?: SectionVariant<BreadcrumbData>;
  GalleryPageContent?: SectionVariant<GalleryPageData>;
  TestimonialsBreadcrumb?: SectionVariant<BreadcrumbData>;
  PartnersBreadcrumb?: SectionVariant<BreadcrumbData>;
  PartnersPageContent?: SectionVariant<PartnersPageData>;
  FAQBreadcrumb?: SectionVariant<BreadcrumbData>;
  FAQPageContent?: SectionVariant<FAQPageData>;
  LegalBreadcrumb?: SectionVariant<BreadcrumbData>;
  LegalPageContent?: SectionVariant<LegalPageData>;
  BlogDetailBreadcrumb?: SectionVariant<BreadcrumbData>;
  BlogDetailPageContent?: SectionVariant<BlogDetailData>;
  QuoteBreadcrumb?: SectionVariant<BreadcrumbData>;
  QuotePageContent?: SectionVariant<QuotePageData>;
  CareersBreadcrumb?: SectionVariant<BreadcrumbData>;
  CareersPageContent?: SectionVariant<CareersPageData>;
  CareerDetailBreadcrumb?: SectionVariant<BreadcrumbData>;
  CareerDetailPageContent?: SectionVariant<CareerDetailData>;
  NotFoundPageContent?: SectionVariant<NotFoundPageData>;
  SitemapBreadcrumb?: SectionVariant<BreadcrumbData>;
  SitemapPageContent?: SectionVariant<SitemapPageData>;
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
