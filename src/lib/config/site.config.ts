import { BRAND_CONFIG } from '../constants/brand';

export const siteConfig = {
  name: BRAND_CONFIG.name,
  description: BRAND_CONFIG.description,
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/assets/brand/og-image.png',
  creator: '@rocketscreens',
  keywords: [
    'Digital Signage',
    'Screen Management',
    'Player Hardware',
    'Content Scheduling',
    'TV Display Software',
    'Enterprise Signage',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
