import { StaticImageData } from 'next/image';
import salesImg from '@/assets/Solution/sales-laptop-chart.png';
import itImg from '@/assets/power every section/Desktop player.png';
import marketingImg from '@/assets/connect app integration card image.png';
import operationsImg from '@/assets/Benefits/Scheduling calendar illustration.png';
import customerServiceImg from '@/assets/Digital display section/Connect your fav. tool.png';

export interface DepartmentItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

export const DEPARTMENTS: readonly DepartmentItem[] = [
  {
    id: 'sales',
    title: 'Sales',
    description: 'Show goals, performance, team achievements, and progress at a glance.',
    image: salesImg,
    imageAlt: 'Sales performance dashboard displayed on a laptop with 3D metric charts and growth graphs',
  },
  {
    id: 'it',
    title: 'IT',
    description: 'Share system dashboards, service updates, and technical information with teams.',
    image: itImg,
    imageAlt: 'Enterprise IT monitor displaying technical metrics, system dashboards, and status overview',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Share campaigns, social feeds, brand messaging, and marketing results.',
    image: marketingImg,
    imageAlt: 'Marketing campaign performance, social feeds, and connected branded display cards',
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Keep project boards, team schedules, and key operational metrics visible.',
    image: operationsImg,
    imageAlt: 'Interactive operational schedule and team timeline calendar',
  },
  {
    id: 'customer-service',
    title: 'Customer Service',
    description: 'Present helpful information, service updates, and customer-facing content.',
    image: customerServiceImg,
    imageAlt: 'Customer-facing service dashboard with tools and active channel updates',
  },
] as const;

