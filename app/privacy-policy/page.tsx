import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { LegalPageContent } from '@/components/sections/LegalPageContent';

export const dynamic = 'force-dynamic';

export default function PrivacyPolicyPage() {
  const templateData: VenueEfTemplateData = rawData as any;
  const sectionData = templateData.categories?.Venue?.sections;

  if (!sectionData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.LegalBreadcrumb?.variants?.VenuePrivacyBreadcrumb1} />
      
      <LegalPageContent data={sectionData.LegalPageContent?.variants?.VenuePrivacyPage} />

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
