import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { SitemapPageContent } from '@/components/sections/SitemapPageContent';

export const dynamic = 'force-dynamic';

export default function SitemapPage() {
  const templateData: VenueEfTemplateData = rawData as any;
  const sectionData = templateData.categories?.Venue?.sections;

  if (!sectionData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.SitemapBreadcrumb?.variants?.VenueSitemapBreadcrumb1} />
      
      <SitemapPageContent data={sectionData.SitemapPageContent?.variants?.VenueSitemap1} />

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
