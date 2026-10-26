'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import { StepCard } from './StepCard';
import { CentralBrandElement } from './CentralBrandElement';
import {
  StepConnectAppsIcon,
  StepBuildChannelIcon,
  StepConnectScreensIcon,
  StepGoLiveIcon,
} from './StepIcons';
import './getting-started.css';

export interface StepItemData {
  stepNumber: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: React.ReactNode;
  delayMs: number;
}

const STEPS_DATA: StepItemData[] = [
  {
    stepNumber: 1,
    title: 'Connect Your Apps',
    description: 'Connect the business tools and platforms you already use.',
    icon: <StepConnectAppsIcon />,
    delayMs: 100,
  },
  {
    stepNumber: 2,
    title: 'Build Your Channel',
    description: 'Choose the information you want to display and create your channel.',
    icon: <StepBuildChannelIcon />,
    delayMs: 200,
  },
  {
    stepNumber: 3,
    title: 'Connect Your Screens',
    description: 'Connect your screens or players and assign your channel.',
    icon: <StepConnectScreensIcon />,
    delayMs: 300,
  },
  {
    stepNumber: 4,
    title: 'Go Live',
    description: 'Publish your channel and keep your information updated across screens.',
    icon: <StepGoLiveIcon />,
    delayMs: 400,
  },
];

export function GettingStartedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
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
          observer.disconnect(); // Trigger entrance once per page load
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
      aria-label="Get Started in Four Simple Steps"
      className="getting-started-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className={`gs-heading-wrapper ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="gs-heading-title">
            <span className="gs-heading-line">Get Started in Four</span>
            <span className="gs-heading-line">Simple Steps</span>
          </h2>
        </div>

        {/* 3x3 Composition Layout */}
        <div className="gs-grid-container">
          {/* Step 1: Connect Your Apps */}
          <StepCard
            stepNumber={STEPS_DATA[0].stepNumber}
            title={STEPS_DATA[0].title}
            description={STEPS_DATA[0].description}
            icon={STEPS_DATA[0].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[0].delayMs}
          />

          {/* Connector Top */}
          <div
            className={`gs-connector gs-connector-top ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Step 2: Build Your Channel */}
          <StepCard
            stepNumber={STEPS_DATA[1].stepNumber}
            title={STEPS_DATA[1].title}
            description={STEPS_DATA[1].description}
            icon={STEPS_DATA[1].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[1].delayMs}
          />

          {/* Connector Left */}
          <div
            className={`gs-connector gs-connector-left ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Center Brand Element */}
          <CentralBrandElement isVisible={isVisible} />

          {/* Connector Right */}
          <div
            className={`gs-connector gs-connector-right ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Step 3: Connect Your Screens */}
          <StepCard
            stepNumber={STEPS_DATA[2].stepNumber}
            title={STEPS_DATA[2].title}
            description={STEPS_DATA[2].description}
            icon={STEPS_DATA[2].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[2].delayMs}
          />

          {/* Connector Bottom */}
          <div
            className={`gs-connector gs-connector-bottom ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Step 4: Go Live */}
          <StepCard
            stepNumber={STEPS_DATA[3].stepNumber}
            title={STEPS_DATA[3].title}
            description={STEPS_DATA[3].description}
            icon={STEPS_DATA[3].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[3].delayMs}
          />
        </div>
      </Container>
    </section>
  );
}
