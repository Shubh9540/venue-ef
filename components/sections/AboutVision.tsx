import React from 'react';
import Image from 'next/image';
import { AboutMissionData } from '@/types/templates.types';
import { FaRegLightbulb, FaUserTie, FaRegStar } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegLightbulb': return <FaRegLightbulb className="text-2xl" />;
    case 'FaUserTie': return <FaUserTie className="text-2xl" />;
    case 'FaRegStar': return <FaRegStar className="text-2xl" />;
    default: return null;
  }
};

export const AboutVision = ({ data }: { data?: AboutMissionData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fdfbfb] py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            
            {/* Badge */}
            <div className="mb-6">
              <span className="block text-[#7b2440] text-[13px] font-bold tracking-[0.2em] uppercase mb-3">
                {data.badge}
              </span>
              <span className="block w-10 h-[2px] bg-[#7b2440]" />
            </div>

            {/* Title */}
            <h2 className="text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-heading text-[#2d2228] leading-[1.1] mb-6">
              {data.title}<br />
              <span className="text-[#7b2440] italic font-medium tracking-wide pr-2">{data.titleHighlight}</span>
            </h2>

            {/* Simple Maroon Divider */}
            <div className="mb-8">
              <div className="h-[2px] bg-[#7b2440] w-14" />
            </div>

            {/* Descriptions */}
            <div className="space-y-6 mb-12 text-gray-700 text-[15px] sm:text-base leading-relaxed max-w-lg">
              {data.description1 && <p>{data.description1}</p>}
              {data.description2 && <p>{data.description2}</p>}
            </div>
            
            {/* Features (3 boxes on the left side) */}
            <div className="grid grid-cols-3 divide-x divide-rose-200/60 pt-4">
              {data.features.map((feature, index) => (
                <div key={feature.id} className={`flex flex-col items-center text-center ${index === 0 ? 'pr-6' : index === 2 ? 'pl-6' : 'px-6'}`}>
                  <div className="text-[#7b2440] mb-4">
                    {renderIcon(feature.icon)}
                  </div>
                  <h3 className="text-[10px] sm:text-[11px] font-bold text-[#7b2440] uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] text-gray-600 leading-tight">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[750px]">
            <div className="absolute inset-0 rounded-tl-[80px] lg:rounded-tl-[120px] rounded-bl-[24px] lg:rounded-bl-[40px] overflow-hidden shadow-xl">
              <Image 
                src={data.image}
                alt={data.imageAlt || 'Our Vision'}
                fill
                className="object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
