import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { FAQ } from '@/components/sections/FAQ';

export const dynamic = 'force-dynamic';

export default function FAQPage() {
  const templateData: VenueEfTemplateData = rawData as any;
  const commonData = templateData.common;
  const sectionData = templateData.categories?.Venue?.sections;

  if (!sectionData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.FAQBreadcrumb?.variants?.VenueFAQBreadcrumb1} />
      
      <FAQ data={sectionData.FAQPageContent?.variants?.VenueFAQPage1} />

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
