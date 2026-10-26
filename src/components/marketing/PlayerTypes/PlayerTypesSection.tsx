'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import {
  PlayerConnectionDiagram,
  PlayerTypeId,
} from './PlayerConnectionDiagram';
import { PlayerPreviewPanel } from './PlayerPreviewPanel';
import './player-types.css';

export interface PlayerTypeItemData {
  id: PlayerTypeId;
  title: string;
  description: string;
}

const PLAYER_TYPES: readonly PlayerTypeItemData[] = [
  {
    id: 'android',
    title: 'Android Player',
    description:
      'Connect your Android player and start displaying content on your screens with ease.',
  },
  {
    id: 'desktop',
    title: 'Desktop Player',
    description:
      'Turn your existing desktop or computer into a powerful digital signage player.',
  },
  {
    id: 'web',
    title: 'Web Player',
    description:
      'No dedicated hardware needed. Run your content from a supported web browser.',
  },
] as const;

export function PlayerTypesSection() {
  const [activeType, setActiveType] = useState<PlayerTypeId>('android');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [isPaused, setIsPaused] = useState(false);

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
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-scroll / auto-cycle through player tabs when visible and not hovered
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setActiveType((current) => {
        const order: PlayerTypeId[] = ['android', 'desktop', 'web'];
        const currentIndex = order.indexOf(current);
        const nextIndex = (currentIndex + 1) % order.length;
        return order[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  return (
    <section
      ref={sectionRef}
      aria-label="Power Every Screen, Your Way"
      className="player-types-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className={`pt-heading-wrapper ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="pt-heading-title">
            <span className="pt-heading-line">Power Every Screen,</span>
            <span className="pt-heading-line">Your Way</span>
          </h2>
        </div>

        {/* 3 Player Type Selection Cards */}
        <div
          className={`pt-cards-grid ${isVisible ? 'is-visible' : ''}`}
          role="tablist"
          aria-label="Select player type"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {PLAYER_TYPES.map((type) => {
            const isActive = type.id === activeType;
            return (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`pt-tab-${type.id}`}
                onClick={() => {
                  setActiveType(type.id);
                  setIsPaused(true);
                }}
                className={`pt-card-btn ${isActive ? 'is-active' : ''}`}
              >
                <span className="pt-card-title">{type.title}</span>
                <span className="pt-card-description">{type.description}</span>
              </button>
            );
          })}
        </div>

        {/* Central Connection Diagram with brand/primary logo */}
        <PlayerConnectionDiagram activeType={activeType} isVisible={isVisible} />

        {/* Dotted Dashboard Preview Panel */}
        <PlayerPreviewPanel activeType={activeType} isVisible={isVisible} />
      </Container>
    </section>
  );
}
