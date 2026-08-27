import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServicesData } from '@/types/templates.types';
import { 
  FaRing, 
  FaGem, 
  FaConciergeBell, 
  FaBirthdayCake, 
  FaUsers, 
  FaBriefcase, 
  FaRocket, 
  FaGlassCheers,
  FaRegHeart,
  FaHeart
} from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaRing':
      return <FaRing className="text-lg" />;
    case 'FaGem':
      return <FaGem className="text-lg" />;
    case 'FaConciergeBell':
      return <FaConciergeBell className="text-lg" />;
    case 'FaBirthdayCake':
      return <FaBirthdayCake className="text-lg" />;
    case 'FaUsers':
      return <FaUsers className="text-lg" />;
    case 'FaBriefcase':
      return <FaBriefcase className="text-lg" />;
    case 'FaRocket':
      return <FaRocket className="text-lg" />;
    case 'FaGlassCheers':
      return <FaGlassCheers className="text-lg" />;
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-base shrink-0" />;
    case 'FaHeart':
      return <FaHeart className="text-accent text-base shrink-0" />;
    default:
      return null;
  }
};

export const Services = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section className="py-8 bg-[#fdfafb] overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
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
          <span className="text-accent">{data.titleHighlight}</span>
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
        <p className="text-text-light text-sm sm:text-base text-center max-w-2xl mx-auto mb-10 lg:mb-14 leading-relaxed">
          {data.description}
        </p>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Circular Badge Icon */}
              <div className="relative flex justify-center -mt-6 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md border-2 border-white group-hover:bg-accent transition-colors duration-300">
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 pt-3 flex flex-col items-center text-center flex-1 justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <Link
                  href={item.linkUrl}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-primary transition-colors duration-200"
                >
                  <span>{item.linkText}</span>
                  <MdArrowForward className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
