import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogDetailSidebarData } from '@/types/templates.types';
import { FaCalendarAlt, FaBriefcase, FaLightbulb, FaInfoCircle, FaBuilding } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaInfoCircle': return <FaInfoCircle />;
    case 'FaBuilding': return <FaBuilding />;
    default: return <FaInfoCircle />;
  }
};

export const BlogDetailSidebar = ({ data }: { data: BlogDetailSidebarData }) => {
  return (
    <aside className="w-full space-y-12">
      
      {/* Related Posts */}
      <div>
        <h3 className="text-xl font-bold text-[#861d43] mb-6 pb-2 border-b-2 border-[#fdfaf6] inline-block">
          Related Posts
        </h3>
        <div className="space-y-6">
          {data.relatedPosts.map((post) => (
            <Link href={post.url} key={post.id} className="flex items-center gap-4 group">
              <div className="relative w-24 h-20 rounded-md overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary leading-tight mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-text-light">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-bold text-[#861d43] mb-6 pb-2 border-b-2 border-[#fdfaf6] inline-block">
          Categories
        </h3>
        <ul className="space-y-3">
          {data.categories.map((cat) => (
            <li key={cat.id}>
              <Link 
                href={`/blogs?category=${cat.id}`}
                className="flex items-center justify-between p-3 rounded-md hover:bg-[#fdfaf6] transition-colors group"
              >
                <div className="flex items-center gap-3 text-sm text-text-light group-hover:text-[#861d43] transition-colors">
                  <span className="text-accent">{renderIcon(cat.icon)}</span>
                  <span>{cat.name}</span>
                </div>

              </Link>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};
