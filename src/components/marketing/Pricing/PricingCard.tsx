import React from 'react';
import Link from 'next/link';
import { Button, Icon } from '@/components/ui';
import { PricingPlan, BillingCycle } from './pricing-data';

export interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: BillingCycle;
}

export function PricingCard({ plan, billingCycle }: PricingCardProps) {
  const price = plan.priceDisplay[billingCycle];
  const period = plan.periodDisplay[billingCycle];
  const note = plan.billingNote[billingCycle];
  const isContactPricing = plan.id === 'enterprise';

  return (
    <div
      className={`pricing-card-wrapper ${plan.isRecommended ? 'is-featured' : ''
        }`}
    >
      {/* Featured Badge */}
      {plan.isRecommended && plan.badge && (
        <div className="pricing-badge-bar" aria-label="Most Recommended Plan">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4457 22.0413C10.2352 20.7977 9.68032 19.4583 8.78106 18.0233C7.88179 16.5692 6.59986 15.2203 4.93526 13.9766C3.28979 12.733 1.64432 11.9389 -0.00114357 11.5945V10.3891C1.62519 10.0065 3.18456 9.29854 4.67696 8.26534C6.18849 7.213 7.45129 5.9502 8.46536 4.47693C9.49856 2.9654 10.1587 1.473 10.4457 -0.000264645H11.6511C11.8233 0.956401 12.1677 1.94177 12.6843 2.95584C13.2009 3.95077 13.861 4.90744 14.6646 5.82584C15.4873 6.7251 16.4057 7.53827 17.4198 8.26534C18.9313 9.3368 20.4715 10.0447 22.0405 10.3891V11.5945C20.9881 11.805 19.8975 12.2355 18.7687 12.886C17.6589 13.5366 16.6257 14.3115 15.6691 15.2107C14.7124 16.0909 13.9279 17.0188 13.3157 17.9946C12.4164 19.4296 11.8615 20.7785 11.6511 22.0413H10.4457Z" fill="#D91C8B" />
          </svg>

          <span>{plan.badge}</span>
        </div>
      )}

      {/* Card Body */}
      <div className="pricing-card">
        {/* Plan Header */}
        <h3 className="pricing-plan-name">{plan.name}</h3>

        {/* Price Display */}
        <div className="pricing-price-row">
          <span
            className={
              isContactPricing ? 'pricing-price-contact' : 'pricing-price-val'
            }
          >
            {price}
          </span>
          {period && <span className="pricing-price-period">{period}</span>}
        </div>

        {/* Billing Note */}
        <p className="pricing-billing-note">{note}</p>

        {/* Plan Description */}
        <p className="pricing-description">{plan.description}</p>

        {/* CTA Button */}
        <Link href={plan.cta.href} className="pricing-cta-link">
          <Button
            variant={plan.cta.variant}
            size="md"
            fullWidth
            className="pricing-cta-btn"
          >
            {plan.cta.label}
          </Button>
        </Link>

        {/* Features Subheading */}
        <h4 className="pricing-features-heading">{plan.featuresHeading}</h4>

        {/* Feature List */}
        <ul className="pricing-features-list">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="pricing-feature-item">
              <Icon name="Check" size={16} className="pricing-check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Supporting Footnote */}
        <p className="pricing-supporting-note">{plan.supportingNote}</p>
      </div>
    </div>
  );
}
