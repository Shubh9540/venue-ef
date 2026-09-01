'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { TestimonialsData } from '@/types/templates.types';
import { 
  FaStar, 
  FaRing, 
  FaBriefcase, 
  FaBirthdayCake, 
  FaConciergeBell, 
  FaRocket, 
  FaGlassCheers,
  FaRegHeart,
  FaHeart
} from 'react-icons/fa';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaRing':
      return <FaRing className="text-xs" />;
    case 'FaBriefcase':
      return <FaBriefcase className="text-xs" />;
    case 'FaBirthdayCake':
      return <FaBirthdayCake className="text-xs" />;
    case 'FaConciergeBell':
      return <FaConciergeBell className="text-xs" />;
    case 'FaRocket':
      return <FaRocket className="text-xs" />;
    case 'FaGlassCheers':
      return <FaGlassCheers className="text-xs" />;
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-base shrink-0" />;
    case 'FaHeart':
      return <FaHeart className="text-accent text-base shrink-0" />;
    default:
      return null;
  }
};

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const items = data?.items || [];
  const total = items.length;

  // Track responsive cards per view (1 for mobile, 2 for tablet, 3 for desktop)
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic infinite autoplay
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, total]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!data || total === 0) return null;

  return (
    <section className="py-8 bg-[#fcf9fa] overflow-hidden">
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
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1a0612] text-center mb-3">
          {data.title}{' '}
          <span className="text-accent italic font-serif font-normal">{data.titleHighlight}</span>
          {data.titleEnd && ` ${data.titleEnd}`}
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
        <p className="text-text-light text-xs sm:text-sm lg:text-base text-center max-w-xl mx-auto mb-8 lg:mb-12 leading-relaxed px-2">
          {data.description}
        </p>

        {/* Carousel Slider Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(current % total) * (100 / cardsPerView)}%)`
            }}
          >
            {/* Repeated items for infinite loop */}
            {[...items, ...items, ...items].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
              >
                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#f3d9e3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  {/* Top: Large Quote Mark & Star Rating Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-accent text-3xl sm:text-4xl font-serif leading-none select-none">
                      “
                    </span>
                    <div className="bg-primary text-white text-[10px] px-2.5 py-8 rounded-sm flex items-center gap-1 shadow-sm">
                      {Array.from({ length: item.rating || 5 }).map((_, s) => (
                        <FaStar key={s} className="text-[10px] text-white" />
                      ))}
                    </div>
                  </div>

                  {/* Body: Quote Text */}
                  <p className="text-xs sm:text-[13px] text-[#4a4a4a] leading-relaxed mb-4 min-h-[50px] sm:min-h-[55px]">
                    {item.quote}
                  </p>

                  {/* Decorative divider with diamond */}
                  <div className="w-full relative flex items-center justify-center my-3">
                    <div className="w-full h-px bg-[#f3d9e3]" />
                    <span className="absolute bg-white px-2 text-accent text-[9px]">✦</span>
                  </div>

                  {/* Bottom: Author Details */}
                  <div className="flex items-center gap-3.5 mt-1">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.name}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm sm:text-base font-bold text-primary leading-tight mb-1">
                        {item.name}
                      </h4>
                      <div className="text-xs text-accent font-medium flex items-center gap-1.5">
                        {renderIcon(item.roleIcon)}
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 lg:mt-10">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                (current % total) === i
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-primary/25 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
