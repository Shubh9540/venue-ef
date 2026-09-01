import React from 'react';
import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { Blogs } from '@/components/sections/Blogs';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: VenueEfTemplateData = rawData as any;
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
      
      <Breadcrumb data={sectionData.BlogsBreadcrumb?.variants?.VenueBlogsBreadcrumb1} />
      
      {/* We reuse the Blogs component from the homepage as requested, but hide the button */}
      <div className="py-8">
        <Blogs 
          data={sectionData.Blogs?.variants?.VenueBlogs1 ? {
            ...sectionData.Blogs.variants.VenueBlogs1,
            viewAllUrl: undefined,
            viewAllText: undefined
          } : undefined} 
        />
      </div>

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
