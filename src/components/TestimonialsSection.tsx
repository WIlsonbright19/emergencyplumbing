import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Quote, ShieldCheck, Phone, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Optional subtle auto-advance timer when not paused
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background ambient lighting motion shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-16 -left-20 w-96 h-96 bg-[#F2E8DC]/50 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className="absolute -bottom-20 -right-20 w-[420px] h-[420px] bg-[#E8DDD0]/40 rounded-full blur-3xl pointer-events-none"
      />

      {/* Full width left-to-right grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Heading & Trust Statistics floating wide */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center pl-1 sm:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-script text-3xl sm:text-4xl text-[#A08064] block -mb-1">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1E1D] tracking-tight leading-[1.12]">
              Trusted by Atlanta<br />
              homeowners 24/7
            </h2>

            <p className="mt-5 text-[#666666] text-sm sm:text-base leading-relaxed font-light max-w-lg">
              Read how our 30+ years of master plumbing craftsmanship and transparent emergency dispatch have protected Georgia families and properties during sudden plumbing failures.
            </p>
          </motion.div>

          {/* Social Proof Badges with scroll reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8DFD8] shadow-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#222222]">4.9 / 5.0 Rating</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#EFE9E2] text-[#8C6D53] px-3.5 py-2.5 rounded-2xl text-xs font-medium border border-[#DDD4CB]">
              <ShieldCheck size={14} />
              <span>30+ Years Licensed in GA</span>
            </div>
          </motion.div>

          {/* Direct CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <Phone size={13} />
              <span>Call (404) 882-2499</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-block px-5 py-3 border border-[#222222] text-[11px] tracking-[0.2em] uppercase font-medium text-[#222222] hover:bg-[#222222] hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95 rounded-full"
            >
              BOOK DISPATCH
            </button>
          </motion.div>

          {/* Slider Navigation & Counter Controls */}
          <div className="mt-10 flex items-center space-x-6">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3.5 border border-[#D0C4BA] rounded-full hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors cursor-pointer text-[#444444] shadow-sm active:scale-95"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Slide indicators / numeric */}
            <div className="flex items-center space-x-3 text-xs tracking-widest text-[#777777] font-light">
              <span className="text-[#1F1E1D] font-bold text-sm">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#C0B4A8]">/</span>
              <span>{String(TESTIMONIALS.length).padStart(2, '0')}</span>

              <div className="flex space-x-1.5 ml-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-[#8C6D53]' : 'w-2 bg-[#DDD3C7] hover:bg-[#A08064]'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3.5 border border-[#D0C4BA] rounded-full hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors cursor-pointer text-[#444444] shadow-sm active:scale-95"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Slider Card floating wide to right edge */}
        <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-center pr-0 sm:pr-2">
          <div className="w-full relative min-h-[380px] sm:min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-white/95 backdrop-blur-xl p-7 sm:p-10 md:p-12 rounded-3xl sm:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#EFE8E0] relative overflow-hidden"
              >
                {/* Decorative Giant Quote icon */}
                <div className="absolute top-6 right-6 text-[#F2ECE4] pointer-events-none select-none">
                  <Quote size={80} strokeWidth={1} className="rotate-180" />
                </div>

                {/* Rating */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-base sm:text-lg md:text-xl font-light text-[#222222] leading-relaxed italic relative z-10">
                  “{currentTestimonial.content}”
                </p>

                {/* Author Details with Avatar */}
                <div className="mt-8 pt-6 border-t border-[#EFE8E0] flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#D4B89D]/40 shadow-sm"
                    />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="text-sm sm:text-base font-medium text-[#1F1E1D] tracking-wide">
                          {currentTestimonial.author}
                        </h4>
                        {currentTestimonial.verified && (
                          <span
                            title="Verified Client"
                            className="inline-flex text-emerald-600"
                          >
                            <CheckCircle size={14} />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#777777] font-light">
                        {currentTestimonial.location} · <span className="text-emerald-700 font-medium">Verified Homeowner</span>
                      </p>
                    </div>
                  </div>

                  {/* Google Reviews Logo Pill */}
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center text-[11px] tracking-wider uppercase font-semibold text-[#8C6D53] hover:text-[#222222] transition-colors"
                  >
                    Google Review ↗
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
