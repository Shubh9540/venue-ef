'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroData } from '@/types/templates.types';
import { FaChevronLeft, FaChevronRight, FaPlay, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaRegHeart':
      return <FaRegHeart className="w-4 h-4 text-accent" />;
    case 'FaHeart':
      return <FaHeart className="w-4 h-4 text-accent" />;
    case 'FaPlay':
      return <FaPlay className="text-xs ml-0.5" />;
    case 'MdArrowForward':
      return <MdArrowForward className="text-lg" />;
    default:
      return null;
  }
};

export const HeroSlider = ({ data }: { data?: HeroData }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (!data || !data.slides || data.slides.length === 0) return null;

  const slides = data.slides;

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = useCallback(() => goTo(current === slides.length - 1 ? 0 : current + 1), [current, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={s.image}
            alt={s.imageAlt || s.title}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0612]/90 via-[#1a0612]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-20 lg:py-24">
          <div className="max-w-2xl lg:max-w-3xl">

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4 lg:mb-5">
              <span className="h-px w-10 bg-white/50" />
              <span className="text-white/80 text-xs sm:text-sm tracking-[0.25em] font-medium uppercase">
                {slide.badge}
              </span>
              <span className="h-px w-10 bg-white/50" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {slide.title}{' '}
              <span className="text-accent">{slide.titleHighlight}</span>
            </h1>

            {/* Decorative divider */}
            {slide.dividerIcon && (
              <div className="flex items-center gap-2 mb-4 lg:mb-5">
                <span className="block w-12 sm:w-16 h-0.5 bg-accent shrink-0" />
                <span className="block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {renderIcon(slide.dividerIcon)}
                <span className="block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="block w-12 sm:w-16 h-0.5 bg-accent shrink-0" />
              </div>
            )}

            {/* Description */}
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-xl">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={slide.primaryBtn.url}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-7 py-3.5 rounded-md font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-accent/40 hover:shadow-xl"
              >
                {slide.primaryBtn.text}
                {renderIcon(slide.primaryBtn.icon || 'MdArrowForward')}
              </Link>
              <Link
                href={slide.secondaryBtn.url}
                className="inline-flex items-center gap-3 border border-white/60 hover:border-white text-white px-7 py-3.5 rounded-md font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                <span className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
                  {renderIcon(slide.secondaryBtn.icon || 'FaPlay')}
                </span>
                {slide.secondaryBtn.text}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Arrow Nav */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-3 bg-accent'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
