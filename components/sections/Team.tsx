import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamData } from '@/types/templates.types';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF className="w-[14px] h-[14px]" />;
    case 'FaXTwitter': return <FaXTwitter className="w-[14px] h-[14px]" />;
    case 'FaLinkedinIn': return <FaLinkedinIn className="w-[14px] h-[14px]" />;
    case 'FaInstagram': return <FaInstagram className="w-[14px] h-[14px]" />;
    default: return null;
  }
};

export const Team = ({ data }: { data?: TeamData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fcfafb] py-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-4">
            <span className="text-[#7b2440] text-[13px] font-bold tracking-[0.2em] uppercase mb-2">
              {data.badge}
            </span>
            {/* Divider under badge */}
            <div className="flex items-center">
              <div className="h-px bg-[#7b2440] w-6" />
              <div className="w-[5px] h-[5px] rotate-45 bg-[#7b2440] mx-1" />
              <div className="h-px bg-[#7b2440] w-6" />
            </div>
          </div>
          
          <h2 className="text-[40px] lg:text-[56px] font-heading text-[#2d2228] leading-[1.1] mb-6">
            {data.title}<br />
            <span className="text-[#7b2440] italic font-medium">{data.titleHighlight}</span>
          </h2>
          
          <p className="text-gray-600 text-[15px] sm:text-base max-w-xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.members.map((member) => (
            <Link href={`/team/${member.id}`} key={member.id} className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 border border-gray-50 group">
              
              {/* Image with subtle radial glow in background */}
              <div className="relative w-[160px] h-[160px] lg:w-[190px] lg:h-[190px] rounded-full mb-8">
                {/* Subtle colored aura matching the design */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-100/60 via-purple-50/60 to-pink-50/60" />
                <div className="relative w-full h-full rounded-full overflow-hidden z-10 border-4 border-white shadow-sm">
                  <Image
                    src={member.image}
                    alt={member.imageAlt || member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 190px"
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-[22px] lg:text-[24px] font-heading text-[#2d2228] mb-1.5">
                {member.name}
              </h3>
              <p className="text-[#7b2440] text-[10px] font-bold uppercase tracking-[0.1em] mb-4 opacity-90">
                {member.role}
              </p>

              {/* Diamond Divider */}
              <div className="flex items-center mb-6">
                <div className="h-px bg-gray-200 w-4" />
                <div className="w-[4px] h-[4px] rotate-45 bg-[#7b2440] mx-1.5" />
                <div className="h-px bg-gray-200 w-4" />
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2.5">
                {member.socials.map((social, idx) => (
                  <div 
                    key={idx}
                    className="w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-[#7b2440] group-hover:border-[#7b2440] transition-colors"
                  >
                    {renderIcon(social.icon)}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
