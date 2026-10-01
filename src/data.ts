import { ServiceCategory, PriceItem, GallerySlide, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: 'Emergency Plumbing, LLC',
  shortName: 'emergency plumbing.',
  tagline: '30+ Years of Trusted 24/7 Emergency Plumbing in Atlanta & Chamblee',
  phone: '(404) 882-2499',
  phoneRaw: '+14048822499',
  email: 'info@emergencyplumbersllc.com',
  address: '3898 Carlton Dr, Chamblee, GA 30341',
  googleMapsUrl: 'https://maps.google.com/?cid=6349533066239859065',
  hours: 'Open 24/7 · Rapid Emergency Dispatch Across Metro Atlanta',
  rating: '4.9 ★★★★★ (30+ Years Serving Georgia)',
  serviceAreas: 'Chamblee, Brookhaven, Dunwoody, Sandy Springs, Buckhead, Decatur, Doraville & Greater Metro Atlanta Area',
};

export const SPECIALTIES: ServiceCategory[] = [
  {
    id: 'drain',
    name: 'DRAIN & HYDRO JETTING',
    tagline: 'Sewer camera digital video diagnostics and 4,000 PSI hydro-jetting.',
    description: 'Pinpointing main sewer obstructions, tree root intrusions, and stubborn grease blockages with high-definition video inspection and powerful scouring jets.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'waterheater',
    name: 'WATER HEATERS & TANKLESS',
    tagline: 'Same-day gas, electric & tankless water heater replacements.',
    description: 'Rapid repair of leaking storage tanks, faulty heating elements, temperature relief valves, and high-efficiency tankless system installations.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'leak',
    name: 'BURST PIPES & SLAB LEAKS',
    tagline: 'Non-invasive acoustic leak detection & emergency frozen pipe repairs.',
    description: 'Locating pressurized hidden leaks beneath concrete slabs and behind finished walls before extensive drywall and structural water damage occurs.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fixtures',
    name: 'WATER FILTRATION & REPIPING',
    tagline: 'Whole-house filtration, PEX/copper repiping & luxury bath fixtures.',
    description: 'Complete home water purification, salt-free conditioners, lead-free copper & PEX repiping, and garbage disposal installations.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop',
  },
];

export const PRICE_LIST: Record<'drain' | 'waterheater' | 'leak' | 'fixtures', { title: string; image: string; items: PriceItem[] }> = {
  drain: {
    title: 'Drain & Hydro Jetting',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'HD CCTV SEWER CAMERA INSPECTION', duration: '45 MIN', price: '$89', category: 'drain' },
      { name: 'MAIN DRAIN SNAKING & ROOT REMOVAL', duration: '60 MIN', price: '$145', category: 'drain' },
      { name: '4,000 PSI HIGH-PRESSURE HYDRO JETTING', duration: '90 MIN', price: '$350', category: 'drain' },
    ],
  },
  waterheater: {
    title: 'Water Heaters & Tankless',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'DIAGNOSTIC & SEDIMENT TANK FLUSH', duration: '45 MIN', price: '$79', category: 'waterheater' },
      { name: 'HEATING ELEMENT & THERMOSTAT REPAIR', duration: '60 MIN', price: '$165', category: 'waterheater' },
      { name: 'TEMPERATURE & PRESSURE RELIEF VALVE', duration: '30 MIN', price: '$125', category: 'waterheater' },
      { name: 'TANKLESS HEATER DESCALING & TUNE-UP', duration: '60 MIN', price: '$195', category: 'waterheater' },
    ],
  },
  leak: {
    title: 'Burst Pipes & Slab Leaks',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'ELECTRONIC SLAB LEAK DETECTION', duration: '60 MIN', price: '$195', category: 'leak' },
      { name: 'ACOUSTIC WALL & UNDERFLOOR SCAN', duration: '45 MIN', price: '$150', category: 'leak' },
      { name: 'PRESSURE REGULATOR VALVE (PRV) SETUP', duration: '60 MIN', price: '$175', category: 'leak' },
      { name: 'EMERGENCY MAIN WATER SHUTOFF REPAIR', duration: '45 MIN', price: '$135', category: 'leak' },
      { name: 'BURST PIPE SECTION COUPLING & ISOLATION', duration: '60 MIN', price: '$180', category: 'leak' },
    ],
  },
  fixtures: {
    title: 'Water Filtration & Repiping',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'WHOLE-HOUSE WATER FILTRATION INSTALL', duration: '120 MIN', price: '$340', category: 'fixtures' },
      { name: 'REVERSE OSMOSIS UNDER-SINK SYSTEM', duration: '60 MIN', price: '$180', category: 'fixtures' },
      { name: 'PEX / COPPER SECTION REPIPE & VALVE', duration: '60 MIN', price: '$175', category: 'fixtures' },
    ],
  },
};

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: 1,
    title: 'Emergency Rapid Response Unit',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    caption: 'Mobile service vehicles stocked for 24/7 emergency dispatch across Atlanta & Chamblee.',
  },
  {
    id: 2,
    title: 'Master Repiping & Manifolds',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop',
    caption: 'Durable PEX and copper pipe configurations engineered for long-term water pressure stability.',
  },
  {
    id: 3,
    title: 'Hydro-Jetting & Sewer Clearing',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    caption: 'High-pressure commercial water jetting completely restoring sewer flow.',
  },
  {
    id: 4,
    title: 'Modern Fixtures & Water Heaters',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    caption: 'High-efficiency energy-saving installations completed with clean boot covers and floor mats.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: 'Marcus Vance',
    location: 'Brookhaven, GA',
    service: 'Midnight Burst Main Line Emergency',
    rating: 5,
    date: 'Verified Client',
    content:
      'A ceiling pipe ruptured at 2:15 AM on a rainy Tuesday. Emergency Plumbing had a master technician at our door in under 35 minutes. He isolated the leak, replaced the split copper segment with high-grade PEX, and left zero mess. Saved our hardwood floors from total ruin!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    verified: true,
  },
  {
    id: 2,
    author: 'Elena Richardson',
    location: 'Chamblee, GA',
    service: 'Navien Tankless Water Heater Installation',
    rating: 5,
    date: 'Verified Client',
    content:
      'Our 15-year-old hot water tank started flooding the garage. They gave us an upfront, exact quote without surprise fees, removed the old unit, and installed a Navien tankless system the very same afternoon. Endless hot water and our energy bill dropped noticeably.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    verified: true,
  },
  {
    id: 3,
    author: 'David & Caroline Sterling',
    location: 'Dunwoody, GA',
    service: 'Commercial Hydro-Jetting & Sewer Scope',
    rating: 5,
    date: 'Verified Client',
    content:
      'Two other plumbers tried snaking our main sewer line and failed, telling us we had to dig up the entire driveway for $8,000. Emergency Plumbing ran their HD sewer camera, located heavy tree root intrusion, and hydro-jetted the entire pipe crystal clear in 90 minutes. Honest, master-class professionals.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    verified: true,
  },
  {
    id: 4,
    author: 'Patricia Holloway',
    location: 'Buckhead, Atlanta, GA',
    service: 'Acoustic Slab Leak Pinpointing & Repair',
    rating: 5,
    date: 'Verified Client',
    content:
      'We heard rushing water under our kitchen tile floor and our water bill tripled. Their electronic acoustic detector pinpointed the hot water line slab fissure within 2 inches. They bypassed the pipe without jackhammering our custom kitchen tiles. Outstanding precision!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    verified: true,
  },
  {
    id: 5,
    author: 'Greg Sommer',
    location: 'Sandy Springs, GA',
    service: 'Whole-Home Water Filtration & Softener',
    rating: 5,
    date: 'Verified Client',
    content:
      'Superb craftsmanship from start to finish. The technician wore shoe covers every time he entered our house, explained the valve layout thoroughly, and our water quality is now pristine. 30 years of experience definitely shows in their work.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    verified: true,
  },
];
