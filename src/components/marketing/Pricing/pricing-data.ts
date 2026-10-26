import { ROUTES } from '@/lib/constants/routes';

export type BillingCycle = 'monthly' | 'yearly';

export interface PricingPlanFeature {
  text: string;
  badge?: string; // e.g. '*' or '**' for footnotes if needed
}

export interface PricingPlan {
  id: 'standard' | 'professional' | 'enterprise';
  name: string;
  badge?: string;
  priceDisplay: {
    monthly: string;
    yearly: string;
  };
  periodDisplay: {
    monthly: string;
    yearly: string;
  };
  billingNote: {
    monthly: string;
    yearly: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
    variant: 'primary' | 'brand-outline';
  };
  featuresHeading: string;
  features: string[];
  supportingNote: string;
  isRecommended?: boolean;
}

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: 'standard',
    name: 'STANDARD',
    priceDisplay: {
      monthly: '$10',
      yearly: '$10', // Preserving configured monthly baseline without inventing annual rates
    },
    periodDisplay: {
      monthly: '/month',
      yearly: '/month (billed annually)',
    },
    billingNote: {
      monthly: 'Save 33% by paying annually!',
      yearly: 'Save 33% by paying annually!',
    },
    description:
      'A simple starting point for teams managing digital signage across a focused network.',
    cta: {
      label: 'Start Free Trial',
      href: '/free-trial',
      variant: 'brand-outline',
    },
    featuresHeading: 'Standard plan includes',
    features: [
      'Physical Players',
      'Desktop Players',
      'Up to 10 CMS Users',
      'Single Workspace',
      '10GB of Storage',
      'Up to 10 Channels',
    ],
    supportingNote:
      'Per screen, billed monthly or annually depending on the plan chosen.',
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    badge: 'MOST RECOMMENDED',
    isRecommended: true,
    priceDisplay: {
      monthly: '$20',
      yearly: '$20',
    },
    periodDisplay: {
      monthly: '/month',
      yearly: '/month (billed annually)',
    },
    billingNote: {
      monthly: 'Save 20% by paying annually!',
      yearly: 'Save 20% by paying annually!',
    },
    description:
      'More control for growing teams that need scheduling, collaboration, and richer apps.',
    cta: {
      label: 'Start Free Trial',
      href: '/free-trial',
      variant: 'primary',
    },
    featuresHeading: 'Includes everything in Standard, plus',
    features: [
      'Web Players*',
      'Schedules',
      'Announcements',
      'Premium Apps',
      'Up to 5 Workspaces',
      'Up to 50 CMS Users',
      '30GB of Storage',
      'Up to 120+ Standard & Pro Apps',
    ],
    supportingNote:
      'Per screen, billed monthly or annually depending on the plan chosen.',
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    priceDisplay: {
      monthly: 'Contact for Pricing',
      yearly: 'Contact for Pricing',
    },
    periodDisplay: {
      monthly: '',
      yearly: '',
    },
    billingNote: {
      monthly: 'Tailored to your needs',
      yearly: 'Tailored to your needs',
    },
    description:
      'Advanced security, customization, integrations, and dedicated support.',
    cta: {
      label: 'Contact Sales',
      href: ROUTES.marketing.contact,
      variant: 'brand-outline',
    },
    featuresHeading: 'Includes everything in Professional, plus',
    features: [
      'Streams**',
      'SSO',
      'Whitelabel',
      'Dedicated Environments',
      'Custom Integrations',
      'API Access',
      'Unlimited CMS Users',
      'Unlimited Workspaces',
      '50GB of Storage',
      'Unlimited Channels',
      'Unlimited Apps',
      'Chat Support',
    ],
    supportingNote: 'Billed annually. Minimum screens required.',
  },
] as const;
