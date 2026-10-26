import { StaticImageData } from 'next/image';
import connectFavToolImg from '@/assets/Digital display section/Connect your fav. tool.png';
import allInOnePlaceImg from '@/assets/Digital display section/all in one place.png';
import createChanelWayImg from '@/assets/Digital display section/create your chanel way.png';
import manageAllScreenImg from '@/assets/Digital display section/manage all screen.png';
import showScreenAtATimeImg from '@/assets/Digital display section/shwo screen at a time.png';

export interface ProductCapabilityItem {
  id: string;
  category: string;
  heading: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  /** 'text-left' = text on left, visual on right; 'text-right' = visual on left, text on right */
  layoutDirection: 'text-left' | 'text-right';
}

export const PRODUCT_CAPABILITIES: readonly ProductCapabilityItem[] = [
  {
    id: 'integrations',
    category: 'Integrations',
    heading: 'Connect Your Favorite Tools',
    description:
      'Bring your business tools together and display important data from connected platforms on your screens.',
    image: connectFavToolImg,
    imageAlt:
      'RocketScreens workspace integrations panel showing connected tools including Google, Jira, and Salesforce with connect status indicators',
    layoutDirection: 'text-left',
  },
  {
    id: 'content',
    category: 'Apps',
    heading: 'All Your Content in One Place',
    description:
      'Access 150+ apps for dashboards, social feeds, videos, reports, and business updates.',
    image: allInOnePlaceImg,
    imageAlt:
      'RocketScreens apps and content library showing folders, media cards, and content organization toolbar',
    layoutDirection: 'text-right',
  },
  {
    id: 'channels',
    category: 'Channels',
    heading: 'Create Channels Your Way',
    description:
      'Combine apps, images, videos, and presentations into playlists ready to display on your screens.',
    image: createChanelWayImg,
    imageAlt:
      'RocketScreens channel builder showing channels list, playlist items, and presentation layout options',
    layoutDirection: 'text-left',
  },
  {
    id: 'players',
    category: 'Players',
    heading: 'Manage Every Screen',
    description:
      'Connect, monitor, manage, and edit players to display the right content whenever you need it.',
    image: manageAllScreenImg,
    imageAlt:
      'RocketScreens player and display management interface with player registration and device controls',
    layoutDirection: 'text-right',
  },
  {
    id: 'scheduling',
    category: 'Schedules',
    heading: 'Show Content at the Right Time',
    description:
      'Schedule channels to play at specific times and keep your screens organized automatically.',
    image: showScreenAtATimeImg,
    imageAlt:
      'RocketScreens scheduling interface for planning timetable and automated dayparting for digital signage',
    layoutDirection: 'text-left',
  },
] as const;
