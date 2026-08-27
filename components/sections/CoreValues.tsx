import React from 'react';
import { CoreValuesData } from '@/types/templates.types';
import { 
  FaAward, 
  FaLightbulb, 
  FaShieldAlt,
  FaRegHeart,
  FaUsers
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward': return <FaAward className="text-xl" />;
    case 'FaLightbulb': return <FaLightbulb className="text-xl" />;
    case 'FaUsers': return <FaUsers className="text-xl" />;
    case 'FaShieldAlt': return <FaShieldAlt className="text-xl" />;
    case 'FaRegHeart': return <FaRegHeart className="text-xl" />;
    default: return null;
  }
};

export const CoreValues = ({ data }: { data?: CoreValuesData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#faf5f7] overflow-hidden border-y border-rose-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 sm:gap-y-12">
          {data.items.map((item, index) => {
            const isLast = index === data.items.length - 1;
            return (
              <div key={item.id} className={`relative flex items-start gap-4 px-2 lg:px-6 ${!isLast ? 'lg:border-r border-rose-200/60' : ''}`}>
                {!isLast && <div className="hidden lg:block absolute right-[-3px] top-0 w-1.5 h-1.5 bg-rose-300 rotate-45" />}
                <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-full bg-white border border-[#99254d]/30 flex items-center justify-center text-[#99254d] shadow-sm">
                  {renderIcon(item.icon)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#99254d] uppercase tracking-wider mb-2 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed pr-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
