import React from 'react';
import { OurValuesData } from '@/types/templates.types';
import { 
  FaAward, 
  FaLightbulb, 
  FaHandshake, 
  FaUsers, 
  FaClock, 
  FaShieldAlt,
  FaRegHeart,
  FaHeart
} from 'react-icons/fa';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaAward':
      return <FaAward className="text-xl" />;
    case 'FaLightbulb':
      return <FaLightbulb className="text-xl" />;
    case 'FaHandshake':
      return <FaHandshake className="text-xl" />;
    case 'FaUsers':
      return <FaUsers className="text-xl" />;
    case 'FaClock':
      return <FaClock className="text-xl" />;
    case 'FaShieldAlt':
      return <FaShieldAlt className="text-xl" />;
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-base shrink-0" />;
    case 'FaHeart':
      return <FaHeart className="text-accent text-base shrink-0" />;
    default:
      return null;
  }
};

export const OurValues = ({ data }: { data?: OurValuesData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="block w-10 sm:w-14 h-0.5 bg-accent/70 shrink-0" />
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            {data.badge}
          </span>
          <span className="block w-10 sm:w-14 h-0.5 bg-accent/70 shrink-0" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a0612] text-center mb-3">
          {data.title}{' '}
          <span className="text-accent italic font-serif font-normal">{data.titleHighlight}</span>
        </h2>

        {/* Standard Heart Divider */}
        {data.dividerIcon && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 sm:w-16 h-[1.5px] bg-accent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="flex items-center justify-center text-accent text-base">
              {renderIcon(data.dividerIcon)}
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="w-12 sm:w-16 h-[1.5px] bg-accent rounded-full" />
          </div>
        )}

        {/* Subtitle Description */}
        <p className="text-text-light text-sm sm:text-base text-center max-w-xl mx-auto mb-12 lg:mb-16 leading-relaxed">
          {data.description}
        </p>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => {
            const isTopRow = index < 3;
            const isRightBorder = (index % 3) !== 2;

            return (
              <div 
                key={item.id} 
                className={`p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center group ${
                  isTopRow ? 'lg:border-b border-[#f2dbe4]' : ''
                } ${
                  isRightBorder ? 'lg:border-r border-[#f2dbe4]' : ''
                }`}
              >
                {/* Circular Badge */}
                <div className="w-14 h-14 rounded-full bg-[#fdeaf1] border border-[#f5d0e0] flex items-center justify-center mb-4 text-accent text-2xl shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {renderIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-text-light leading-relaxed max-w-[280px] mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
