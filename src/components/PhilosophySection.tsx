import React from 'react';
import { motion } from 'motion/react';
import { Phone, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#FAF8F5]">
      {/* Full width left-to-right grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Master Plumber Photo anchored to left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center pl-1 sm:pl-4"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#EFE9E2]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
              alt="Emergency Plumbing LLC Master Plumber & Founder"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#8C6D53]" />
                <span className="text-xs font-semibold text-[#222222]">30+ Years in Georgia</span>
              </div>
              <span className="text-[11px] text-[#777777]">Family-Owned & Operated</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Philosophy Content stretching wide across right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center pr-1 sm:pr-4"
        >
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#A08064] block -mb-1">
              About
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1E1D] tracking-tight">
              Our philosophy
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-2xl">
            <p>
              Emergency plumbing is about more than just turning wrenches—it is about restoring order, security, and tranquility to families and businesses facing sudden crises.
            </p>
            <p>
              For three decades across Chamblee, Brookhaven, Dunwoody, and Greater Atlanta, we have built our reputation on immediate arrival, clear upfront estimates, and respectful job site care.
            </p>
            <p>
              Whether it is a burst waterline at 3:00 AM or a complex tankless water heater conversion, our master plumbers treat your property with absolute precision.
            </p>
          </div>

          {/* Signature & Direct Call */}
          <div className="mt-8 pt-6 border-t border-[#EDE4DB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-[#222222] tracking-wide">
                Emergency Plumbing Leadership
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#998877] mt-0.5">
                Licensed Master Plumbers · Chamblee, GA
              </p>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 self-start sm:self-auto"
            >
              <Phone size={13} />
              <span>Call (404) 882-2499</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
