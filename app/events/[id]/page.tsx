import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { EventDetailContent } from '@/components/sections/EventDetailContent';
import { EventDetailSidebar } from '@/components/sections/EventDetailSidebar';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: VenueEfTemplateData = rawData as any;
  const commonData = templateData.common;
  const sectionData = templateData.categories?.Venue?.sections;

  const pageContentData = sectionData?.EventDetailPageContent?.variants?.[id];
  const breadcrumbData = sectionData?.EventDetailBreadcrumb?.variants?.[id];

  if (!pageContentData) {
    return (
      <div className="min-h-screen flex flex-col">
        {sectionData?.TopBar && <TopBar data={sectionData.TopBar.variants?.VenueTopBar1} />}
        {sectionData?.Header && <Header data={sectionData.Header.variants?.VenueHeader1} />}
        <div className="flex-grow flex items-center justify-center bg-gray-50 flex-col gap-4">
          <h1 className="text-3xl font-bold text-primary">Event Not Found</h1>
          <p className="text-text-light">The event you are looking for does not exist.</p>
        </div>
        {sectionData?.Footer && <Footer data={sectionData.Footer.variants?.VenueFooter1} />}
      </div>
    );
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData?.Header?.variants?.VenueHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <Link 
            href="/events"
            className="inline-flex items-center text-accent hover:text-primary transition-colors font-semibold mb-8 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-[65%]">
              <EventDetailContent data={pageContentData} />
            </div>
            
            <div className="w-full lg:w-[35%] sticky top-24 self-start">
              <EventDetailSidebar data={pageContentData.sidebar} />
            </div>
          </div>
          
        </div>
      </section>

      <Footer data={sectionData?.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
