import React from 'react';
import { VenueEfTemplateData, EventCard } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { Divider } from '@/components/ui/Divider';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

export const dynamic = 'force-dynamic';

export default function EventsPage() {
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
      
      <Breadcrumb data={sectionData.EventsBreadcrumb?.variants?.VenueEventsBreadcrumb1} />
      
      <section className="py-8 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-4">
              {sectionData.EventsPageContent?.variants?.VenueEventsPage1?.badge}
            </span>
            <Divider icon={sectionData.EventsPageContent?.variants?.VenueEventsPage1?.dividerIcon || 'star'} className="mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-6">
              {sectionData.EventsPageContent?.variants?.VenueEventsPage1?.title}{' '}
              <span className="font-serif italic font-normal">{sectionData.EventsPageContent?.variants?.VenueEventsPage1?.titleHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-text-light max-w-3xl leading-relaxed">
              {sectionData.EventsPageContent?.variants?.VenueEventsPage1?.description}
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {sectionData.EventsPageContent?.variants?.VenueEventsPage1?.items.map((item: EventCard) => (
              <Link
                key={item.id}
                href={`/events/${item.id}`}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full sm:w-[40%] h-48 sm:h-auto shrink-0">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-primary text-primary mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Short line under title */}
                  <div className="w-8 h-0.5 bg-accent opacity-60 mb-3"></div>

                  <p className="text-xs sm:text-sm text-text-light leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex justify-end">
                    <span className="text-primary group-hover:text-accent transition-colors duration-300">
                      <MdArrowForward className="text-xl" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Banner */}
          {sectionData.EventsPageContent?.variants?.VenueEventsPage1?.cta && (
            <div className="bg-[#4a152e] rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
              
              {/* Subtle background lines/curves could go here */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
                  <path d="M0 100 C 20 0 50 0 100 100 Z" opacity="0.1" />
                </svg>
              </div>

              <div className="flex items-center gap-6 relative z-10 text-center lg:text-left w-full lg:w-auto">
                <div className="hidden lg:flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rose-200">
                    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-primary text-white mb-2">
                    {sectionData.EventsPageContent.variants.VenueEventsPage1.cta.title}
                  </h3>
                  <p className="text-rose-200/90 text-sm sm:text-base">
                    {sectionData.EventsPageContent.variants.VenueEventsPage1.cta.subtitle}
                  </p>
                </div>
              </div>

              <Link
                href={sectionData.EventsPageContent.variants.VenueEventsPage1.cta.buttonUrl}
                className="relative z-10 shrink-0 bg-white hover:bg-[#fdfaf6] text-primary font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 rounded-md inline-flex items-center gap-3 transition-colors duration-300"
              >
                {sectionData.EventsPageContent.variants.VenueEventsPage1.cta.buttonText} <MdArrowForward className="text-lg" />
              </Link>

            </div>
          )}

        </div>
      </section>

      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
