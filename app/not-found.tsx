import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundPageContent } from '@/components/sections/NotFoundPageContent';

export default function NotFound() {
  const templateData: VenueEfTemplateData = rawData as any;
  const sectionData = templateData.categories?.Venue?.sections;

  if (!sectionData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <NotFoundPageContent data={sectionData.NotFoundPageContent?.variants?.VenueNotFound1} />

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
