import React from 'react';
import { LegalPageData } from '@/types/templates.types';

export const LegalPageContent = ({ data }: { data?: LegalPageData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">

          {data.lastUpdated && (
            <p className="text-text-light text-sm italic">
              Last Updated: {data.lastUpdated}
            </p>
          )}
        </div>

        <div className="space-y-10">
          {data.sections.map((section) => (
            <div key={section.id}>
              <h2 className="text-lg sm:text-xl font-bold text-[#861d43] mb-4">
                {section.title}
              </h2>
              <div className="text-text-light text-sm sm:text-base leading-relaxed space-y-4">
                {/* Splitting content by newlines to render multiple paragraphs if any */}
                {section.content.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
