import { StaticImageData } from 'next/image';
import shareInsightsImg from '@/assets/Solution/want-to-achieve/share-business-insights.png';
import improveTeamImg from '@/assets/Solution/want-to-achieve/improve-team-communication.png';
import engageCustomersImg from '@/assets/Solution/want-to-achieve/engage-customers.png';
import alignOperationsImg from '@/assets/Solution/want-to-achieve/align-daily-operations.png';
import { ROUTES } from '@/lib/constants/routes';

export interface AchieveCardItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  href: string;
  linkText: string;
  image: StaticImageData;
  imageAlt: string;
}

export const ACHIEVE_CARDS: readonly AchieveCardItem[] = [
  {
    id: 'business-insights',
    titleLine1: 'Share Business',
    titleLine2: 'Insights',
    description: 'Display live dashboards, KPIs, reports, and performance updates.',
    href: ROUTES.marketing.solutions,
    linkText: 'Explore solution',
    image: shareInsightsImg,
    imageAlt: '3D business analytics cylinders with percentage metric badge',
  },
  {
    id: 'team-communication',
    titleLine1: 'Improve Team',
    titleLine2: 'Communication',
    description: 'Keep employees informed with announcements, calendars, and team updates.',
    href: ROUTES.marketing.solutions,
    linkText: 'Explore solution',
    image: improveTeamImg,
    imageAlt: '3D overlapping communication and announcement message bubbles',
  },
  {
    id: 'engage-customers',
    titleLine1: 'Engage',
    titleLine2: 'Customers',
    description: 'Present promotions, branded content, videos, and social feeds.',
    href: ROUTES.marketing.solutions,
    linkText: 'Explore solution',
    image: engageCustomersImg,
    imageAlt: '3D customer engagement figure interacting at workstation display',
  },
  {
    id: 'daily-operations',
    titleLine1: 'Align Daily',
    titleLine2: 'Operations',
    description: 'Make project progress, schedules, and operational information visible.',
    href: ROUTES.marketing.solutions,
    linkText: 'Explore solution',
    image: alignOperationsImg,
    imageAlt: '3D translucent stacked platform structure for operational coordination',
  },
] as const;

