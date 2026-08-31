'use client';

import React, { useState, useEffect } from 'react';
import { GalleryPageData } from '@/types/templates.types';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { Divider } from '@/components/ui/Divider';

export const GalleryImageSection = ({ data }: { data?: GalleryPageData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowLeft' && activeIndex !== null) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && activeIndex !== null) {
        handleNext();
      }
    };

    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeIndex]);

  if (!data || !data.images) return null;

  const handleNext = () => {
    if (activeIndex !== null && data.images.length > 0) {
      setActiveIndex((activeIndex + 1) % data.images.length);
    }
  };

  const handlePrev = () => {
    if (activeIndex !== null && data.images.length > 0) {
      setActiveIndex((activeIndex - 1 + data.images.length) % data.images.length);
    }
  };

  const activeItem = activeIndex !== null ? data.images[activeIndex] : null;

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-4 tracking-wide uppercase">
          {data.imageSectionTitle} <span className="text-primary">{data.imageSectionTitleHighlight}</span>
        </h2>
        <Divider icon="star" />
        <p className="text-sm text-text-light leading-relaxed max-w-2xl mt-6">
          {data.imageSectionDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
        {data.images.map((item, index) => (
          <div 
            key={item.id}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-sm bg-gray-100"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.image}
              alt={item.imageAlt || `Gallery Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8">
          <button 
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white text-3xl transition-colors z-50"
          >
            <FaTimes />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 sm:left-8 text-white/50 hover:text-white text-4xl sm:text-5xl transition-colors z-50 p-2"
          >
            <FaChevronLeft />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center">
            <div className="relative w-full h-[80vh]">
              <Image
                src={activeItem.image}
                alt={activeItem.imageAlt || 'Gallery Image'}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 sm:right-8 text-white/50 hover:text-white text-4xl sm:text-5xl transition-colors z-50 p-2"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};
