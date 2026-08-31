import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { WhyChooseUsPageContent } from '@/components/sections/WhyChooseUsPageContent';

export const dynamic = 'force-dynamic';

export default async function WhyChooseUsPage() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      {/* Breadcrumb matching the global design */}
      <Breadcrumb data={sectionData.WhyChooseUsBreadcrumb?.variants?.VenueWhyChooseUsBreadcrumb1} />
      
      {/* The main section matching the design provided */}
      <WhyChooseUsPageContent data={sectionData.WhyChooseUsPageContent?.variants?.VenueWhyChooseUsPage1} />
      
      {/* Push footer to bottom if content is short */}
      <div className="mt-auto">
        <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
      </div>
    </main>
  );
}
