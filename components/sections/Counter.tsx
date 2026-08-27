import React from 'react';
import { CounterData } from '@/types/templates.types';
import { FaRegCalendarAlt, FaRegHeart, FaUsers, FaGlobeAmericas } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  const iconClass = "w-8 h-8 md:w-[38px] md:h-[38px] text-[#9b3353] opacity-85";
  switch (iconName) {
    case 'FaUserFriends':
    case 'FaUsers':
      return <FaUsers className={iconClass} />;
    case 'FaCalendarAlt':
    case 'FaRegCalendarAlt':
      return <FaRegCalendarAlt className={iconClass} />;
    case 'FaGlobe':
    case 'FaGlobeAmericas':
      return <FaGlobeAmericas className={iconClass} />;
    case 'FaRegHeart':
      return <FaRegHeart className={iconClass} />;
    default:
      return null;
  }
};

export const Counter = ({ data }: { data?: CounterData }) => {
  if (!data || !data.stats) return null;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Main Counter Container */}
        <div className="relative bg-[#fef6f8] rounded-2xl p-8 lg:py-12 lg:px-6 overflow-hidden">
          
          {/* Decorative Corner SVG - Right Only (3 Arc lines) */}
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] text-[#db9fb0] pointer-events-none opacity-40 translate-x-1/4 translate-y-1/4">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="135" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:flex lg:flex-nowrap justify-between items-center w-full gap-y-8 lg:gap-0">
            {data.stats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:w-auto"
                >
                  {/* Icon */}
                  <div className="shrink-0 flex items-center justify-center">
                    {renderIcon(stat.icon)}
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-2 sm:mt-0">
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] text-[#1c1218] font-heading mb-0.5 tracking-normal" style={{ fontWeight: 500 }}>
                      {stat.value}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] font-medium text-gray-700 mb-2 tracking-wide">
                      {stat.label}
                    </p>
                    <span className="block w-8 sm:w-10 h-[1.5px] bg-[#d37d95]/70" />
                  </div>
                </div>

                {/* Divider Line */}
                {index !== data.stats.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-12 bg-[#db9fb0]/40 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
