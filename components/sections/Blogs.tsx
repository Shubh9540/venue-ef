import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogsData } from '@/types/templates.types';
import { 
  FaCalendarAlt, 
  FaBriefcase, 
  FaLightbulb, 
  FaRegBookmark,
  FaRegHeart,
  FaHeart
} from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaCalendarAlt':
      return <FaCalendarAlt className="text-base" />;
    case 'FaBriefcase':
      return <FaBriefcase className="text-base" />;
    case 'FaLightbulb':
      return <FaLightbulb className="text-base" />;
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-base shrink-0" />;
    case 'FaHeart':
      return <FaHeart className="text-accent text-base shrink-0" />;
    case 'MdArrowForward':
      return <MdArrowForward className="text-base" />;
    default:
      return null;
  }
};

export const Blogs = ({ data }: { data?: BlogsData }) => {
  if (!data) return null;

  return (
    <section className="py-8 bg-white overflow-hidden">
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
        <p className="text-text-light text-sm sm:text-base text-center max-w-xl mx-auto mb-10 lg:mb-14 leading-relaxed">
          {data.description}
        </p>

        {/* 3 Blogs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Circular Badge Icon on Left */}
              <div className="relative z-10 -mt-6 ml-6 flex">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center border-2 border-white shadow-md group-hover:bg-accent transition-colors duration-300">
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-3 flex flex-col flex-1 justify-between">
                <div>
                  {/* Meta Date & Category */}
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-text-light flex items-center gap-2 mb-2.5">
                    <span>{item.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-accent font-bold">{item.category}</span>
                  </div>

                  {/* Title */}
                  <Link href={item.linkUrl}>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>

                  {/* Description Excerpt */}
                  <p className="text-xs sm:text-[13px] text-text-light leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={item.linkUrl}
                    className="text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>READ MORE</span>
                    <MdArrowForward className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <button 
                    className="text-accent hover:text-primary transition-colors text-sm"
                    aria-label="Save article"
                  >
                    <FaRegBookmark />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="flex justify-center mt-12">
          <Link
            href={data.viewAllUrl}
            className="bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-md inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>{data.viewAllText}</span>
            <MdArrowForward className="text-base" />
          </Link>
        </div>

      </div>
    </section>
  );
};
