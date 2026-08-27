import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { 
  FaGem, 
  FaUsers, 
  FaClipboardList, 
  FaAward, 
  FaRegCalendarAlt, 
  FaRegSmile, 
  FaMapMarkerAlt, 
  FaUsersCog, 
  FaRegHeart, 
  FaHeart 
} from 'react-icons/fa';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaGem':
      return <FaGem className="text-xl" />;
    case 'FaUsers':
      return <FaUsers className="text-xl" />;
    case 'FaClipboardList':
      return <FaClipboardList className="text-xl" />;
    case 'FaAward':
      return <FaAward className="text-xl" />;
    case 'FaRegCalendarAlt':
      return <FaRegCalendarAlt className="text-3xl text-primary" />;
    case 'FaRegSmile':
      return <FaRegSmile className="text-3xl text-primary" />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt className="text-3xl text-primary" />;
    case 'FaUsersCog':
      return <FaUsersCog className="text-3xl text-primary" />;
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-base shrink-0" />;
    case 'FaHeart':
      return <FaHeart className="text-accent text-base shrink-0" />;
    default:
      return null;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-[#fcf0f4] border border-[#f3d3df] rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          
          {/* Header Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center mb-2">
            {data.title}
          </h2>

          {/* Decorative Divider */}
          {data.dividerIcon && (
            <div className="flex items-center justify-center gap-2 mb-8 lg:mb-12">
              <div className="w-12 sm:w-16 h-[1.5px] bg-accent rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="flex items-center justify-center text-accent text-base">
                {renderIcon(data.dividerIcon)}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="w-12 sm:w-16 h-[1.5px] bg-accent rounded-full" />
            </div>
          )}

          {/* 50 / 50 Equal Split Grid with Taller Center Divider */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
            
            {/* Left 4 Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 items-stretch lg:pr-6 relative lg:border-r-2 lg:border-[#d9a8be]">
              {data.features.map((item, idx) => (
                <div 
                  key={item.id} 
                  className={`flex flex-col items-center text-center px-2 py-2 relative ${
                    idx !== data.features.length - 1 ? 'sm:after:content-[\'\'] sm:after:absolute sm:after:right-0 sm:after:top-3 sm:after:bottom-3 sm:after:w-px sm:after:bg-[#edd0dc]' : ''
                  }`}
                >
                  {/* Round Icon Badge */}
                  <div className="h-14 flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                      {renderIcon(item.icon)}
                    </div>
                  </div>
                  
                  {/* Feature Title */}
                  <div className="h-10 flex items-center justify-center mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-primary leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Feature Description */}
                  <p className="text-[11px] sm:text-xs text-text-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right 4 Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 items-stretch lg:pl-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#edd0dc]">
              {data.stats.map((item, idx) => (
                <div 
                  key={item.id} 
                  className={`flex flex-col items-center text-center px-2 py-2 relative ${
                    idx !== data.stats.length - 1 ? 'sm:after:content-[\'\'] sm:after:absolute sm:after:right-0 sm:after:top-3 sm:after:bottom-3 sm:after:w-px sm:after:bg-[#edd0dc]' : ''
                  }`}
                >
                  {/* Stat Icon */}
                  <div className="h-14 flex items-center justify-center mb-3">
                    {renderIcon(item.icon)}
                  </div>

                  {/* Number Value — Clean, modern sans-serif */}
                  <div className="h-10 flex items-center justify-center mb-1">
                    <span className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-primary tracking-tight">
                      {item.value}
                    </span>
                  </div>

                  {/* Stat Label & Subtitle */}
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-primary leading-tight mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-text-light leading-tight">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
