'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import { FeatureList, PlatformFeatureItemData } from './FeatureList';
import { PlatformVisual, PlatformFeatureId } from './PlatformVisual';
import './platform-features.css';

const PLATFORM_FEATURES: readonly PlatformFeatureItemData[] = [
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect the apps and dashboards your business already uses.',
  },
  {
    id: 'content',
    title: 'Content',
    description: 'Upload and organize the content you want to display.',
  },
  {
    id: 'channels',
    title: 'Channels',
    description: 'Combine apps, dashboards, and content into channels.',
  },
  {
    id: 'players',
    title: 'Players',
    description: 'Connect, monitor, and manage your screens from one place.',
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    description: 'Schedule what appears on each screen and when.',
  },
] as const;

export function PlatformFeaturesSection() {
  const [activeFeatureId, setActiveFeatureId] = useState<PlatformFeatureId>('integrations');
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
      ref={sectionRef}
      aria-label="A Complete Platform for Digital Signage"
      className="platform-features-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className={`pf-heading-wrapper ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="pf-heading-title">
            <span className="pf-heading-line">A Complete Platform for</span>
            <span className="pf-heading-line">Digital Signage</span>
          </h2>
        </div>

        {/* 2-Column Composition */}
        <div className={`pf-layout-container ${isVisible ? 'is-visible' : ''}`}>
          {/* Left Column: Interactive Feature List */}
          <FeatureList
            features={PLATFORM_FEATURES}
            activeId={activeFeatureId}
            onSelect={setActiveFeatureId}
          />

          {/* Right Column: Illustration Panel */}
          <div
            className="pf-visual-col"
            role="tabpanel"
            id={`pf-panel-${activeFeatureId}`}
            aria-labelledby={`pf-tab-${activeFeatureId}`}
          >
            <div className="pf-visual-card">
              <PlatformVisual featureId={activeFeatureId} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
