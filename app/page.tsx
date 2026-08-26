import React from 'react';
import rawData from '@/data/templates.json';
import { VenueEfTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSlider } from '@/components/sections/HeroSlider';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Services } from '@/components/sections/Services';
import { OurValues } from '@/components/sections/OurValues';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Blogs } from '@/components/sections/Blogs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;
  const globalUI = templateData?.common?.globalUI;

  if (!sectionData) return <div>{globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      <HeroSlider data={sectionData.Hero?.variants?.VenueHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.VenueAboutUs1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.VenueWhyChooseUs1} />
      <Services data={sectionData.Services?.variants?.VenueServices1} />
      <OurValues data={sectionData.OurValues?.variants?.VenueOurValues1} />
      <Testimonials data={sectionData.Testimonials?.variants?.VenueTestimonials1} />
      <CTA data={sectionData.CTA?.variants?.VenueCTA1} />
      <Blogs data={sectionData.Blogs?.variants?.VenueBlogs1} />
      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
