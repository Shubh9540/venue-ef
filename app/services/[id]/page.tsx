import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { ServiceDetailSidebar } from '@/components/sections/ServiceDetailSidebar';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  // Fetch data specific to this id, fallback to a default or 404
  const breadcrumbData = sectionData.ServiceDetailBreadcrumb?.variants?.[id];
  const pageContentData = sectionData.ServiceDetailPageContent?.variants?.[id];

  if (!pageContentData) {
    return (
      <main className="bg-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Service Not Found</h1>
        <p className="text-text-light">The service you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      {breadcrumbData && (
        <Breadcrumb data={breadcrumbData} />
      )}
      
      <div className="flex-grow">
        <section className="py-8 bg-white">
          <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              
              <div className="w-full lg:w-[65%]">
                <ServiceDetailContent data={pageContentData} />
              </div>
              
              <div className="w-full lg:w-[35%] sticky top-24 self-start">
                <ServiceDetailSidebar data={pageContentData.sidebar} />
              </div>

            </div>
          </div>
        </section>
      </div>
      
      <div className="mt-auto">
        <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
      </div>
    </main>
  );
}
