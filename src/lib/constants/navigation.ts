import { ROUTES } from './routes';

export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: readonly NavSubItem[];
  isExternal?: boolean;
  badge?: string;
}

export const MARKETING_NAV_ITEMS: readonly NavItem[] = [
  {
    label: 'Product',
    href: ROUTES.marketing.product,
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Product Overview',
        href: ROUTES.marketing.product,
        description: 'Explore RocketScreens features, screens & players management',
      },
    ],
  },
  { label: 'Solutions', href: ROUTES.marketing.solutions, hasDropdown: true },
  { label: 'Integrations', href: ROUTES.marketing.integrations, hasDropdown: false },
  { label: 'Resources', href: ROUTES.marketing.resources, hasDropdown: false },
  { label: 'Pricing', href: ROUTES.marketing.pricing, hasDropdown: false },
] as const;

export const APP_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Screens', href: ROUTES.app.screens },
  { label: 'Players', href: ROUTES.app.players },
  { label: 'Channels', href: ROUTES.app.channels },
  { label: 'Content', href: ROUTES.app.content },
  { label: 'Playlists', href: ROUTES.app.playlists },
  { label: 'Scheduling', href: ROUTES.app.scheduling },
  { label: 'Analytics', href: ROUTES.app.analytics },
  { label: 'Settings', href: ROUTES.app.settings },
] as const;

export const NAV_ACTIONS = {
  login: {
    label: 'Login',
    href: '/login',
  },
  freeTrial: {
    label: 'Free Trial',
    href: '/free-trial',
  },
  bookDemo: {
    label: 'Book a Demo',
    href: '/book-a-demo',
  },
} as const;
