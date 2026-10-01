import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Wrench, AlertCircle, Phone, PhoneCall, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { PriceItem } from '../types';

interface BookingSectionProps {
  selectedItem?: PriceItem | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedItem }) => {
  const [selectedService, setSelectedService] = useState<string>(
    selectedItem ? `${selectedItem.name} (${selectedItem.price})` : 'HD CCTV SEWER CAMERA INSPECTION ($89)'
  );
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('emergency');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-01');
  const [selectedTime, setSelectedTime] = useState<string>('Immediate Emergency (Within 45 Mins)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Chamblee');
  const [issueDetails, setIssueDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync if parent passes a clicked price item
  React.useEffect(() => {
    if (selectedItem) {
      setSelectedService(`${selectedItem.name} (${selectedItem.price})`);
    }
  }, [selectedItem]);

  const services = [
    'HD CCTV SEWER CAMERA INSPECTION ($89)',
    'MAIN DRAIN SNAKING & ROOT REMOVAL ($145)',
    '4,000 PSI HIGH-PRESSURE HYDRO JETTING ($350)',
    'DIAGNOSTIC & SEDIMENT TANK FLUSH ($79)',
    'HEATING ELEMENT & THERMOSTAT REPAIR ($165)',
    'TANKLESS HEATER DESCALING & TUNE-UP ($195)',
    'ELECTRONIC SLAB LEAK DETECTION ($195)',
    'ACOUSTIC WALL & UNDERFLOOR SCAN ($150)',
    'BURST PIPE SECTION COUPLING & ISOLATION ($180)',
    'WHOLE-HOUSE WATER FILTRATION INSTALL ($340)',
    'REVERSE OSMOSIS UNDER-SINK SYSTEM ($180)',
    'PEX / COPPER SECTION REPIPE & VALVE ($175)',
    'SAME-DAY 24/7 EMERGENCY DISPATCH (Diagnose On-Site)',
  ];

  const atlantaCities = [
    'Chamblee',
    'Brookhaven',
    'Dunwoody',
    'Sandy Springs',
    'Buckhead',
    'Decatur',
    'Doraville',
    'Atlanta',
    'Roswell',
  ];

  const timeSlots = [
    'Immediate Emergency (Within 45 Mins)',
    'Morning (8:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)',
    'Night / 24/7 Window',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setAddress('');
    setIssueDetails('');
  };

  return (
    <section
      id="booking"
      className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-4 w-96 h-96 bg-[#F2E8DC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-4 w-96 h-96 bg-[#E8DDD0]/35 rounded-full blur-3xl pointer-events-none" />

      {/* Full width left-to-right grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & Reassurance floating wide */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center pl-1 sm:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl sm:text-4xl text-[#A08064] block -mb-1">
              Booking
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1E1D] tracking-tight leading-[1.1]">
              Schedule your<br />
              emergency dispatch
            </h2>

            <p className="mt-5 text-[#666666] text-sm sm:text-base leading-relaxed font-light max-w-lg">
              Book a master plumber directly online with upfront pricing and rapid arrival across Chamblee, Brookhaven, Dunwoody & Greater Atlanta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 space-y-3 max-w-md"
          >
            <div className="flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E8DFD8] shadow-sm">
              <div className="w-9 h-9 rounded-full bg-[#EFE9E2] text-[#8C6D53] flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#222222]">24/7 Rapid Emergency Response</h4>
                <p className="text-[11px] text-[#777777]">Plumbers on duty around the clock, 365 days a year</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E8DFD8] shadow-sm">
              <div className="w-9 h-9 rounded-full bg-[#EFE9E2] text-[#8C6D53] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#222222]">Upfront Written Pricing</h4>
                <p className="text-[11px] text-[#777777]">No surprise emergency fees or hidden charges</p>
              </div>
            </div>
          </motion.div>

          {/* Immediate Phone Hotline Card */}
          <div className="mt-8">
            <p className="text-xs text-[#777777] mb-2 font-light">Prefer to speak directly with our dispatcher?</p>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#8C6D53] hover:bg-[#72543B] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <PhoneCall size={14} />
              <span>Call Direct: (404) 882-2499</span>
            </a>
          </div>
        </div>

        {/* Right Column: Minimalist In-Page Booking Form */}
        <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-center pr-0 sm:pr-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#EFE8E0]"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#EFE9E2] text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-inner">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#1F1E1D]">
                  Booking Received Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] mt-2 font-light max-w-md mx-auto">
                  Our Chamblee dispatcher has received your emergency request and will call you shortly to confirm technician arrival.
                </p>

                <div className="mt-6 p-4 sm:p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE2D8] text-left text-xs space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-[#888888]">Client Name:</span>
                    <span className="font-semibold text-[#222222]">{name || 'Client'} ({phone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888888]">Selected Service:</span>
                    <span className="font-semibold text-[#222222] text-right truncate max-w-[220px]">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888888]">Scheduled Window:</span>
                    <span className="font-semibold text-[#222222]">{selectedDate} · {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888888]">Location:</span>
                    <span className="font-semibold text-[#222222]">{address ? `${address}, ${city}, GA` : `${city}, GA`}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#222222] text-white uppercase tracking-widest text-xs font-medium rounded-full hover:bg-[#3d3d3d] transition-colors cursor-pointer shadow-sm"
                  >
                    Book Another Service
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-6 py-3 bg-[#8C6D53] text-white uppercase tracking-widest text-xs font-semibold rounded-full hover:bg-[#72543B] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Phone size={13} />
                    <span>Call Hotline</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EDE6DF]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#1F1E1D]">
                      Online Service Request
                    </h3>
                    <p className="text-xs text-[#777777] font-light mt-0.5">
                      Fast 1-minute dispatch confirmation
                    </p>
                  </div>

                  {/* Urgency Toggle */}
                  <div className="flex bg-[#EFE9E2] p-1 rounded-xl text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setUrgency('standard')}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        urgency === 'standard' ? 'bg-white shadow text-[#222222]' : 'text-[#666666]'
                      }`}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUrgency('emergency');
                        setSelectedTime('Immediate Emergency (Within 45 Mins)');
                      }}
                      className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        urgency === 'emergency' ? 'bg-[#A8422B] text-white shadow' : 'text-[#8C6D53]'
                      }`}
                    >
                      <AlertCircle size={12} /> 24/7 Urgent
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium flex items-center gap-1">
                      <Wrench size={12} /> Service Required
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                    >
                      {services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City & Street Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-1">
                      <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        City / Area
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                      >
                        {atlantaCities.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 3898 Carlton Dr"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                      />
                    </div>
                  </div>

                  {/* Preferred Date & Arrival Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium flex items-center gap-1">
                        <Calendar size={12} /> Preferred Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min="2026-10-01"
                        required
                        className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium flex items-center gap-1">
                        <Clock size={12} /> Arrival Window
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Customer Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. David Miller"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Direct Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(404) 000-0000"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                      />
                    </div>
                  </div>

                  {/* Issue details */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                      Brief Description of Issue (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Water heater leaking, main drain clogged in basement"
                      value={issueDetails}
                      onChange={(e) => setIssueDetails(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD4CB] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#222222]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 sm:py-4 bg-[#222222] text-white uppercase tracking-[0.2em] text-xs font-semibold rounded-2xl hover:bg-[#3d3d3d] transition-all cursor-pointer shadow-md active:scale-99"
                  >
                    {urgency === 'emergency' ? 'CONFIRM EMERGENCY DISPATCH' : 'SCHEDULE SERVICE APPOINTMENT'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
