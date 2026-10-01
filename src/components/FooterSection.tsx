import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, MapPin, Clock, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FooterSectionProps {
  onOpenBooking: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenBooking }) => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError('Please enter your phone number');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <footer className="w-full bg-[#FAF8F5] pt-14 pb-20 px-3 sm:px-6 lg:px-8 border-t border-[#EAE2D8]">
      {/* Full width container spanning left to right */}
      <div className="w-full">
        
        {/* Callback Section */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F1E1D] leading-snug"
          >
            For emergency repairs or estimates, leave your phone number and our master plumber will call you immediately
          </motion.h3>

          <form onSubmit={handleSubmit} className="mt-8 relative max-w-lg mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-[#EFE9E2] rounded-xl text-sm text-[#443322] flex items-center justify-center space-x-2 shadow-sm"
              >
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Thank you! Our Chamblee dispatcher will call you within minutes.</span>
              </motion.div>
            ) : (
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your Phone Number"
                  className="w-full bg-transparent border-b border-[#222222] py-3.5 pr-12 text-sm sm:text-base text-[#222222] placeholder:text-[#999999] focus:outline-none focus:border-[#A08064] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit phone number"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#222222] hover:text-[#A08064] transition-colors cursor-pointer"
                >
                  <ArrowRight size={22} />
                </button>
              </div>
            )}
            {error && <p className="text-xs text-red-500 text-left mt-2">{error}</p>}
          </form>

          {/* Quick Call Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
            >
              <PhoneCall size={14} />
              <span>Call (404) 882-2499</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Grid spanning wide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pt-10 border-t border-[#E8DFD8]">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col justify-between pl-1 sm:pl-2">
            <div>
              <a href="#" className="text-2xl sm:text-3xl font-light tracking-wide text-[#222222]">
                emergency plumbing<span className="text-[#C4A482]">.</span>
                <span className="text-xs uppercase tracking-widest text-[#777777] block mt-1">
                  Emergency Plumbing, LLC
                </span>
              </a>
              <p className="mt-4 text-xs sm:text-sm text-[#777777] font-light leading-relaxed max-w-sm">
                Over 30 years of trusted 24/7 emergency plumbing, drain cleaning, water heaters, and slab leak detection across Chamblee & Greater Atlanta.
              </p>
            </div>

            <div className="mt-6 md:mt-8 space-y-2 text-xs sm:text-sm text-[#666666]">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#8C6D53]" />
                {BUSINESS_INFO.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={14} className="text-[#8C6D53]" />
                {BUSINESS_INFO.hours}
              </p>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#222222] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm tracking-wider text-[#555555]">
              <li>
                <a href="#philosophy" className="hover:text-[#111111] transition-colors">
                  About Our Team
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-[#111111] transition-colors">
                  Our Specialties
                </a>
              </li>
              <li>
                <a href="#price" className="hover:text-[#111111] transition-colors">
                  Upfront Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#111111] transition-colors">
                  Client Reviews & Trust
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#111111] transition-colors">
                  Online Booking
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#111111] transition-colors">
                  Response Gallery
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-[#111111] transition-colors">
                  Atlanta Service Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Core Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#222222] mb-4">
              Plumbing Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm tracking-wider text-[#555555]">
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#111111] transition-colors text-left cursor-pointer">
                  Hydro Jetting & Snaking
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#111111] transition-colors text-left cursor-pointer">
                  Tankless Water Heaters
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#111111] transition-colors text-left cursor-pointer">
                  Burst Pipe & Slab Leaks
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#111111] transition-colors text-left cursor-pointer">
                  Whole-House Water Filtration
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#111111] transition-colors text-left cursor-pointer">
                  CCTV Sewer Inspection
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Call */}
          <div className="md:col-span-2 pr-1 sm:pr-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#222222] mb-4">
              24/7 Hotline
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm tracking-wider text-[#555555]">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-[#8C6D53] hover:text-[#222222] transition-colors flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-[#666666] hover:text-[#222222] transition-colors text-xs truncate block"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-950 transition-colors"
                >
                  Google Maps Profile
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#EAE2D8] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#888888] font-light">
          <p>© {new Date().getFullYear()} Emergency Plumbing, LLC. Master Licensed, Bonded & Insured in GA.</p>
          <p className="mt-2 sm:mt-0">3898 Carlton Dr, Chamblee, GA 30341</p>
        </div>

      </div>
    </footer>
  );
};
