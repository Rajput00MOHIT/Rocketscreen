'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import simplifyImg from '@/assets/simplyfy section.png';
import { PinkArrowIcon, WhiteArrowIcon } from './SimplifyIcons';
import { NAV_ACTIONS } from '@/lib/constants/navigation';
import './simplify-management.css';

export interface SimplifyManagementSectionProps {
  heading?: string;
  description?: string;
  pricingUrl?: string;
  trialUrl?: string;
  className?: string;
}

export function SimplifyManagementSection({
  heading = 'Simplify Screen Management',
  description = 'Bring your content, channels, and digital displays together with RocketScreens.',
  pricingUrl = '/pricing',
  trialUrl = NAV_ACTIONS.freeTrial.href,
  className = '',
}: SimplifyManagementSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Simplify Screen Management"
      className={`simplify-mgmt-section ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      <Container size="xl">
        <div className="simplify-mgmt-card">
          {/* Left Column: Heading, Supporting Description, Dual CTA Buttons */}
          <div className="simplify-mgmt-content">
            <h2 className="simplify-mgmt-heading">{heading}</h2>
            <p className="simplify-mgmt-description">{description}</p>

            <div className="simplify-mgmt-actions">
              {/* Secondary CTA: Explore Pricing */}
              <Link href={pricingUrl} className="simplify-btn-pricing">
                <span>Explore Pricing</span>
                <span className="simplify-btn-arrow" aria-hidden="true">
                  <PinkArrowIcon size={18} />
                </span>
              </Link>

              {/* Primary CTA: Start Free Trial */}
              <Link href={trialUrl} className="simplify-btn-trial">
                <span>Start Free Trial</span>
                <span className="simplify-btn-arrow" aria-hidden="true">
                  <WhiteArrowIcon size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Pink 3D Screen Management Illustration */}
          <div className="simplify-mgmt-visual">
            <div className="simplify-mgmt-img-wrapper">
              <Image
                src={simplifyImg}
                alt="Simplify Screen Management - RocketScreens 3D content synchronization visual"
                priority={false}
                className="simplify-mgmt-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
