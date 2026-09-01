import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NotFoundPageData } from '@/types/templates.types';
import { Divider } from '@/components/ui/Divider';
import { 
  FaUserFriends, 
  FaClipboardList, 
  FaBriefcase, 
  FaUsers, 
  FaEnvelope,
  FaArrowRight,
  FaStar,
  FaRegClipboard
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaClipboardList': return <FaClipboardList />;
    case 'FaRegClipboard': return <FaRegClipboard />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaUsers': return <FaUsers />;
    case 'FaEnvelope': return <FaEnvelope />;
    default: return <FaStar />;
  }
};

export const NotFoundPageContent = ({ data }: { data?: NotFoundPageData }) => {
  if (!data) return null;

  return (
    <section className="relative w-full min-h-screen bg-[#fcfaf9] flex flex-col">
      
      {/* Hero Section (Fills remaining space before helpful links) */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-8 px-4 z-10 overflow-hidden min-h-[600px]">
        
        {/* Background Image (faded bottom) */}
        {data.backgroundImage && (
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
               style={{ 
                 backgroundImage: `linear-gradient(to bottom, transparent 0%, #fcfaf9 90%, #fcfaf9 100%), url(${data.backgroundImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center bottom'
               }} 
          />
        )}
        
        {/* Sparkles Decoration */}
        <div className="absolute top-1/4 left-1/4 text-accent/40 text-xs"><FaStar /></div>
        <div className="absolute top-1/3 right-1/4 text-accent/40 text-sm"><FaStar /></div>
        <div className="absolute bottom-1/3 left-1/3 text-accent/40 text-[10px]"><FaStar /></div>
        
        {/* 404 Main Block */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Circular/Arched decorative container */}
          <div className="relative inline-flex flex-col items-center justify-center mb-8">
            {/* The faint circle */}
            <div className="absolute inset-0 -m-10 rounded-full border border-[#f5d0e0] border-b-transparent pointer-events-none opacity-60"></div>
            {/* Top star */}
            <div className="absolute -top-[48px] text-[#861d43]"><FaStar size={12} /></div>
            
            <h1 className="text-[140px] md:text-[200px] leading-none font-primary text-[#861d43] font-normal tracking-tight">
              {data.errorCode}
            </h1>
          </div>
          
          <Divider icon="star" className="mb-6" />

          <h2 className="text-3xl md:text-5xl font-primary text-primary mb-4 whitespace-pre-line leading-tight">
            {data.title}
          </h2>
          
          <p className="text-text-light text-sm md:text-base whitespace-pre-line mb-8 max-w-[400px] mx-auto leading-relaxed">
            {data.description}
          </p>

          <Link 
            href={data.buttonUrl} 
            className="inline-flex items-center justify-center gap-2 bg-[#5a102a] text-white font-bold text-xs uppercase tracking-widest px-8 py-8 rounded-md hover:bg-[#3d0a21] transition-colors shadow-md"
          >
            <span>{data.buttonText}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Explore Something Helpful Section */}
      <div className="relative z-20 bg-[#fcfaf9] py-8 px-4 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto">
          
          <div className="text-center mb-10">
            <h3 className="text-lg md:text-xl font-primary text-primary mb-3">
              {data.helpfulTitle}
            </h3>
            <Divider icon="star" />
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 border-l border-gray-200">
            {data.helpfulLinks.map((link) => (
              <Link 
                key={link.id} 
                href={link.url} 
                className="flex flex-col items-center justify-center text-center p-6 lg:p-8 group border-r border-gray-200 border-b md:border-b-0 hover:bg-white transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#f8eef1] text-[#861d43] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#861d43] group-hover:text-white transition-colors duration-300">
                  {renderIcon(link.icon)}
                </div>
                <h4 className="text-sm font-bold text-[#861d43] mb-2">{link.title}</h4>
                <FaArrowRight className="text-[#861d43] text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
