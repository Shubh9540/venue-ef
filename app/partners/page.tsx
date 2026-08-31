import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { Partners } from '@/components/sections/Partners';

export const dynamic = 'force-dynamic';

export default function PartnersPage() {
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
      
      <Breadcrumb data={sectionData.PartnersBreadcrumb?.variants?.VenuePartnersBreadcrumb1} />
      
      <Partners data={sectionData.PartnersPageContent?.variants?.VenuePartnersPage1} />

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
