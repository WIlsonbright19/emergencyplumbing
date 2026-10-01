import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
      {/* 24/7 Emergency Dispatch Status */}
      <div className="hidden lg:flex items-center gap-2 bg-[#222222]/90 backdrop-blur-md text-white text-xs px-4 py-2.5 rounded-full shadow-lg border border-white/10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-light tracking-wider">
          Metro Atlanta Dispatch · <strong className="font-semibold text-emerald-400">24/7 Available</strong>
        </span>
      </div>

      {/* Action Buttons Group */}
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.15)] border border-[#E5DDD5]">
        {/* Call Primary Hotline */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Emergency Plumbing LLC"
          className="flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
        >
          <Phone size={14} className="animate-bounce" />
          <span>Call (404) 882-2499</span>
        </a>

        {/* Schedule Online */}
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#3d3d3d] text-white px-4 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Calendar size={13} />
          <span>Book 24/7</span>
        </button>
      </div>
    </div>
  );
};
