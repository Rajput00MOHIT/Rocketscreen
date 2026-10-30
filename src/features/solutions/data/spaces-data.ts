/**
 * Spaces Data for "What Do You Want to Achieve?" Spaces Section
 */

export interface SpaceItem {
  id: string;
  title: string;
  titleLine1?: string;
  titleLine2?: string;
  description: string;
}

export const SPACES_DATA: readonly SpaceItem[] = [
  {
    id: 'one-platform',
    title: 'One Platform. Different Spaces.',
    titleLine1: 'One Platform.',
    titleLine2: 'Different Spaces.',
    description:
      'Company news, dashboards, announcements, and visitor information.',
  },
  {
    id: 'retail-spaces',
    title: 'Retail Spaces',
    description:
      'Product highlights, promotions, branded visuals, and social content.',
  },
  {
    id: 'operations-areas',
    title: 'Operations Areas',
    description:
      'Performance metrics, project updates, and relevant team information.',
  },
  {
    id: 'meeting-shared-spaces',
    title: 'Meeting and Shared Spaces',
    description:
      'Presentations, schedules, project updates, and shared information.',
  },
] as const;

