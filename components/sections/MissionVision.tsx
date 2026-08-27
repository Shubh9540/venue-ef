import React from 'react';
import Image from 'next/image';
import { MissionVisionData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import { FaRegEye, FaBullseye } from 'react-icons/fa';

const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'FaRegEye': return <FaRegEye className={className} />;
    case 'FaBullseye': return <FaBullseye className={className} />;
    default: return null;
  }
};

export const MissionVision = ({ data }: { data?: MissionVisionData }) => {
  if (!data) return null;

  // Helper to highlight specific words dynamically
  const renderTitle = (title: string, highlightWords: string[]) => {
    let result = title;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span class="text-[#99254d]">$1</span>');
    });
    return <h2 className="text-4xl lg:text-[44px] font-heading text-[#2d2228] mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <section className="relative py-8 bg-[#fef6f8] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-rose-200/50 rounded-full translate-x-1/2 -translate-y-1/3 opacity-60" />
      <div className="absolute top-0 right-10 w-[300px] h-[300px] border border-rose-200/50 rounded-full translate-x-1/2 -translate-y-1/3 opacity-60" />
      
      <div className="absolute top-20 left-0 w-[250px] h-[250px] border border-rose-200/50 rounded-full -translate-x-1/2 opacity-60" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="block w-10 sm:w-14 h-0.5 bg-accent/70 shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              {data.badge}
            </span>
            <span className="block w-10 sm:w-14 h-0.5 bg-accent/70 shrink-0" />
          </div>
          
          {renderTitle(data.title, data.highlightWords)}
          
          <div className="flex justify-center mb-5">
            <Divider icon="heart" />
          </div>
          
          <p className="text-gray-600 font-medium text-[13px] sm:text-[15px]">
            {data.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Vision Card */}
          <div className="bg-[#351125] rounded-[32px] p-6 lg:p-8 flex flex-col xl:flex-row gap-6 lg:gap-8 h-full">
            {/* Text Side */}
            <div className="flex-1 text-white flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 shrink-0 rounded-full border border-[#99254d] flex items-center justify-center">
                  {renderIcon(data.visionCard.icon, "text-[#e35985] text-xl")}
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#db9fb0] uppercase">
                  {data.visionCard.badge}
                </span>
              </div>
              <h3 className="text-[26px] lg:text-[32px] font-heading leading-snug mb-5 text-white">
                {data.visionCard.title}
              </h3>
              <p className="text-[#db9fb0]/80 text-[13px] leading-relaxed">
                {data.visionCard.description}
              </p>
            </div>
            {/* Image Side */}
            <div className="w-full xl:w-[220px] 2xl:w-[240px] shrink-0 h-[250px] sm:h-[350px] xl:h-full xl:min-h-[300px] relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={data.visionCard.image}
                alt={data.visionCard.imageAlt || 'Vision'}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#fcebf0] rounded-[32px] p-6 lg:p-8 flex flex-col xl:flex-row gap-6 lg:gap-8 h-full">
            {/* Text Side */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 shrink-0 rounded-full border border-[#99254d]/30 bg-[#f8dce4] flex items-center justify-center">
                  {renderIcon(data.missionCard.icon, "text-[#99254d] text-xl")}
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#99254d] uppercase">
                  {data.missionCard.badge}
                </span>
                <span className="hidden sm:block w-8 h-px bg-[#99254d]/40" />
              </div>
              <h3 className="text-[26px] lg:text-[32px] font-heading leading-snug mb-5 text-[#2d2228]">
                {data.missionCard.title}
              </h3>
              <p className="text-gray-700 text-[13px] leading-relaxed">
                {data.missionCard.description}
              </p>
            </div>
            {/* Image Side */}
            <div className="w-full xl:w-[220px] 2xl:w-[240px] shrink-0 h-[250px] sm:h-[350px] xl:h-full xl:min-h-[300px] relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={data.missionCard.image}
                alt={data.missionCard.imageAlt || 'Mission'}
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
