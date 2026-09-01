import React from 'react';
import { ServiceDetailPageData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import Image from 'next/image';

export const ServiceDetailContent = ({ data }: { data?: ServiceDetailPageData }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col">
      
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
          {data.badge}
        </span>
        
        {/* Left-aligned small divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-accent opacity-40"></div>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-80">
            <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="currentColor"/>
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-6">
          {data.title}
        </h2>

        <p className="text-base text-primary font-medium leading-relaxed max-w-2xl">
          {data.description}
        </p>
      </div>

      {/* Main Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-sm">
        <Image 
          src={data.image} 
          alt={data.imageAlt || data.title}
          width={800}
          height={500}
          className="w-full h-auto object-cover max-h-96"
        />
      </div>

      {/* Overview Section */}
      <div className="mb-12">
        <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
          {data.overviewBadge}
        </span>
        
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-accent opacity-40"></div>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-80">
            <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="currentColor"/>
          </svg>
        </div>

        <p className="text-sm text-text-light leading-relaxed">
          {data.overview}
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="mb-10">
        {/* Centered Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
            {data.offerBadge}
          </span>
          <Divider icon="star" />
        </div>

        {/* Offers List */}
        <div className="flex flex-col">
          {data.offers.map((offer, index) => (
            <div 
              key={offer.id} 
              className={`py-8 flex flex-col sm:flex-row gap-4 sm:gap-6 ${
                index !== 0 ? 'border-t border-gray-100' : 'border-t border-gray-100'
              }`}
            >
              {/* Responsive short line above desc on mobile */}
              <div className="sm:hidden mb-2">
                <div className="w-4 h-0.5 bg-accent opacity-60"></div>
              </div>
              
              {/* Offer item with small line connector */}
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-0.5 bg-accent opacity-60 mt-2 hidden sm:block"></div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-gray-100"></div>
        </div>
      </div>

    </div>
  );
};
