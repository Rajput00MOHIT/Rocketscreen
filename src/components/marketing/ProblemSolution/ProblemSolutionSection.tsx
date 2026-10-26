'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import { ComparisonCard } from './ComparisonCard';
import './problem-solution.css';

export function ProblemSolutionSection() {
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
          observer.disconnect(); // Fire once per page load
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
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
      aria-label="Problem versus Solution"
      className="problem-solution-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className={`ps-heading-wrapper ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="ps-heading-title">
            <span className="ps-heading-line">Turn Scattered Information</span>
            <span className="ps-heading-line">Into One Clear View</span>
          </h2>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="ps-comparison-grid">
          {/* Left Card: Problem */}
          <ComparisonCard
            variant="problem"
            badgeLabel="Problem"
            isVisible={isVisible}
            delayMs={120}
            description={
              <>
                Important information is{' '}
                <span className="ps-text-emphasized">
                  scattered across apps, dashboards, and reports,
                </span>{' '}
                making it harder for teams to stay informed and aligned.
              </>
            }
          />

          {/* Right Card: Solution */}
          <ComparisonCard
            variant="solution"
            badgeLabel="Solution"
            isVisible={isVisible}
            delayMs={240}
            description={
              <>
                <span className="ps-text-emphasized">
                  RocketScreens connects
                </span>{' '}
                your tools and brings the right information together on your
                screens, keeping teams informed and focused.
              </>
            }
          />
        </div>
      </Container>
    </section>
  );
}
