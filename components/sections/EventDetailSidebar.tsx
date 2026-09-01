import React from 'react';
import { EventDetailSidebarData } from '@/types/templates.types';
import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserTie, FaTags, FaPhoneAlt, FaEnvelope, FaHeadset } from 'react-icons/fa';

export const EventDetailSidebar = ({ data }: { data?: EventDetailSidebarData }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col gap-8">
      
      {/* Event Details Card */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-primary text-primary mb-6">
          Event Details
        </h3>
        
        <div className="flex flex-col gap-6 mb-8">
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
              <FaCalendarAlt />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary mb-1">Date</span>
              <span className="text-sm text-text-light">{data.date}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
              <FaClock />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary mb-1">Time</span>
              <span className="text-sm text-text-light">{data.time}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
              <FaMapMarkerAlt />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary mb-1">Location</span>
              <span className="text-sm text-text-light">{data.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
              <FaUserTie />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary mb-1">Organizer</span>
              <span className="text-sm text-text-light">{data.organizer}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
              <FaTags />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary mb-1">Event Type</span>
              <span className="text-sm text-text-light">{data.eventType}</span>
            </div>
          </div>

        </div>

        <Link 
          href={data.bookBtnUrl}
          className="w-full py-8 bg-[#4a152e] hover:bg-primary transition-colors text-white font-bold text-sm tracking-wider uppercase rounded-md flex items-center justify-center gap-3"
        >
          <FaCalendarAlt />
          {data.bookBtnText}
        </Link>
      </div>

      {/* Need Help Box */}
      <div className="bg-[#fdfaf6] rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-primary text-primary mb-4">
          {data.helpTitle}
        </h3>
        
        <p className="text-sm text-text-light mb-6 leading-relaxed">
          {data.helpText}
        </p>

        <div className="flex flex-col gap-4">
          <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-accent group-hover:border-accent transition-colors">
              <FaPhoneAlt className="text-sm" />
            </div>
            <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{data.phone}</span>
          </a>

          <a href={`mailto:${data.email}`} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-accent group-hover:border-accent transition-colors">
              <FaEnvelope className="text-sm" />
            </div>
            <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{data.email}</span>
          </a>
        </div>

        <Link 
          href="/contact"
          className="mt-6 w-full py-8 bg-white border border-gray-200 hover:border-accent text-primary hover:text-accent transition-all font-bold text-sm tracking-wider rounded-md flex items-center justify-center gap-3"
        >
          <FaHeadset />
          Contact Us
        </Link>
      </div>
      
    </div>
  );
};
