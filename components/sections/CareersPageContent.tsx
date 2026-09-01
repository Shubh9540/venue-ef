import React from 'react';
import Link from 'next/link';
import { CareersPageData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import { 
  FaUsers, 
  FaLightbulb, 
  FaChartLine, 
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaArrowRight,
  FaGift
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaHeart': return <FaHeart />;
    case 'FaGift': return <FaGift />;
    default: return <FaStar />;
  }
};

export const CareersPageContent = ({ data }: { data?: CareersPageData }) => {
  if (!data) return null;

  return (
    <section className="bg-white">
      
      {/* Overview Section */}
      <div className="py-8 text-center max-w-[1250px] mx-auto px-4 sm:px-6">
        
        {/* Badge & Standard Divider */}
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-center">
            {data.overviewBadge}
          </span>
          <Divider icon="star" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary mb-6">
          {data.overviewTitle}
        </h2>
        <p className="text-text-light text-base sm:text-lg leading-relaxed max-w-[800px] mx-auto">
          {data.overviewDescription}
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 mt-12 border-t border-b border-gray-100 py-8">
          {data.values.map((val) => (
            <div key={val.id} className="flex flex-col items-center text-center p-4 lg:border-r lg:border-gray-100 last:border-r-0">
              <div className="w-16 h-16 rounded-full bg-[#f8eef1] text-[#861d43] flex items-center justify-center text-2xl mb-6 transition-transform hover:scale-110 duration-300">
                {renderIcon(val.icon)}
              </div>
              <h3 className="text-lg font-bold text-[#861d43] mb-3">{val.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="bg-[#fcfaf9] py-8 px-4 sm:px-6">
        <div className="max-w-[1250px] mx-auto">
          
          <div className="text-center mb-16">
            {/* Badge & Standard Divider */}
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-center">
                {data.positionsBadge}
              </span>
              <Divider icon="star" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-primary text-primary mb-4">
              {data.positionsTitle}
            </h2>
            <p className="text-text-light max-w-[600px] mx-auto">
              {data.positionsDescription}
            </p>
          </div>

          {/* Table Header (Desktop only) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 text-[#861d43] text-xs font-bold uppercase tracking-wider mb-4 px-6">
            <div className="col-span-5"></div>
            <div className="col-span-2">Department</div>
            <div className="col-span-2">Location</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-2"></div>
          </div>

          {/* Positions List */}
          <div className="space-y-4">
            {data.positions.map((pos) => (
              <div 
                key={pos.id} 
                className="bg-white rounded-xl p-6 lg:px-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-6 lg:gap-4 group"
              >
                {/* Title & Description */}
                <div className="col-span-5">
                  <h3 className="text-xl font-bold text-[#861d43] mb-2">{pos.title}</h3>
                  <p className="text-sm text-text-light line-clamp-2">{pos.description}</p>
                </div>

                {/* Department */}
                <div className="col-span-2 flex items-center gap-2 text-sm text-primary font-medium">
                  <FaCalendarAlt className="text-[#861d43] opacity-60" />
                  <span>{pos.department}</span>
                </div>

                {/* Location */}
                <div className="col-span-2 flex items-center gap-2 text-sm text-primary font-medium">
                  <FaMapMarkerAlt className="text-[#861d43] opacity-60" />
                  <span>{pos.location}</span>
                </div>

                {/* Type */}
                <div className="col-span-1 flex items-center gap-2 text-sm text-primary font-medium">
                  <FaClock className="text-[#861d43] opacity-60" />
                  <span>{pos.type}</span>
                </div>

                {/* Action */}
                <div className="col-span-2 flex justify-start lg:justify-end">
                  <Link 
                    href={`/careers/${pos.id}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#861d43] text-[#861d43] hover:bg-[#861d43] hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-md transition-colors w-full lg:w-auto"
                  >
                    <span>Apply Now</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
