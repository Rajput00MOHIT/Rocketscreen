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

// Rocket rotation angles relative to its native orientation (0° = pointing Top-Right toward Build Your Channel)
// 1: Connect Your Apps -> Top-Left (-90°)
// 2: Build Your Channel -> Top-Right (0°) [Default Orientation]
// 3: Connect Your Screens -> Bottom-Left (180°)
// 4: Go Live -> Bottom-Right (90°)
const STEP_ANGLES: Record<number, number> = {
  1: -90,
  2: 0,
  3: 180,
  4: 90,
};

const DEFAULT_ANGLE = 0;

/**
 * Calculates the shortest rotation trajectory between the current absolute rotation angle
 * and the target base angle, ensuring the indicator never spins through unnecessary 360° revolutions.
 */
function getShortestRotation(currentAngle: number, targetBaseAngle: number): number {
  let delta = (targetBaseAngle - currentAngle) % 360;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return currentAngle + delta;
}

export function GettingStartedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [rotation, setRotation] = useState<number>(DEFAULT_ANGLE);
  const currentRotationRef = useRef<number>(DEFAULT_ANGLE);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCardHover = (stepNumber: number) => {
    setActiveStep(stepNumber);
    const targetAngle = STEP_ANGLES[stepNumber] ?? DEFAULT_ANGLE;
    const nextRotation = getShortestRotation(currentRotationRef.current, targetAngle);
    currentRotationRef.current = nextRotation;
    setRotation(nextRotation);
  };

  const handleSectionLeave = () => {
    setActiveStep(null);
    const nextRotation = getShortestRotation(currentRotationRef.current, DEFAULT_ANGLE);
    currentRotationRef.current = nextRotation;
    setRotation(nextRotation);
  };

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

        {/* 3x3 Composition Layout with directional interaction */}
        <div
          className="gs-grid-container"
          onMouseLeave={handleSectionLeave}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              handleSectionLeave();
            }
          }}
        >
          {/* Step 1: Connect Your Apps (Top-Left) */}
          <StepCard
            stepNumber={STEPS_DATA[0].stepNumber}
            title={STEPS_DATA[0].title}
            description={STEPS_DATA[0].description}
            icon={STEPS_DATA[0].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[0].delayMs}
            isActive={activeStep === STEPS_DATA[0].stepNumber}
            onHover={() => handleCardHover(STEPS_DATA[0].stepNumber)}
            onFocus={() => handleCardHover(STEPS_DATA[0].stepNumber)}
          />

          {/* Connector Top */}
          <div
            className={`gs-connector gs-connector-top ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Step 2: Build Your Channel (Top-Right) */}
          <StepCard
            stepNumber={STEPS_DATA[1].stepNumber}
            title={STEPS_DATA[1].title}
            description={STEPS_DATA[1].description}
            icon={STEPS_DATA[1].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[1].delayMs}
            isActive={activeStep === STEPS_DATA[1].stepNumber}
            onHover={() => handleCardHover(STEPS_DATA[1].stepNumber)}
            onFocus={() => handleCardHover(STEPS_DATA[1].stepNumber)}
          />

          {/* Connector Left */}
          <div
            className={`gs-connector gs-connector-left ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Center Brand Element with directional indicator */}
          <CentralBrandElement
            isVisible={isVisible}
            rotation={rotation}
            activeStep={activeStep}
          />

          {/* Connector Right */}
          <div
            className={`gs-connector gs-connector-right ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Step 3: Connect Your Screens (Bottom-Left) */}
          <StepCard
            stepNumber={STEPS_DATA[2].stepNumber}
            title={STEPS_DATA[2].title}
            description={STEPS_DATA[2].description}
            icon={STEPS_DATA[2].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[2].delayMs}
            isActive={activeStep === STEPS_DATA[2].stepNumber}
            onHover={() => handleCardHover(STEPS_DATA[2].stepNumber)}
            onFocus={() => handleCardHover(STEPS_DATA[2].stepNumber)}
          />

          {/* Connector Bottom */}
          <div
            className={`gs-connector gs-connector-bottom ${isVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          />

          {/* Step 4: Go Live (Bottom-Right) */}
          <StepCard
            stepNumber={STEPS_DATA[3].stepNumber}
            title={STEPS_DATA[3].title}
            description={STEPS_DATA[3].description}
            icon={STEPS_DATA[3].icon}
            isVisible={isVisible}
            delayMs={STEPS_DATA[3].delayMs}
            isActive={activeStep === STEPS_DATA[3].stepNumber}
            onHover={() => handleCardHover(STEPS_DATA[3].stepNumber)}
            onFocus={() => handleCardHover(STEPS_DATA[3].stepNumber)}
          />
        </div>
      </Container>
    </section>
  );
}
