'use client';

import React from 'react';
import { ContactPageData } from '@/types/templates.types';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaMapMarker } from 'react-icons/fa';
import Image from 'next/image';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaRegClock': return <FaRegClock />;
    default: return null;
  }
};

export const ContactPageContent = ({ data }: { data?: ContactPageData }) => {
  if (!data) return null;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Form and Info */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-2xl sm:text-3xl font-primary text-primary mb-2">
              {data.formTitle}
            </h2>
            <div className="w-12 h-0.5 bg-accent opacity-60 mb-8"></div>
            
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required
                  className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-text-light placeholder:text-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required
                  className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-text-light placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  required
                  className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-text-light placeholder:text-gray-400"
                />
                <div className="relative">
                  <select 
                    className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-text-light appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Event Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="private">Private Party</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <input 
                type="text" 
                placeholder="Subject *" 
                required
                className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-text-light placeholder:text-gray-400"
              />

              <textarea 
                placeholder="Message / Requirements *" 
                rows={5}
                required
                className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-text-light placeholder:text-gray-400 resize-none"
              ></textarea>

              <div>
                <button 
                  type="submit"
                  className="bg-[#5a102a] hover:bg-primary transition-colors text-white text-xs font-bold tracking-[0.15em] uppercase py-8 px-8 rounded flex items-center gap-2"
                >
                  {data.formSubmitText}
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-2xl sm:text-3xl font-primary text-primary mb-2">
              {data.infoTitle}
            </h2>
            <div className="w-12 h-0.5 bg-accent opacity-60 mb-8"></div>

            <div className="flex flex-col">
              {data.infoItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex gap-5 py-8 ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#fdf5f7] flex items-center justify-center text-[#7b2440] shrink-0">
                    {renderIcon(item.icon)}
                  </div>
                  
                  {/* Text Details */}
                  <div className="flex flex-col pt-1">
                    <h4 className="text-sm font-bold text-primary mb-1">
                      {item.title}
                    </h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-text-light leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Map */}
        <div className="w-full relative rounded-2xl overflow-hidden aspect-square md:aspect-[21/9] bg-gray-100 flex items-center justify-center group">
          <iframe 
            src={data.mapIframeUrl} 
            width="100%" 
            height="100%" 
            className="border-0 absolute inset-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay Card */}
          <div className="absolute z-10 bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="text-accent text-2xl mb-2">
              <FaMapMarker />
            </div>
            <h3 className="text-lg font-primary text-primary mb-2">
              {data.mapOverlayTitle}
            </h3>
            <div className="w-8 h-0.5 bg-accent opacity-60 mb-4"></div>
            
            {data.mapOverlayAddress.map((line, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-text-light leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
