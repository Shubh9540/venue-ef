import React from 'react';
import Image from 'next/image';
import { BlogDetailData } from '@/types/templates.types';
import { FaCalendarAlt, FaRegClock, FaUserAlt, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

export const BlogDetailContent = ({ data }: { data: BlogDetailData }) => {
  return (
    <article className="w-full">
      {/* Meta Badge */}
      <div className="mb-4">
        <span className="inline-block bg-[#fdfaf6] text-[#861d43] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
          {data.badge}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight font-primary">
        {data.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-text-light mb-8">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-accent" />
          <span>{data.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock className="text-accent" />
          <span>{data.readTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserAlt className="text-accent" />
          <span>{data.author}</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-10 shadow-lg">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {data.contentSections.map((section, idx) => {
          if (section.type === 'text') {
            const paragraphs = (section.content as string).split('\n\n');
            return (
              <div key={idx} className="space-y-4 text-text-light text-sm sm:text-base leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            );
          }
          
          if (section.type === 'heading') {
            return (
              <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-[#861d43] mt-10 mb-4 font-primary">
                {section.content}
              </h2>
            );
          }

          if (section.type === 'quote') {
            return (
              <blockquote key={idx} className="bg-[#fdfaf6] p-6 rounded-lg my-8 flex items-start gap-4">
                <FaQuoteLeft className="text-[#861d43] text-2xl shrink-0 mt-1" />
                <p className="text-primary font-semibold text-lg italic font-serif">
                  {section.content}
                </p>
              </blockquote>
            );
          }

          if (section.type === 'list') {
            const items = Array.isArray(section.content) ? section.content : [section.content];
            return (
              <ul key={idx} className="space-y-3 my-6">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#861d43] mt-1 shrink-0" />
                    <span className="text-text-light text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </article>
  );
};
