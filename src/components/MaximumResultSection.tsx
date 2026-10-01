import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface MaximumResultSectionProps {
  onExplore: () => void;
  onOpenBooking: () => void;
}

export const MaximumResultSection: React.FC<MaximumResultSectionProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden bg-[#FAF8F5]">
      
      {/* Full width left-to-right container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Floating Image Banner */}
        <div className="hidden lg:block lg:col-span-3 h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
            alt="Emergency Plumbing LLC hydro-jetting tools"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Main Elevated Card - Floating wide */}
        <div className="lg:col-span-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/95 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#EFE8E0] text-center"
          >
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#A08064] font-medium block mb-2">
              The Emergency Plumbing Standard
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F1E1D] tracking-tight leading-snug">
              We work for maximum result.<br />
              Any burst pipe. No excuses.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#666666] leading-relaxed font-light">
              With 30 years of continuous service across Chamblee, Brookhaven, Dunwoody, and Metro Atlanta,
              our family-owned team handles everything from main sewer line collapses to emergency midnight slab leaks
              with upfront pricing and guaranteed master workmanship.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#555555]">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-600" /> Licensed & Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-600" /> Upfront Written Estimates</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-600" /> 100% Satisfaction Guarantee</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onExplore}
                className="inline-block px-6 py-3 border border-[#222222] text-[11px] tracking-[0.2em] uppercase font-medium text-[#222222] hover:bg-[#222222] hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95 rounded-full"
              >
                EXPLORE PRICING
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-md active:scale-95 rounded-full"
              >
                <Phone size={13} />
                <span>Call (404) 882-2499</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Image Banner */}
        <div className="hidden lg:block lg:col-span-3 h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop"
            alt="Emergency water heater diagnostics"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
};
