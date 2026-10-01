import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPECIALTIES, BUSINESS_INFO } from '../data';
import { ArrowRight, Phone } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyId: string) => void;
  onOpenBooking: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectSpecialty }) => {
  const [activeId, setActiveId] = useState<string>('drain');

  const activeSpecialty = SPECIALTIES.find((s) => s.id === activeId) || SPECIALTIES[0];

  return (
    <section id="specialties" className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#FAF8F5]">
      {/* Full width left-to-right grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Content Floating wide */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pl-1 sm:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-script text-3xl sm:text-4xl text-[#A08064] block -mb-1">
              Precision
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1E1D] tracking-tight">
              Our specialties
            </h2>
            <p className="mt-5 text-[#666666] text-sm sm:text-base leading-relaxed font-light max-w-lg">
              Equipped with CCTV digital pipe crawlers, 4,000-PSI hydro-jetters, and electronic slab leak listening devices for residential and commercial emergencies across Metro Atlanta.
            </p>
          </motion.div>

          {/* Specialties Interactive List */}
          <div className="mt-8 sm:mt-12 space-y-5 sm:space-y-6">
            {SPECIALTIES.map((item, index) => {
              const isSelected = item.id === activeId;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => {
                    setActiveId(item.id);
                    onSelectSpecialty(item.id);
                  }}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b transition-all duration-300 cursor-pointer ${
                    isSelected ? 'border-[#222222]' : 'border-[#E5DDD5] hover:border-[#C4A482]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-sm sm:text-base tracking-[0.16em] uppercase font-medium transition-colors ${
                        isSelected ? 'text-[#111111]' : 'text-[#777777] group-hover:text-[#111111]'
                      }`}
                    >
                      {item.name}
                    </span>
                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 ${
                        isSelected ? 'translate-x-1 text-[#222222]' : 'text-[#999999] group-hover:translate-x-1 group-hover:text-[#222222]'
                      }`}
                    />
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-light mt-1 sm:mt-0 transition-colors ${
                      isSelected ? 'text-[#444444]' : 'text-[#888888] group-hover:text-[#555555]'
                    }`}
                  >
                    {item.tagline}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Direct Call Line */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D53] hover:text-[#222222] transition-colors"
            >
              <Phone size={14} />
              <span>Need Immediate Assistance? Call (404) 882-2499</span>
            </a>
          </div>
        </div>

        {/* Right Dynamic Image Showcase floating to right edge */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center relative w-full pr-0 sm:pr-2">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#EFE9E2]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSpecialty.id}
                src={activeSpecialty.image}
                alt={activeSpecialty.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Bottom mini label */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/92 backdrop-blur-md px-5 py-3 rounded-xl border border-white/40 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-[11px] tracking-widest uppercase font-semibold text-[#222222]">
                  {activeSpecialty.name}
                </p>
                <p className="text-xs text-[#666666] font-light truncate max-w-[280px]">
                  {activeSpecialty.tagline}
                </p>
              </div>
              <button
                onClick={() => onSelectSpecialty(activeSpecialty.id)}
                className="text-[11px] tracking-wider uppercase underline font-semibold text-[#8C6D53] hover:text-[#5E4430] cursor-pointer pl-2"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
