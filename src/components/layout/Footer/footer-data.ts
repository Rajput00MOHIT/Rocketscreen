import { ROUTES } from '@/lib/constants/routes';

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterNavGroup {
  heading: string;
  links: readonly FooterLink[];
}

export const FOOTER_COMPANY_LINKS: readonly FooterLink[] = [
  { label: 'About Us', href: ROUTES.marketing.about },
  { label: 'Product', href: ROUTES.marketing.features },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Us', href: ROUTES.marketing.contact },
] as const;

export const FOOTER_RESOURCES_LINKS: readonly FooterLink[] = [
  { label: 'Video Tutorials', href: ROUTES.marketing.resources },
  { label: 'Blog', href: ROUTES.marketing.resources },
  { label: 'FAQs', href: '#faq' },
] as const;

export const FOOTER_CONTACT_DATA = {
  heading: 'Contact',
  company: 'RocketScreens Solutions, LLC',
  address: 'Frisco, TX 75033',
  email: 'info@rocketscreens.com',
} as const;

export const FOOTER_LEGAL_LINKS: readonly FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
] as const;
