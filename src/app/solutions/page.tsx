import type { Metadata } from 'next';
import React from 'react';
import {
  SolutionsHero,
  TeamClearerViewSection,
  AchieveSolutionsSection,
  AchieveSpacesSection,
} from '@/features/solutions';
import { BenefitsSection, FAQSection } from '@/components/marketing';
import { Footer, FixedBottomCTA } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Business Solutions',
  description:
    'Screens That Work for Your Business. Share the right content with every team across connected screens using RocketScreens.',
};

export default function SolutionsPage() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="flex-1 flex flex-col">
        {/* Section 1: Business Solutions Hero */}
        <SolutionsHero />

        {/* Section 2: Give Every Team a Clearer View */}
        <TeamClearerViewSection />

        {/* Section 3: What Do You Want to Achieve? */}
        <AchieveSolutionsSection />

        {/* Section 4: Discover the Benefits of RocketScreens */}
        <BenefitsSection />

        {/* Section 5: What Do You Want to Achieve? - Spaces */}
        <AchieveSpacesSection />

        {/* Section 6: Everything You Need to Know (FAQ + "Still have question?" CTA) */}
        <FAQSection />

        {/* Global Footer */}
        <Footer />
      </main>

      {/* Shared Fixed Bottom CTA Bar */}
      <FixedBottomCTA />
    </div>
  );
}
