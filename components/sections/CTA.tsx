import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CtaData } from '@/types/templates.types';
import { MdArrowForward } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'MdArrowForward':
      return <MdArrowForward className="text-base" />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt className="text-sm" />;
    default:
      return null;
  }
};

export const CTA = ({ data }: { data?: CtaData }) => {
  if (!data) return null;

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center shadow-xl">
          
          {/* Background Image */}
          <Image
            src={data.bgImage}
            alt={data.bgImageAlt || data.title}
            fill
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="object-cover object-center"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c0517] via-[#2c0517]/90 to-[#2c0517]/40 sm:to-transparent" />

          {/* Left Content */}
          <div className="relative z-10 max-w-xl p-6 sm:p-10 lg:p-14">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 border-b border-rose-300/30 pb-1.5 mb-4">
              <span className="text-rose-200 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase">
                {data.badge}
              </span>
              <span className="text-rose-300 text-xs">✦</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 font-serif">
              {data.title}{' '}
              <span className="text-rose-200 italic font-normal">{data.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
              {data.description}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-6">
              
              {/* Primary Pill Button */}
              <Link
                href={data.buttonUrl}
                className="bg-[#fcdde6] hover:bg-white text-primary font-bold tracking-wider text-xs sm:text-sm uppercase pl-6 pr-2 py-8 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-md group"
              >
                <span>{data.buttonText}</span>
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  {renderIcon(data.buttonIcon || 'MdArrowForward')}
                </span>
              </Link>

              {/* Talk to Expert Phone Link */}
              <a
                href={data.phoneUrl}
                className="inline-flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-full border border-rose-300/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-rose-200 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  {renderIcon(data.phoneIcon || 'FaPhoneAlt')}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs text-rose-300/90 uppercase font-semibold tracking-wider leading-tight">
                    {data.phoneLabel}
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base tracking-wide leading-tight group-hover:text-rose-200 transition-colors">
                    {data.phoneNumber}
                  </span>
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
