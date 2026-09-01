'use client';

import React from 'react';
import { ServiceDetailSidebarData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';

export const ServiceDetailSidebar = ({ data }: { data?: ServiceDetailSidebarData }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col gap-8">
      
      {/* Quote Form Card */}
      <div className="bg-[#fdfaf6] rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-sm font-bold text-primary tracking-[0.2em] uppercase text-center mb-4">
          {data.formTitle}
        </h3>
        <Divider icon="star" className="mb-8" />
        
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Full Name <span className="text-accent">*</span></label>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors" required />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Email Address <span className="text-accent">*</span></label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors" required />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Phone Number <span className="text-accent">*</span></label>
            <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors" required />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Company Name</label>
            <input type="text" placeholder="Enter company name" className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Event Type <span className="text-accent">*</span></label>
            <select defaultValue="" className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-gray-500" required>
              <option value="" disabled>Select event type</option>
              <option value="corporate">Corporate Event</option>
              <option value="wedding">Wedding</option>
              <option value="private">Private Party</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Event Date</label>
            <input type="date" className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors text-gray-500" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-primary">Message / Requirements</label>
            <textarea placeholder="Tell us about your event..." rows={4} className="w-full px-4 py-8 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-accent transition-colors resize-none"></textarea>
          </div>

          <button type="submit" className="w-full py-8 bg-[#4a152e] hover:bg-primary transition-colors text-white font-bold text-sm tracking-wider uppercase rounded-md mt-2">
            SUBMIT REQUEST
          </button>
        </form>
      </div>

      {/* Need Help Box */}
      <div className="bg-[#fdfaf6] rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm text-center lg:text-left">
        <h3 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
          {data.helpTitle}
        </h3>
        
        {/* Left aligned divider on desktop, centered on mobile */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
          <div className="w-8 h-[1.5px] bg-accent opacity-40"></div>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-80">
            <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="currentColor"/>
          </svg>
        </div>

        <p className="text-sm text-text-light mb-6">
          {data.helpText}
        </p>

        <div className="flex flex-col gap-3 text-sm text-primary font-medium">
          <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-accent transition-colors">{data.phone}</a>
          <a href={`mailto:${data.email}`} className="hover:text-accent transition-colors">{data.email}</a>
          <span className="text-text-light">{data.hours}</span>
        </div>
      </div>
      
    </div>
  );
};
