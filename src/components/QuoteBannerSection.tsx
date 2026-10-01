import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const QuoteBannerSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-14 sm:py-20 overflow-hidden bg-[#FAF8F5]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-[#F2E8DC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-[#E8DDD0]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full text-center relative z-10 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.25] sm:leading-[1.3] text-[#1F1E1D] tracking-tight max-w-6xl mx-auto"
        >
          <span>Are you ready to restore seamless </span>
          
          {/* Inline capsule image */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block align-middle mx-1.5 sm:mx-3.5 w-16 sm:w-24 md:w-28 h-8 sm:h-12 md:h-14 rounded-full overflow-hidden border border-[#D4B89D]/60 shadow-md transform hover:scale-110 transition-transform duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=400&auto=format&fit=crop"
              alt="Clean PEX pipe and valve assembly"
              className="w-full h-full object-cover"
            />
          </motion.span>

          <span>peace</span>
          <br className="hidden sm:block" />
          <span> with Georgia’s premier emergency plumbing crew?</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 sm:mt-12 flex flex-col items-center justify-center space-y-4"
        >
          <div className="w-16 h-[1px] bg-[#C4A482]" />
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <Phone size={13} />
              <span>Call Direct: (404) 882-2499</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
