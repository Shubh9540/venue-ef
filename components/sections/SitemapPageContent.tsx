import React from 'react';
import Link from 'next/link';
import { SitemapPageData } from '@/types/templates.types';

export const SitemapPageContent = ({ data }: { data?: SitemapPageData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-8 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-primary text-[#5a102a] mb-4">
            {data.title}
          </h2>
          <p className="text-text-light text-base lg:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-x-8 gap-y-12 mb-20">
          {data.categories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-[#5a102a] font-bold text-xs lg:text-sm tracking-wide uppercase mb-3">
                {category.title}
              </h3>
              <div className="w-full h-[1px] bg-[#5a102a] opacity-40 mb-5"></div>
              <ul className="flex flex-col gap-4">
                {category.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.url}
                      className="text-text-light hover:text-[#5a102a] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Utility Pages Footer */}
        <div className="border-t border-b border-gray-100 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
            
            <h3 className="text-[#5a102a] font-bold text-xs lg:text-sm tracking-wide uppercase whitespace-nowrap">
              {data.utilityTitle}
            </h3>
            
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-8 lg:gap-12 w-full">
              {data.utilityLinks.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link 
                    href={link.url}
                    className="text-text-light hover:text-[#5a102a] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

      </div>
    </section>
  );
};
