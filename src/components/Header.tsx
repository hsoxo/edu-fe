'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/course-overview' },
  { label: 'After-School', href: '/after-school' },
  { label: 'Education Planning', href: '/education-planning' },
  { label: 'About Us', href: '/about-us' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 relative">
      {/* Top bar */}
      <div className="w-full h-10 flex items-center justify-end text-lg px-4 bg-slate-100 text-gray-700">
        <div className="container mx-auto px-4 flex items-center justify-end h-10">
          <Link className="pr-2 border-r-2 border-gray-300 mr-2 font-bold cursor-pointer" href="/#contact">
            Book a Trial
          </Link>
          <span className="font-semibold">236-989-1968</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-32 lg:h-40">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              alt="VanLearn Education"
              width={100}
              height={100}
              className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
            />
            <Link href="/" className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-[36px] text-rose-600 font-semibold pb-2 sm:pb-3">
                温 学 国 际
              </div>
              <div className="text-base sm:text-lg lg:text-[24px] text-gray-500 -mt-1">VanLearn Education</div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center text-gray-600 whitespace-nowrap text-lg">
            {NAV_ITEMS.map(item => (
              <Link
                href={item.href}
                key={item.label}
                className="font-semibold h-40 px-2 rounded hover:text-slate-600 hover:bg-slate-100 transition-colors flex items-center"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-40 left-0 w-full bg-white shadow-lg z-40 overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col divide-y divide-gray-200 px-4">
          <Link
            href="/course-overview"
            className="block px-2 py-4 text-lg sm:text-xl font-semibold text-gray-700 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Course Overview
          </Link>
          <Link
            href="/after-school"
            className="block px-2 py-4 text-lg sm:text-xl font-semibold text-gray-700 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            After School Services
          </Link>
          <Link
            href="/about-us"
            className="block px-2 py-4 text-lg sm:text-xl font-semibold text-gray-700 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
