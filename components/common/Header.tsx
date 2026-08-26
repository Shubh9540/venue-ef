'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (!data) return null;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 lg:px-12 py-3 lg:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image 
            src={data.image} 
            alt={data.imageAlt || 'Logo'} 
            width={200} 
            height={60}
            className="w-auto h-12 lg:h-16 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {data.navLinks.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link 
                key={item.id} 
                href={item.url}
                className={`font-medium transition-colors text-lg hover:text-primary ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        {data.contactButton && (
          <div className="hidden lg:block">
            <Link 
              href={data.contactButton.url}
              className="bg-primary text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-primary/90 transition-all shadow-md"
            >
              {data.contactButton.text}
            </Link>
          </div>
        )}

        {/* Mobile Menu Hamburger Button */}
        <button 
          className="lg:hidden text-2xl text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 flex flex-col px-6 py-6 gap-4 shadow-lg z-50">
          {data.navLinks.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link 
                key={item.id} 
                href={item.url}
                className={`font-medium text-lg block py-2 ${
                  isActive ? 'text-primary font-semibold' : 'text-text'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link 
              href={data.contactButton.url}
              className="bg-primary text-white px-6 py-4 rounded-md font-medium text-lg text-center w-full mt-4 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {data.contactButton.text}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
