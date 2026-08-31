import React from 'react';
import { EventDetailPageData } from '@/types/templates.types';
import Image from 'next/image';

export const EventDetailContent = ({ data }: { data?: EventDetailPageData }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col">
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-8">
        {data.title}
      </h2>

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

      {/* About Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-primary text-primary mb-2">
          {data.aboutTitle}
        </h3>
        
        {/* Short divider */}
        <div className="w-12 h-0.5 bg-accent mb-6"></div>

        <div className="flex flex-col gap-4 text-sm sm:text-base text-text-light leading-relaxed">
          <p>{data.aboutDesc1}</p>
          <p>{data.aboutDesc2}</p>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-primary text-primary mb-2">
          {data.learnTitle}
        </h3>
        
        {/* Short divider */}
        <div className="w-12 h-0.5 bg-accent mb-6"></div>

        <div className="flex flex-col gap-4">
          {data.learnPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Red vertical bar */}
              <div className="w-1 h-6 bg-accent shrink-0 mt-0.5"></div>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Event Schedule Section */}
      <div>
        <h3 className="text-2xl font-primary text-primary mb-2">
          {data.scheduleTitle}
        </h3>
        
        {/* Short divider */}
        <div className="w-12 h-0.5 bg-accent mb-8"></div>

        <div className="flex flex-col">
          {data.schedule.map((item, index) => (
            <div key={item.id} className="flex gap-6 sm:gap-10 relative">
              
              {/* Timeline Connector (Left side on mobile, middle on desktop) */}
              {/* We'll use a standard layout: Time (fixed width) | Line/Dot | Content */}
              
              {/* Time */}
              <div className="w-24 sm:w-32 shrink-0 pt-1 text-right hidden sm:block">
                <span className="text-sm font-bold text-accent whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              
              {/* Dot & Line Container */}
              <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-accent relative z-10 mt-1.5"></div>
                {/* Vertical Line */}
                {index !== data.schedule.length - 1 && (
                  <div className="w-px h-full bg-gray-200 absolute top-3"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-10 flex-1">
                {/* Show time on mobile above title */}
                <div className="sm:hidden mb-1">
                  <span className="text-sm font-bold text-accent">
                    {item.time}
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-text-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
