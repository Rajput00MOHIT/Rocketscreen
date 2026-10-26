/**
 * Centralized Route Map for Marketing and Application
 */

export const ROUTES = {
  marketing: {
    home: '/',
    product: '/product',
    features: '/features',
    solutions: '/solutions',
    integrations: '/integrations',
    pricing: '/pricing',
    resources: '/resources',
    about: '/about',
    contact: '/contact',
    faq: '/faq',
  },
  app: {
    dashboard: '/app',
    screens: '/app/screens',
    players: '/app/players',
    channels: '/app/channels',
    content: '/app/content',
    playlists: '/app/playlists',
    scheduling: '/app/scheduling',
    analytics: '/app/analytics',
    organizations: '/app/organizations',
    settings: '/app/settings',
    billing: '/app/settings/billing',
  },
} as const;

export type AppRoute = typeof ROUTES;
