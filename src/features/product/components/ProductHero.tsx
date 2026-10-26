'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import mockupsImg from '@/assets/Product page hero section mockup.png';
import './product-hero.css';

export interface ProductHeroProps {
  /** Optional badge text override */
  badgeText?: string;
  /** Optional headline line 1 override */
  headingLine1?: string;
  /** Optional headline line 2 override */
  headingLine2?: string;
  /** Optional description copy override */
  description?: string;
}

export function ProductHero({
  badgeText = 'One Central Platform',
  headingLine1 = 'Your Screens. Your',
  headingLine2 = 'Content. All in One Place.',
  description = 'Upload your content, connect your favorite apps, build channels, and manage your digital displays with RocketScreens.',
}: ProductHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
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
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Product Overview Hero"
      className="product-hero-section"
    >
      {/* Subtle white-to-pink background glow */}
      <div className="product-hero-bg-glow" aria-hidden="true" />

      <Container size="xl">
        <div className="product-hero-content">
          {/* Hero Badge */}
          <div
            className={`product-hero-badge ${isVisible ? 'is-visible' : ''}`}
            role="status"
          >
            <span>{badgeText}</span>
          </div>

          {/* Large Two-line Headline */}
          <h1 className={`product-hero-heading ${isVisible ? 'is-visible' : ''}`}>
            <span className="product-hero-heading-line">{headingLine1}</span>
            <span className="product-hero-heading-line">{headingLine2}</span>
          </h1>

          {/* Single-line / Balanced Supporting Description */}
          <p
            className={`product-hero-description ${isVisible ? 'is-visible' : ''
              }`}
          >
            {description}
          </p>

          {/* Central Device Showcase (Desktop Monitor + Laptop + Mobile Phone) */}
          <div
            className={`product-hero-showcase ${isVisible ? 'is-visible' : ''}`}
          >
            <Image
              src={mockupsImg}
              alt="RocketScreens digital signage dashboard displayed across desktop monitor, laptop, and mobile smartphone"
              priority
              className="product-hero-showcase-img"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
