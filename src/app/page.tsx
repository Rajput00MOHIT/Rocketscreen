import React from 'react';
import {
  Hero,
  StatsIntegrationsSection,
  ProblemSolutionSection,
  GettingStartedSection,
  FreeTrialBanner,
  BenefitsSection,
  PlatformFeaturesSection,
  PlayerTypesSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
} from '@/components/marketing';
import { Footer, FixedBottomCTA } from '@/components/layout';

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <StatsIntegrationsSection />
      <ProblemSolutionSection />
      <GettingStartedSection />
      <FreeTrialBanner />
      <BenefitsSection />
      <PlatformFeaturesSection />
      <PlayerTypesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <FixedBottomCTA />
    </main>
  );
}
