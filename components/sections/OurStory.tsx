import React from 'react';
import Image from 'next/image';
import { OurStoryData } from '@/types/templates.types';
import { FaHeart, FaRegHeart, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Divider } from '@/components/ui/Divider';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaRegHeart':
      return <FaRegHeart className="w-4 h-4 text-accent" />;
    case 'FaHeart':
      return <FaHeart className="w-4 h-4 text-accent" />;
    case 'FaStar':
      return <FaStar className="w-3 h-3 text-accent" />;
    default:
      return null;
  }
};

export const OurStory = ({ data }: { data?: OurStoryData }) => {
  if (!data) return null;

  return (
    <section className="relative py-8 bg-[#faf5f7] overflow-hidden">
      {/* ── Background Elements ── */}
      {/* Top Right Dot Pattern */}
      <div className="absolute right-6 top-10 pointer-events-none select-none opacity-25">
        <svg width="140" height="160" viewBox="0 0 140 160">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => (
              <circle
                key={`dot-${row}-${col}`}
                cx={col * 20 + 10}
                cy={row * 20 + 10}
                r="2.5"
                className="fill-primary"
              />
            ))
          )}
        </svg>
      </div>

      {/* Left Decorative Image (Leaf) */}
      {data.decorImage && (
        <div className="absolute left-0 bottom-0 pointer-events-none select-none opacity-60 w-[300px] h-[300px]">
          <Image
            src={data.decorImage}
            alt={data.decorImageAlt || ''}
            fill
            sizes="300px"
            className="object-contain object-left-bottom"
          />
        </div>
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16">
        {/* ── Top Centered Badge ── */}
        <div className="flex flex-col items-center justify-center mb-12">
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            {data.badge}
          </span>
          <Divider icon="star" />
        </div>

        {/* ── Main Content Layout ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text Block */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="text-4xl lg:text-[56px] font-bold text-[#1a0612] leading-tight mb-1 font-heading">
              {data.title}
            </h2>
            <h2 className="text-4xl lg:text-[56px] font-bold text-accent italic leading-tight mb-6 font-heading">
              {data.titleHighlight}
            </h2>

            {/* Divider Icon */}
            {data.dividerIcon && (
              <div className="mb-8 flex justify-center lg:justify-start">
                <Divider className="w-full lg:w-auto" />
              </div>
            )}

            <h3 className="text-2xl font-semibold text-[#4a1727] mb-4">
              {data.subtitle}
            </h3>

            <p className="text-gray-600 text-base lg:text-[17px] leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              {data.description1}
            </p>
            <p className="text-gray-600 text-base lg:text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {data.description2}
            </p>
          </div>

          {/* Right Image Block */}
          <div className="flex-1 w-full relative flex flex-col items-center lg:block mt-8 lg:mt-0 lg:h-[500px]">
            {/* Main Image */}
            <div className="relative w-full lg:absolute lg:top-0 lg:right-0 lg:w-[90%] h-[300px] sm:h-[450px] lg:h-[90%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={data.image}
                alt={data.imageAlt || data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Quote Box */}
            <div className="relative z-10 -mt-16 sm:-mt-24 lg:mt-0 lg:absolute lg:bottom-0 lg:-left-12 w-[95%] sm:w-[80%] lg:w-[340px] bg-[#4a1727] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#5d2134]">
              <FaQuoteLeft className="text-3xl sm:text-4xl text-[#7a2f4a] mb-4 opacity-50" />
              <p className="text-base sm:text-lg font-medium leading-snug mb-6">
                {data.quoteText}
                <em className="text-accent italic font-semibold">{data.quoteHighlight}</em>
              </p>
              
              {/* Quote Footer Divider */}
              <div className="flex justify-center mb-4 opacity-70">
                <Divider icon="star" />
              </div>

              {/* Quote Footer Text */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-200 uppercase tracking-widest font-semibold text-center">
                {data.quoteFooterIcon && renderIcon(data.quoteFooterIcon)}
                {data.quoteFooter}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
