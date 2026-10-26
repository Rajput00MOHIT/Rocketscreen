import React from 'react';
import Link from 'next/link';
import { Button, Icon } from '@/components/ui';
import { ROUTES } from '@/lib/constants/routes';

export interface SupportCTAProps {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  contactUrl?: string;
}

export function SupportCTA({
  heading = 'Still have question?',
  description = "Can't find what you're looking for? Our team is here to help you with clear answers and quick guidance.",
  buttonLabel = "Let's Talk",
  contactUrl = ROUTES.marketing.contact,
}: SupportCTAProps) {
  return (
    <div className="faq-support-panel" aria-label="Support and customer guidance">
      <h3 className="faq-support-title">{heading}</h3>
      <p className="faq-support-description">{description}</p>

      <Link href={contactUrl} className="faq-support-cta-link">
        <Button
          variant="primary"
          size="md"
          className="faq-support-btn"
          rightIcon={<Icon name="ArrowRight" size={16} />}
        >
          {buttonLabel}
        </Button>
      </Link>
    </div>
  );
}
