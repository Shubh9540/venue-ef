import React from 'react';
import Image from 'next/image';
import { PartnersPageData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import { FaRegHeart } from 'react-icons/fa';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-base shrink-0" />;
    default:
      return null;
  }
};

export const Partners = ({ data }: { data?: PartnersPageData }) => {
  if (!data) return null;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              {data.badge}
            </span>
          </div>
          <Divider icon={data.dividerIcon || 'star'} className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-4">
            {data.title}{' '}
            <span className="text-[#4a4a4a] font-normal">{data.titleHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-text-light max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Partners Categories */}
        <div className="space-y-12 lg:space-y-16">
          {data.categories?.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-sm sm:text-base font-bold tracking-[0.2em] text-[#4a152e] uppercase mb-3">
                  {category.title}
                </h3>
                {category.dividerIcon && (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 sm:w-12 h-[1px] bg-[#f3d9e3]" />
                    <div className="text-[#f3d9e3] text-[10px]">
                      {renderIcon(category.dividerIcon) || '✦'}
                    </div>
                    <div className="w-8 sm:w-12 h-[1px] bg-[#f3d9e3]" />
                  </div>
                )}
              </div>

              {/* Logos Grid */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-[1200px]">
                {category.logos.map((logo) => (
                  <div 
                    key={logo.id} 
                    className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[14%] shrink-0 h-24 sm:h-28 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-[60%] max-w-[80%]"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
