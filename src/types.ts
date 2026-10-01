export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
}

export interface PriceItem {
  name: string;
  duration?: string;
  price: string;
  category: 'drain' | 'waterheater' | 'leak' | 'fixtures';
}

export interface GallerySlide {
  id: number;
  title: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: number;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
  verified: boolean;
}
