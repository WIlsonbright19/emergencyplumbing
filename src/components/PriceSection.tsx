import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRICE_LIST, BUSINESS_INFO } from '../data';
import { PriceItem } from '../types';
import { Phone } from 'lucide-react';

interface PriceSectionProps {
  onBookItem: (item: PriceItem) => void;
}

export const PriceSection: React.FC<PriceSectionProps> = ({ onBookItem }) => {
  const [activeCategory, setActiveCategory] = useState<'drain' | 'waterheater' | 'leak' | 'fixtures'>('drain');

  const categories: Array<{ id: 'drain' | 'waterheater' | 'leak' | 'fixtures'; label: string }> = [
    { id: 'drain', label: 'Drain & Hydro Jetting' },
    { id: 'waterheater', label: 'Water Heaters & Tankless' },
    { id: 'leak', label: 'Burst Pipes & Slab Leaks' },
    { id: 'fixtures', label: 'Water Filtration & Repiping' },
  ];

  const currentCategoryData = PRICE_LIST[activeCategory];

  return (
    <section id="price" className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#FAF8F5]">
      {/* Full width left-to-right grid with tight padding */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Image corresponding to active category + Call Banner */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:sticky lg:top-20 pl-1 sm:pl-4">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#EFEAE3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCategory}
                src={currentCategoryData.image}
                alt={currentCategoryData.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 justify-start w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#222222] text-white shadow-sm'
                    : 'bg-white/90 text-[#666666] hover:bg-[#EAE2D8] hover:text-[#222222] border border-[#E5DDD5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Call Box */}
          <div className="mt-4 w-full bg-white p-4 rounded-2xl border border-[#E8DFD8] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#222222]">Need an immediate quote?</p>
              <p className="text-[11px] text-[#777777]">Speak with our emergency dispatcher</p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 bg-[#8C6D53] text-white px-3.5 py-2 rounded-full text-xs font-semibold hover:bg-[#72543B] transition-colors"
            >
              <Phone size={12} />
              <span>(404) 882-2499</span>
            </a>
          </div>
        </div>

        {/* Right Column: Price Lists stretching wide across right side */}
        <div className="lg:col-span-7 flex flex-col pr-1 sm:pr-4">
          <div className="mb-6">
            <span className="font-script text-3xl sm:text-4xl text-[#A08064] block -mb-1">
              Our Rates
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F1E1D] tracking-tight">
              Honest & Upfront Atlanta Pricing
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] font-light mt-1">
              Guaranteed upfront written quote before wrench touches pipe. No hidden emergency fees.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((cat) => {
              const data = PRICE_LIST[cat.id];
              const isSelected = activeCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-65 hover:opacity-100'}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-light text-[#1F1E1D] mb-4">
                    {data.title}
                  </h3>

                  <div className="space-y-3">
                    {data.items.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          onBookItem(item);
                        }}
                        className="group flex items-baseline justify-between py-2.5 border-b border-[#EDE6DF] hover:border-[#222222] transition-colors cursor-pointer"
                      >
                        <div className="flex items-baseline space-x-3 max-w-[75%]">
                          <span className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#333333] group-hover:text-[#111111] transition-colors">
                            {item.name}
                          </span>
                          {item.duration && (
                            <span className="text-[11px] text-[#888888] font-light">
                              / {item.duration}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-sm sm:text-base font-medium text-[#222222] group-hover:text-[#A08064] transition-colors">
                            {item.price}
                          </span>
                          <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-[#A08064] font-semibold hidden sm:inline">
                            Book
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
