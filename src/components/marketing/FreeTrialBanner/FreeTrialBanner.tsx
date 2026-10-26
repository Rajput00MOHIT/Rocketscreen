'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Container, Button, Icon } from '@/components/ui';
import { PhoneVisual } from './PhoneVisual';
import { NAV_ACTIONS } from '@/lib/constants/navigation';
import './free-trial-banner.css';

export interface FreeTrialBannerProps {
  /** Configurable trial signup destination URL */
  trialUrl?: string;
  /** Optional custom button label */
  buttonLabel?: string;
  /** Optional custom duration label */
  durationText?: string;
  /** Optional custom supporting line */
  supportingText?: string;
  /** Additional container classes */
  className?: string;
}

export function FreeTrialBanner({
  trialUrl = NAV_ACTIONS.freeTrial.href,
  buttonLabel = 'Start Free Trial',
  durationText = '14 days free',
  supportingText = 'No credit card required.',
  className = '',
}: FreeTrialBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = bannerRef.current;
    if (!element) return;

    // Support prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once per page load
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      aria-label="Start Your Free Trial"
      className={`free-trial-section ${className}`}
    >
      <Container size="xl">
        <div className={`ft-banner-card ${isVisible ? 'is-visible' : ''}`}>
          {/* Left Column: Promotional Heading, Duration, Supporting Line, CTA */}
          <div className="ft-content-col">
            <h2 className="ft-heading">
              <span className="ft-heading-line">Start Your</span>
              <span className="ft-heading-line">Free Trial</span>
            </h2>

            <p className="ft-duration">{durationText}</p>

            <p className="ft-supporting-text">{supportingText}</p>

            <div className="ft-cta-wrapper">
              <Link href={trialUrl} className="ft-cta-link">
                <Button
                  variant="primary"
                  size="md"
                  className="ft-cta-button"
                  rightIcon={
                    <span className="ft-cta-arrow">
                      <Icon name="ArrowRight" size={16} />
                    </span>
                  }
                >
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Gradient Backdrop */}
          <PhoneVisual />
        </div>
      </Container>
    </section>
  );
}
