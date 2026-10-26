import type { Metadata } from 'next';
import React from 'react';
import {
  ProductHero,
  ProductCapabilitiesSection,
  CreateChannelsSection,
  ConnectAppsSection,
  ProductPlayerGridSection,
  ValueBenefitsSection,
} from '@/features/product';
import {
  GettingStartedSection,
  BenefitsSection,
  SimplifyManagementSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
} from '@/components/marketing';
import { Footer, FixedBottomCTA } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Product Overview',
  description:
    'Power every screen your way. Upload your content, connect your favorite apps, build channels, and manage your digital displays with RocketScreens.',
};

export default function ProductPage() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <ProductHero />

        {/* Section 2: Product Capabilities */}
        <ProductCapabilitiesSection />

        {/* Section 3: Get Started in Four Simple Steps */}
        <GettingStartedSection />

        {/* Section 4: Discover the Benefits of RocketScreens */}
        <BenefitsSection />

        {/* Section 5: Create Channels That Work for You */}
        <CreateChannelsSection />

        {/* Section 6: Connect the Apps Your Team Already Uses */}
        <ConnectAppsSection />

        {/* Section 7: Power Every Screen, Your Way (2x2 Player Grid) */}
        <ProductPlayerGridSection />

        {/* Section 8: Get More Value from Your Digital Displays */}
        <ValueBenefitsSection />

        {/* Section 9: Simplify Screen Management CTA */}
        <SimplifyManagementSection />

        {/* Section 9: Why Businesses Love RocketScreens */}
        <TestimonialsSection />

        {/* Section 10: Pricing Section */}
        <PricingSection />

        {/* Section 11: FAQ Section */}
        <FAQSection />

        {/* Global Footer */}
        <Footer />
      </main>

      {/* Shared Fixed Bottom CTA Bar */}
      <FixedBottomCTA />
    </div>
  );
}
