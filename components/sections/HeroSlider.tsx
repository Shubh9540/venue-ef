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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const slides = data?.slides || [];

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = useCallback(() => goTo(current === slides.length - 1 ? 0 : current + 1), [current, slides.length, goTo]);

  // Autoplay
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 40) {
      next();
    } else if (distance < -40) {
      prev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!data || slides.length === 0) return null;

  const slide = slides[current];

  return (
    <section 
      className="relative w-full h-[85vh] sm:h-[90vh] min-h-[560px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-all ease-in-out duration-1000`}
        >
          <Image
            src={s.image}
            alt={s.imageAlt || s.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0612]/90 via-[#1a0612]/70 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1360px] mx-auto px-6 sm:px-16 md:px-20 lg:px-28 flex items-center">
        <div className="max-w-2xl lg:max-w-3xl py-8">
          <div
            key={slide.id}
            className="animate-fadeIn"
          >
            {/* Tagline Simple */}
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[1px] bg-white/60" />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">
                {slide.badge}
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-white/60" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4">
              {slide.title}{' '}
              <span className="text-accent italic font-serif font-normal">{slide.titleHighlight}</span>
            </h1>

            {/* Standard Heart Divider */}
            {slide.dividerIcon && (
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-[1.5px] bg-accent rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="flex items-center justify-center text-accent text-base">
                  {renderIcon(slide.dividerIcon)}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="w-12 sm:w-16 h-[1.5px] bg-accent rounded-full" />
              </div>
            )}

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-xl">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={slide.primaryBtn.url}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-6 sm:px-7 py-3.5 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-accent/40 hover:shadow-xl"
              >
                {slide.primaryBtn.text}
                {renderIcon(slide.primaryBtn.icon || 'MdArrowForward')}
              </Link>
              <Link
                href={slide.secondaryBtn.url}
                className="inline-flex items-center justify-center gap-3 border border-white/60 hover:border-white text-white px-6 sm:px-7 py-3.5 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 flex items-center justify-center">
                  {renderIcon(slide.secondaryBtn.icon || 'FaPlay')}
                </span>
                {slide.secondaryBtn.text}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Arrow Nav (Hidden on mobile/tablet to avoid text overlap, visible on desktop) */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm items-center justify-center text-white hover:bg-white/25 transition-all duration-300 shadow-md"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm items-center justify-center text-white hover:bg-white/25 transition-all duration-300 shadow-md"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Dots (Clean navigation for mobile and desktop) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 sm:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-7 sm:w-8 h-2.5 sm:h-3 bg-accent'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
