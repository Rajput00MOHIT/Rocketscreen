export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: readonly FAQItemData[] = [
  {
    id: 'what-is-rocketscreens',
    question: 'What is RocketScreens?',
    answer:
      'RocketScreens is a digital signage platform that lets you create, manage, schedule, and display content across multiple screens from one place.',
  },
  {
    id: 'how-does-it-work',
    question: 'How does RocketScreens work?',
    answer:
      'Connect your content sources and compatible players, organize your content into channels, schedule what appears, and manage your displays from one place.',
  },
  {
    id: 'technical-knowledge',
    question: 'Do I need any technical knowledge?',
    answer:
      'RocketScreens is designed to help teams manage digital signage through a centralized interface. Setup requirements depend on your devices and configuration.',
  },
  {
    id: 'manage-multiple-screens',
    question: 'Can I manage multiple screens?',
    answer:
      'Yes. RocketScreens lets you manage multiple displays from one place, helping you organize content and control what appears across your screen network.',
  },
  {
    id: 'schedule-in-advance',
    question: 'Can I schedule content in advance?',
    answer:
      'Yes. You can schedule content in advance so the right information appears on your displays at the appropriate time.',
  },
] as const;
