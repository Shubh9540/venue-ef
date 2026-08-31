'use client';
import React, { useState } from 'react';
import { FAQPageData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import { FaRegHeart, FaHeadset, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegHeart': return <FaRegHeart />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    default: return null;
  }
};

export const FAQ = ({ data }: { data?: FAQPageData }) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqs[0]?.id || null);

  if (!data) return null;

  return (
    <section className="py-12 lg:py-20 bg-[#fafafa]">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              {data.badge}
            </span>
          </div>
          <Divider icon={data.dividerIcon || 'star'} className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary text-primary leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-text-light max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* Left Column: Accordion */}
          <div className="w-full lg:w-[65%] space-y-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#fdfaf6] border-accent/20' : 'bg-white border-gray-200'}`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-bold ${isOpen ? 'text-accent' : 'text-primary/70'}`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`text-base sm:text-lg font-semibold ${isOpen ? 'text-accent' : 'text-primary'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <span className="text-accent ml-4 shrink-0">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                  >
                    <div className="px-6 pb-6 pt-0 ml-10 text-text-light text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Contact Sidebar */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 sm:p-10 sticky top-24">
              
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-6 shadow-md">
                  {renderIcon(data.sidebar.icon)}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {data.sidebar.title}
                </h3>
                <Divider icon="star" className="mb-4" />
                <p className="text-text-light text-sm">
                  {data.sidebar.description}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {data.sidebar.contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#fdfaf6] text-accent flex items-center justify-center shrink-0 mt-1">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-text-light text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href={data.sidebar.buttonUrl}
                className="w-full block text-center bg-primary text-white font-semibold py-4 rounded hover:bg-primary/90 transition-colors"
              >
                {data.sidebar.buttonText}
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
