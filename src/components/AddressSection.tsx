import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Star, Phone, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const AddressSection: React.FC = () => {
  return (
    <section id="contacts" className="relative min-h-screen w-full flex flex-col justify-center items-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#FAF8F5]">
      
      {/* Header Info spanning wide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-6 z-10 px-2"
      >
        <span className="font-script text-3xl sm:text-4xl text-[#A08064] block -mb-1">
          Address
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1F1E1D] tracking-tight">
          Emergency Plumbing, LLC
        </h2>
        
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base text-[#666666] font-light">
          <p className="flex items-center space-x-1.5">
            <MapPin size={16} className="text-[#A08064]" />
            <span>{BUSINESS_INFO.address}</span>
          </p>
          <span className="hidden sm:inline text-[#CCC]">|</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center space-x-1.5 text-[#8C6D53] hover:underline font-semibold"
          >
            <Phone size={15} />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </motion.div>

      {/* Wide Workshop / Service Fleet Showcase floating edge to edge */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#EFE9E2] aspect-[16/9] sm:aspect-[21/9] max-h-[580px]"
      >
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1800&auto=format&fit=crop"
          alt="Emergency Plumbing LLC Headquarters in Chamblee GA"
          className="w-full h-full object-cover object-center"
        />

        {/* Interactive Action Buttons */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-3">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-[#222222] hover:bg-[#222222] hover:text-white transition-all duration-300 shadow-lg"
          >
            <Navigation size={14} />
            <span>Open on Google Maps</span>
          </a>
          
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center space-x-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-5 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg"
          >
            <PhoneCall size={14} />
            <span>Call (404) 882-2499</span>
          </a>
        </div>
      </motion.div>

    </section>
  );
};
