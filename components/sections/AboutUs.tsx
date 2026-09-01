import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AboutUsData } from '@/types/templates.types';
import { MdArrowForward } from 'react-icons/md';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Divider } from '@/components/ui/Divider';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaRegHeart':
      return <FaRegHeart className="w-4 h-4 text-accent" />;
    case 'FaHeart':
      return <FaHeart className="w-4 h-4 text-accent" />;
    case 'MdArrowForward':
      return <MdArrowForward className="text-lg" />;
    default:
      return null;
  }
};

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section className="relative py-8 bg-[#faf5f7] overflow-hidden">

      {/* ── Left: Decorative image from JSON ── */}
      {data.decorImage && (
        <div className="absolute left-6 top-[360px] pointer-events-none select-none opacity-60 w-32 h-32">
          <Image
            src={data.decorImage}
            alt={data.decorImageAlt || ''}
            fill
            sizes="128px"
            className="object-contain"
          />
        </div>
      )}

      {/* ── Right: Dot pattern ── */}
      <div className="absolute right-6 top-10 pointer-events-none select-none opacity-25">
        <svg width="140" height="160" viewBox="0 0 140 160">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 20 + 10}
                cy={row * 20 + 10}
                r="2.5"
                className="fill-primary"
              />
            ))
          )}
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Text */}
          <div className="flex-1 w-full text-center lg:text-left">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
                {data.badge}
              </span>
              <span className="w-16 h-0.5 bg-accent opacity-60" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a0612] leading-tight mb-2">
              {data.title}
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-accent leading-tight mb-4">
              {data.titleHighlight}
            </h2>

            {/* Divider Icon with left & right lines */}
            {data.dividerIcon && (
              <div className="mb-6 flex justify-center lg:justify-start">
                <Divider className="w-full lg:w-auto" />
              </div>
            )}

            {/* Descriptions */}
            <p className="text-[#555] text-base lg:text-[17px] leading-relaxed mb-4">
              {data.description1}
            </p>
            <p className="text-[#555] text-base lg:text-[17px] leading-relaxed mb-8">
              {data.description2}
            </p>

            {/* Button */}
            {data.buttonText && data.buttonUrl && (
              <Link
                href={data.buttonUrl}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-7 py-3.5 rounded-md font-semibold text-base transition-all duration-300 shadow-md"
              >
                {data.buttonText}
                {renderIcon(data.buttonIcon || 'MdArrowForward')}
              </Link>
            )}
          </div>

          {/* Right — Stacked Images */}
          <div className="flex-1 w-full relative flex justify-center items-center">
            <div className="relative w-full max-w-[520px] h-[360px] lg:h-[420px]">

              {/* Large image — top right */}
              <div className="absolute top-0 right-0 w-[75%] h-[90%] rounded-2xl overflow-hidden shadow-xl border-l-4 border-primary">
                <Image
                  src={data.image1}
                  alt={data.image1Alt || data.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Small image — bottom left (overlapping) */}
              <div className="absolute bottom-0 left-0 w-[52%] h-[58%] rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
                <Image
                  src={data.image2}
                  alt={data.image2Alt || data.titleHighlight}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
