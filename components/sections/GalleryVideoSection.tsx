'use client';

import React, { useState, useEffect } from 'react';
import { GalleryPageData } from '@/types/templates.types';
import Image from 'next/image';
import { FaPlay, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { Divider } from '@/components/ui/Divider';

export const GalleryVideoSection = ({ data }: { data?: GalleryPageData }) => {
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

  if (!data || !data.videos) return null;

  const handleNext = () => {
    if (activeIndex !== null && data.videos.length > 0) {
      setActiveIndex((activeIndex + 1) % data.videos.length);
    }
  };

  const handlePrev = () => {
    if (activeIndex !== null && data.videos.length > 0) {
      setActiveIndex((activeIndex - 1 + data.videos.length) % data.videos.length);
    }
  };

  const activeItem = activeIndex !== null ? data.videos[activeIndex] : null;

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-4 tracking-wide uppercase">
          {data.videoSectionTitle} <span className="text-primary">{data.videoSectionTitleHighlight}</span>
        </h2>
        <Divider icon="star" />
        <p className="text-sm text-text-light leading-relaxed max-w-2xl mt-6">
          {data.videoSectionDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {data.videos.map((item, index) => (
          <div 
            key={item.id}
            className="rounded-xl overflow-hidden cursor-pointer group shadow-sm bg-white border border-gray-100 flex flex-col"
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={item.thumbnail}
                alt={item.thumbnailAlt || item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <FaPlay className="text-lg ml-1" />
                </div>
              </div>
            </div>
            
            <div className="p-4 flex flex-col">
              <h3 className="font-bold text-sm text-primary line-clamp-1 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-text-light">
                {item.duration}
              </p>
            </div>
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
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src={`${activeItem.url}?autoplay=1`} 
                title={activeItem.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <p className="text-white/80 font-primary tracking-wider">{activeItem.title}</p>
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
