import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#philosophy', script: 'About' },
    { name: 'Specialties', href: '#specialties', script: 'Care' },
    { name: 'Contacts', href: '#contacts', script: 'Visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out w-full ${
          scrolled
            ? 'bg-[#FAF8F5]/92 backdrop-blur-xl py-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-b border-[#EBE3DA]'
            : 'bg-gradient-to-b from-[#FAF8F5]/95 via-[#FAF8F5]/40 to-transparent py-4'
        }`}
      >
        {/* Full width edge-to-edge container with minimal padding */}
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo pinned to left */}
          <a
            href="#"
            className="group flex items-baseline tracking-tight text-xl sm:text-2xl font-light text-[#1F1E1D] transition-transform duration-300 hover:scale-[1.01]"
          >
            <span className="tracking-tight font-serif italic pr-0.5">emergency</span>
            <span className="tracking-normal font-sans font-normal text-[#2A2826]">plumbing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A482] inline-block ml-1 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(196,164,130,0.6)]" />
          </a>

          {/* Desktop Navigation Links - Shown only on large desktop screens (xl and above) */}
          <nav className="hidden xl:flex items-center space-x-10 text-[12px] tracking-[0.2em] uppercase text-[#4A4744] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group py-1 hover:text-[#111111] transition-colors"
              >
                <span className="relative z-10">{link.name}</span>
                {link.script && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-script text-base normal-case text-[#A08064] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    {link.script}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#222222] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Direct Phone & Booking CTA - Shown on large desktop screens (xl and above) */}
          <div className="hidden xl:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-1.5 text-xs tracking-wider font-semibold text-[#8C6D53] hover:text-[#1F1E1D] bg-[#F2ECE4]/80 hover:bg-[#EAE2D7] px-3.5 py-1.5 rounded-full border border-[#DDD3C7]/80 transition-all duration-300"
            >
              <Phone size={12} className="text-[#8C6D53]" />
              <span>(404) 882-2499</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center space-x-1 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#222222] hover:text-[#8C6D53] transition-colors cursor-pointer py-1"
            >
              <span>BOOK 24/7</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#222222] group-hover:bg-[#8C6D53] transition-colors" />
            </button>
          </div>

          {/* Mobile & Tablet Actions - Active on Mobile and Tablet (< xl) */}
          <div className="flex items-center space-x-3 xl:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 bg-[#8C6D53] text-white px-3 sm:px-4 py-2 rounded-full shadow-md active:scale-95 transition-transform text-xs font-semibold"
              aria-label="Call Emergency Plumbing"
            >
              <Phone size={13} />
              <span className="hidden sm:inline">(404) 882-2499</span>
            </a>
            
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center space-x-1 bg-[#222222] text-white px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium hover:bg-[#3d3d3d] transition-colors"
            >
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#222222] rounded-lg hover:bg-black/5 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Menu Drawer - Active on Mobile and Tablet (< xl) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 top-[58px] z-40 bg-[#FAF8F5]/98 backdrop-blur-2xl flex flex-col p-6 sm:p-8 xl:hidden overflow-y-auto"
          >
            <div className="max-w-md mx-auto w-full">
              <div className="bg-gradient-to-br from-[#EFE8DF] to-[#E5DCD2] p-5 rounded-2xl border border-[#D8CEBF] text-center mb-6 shadow-sm">
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-[#8C6D53] block mb-1">
                  24/7 Atlanta & Chamblee Hotline
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xl sm:text-2xl font-semibold text-[#222222] flex items-center justify-center gap-2 hover:text-[#8C6D53] transition-colors"
                >
                  <Phone size={18} className="text-[#8C6D53]" />
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-[#777777] mt-1 font-light">
                  Rapid Emergency Plumber Dispatch Across Metro Atlanta
                </p>
              </div>

              <div className="flex flex-col space-y-3.5 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg sm:text-xl uppercase tracking-[0.2em] font-light text-[#333333] hover:text-[#8C6D53] transition-colors py-2.5 border-b border-[#EFE9E2]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-6 mt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-4 bg-[#222222] hover:bg-[#383634] text-white uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold rounded-full shadow-lg text-center cursor-pointer active:scale-98 transition-all"
                >
                  SCHEDULE 24/7 DISPATCH
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
