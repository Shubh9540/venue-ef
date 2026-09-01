import React from 'react';
import Image from 'next/image';
import { QuotePageData } from '@/types/templates.types';
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaShieldAlt, 
  FaClipboardList,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLock,
  FaStar
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaUsers': return <FaUsers />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaClipboardList': return <FaClipboardList />;
    default: return <FaStar />;
  }
};

export const QuotePageContent = ({ data }: { data?: QuotePageData }) => {
  if (!data) return null;

  return (
    <section className="py-8 relative bg-[#fcfaf9]">
      {/* Background pattern placeholder - using simple radial gradient to mimic dotted pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#e5d8dc 2px, transparent 2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Image */}
          <div className="w-full lg:w-1/2">
            
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#861d43] text-sm font-bold tracking-[0.1em] uppercase">
                {data.badge}
              </span>
              <div className="flex items-center text-[#861d43]">
                <span className="w-12 h-[2px] bg-[#861d43] mr-1" />
                <FaStar className="text-[12px]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight font-primary">
              {data.title}{' '}
              <span className="text-accent italic font-serif font-normal block">
                {data.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-text-light text-base sm:text-lg mb-10 max-w-md leading-relaxed">
              {data.description}
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f8eef1] text-[#861d43] flex items-center justify-center shrink-0 text-xl shadow-sm">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Image */}
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={data.image}
                alt="Venue EF Event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100">
              
              {/* Form Header */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-[#861d43] text-white flex items-center justify-center text-2xl mb-5 shadow-md ring-8 ring-[#fdfaf6]">
                  {renderIcon(data.form.icon)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 font-primary">
                  {data.form.title}
                </h3>
                
                {/* Decorative Divider */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-12 h-[1px] bg-accent/40" />
                  <FaStar className="text-accent/60 text-[10px]" />
                  <span className="w-12 h-[1px] bg-accent/40" />
                </div>
                
                <p className="text-text-light text-sm">
                  {data.form.subtitle}
                </p>
              </div>

              {/* Form Fields */}
              <form className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                        <FaUserAlt className="text-sm" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full pl-10 pr-4 py-8 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                        <FaEnvelope className="text-sm" />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full pl-10 pr-4 py-8 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                        <FaPhoneAlt className="text-sm" />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="w-full pl-10 pr-4 py-8 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      Event Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                        <FaCalendarAlt className="text-sm" />
                      </div>
                      <select className="w-full pl-10 pr-10 py-8 bg-white border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none transition-colors">
                        <option value="">Select event type</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="private">Private Party</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      Event Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                        <FaCalendarAlt className="text-sm" />
                      </div>
                      <input 
                        type="date" 
                        className="w-full pl-10 pr-4 py-8 bg-white border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Location */}
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      Event Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                        <FaMapMarkerAlt className="text-sm" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Enter event location" 
                        className="w-full pl-10 pr-4 py-8 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Estimated Guest Count */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Estimated Guest Count <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-light/60">
                      <FaUsers className="text-sm" />
                    </div>
                    <input 
                      type="number" 
                      placeholder="Enter estimated guest count" 
                      className="w-full pl-10 pr-4 py-8 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Tell us about your event */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">
                    Tell us about your event <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Share your ideas, preferences, and any specific requirements..."
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="w-full bg-[#3d0a21] hover:bg-[#861d43] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md mt-4"
                >
                  <FaPaperPlane className="text-sm" />
                  <span>{data.form.buttonText}</span>
                </button>

                {/* Footer Note */}
                <p className="text-center text-xs text-text-light flex items-center justify-center gap-1.5 mt-4">
                  <FaLock className="text-[#861d43]" />
                  <span>{data.form.footerText}</span>
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
