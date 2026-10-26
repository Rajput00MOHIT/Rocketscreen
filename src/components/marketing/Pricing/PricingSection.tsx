'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui';
import { PRICING_PLANS, BillingCycle } from './pricing-data';
import { BillingToggle } from './BillingToggle';
import { PricingCard } from './PricingCard';
import './pricing.css';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section
      aria-label="Simple pricing for every screen"
      className="pricing-section"
      id="pricing"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className="pricing-heading-wrapper">
          <h2 className="pricing-heading-title">
            <span className="pricing-heading-line">Simple pricing for</span>
            <span className="pricing-heading-line">every screen</span>
          </h2>
        </div>

        {/* Monthly / Yearly Billing Toggle */}
        <BillingToggle
          billingCycle={billingCycle}
          onChange={setBillingCycle}
        />

        {/* 3-Column Pricing Grid */}
        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
