import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { BlogDetailSidebar } from '@/components/sections/BlogDetailSidebar';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: VenueEfTemplateData = rawData as any;
  const sectionData = templateData.categories?.Venue?.sections;

  const pageContentData = sectionData?.BlogDetailPageContent?.variants?.[id];
  const breadcrumbData = sectionData?.BlogDetailBreadcrumb?.variants?.[id];

  if (!pageContentData) {
    return (
      <div className="min-h-screen flex flex-col">
        {sectionData?.TopBar && <TopBar data={sectionData.TopBar.variants?.VenueTopBar1} />}
        {sectionData?.Header && <Header data={sectionData.Header.variants?.VenueHeader1} />}
        <div className="flex-grow flex items-center justify-center bg-gray-50 flex-col gap-4">
          <h1 className="text-3xl font-bold text-primary">Blog Not Found</h1>
          <p className="text-text-light">The blog post you are looking for does not exist.</p>
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
      
      <section className="py-12 lg:py-20 bg-white relative">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-[65%]">
              <BlogDetailContent data={pageContentData} />
            </div>
            
            {/* The sticky sidebar */}
            <div className="w-full lg:w-[35%] lg:sticky lg:top-24 self-start">
              <BlogDetailSidebar data={pageContentData.sidebar} />
            </div>
          </div>
          
        </div>
      </section>

      <Footer data={sectionData?.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
