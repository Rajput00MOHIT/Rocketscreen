'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Button, Icon } from '@/components/ui';
import googlePlayBadge from '@/assets/Download/Google Play badge.png';
import appStoreBadge from '@/assets/Download/App Store badge.png';
import { ROUTES } from '@/lib/constants/routes';
import './fixed-bottom-cta.css';

export interface FixedBottomCTAProps {
  /** Optional custom promotional message prefix */
  messagePrefix?: string;
  /** Optional custom highlighted text */
  highlightText?: string;
  /** Optional custom message suffix */
  messageSuffix?: string;
  /** Configurable Google Play Store destination URL */
  googlePlayUrl?: string;
  /** Configurable Apple App Store destination URL */
  appStoreUrl?: string;
  /** Configurable Contact / Let's Talk CTA URL */
  contactUrl?: string;
  /** Optional custom button label */
  buttonLabel?: string;
  /** Additional container classes */
  className?: string;
}

export function FixedBottomCTA({
  messagePrefix = 'Download the ',
  highlightText = 'RocketScreens app',
  messageSuffix = ' and manage your digital displays from anywhere.',
  googlePlayUrl = 'https://play.google.com/store/apps',
  appStoreUrl = 'https://www.apple.com/app-store/',
  contactUrl = ROUTES.marketing.contact,
  buttonLabel = "Let's Talk",
  className = '',
}: FixedBottomCTAProps) {
  return (
    <aside
      role="complementary"
      aria-label="Download RocketScreens app"
      className={`rs-fixed-bottom-cta ${className}`}
    >
      <Container size="xl">
        <div className="rs-fixed-bottom-cta-inner">
          {/* Left: Promotional Message */}
          <p className="rs-fixed-bottom-message">
            {messagePrefix}
            <span className="rs-fixed-bottom-highlight">{highlightText}</span>
            {messageSuffix}
          </p>

          {/* Right: Store Badges + Divider + Let's Talk Button */}
          <div className="rs-fixed-bottom-controls">
            {/* Store Badges */}
            <div className="rs-fixed-bottom-badges">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="rs-store-badge-link"
              >
                <Image
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  priority
                  className="rs-store-badge-img"
                />
              </a>

              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="rs-store-badge-link"
              >
                <Image
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  priority
                  className="rs-store-badge-img"
                />
              </a>
            </div>

            {/* Vertical Divider */}
            <div className="rs-fixed-bottom-divider" aria-hidden="true" />

            {/* Pink Let's Talk Button */}
            <Link href={contactUrl} className="rs-fixed-bottom-btn-link">
              <Button
                variant="primary"
                size="sm"
                className="rs-fixed-bottom-btn"
                rightIcon={<Icon name="ArrowUpRight" size={16} />}
              >
                {buttonLabel}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </aside>
  );
}
