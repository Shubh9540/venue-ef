import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { GalleryImageSection } from '@/components/sections/GalleryImageSection';
import { GalleryVideoSection } from '@/components/sections/GalleryVideoSection';

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.GalleryBreadcrumb?.variants?.VenueGalleryBreadcrumb1} />
      
      <div className="flex-grow">
        <section className="py-8 bg-white">
          <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryImageSection data={sectionData.GalleryPageContent?.variants?.VenueGalleryPage1} />
            
            {/* Subtle Divider */}
            <div className="w-full h-px bg-gray-100 mb-20"></div>
            
            <GalleryVideoSection data={sectionData.GalleryPageContent?.variants?.VenueGalleryPage1} />
          </div>
        </section>
      </div>
      
      <div className="mt-auto">
        <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
      </div>
    </main>
  );
}
