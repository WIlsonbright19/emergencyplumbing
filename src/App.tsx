import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuoteBannerSection } from './components/QuoteBannerSection';
import { MaximumResultSection } from './components/MaximumResultSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { PriceSection } from './components/PriceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { PhilosophySection } from './components/PhilosophySection';
import { BookingSection } from './components/BookingSection';
import { AddressSection } from './components/AddressSection';
import { FooterSection } from './components/FooterSection';
import { FloatingActionBar } from './components/FloatingActionBar';
import { PriceItem } from './types';

export default function App() {
  const [selectedPriceItem, setSelectedPriceItem] = useState<PriceItem | null>(null);

  const handleScrollToBooking = (item?: PriceItem) => {
    if (item) {
      setSelectedPriceItem(item);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#222222] font-sans relative selection:bg-[#D4B89D] selection:text-[#222222]">
      {/* Top Fixed Navigation with Smooth Scroll to Booking */}
      <Navbar onOpenBooking={() => handleScrollToBooking()} />

      <main className="w-full">
        {/* Section 1: Hero (100vh) */}
        <HeroSection
          onSeeServices={() => handleScrollToSection('specialties')}
          onOpenBooking={() => handleScrollToBooking()}
        />

        {/* Section 2: Quote Banner (100vh) */}
        <QuoteBannerSection />

        {/* Section 3: Maximum Result (100vh) */}
        <MaximumResultSection
          onExplore={() => handleScrollToSection('price')}
          onOpenBooking={() => handleScrollToBooking()}
        />

        {/* Section 4: Our Specialties (100vh) */}
        <SpecialtiesSection
          onSelectSpecialty={() => handleScrollToSection('price')}
          onOpenBooking={() => handleScrollToBooking()}
        />

        {/* Section 5: Our Price (100vh) */}
        <PriceSection onBookItem={(item) => handleScrollToBooking(item)} />

        {/* Section 6: Customer Testimonials Slider (100vh) */}
        <TestimonialsSection onOpenBooking={() => handleScrollToBooking()} />

        {/* Section 7: Cozy Plumbing / Fleet Gallery (100vh) */}
        <GallerySection onOpenBooking={() => handleScrollToBooking()} />

        {/* Section 8: Our Philosophy (100vh) */}
        <PhilosophySection />

        {/* Section 9: Dedicated In-Page Booking & Dispatch Section (100vh) */}
        <BookingSection selectedItem={selectedPriceItem} />

        {/* Section 10: Address & Location (100vh) */}
        <AddressSection />
      </main>

      {/* Footer & Callback */}
      <FooterSection onOpenBooking={() => handleScrollToBooking()} />

      {/* Persistent Floating Action Bar with Direct Call & In-Page Booking Scroll */}
      <FloatingActionBar onOpenBooking={() => handleScrollToBooking()} />
    </div>
  );
}
