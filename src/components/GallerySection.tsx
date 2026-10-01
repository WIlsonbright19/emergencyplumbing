import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_SLIDES, BUSINESS_INFO } from '../data';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : (prev + 1) % GALLERY_SLIDES.length));
  };

  const currentSlide = GALLERY_SLIDES[currentIndex];

  return (
    <section id="gallery" className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#FAF8F5]">
      {/* Full width left-to-right grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Column floating wide */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pl-1 sm:pl-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1E1D] tracking-tight leading-tight"
          >
            Welcome to Chamblee’s<br />
            most reliable plumbing team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-lg"
          >
            Our master licensed technicians arrive in fully-equipped emergency service trucks. We protect your home with floor runners and shoe booties on every service dispatch.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {/* Circular CTA */}
            <button
              onClick={onOpenBooking}
              className="group relative w-32 sm:w-36 h-32 sm:h-36 rounded-full bg-[#D4B89D] text-[#333333] hover:text-[#111111] hover:bg-[#C8AA8D] transition-all duration-300 flex items-center justify-center p-4 text-center cursor-pointer shadow-[0_8px_25px_rgba(212,184,157,0.35)] hover:scale-105 active:scale-95"
            >
              <span className="text-[11px] tracking-[0.18em] uppercase font-medium leading-snug">
                BOOK ONLINE
              </span>
              <span className="absolute inset-0 rounded-full border border-[#D4B89D]/50 scale-110 group-hover:scale-120 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#222222] text-white hover:bg-[#3d3d3d] px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <Phone size={13} className="text-[#D4B89D]" />
              <span>Call (404) 882-2499</span>
            </a>
          </div>

          {/* Slider Controls */}
          <div className="mt-10 flex items-center space-x-5">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 border border-[#D0C4BA] rounded-full hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors cursor-pointer text-[#444444]"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="text-xs tracking-widest text-[#777777] font-light">
              <span className="text-[#222222] font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(GALLERY_SLIDES.length).padStart(2, '0')}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-3 border border-[#D0C4BA] rounded-full hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors cursor-pointer text-[#444444]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Slide Showcase floating to right edge */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center pr-0 sm:pr-2">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#EFE9E2]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full h-full relative"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-6 sm:p-8 text-white">
                  <p className="text-xs uppercase tracking-widest font-light text-white/80">
                    {currentSlide.title}
                  </p>
                  <p className="text-sm sm:text-base font-light text-white/95 mt-1">
                    {currentSlide.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
