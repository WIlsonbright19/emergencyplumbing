import React from 'react';
import { motion } from 'motion/react';
import { Clock, Phone, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroSectionProps {
  onSeeServices: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSeeServices }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-8 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF8F5]">
      {/* Full width left-to-right grid with little padding */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Content Column - Floating wide across left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pl-1 sm:pl-4 z-10"
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[#8C6D53]">
            <span className="flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold bg-[#EFE8E0] px-3 py-1 rounded-full">
              <Award size={12} /> 30+ Years in Metro Atlanta
            </span>
            <span className="flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold bg-[#EFE8E0] px-3 py-1 rounded-full">
              <Clock size={12} /> 24/7 Rapid Emergency Dispatch
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.08] text-[#1F1E1D]"
          >
            We deliver rapid emergency plumbing precision across Atlanta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[#666666] text-sm sm:text-base leading-relaxed font-light max-w-xl"
          >
            Emergency Plumbing, LLC provides 24/7 same-day drain cleaning, commercial hydro-jetting, water heater installation, and acoustic slab leak repair across Chamblee, Brookhaven, Dunwoody & Greater Atlanta.
          </motion.p>

          {/* Action CTAs: Circular Button + Direct Call Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <button
              onClick={onSeeServices}
              className="group relative w-32 sm:w-36 h-32 sm:h-36 rounded-full bg-[#D4B89D] text-[#333333] hover:text-[#111111] hover:bg-[#C8AA8D] transition-all duration-300 flex items-center justify-center p-4 text-center cursor-pointer shadow-[0_10px_30px_rgba(212,184,157,0.35)] hover:scale-105 active:scale-95"
            >
              <span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium leading-snug">
                SEE SERVICES
              </span>
              <span className="absolute inset-0 rounded-full border border-[#D4B89D]/50 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </button>

            {/* Direct Call Card */}
            <div className="flex flex-col space-y-1.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#222222] text-white hover:bg-[#3d3d3d] px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95"
              >
                <Phone size={14} className="text-[#D4B89D]" />
                <span>Call (404) 882-2499</span>
              </a>
              <span className="text-[11px] text-[#777777] font-light pl-1">
                ⚡ Plumbers on duty 24/7 in Chamblee & Atlanta
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Column - Floating wide to right edge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center relative w-full pr-0 sm:pr-2"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1400&auto=format&fit=crop"
              alt="Emergency Plumbing LLC modern plumbing fixtures"
              className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle overlay accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
