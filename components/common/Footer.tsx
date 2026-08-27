import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterData } from '@/types/templates.types';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaPhoneAlt, 
  FaRegHeart, 
  FaHeart 
} from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { LuClock } from 'react-icons/lu';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaYoutube':
      return <FaYoutube />;
    case 'FaMapMarkerAlt':
      return <SlLocationPin className="text-lg text-accent" />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt className="text-base text-accent" />;
    case 'FaEnvelope':
      return <HiOutlineMail className="text-lg text-accent" />;
    case 'FaClock':
      return <LuClock className="text-lg text-accent" />;
    case 'FaRegHeart':
      return <FaRegHeart className="text-accent text-lg" />;
    case 'FaHeart':
      return <FaHeart className="text-accent text-lg" />;
    default:
      return null;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  return (
    <footer className="bg-[#1c0310] text-white pt-14 lg:pt-16 pb-8 border-t border-[#380b24]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          
          {/* Col 1: Brand / Logo */}
          <div className="flex flex-col">
            <div className="h-[76px] flex items-start mb-2">
              <Link href="/" className="inline-block">
                <Image
                  src={data.logo}
                  alt={data.logoAlt || 'Logo'}
                  width={190}
                  height={70}
                  className="h-14 sm:h-16 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            {/* Content with right border starting at list item height */}
            <div className="flex-1 lg:pr-8 lg:border-r border-[#380b24] flex flex-col justify-between pt-1">
              <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed mb-6 max-w-xs">
                {data.description}
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-auto pt-2">
                {data.socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="w-9 h-9 rounded-full border border-rose-300/30 flex items-center justify-center text-rose-200 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 text-sm"
                    aria-label={item.icon}
                  >
                    {renderIcon(item.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2, 3, 4: Link Columns */}
          {data.columns.map((col) => (
            <div key={col.id} className="flex flex-col">
              {/* Column Title Header (fixed height for perfect alignment, no border) */}
              <div className="lg:px-6 h-[76px] flex flex-col justify-start mb-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-6 h-px bg-rose-400/40" />
                  <span className="text-accent text-[10px]">✦</span>
                  <span className="w-6 h-px bg-rose-400/40" />
                </div>
              </div>

              {/* Links List with border-r starting exactly at top of list */}
              <div className="flex-1 lg:px-6 lg:border-r border-[#380b24] pt-1">
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.url}
                        className="text-xs sm:text-[13px] text-white/75 hover:text-accent flex items-center gap-2 transition-colors group"
                      >
                        <span className="text-accent text-xs font-bold group-hover:translate-x-0.5 transition-transform">
                          ›
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Col 5: Contact Info */}
          <div className="flex flex-col">
            {/* Header (fixed height for exact alignment) */}
            <div className="lg:pl-8 h-20 flex flex-col justify-start mb-2">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {data.contactTitle}
              </h4>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-6 h-px bg-rose-400/40" />
                <span className="text-accent text-[10px]">✦</span>
                <span className="w-6 h-px bg-rose-400/40" />
              </div>
            </div>

            {/* Contact Items */}
            <div className="flex-1 lg:pl-8 pt-1">
              <div className="space-y-4">
                {data.contactItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-start gap-3.5 text-xs sm:text-[13px] text-white/80 pb-3 border-b border-[#380b24] last:border-b-0 last:pb-0"
                  >
                    <span className="shrink-0 mt-0.5">
                      {renderIcon(item.icon)}
                    </span>
                    {item.url ? (
                      <a href={item.url} className="hover:text-accent transition-colors leading-relaxed">
                        {item.text}
                      </a>
                    ) : (
                      <span className="leading-relaxed text-white/75">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Divider with Center Diamond Star */}
        <div className="w-full relative flex items-center justify-center my-10">
          <div className="w-full h-px bg-[#380b24]" />
          <span className="absolute bg-[#1c0310] px-3 text-accent text-sm">✦</span>
        </div>

        {/* Bottom Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 pt-1">
          
          {/* Copyright Text */}
          <div>
            {data.copyrightText}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            {data.legalLinks.map((link, i) => (
              <React.Fragment key={link.id}>
                {i > 0 && <span className="text-white/30">|</span>}
                <Link href={link.url} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Tagline / Made with Passion */}
          <div className="flex items-center gap-2 text-white/75">
            <span>{data.tagline}</span>
            {data.taglineIcon && renderIcon(data.taglineIcon)}
          </div>

        </div>

      </div>
    </footer>
  );
};
