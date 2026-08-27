import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamMember, TeamDetailPageContentData } from '@/types/templates.types';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaGraduationCap, FaBriefcase, FaRegStar, FaTrophy } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF className="w-4 h-4" />;
    case 'FaXTwitter': return <FaXTwitter className="w-4 h-4" />;
    case 'FaLinkedinIn': return <FaLinkedinIn className="w-4 h-4" />;
    case 'FaInstagram': return <FaInstagram className="w-4 h-4" />;
    case 'FaEnvelope': return <FaEnvelope className="w-4 h-4" />;
    case 'FaGraduationCap': return <FaGraduationCap className="text-xl" />;
    case 'FaBriefcase': return <FaBriefcase className="text-xl" />;
    case 'FaRegStar': return <FaRegStar className="text-xl" />;
    case 'FaTrophy': return <FaTrophy className="text-xl" />;
    default: return null;
  }
};

export const TeamDetailContent = ({ 
  member, 
  pageData 
}: { 
  member?: TeamMember;
  pageData?: TeamDetailPageContentData;
}) => {
  if (!member) return null;

  return (
    <section className="bg-[#fcfafb] py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Page Header */}
        {pageData && (
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-4">
              <span className="text-[#7b2440] text-[13px] font-bold tracking-[0.2em] uppercase mb-2">
                {pageData.badge}
              </span>
              <div className="flex items-center">
                <div className="h-px bg-[#7b2440] w-6" />
                <div className="w-[5px] h-[5px] rotate-45 bg-[#7b2440] mx-1" />
                <div className="h-px bg-[#7b2440] w-6" />
              </div>
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-heading text-[#2d2228] leading-[1.2]">
              {pageData.title}
            </h2>
          </div>
        )}

        {/* Main Member Card */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row p-4 sm:p-6 gap-8 lg:gap-16 mb-8 relative overflow-hidden">
          
          {/* Left: Image with Maroon Strip */}
          <div className="flex w-full lg:w-[45%] h-[400px] lg:h-[480px] rounded-[16px] overflow-hidden shrink-0">
            {/* Maroon Decorative Strip */}
            <div className="w-[48px] bg-[#5a102a] relative flex items-center justify-center shrink-0 overflow-hidden">
              {/* Fake abstract waves */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <svg viewBox="0 0 48 480" fill="none" preserveAspectRatio="none">
                  <path d="M0,50 Q48,150 0,250 T0,480" stroke="white" strokeWidth="1" />
                  <path d="M48,0 Q0,100 48,200 T48,480" stroke="white" strokeWidth="1" />
                </svg>
              </div>
              <BsStars className="text-white text-[16px] absolute z-10" />
            </div>
            {/* Image */}
            <div className="relative flex-1">
              <Image 
                src={member.image}
                alt={member.imageAlt || member.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-center py-6 pr-6 relative">
            
            {/* Large Quote Mark Background */}
            <div className="absolute top-4 right-4 lg:top-8 lg:right-8 opacity-[0.04] pointer-events-none">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-[#7b2440]">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <h1 className="text-[40px] lg:text-[56px] font-heading text-[#2d2228] leading-tight mb-2">
              {member.name}
            </h1>
            <p className="text-[#7b2440] text-[18px] lg:text-[20px] font-medium mb-8">
              {member.role}
            </p>

            {/* Divider */}
            <div className="flex items-center mb-8">
              <div className="h-[2px] bg-[#7b2440] w-12" />
              <div className="w-[5px] h-[5px] rotate-45 bg-[#7b2440] mx-1.5" />
              <div className="h-[2px] bg-[#7b2440] w-12" />
            </div>

            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] max-w-xl mb-12">
              {member.bio}
            </p>

            {/* Footer row (Email + Socials) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-6 border-t border-gray-100">
              
              {/* Email */}
              {member.email && (
                <a href={`mailto:${member.email}`} className="flex items-center gap-3 group">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#fdf5f7] flex items-center justify-center text-[#7b2440] group-hover:bg-[#7b2440] group-hover:text-white transition-colors">
                    {renderIcon('FaEnvelope')}
                  </div>
                  <span className="text-[13px] font-medium text-gray-700 group-hover:text-[#7b2440] transition-colors">
                    {member.email}
                  </span>
                </a>
              )}

              {/* Separator */}
              <div className="hidden sm:block w-px h-8 bg-gray-200" />

              {/* Socials */}
              <div className="flex items-center gap-3">
                {member.socials.map((social, idx) => (
                  <Link 
                    key={idx}
                    href={social.url}
                    className="w-[42px] h-[42px] rounded-full bg-[#fdf5f7] flex items-center justify-center text-[#7b2440] hover:bg-[#7b2440] hover:text-white transition-colors"
                  >
                    {renderIcon(social.icon)}
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Stats Grid Card */}
        {member.stats && member.stats.length > 0 && (
          <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-100">
              {member.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="w-[56px] h-[56px] rounded-full bg-[#fdf5f7] flex items-center justify-center text-[#7b2440] mb-5">
                    {renderIcon(stat.icon)}
                  </div>
                  <h4 className="font-heading text-[#2d2228] text-[18px] mb-2">{stat.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                    {stat.value1}
                    {stat.value2 && <><br />{stat.value2}</>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
