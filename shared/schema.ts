import { z } from "zod";

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'main' | 'activity';
  fullDescription?: string;
  impact?: string[];
  beneficiaries?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface Partner {
  name: string;
  description: string;
  logo?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'sports' | 'school' | 'camps' | 'jobfairs' | 'community' | 'achievements';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
