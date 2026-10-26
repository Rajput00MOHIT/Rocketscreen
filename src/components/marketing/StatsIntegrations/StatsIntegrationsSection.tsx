'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import { StatsRow } from './StatsRow';
import { IntegrationLogos } from './IntegrationLogos';
import './stats-integrations.css';

export function StatsIntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

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
          observer.disconnect(); // Trigger entrance only once per page load
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
      ref={sectionRef}
      aria-label="Metrics and Integration Partners"
      className="stats-integrations-section"
    >
      <Container size="xl">
        {/* Row 1: Statistics */}
        <StatsRow isVisible={isVisible} />

        {/* Subtle Horizontal Divider */}
        <hr className="stats-integrations-divider" aria-hidden="true" />

        {/* Row 2: Integration Partner Logos */}
        <IntegrationLogos isVisible={isVisible} />
      </Container>
    </section>
  );
}
