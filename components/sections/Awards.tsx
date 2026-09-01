import React from 'react';
import Image from 'next/image';
import { AwardsData } from '@/types/templates.types';
import { BsStars } from 'react-icons/bs';

export const Awards = ({ data }: { data?: AwardsData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fdfbfb] py-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#7b2440] text-[13px] font-bold tracking-[0.2em] uppercase">
                {data.badge}
              </span>
            </div>
            
            {/* Divider under badge */}
            <div className="flex items-center mb-6">
              <div className="h-px bg-[#7b2440] w-12" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#7b2440] ml-[-1px]" />
            </div>

            {/* Title */}
            <h2 className="text-[44px] md:text-[52px] lg:text-[64px] font-heading text-[#2d2228] leading-[1.1] mb-6">
              {data.title}<br />
              <span className="text-[#7b2440] italic pr-2 font-medium">{data.titleHighlight}</span>
            </h2>

            {/* Title Divider */}
            <div className="h-[2px] bg-[#7b2440] w-12 mb-6" />

            {/* Description */}
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Stats Box (Right Side) */}
          <div className="flex items-center">
            {/* Vertical Divider with Sparkle */}
            <div className="relative border-l border-gray-300 h-24 mr-8 lg:mr-12 hidden md:block">
              <div className="absolute top-1/2 -left-[9px] -translate-y-1/2 bg-[#fdfbfb] text-[#7b2440] py-8">
                <BsStars className="text-[16px]" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[56px] lg:text-[72px] font-heading text-[#7b2440] leading-none mb-2">
                {data.statsValue}
              </span>
              <span className="text-[12px] font-bold text-gray-500 tracking-[0.2em] uppercase">
                {data.statsLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 lg:gap-y-12">
          {data.items.map((item) => (
            <div key={item.id} className="flex items-center w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] group">
              
              {/* Trophy Image */}
              <div className="w-[110px] sm:w-[130px] shrink-0 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="relative w-full aspect-[3/4]">
                  <Image 
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    fill
                    className="object-contain"
                    sizes="130px"
                  />
                </div>
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col border-l border-gray-200 pl-6 py-8 ml-4">
                <div className="text-[#7b2440] font-bold text-[16px] mb-2">{item.year}</div>
                <div className="w-6 h-px bg-[#7b2440] mb-4"></div>
                <h4 className="text-[18px] lg:text-[20px] text-[#2d2228] font-heading leading-snug mb-3 pr-4">
                  {item.title}
                </h4>
                <span className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.1em]">
                  {item.organization}
                </span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
