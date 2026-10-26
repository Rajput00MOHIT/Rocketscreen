import React from 'react';
import { BillingCycle } from './pricing-data';

export interface BillingToggleProps {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

export function BillingToggle({ billingCycle, onChange }: BillingToggleProps) {
  return (
    <div className="pricing-toggle-wrapper">
      <div
        className="pricing-toggle-container"
        role="group"
        aria-label="Billing cycle options"
      >
        <button
          type="button"
          onClick={() => onChange('monthly')}
          aria-pressed={billingCycle === 'monthly'}
          className={`pricing-toggle-btn ${
            billingCycle === 'monthly' ? 'is-active' : ''
          }`}
        >
          Monthly
        </button>

        <button
          type="button"
          onClick={() => onChange('yearly')}
          aria-pressed={billingCycle === 'yearly'}
          className={`pricing-toggle-btn ${
            billingCycle === 'yearly' ? 'is-active' : ''
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}
