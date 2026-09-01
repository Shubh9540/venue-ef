import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { CareerDetailPageContent } from '@/components/sections/CareerDetailPageContent';

export const dynamic = 'force-dynamic';

export default async function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: VenueEfTemplateData = rawData as any;
  const sectionData = templateData.categories?.Venue?.sections;

  if (!sectionData) return null;

  // We map the dynamic route ID to the JSON variant key.
  // E.g., URL /careers/frontend-developer -> key "frontend-developer"
  const breadcrumbData = sectionData.CareerDetailBreadcrumb?.variants?.[id];
  const pageData = sectionData.CareerDetailPageContent?.variants?.[id];

  if (!pageData) {
    return (
      <main className="bg-white min-h-screen flex flex-col">
        <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
        <Header data={sectionData.Header?.variants?.VenueHeader1} />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-[#861d43] mb-4">Position Not Found</h1>
          <p className="text-text-light">The job position you are looking for does not exist or has been closed.</p>
        </div>
        <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
      </main>
    );
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <CareerDetailPageContent data={pageData} />

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
