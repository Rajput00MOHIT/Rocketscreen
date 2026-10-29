'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import {
  SimplifyIcon,
  OrganizeIcon,
  PublishRemotelyIcon,
  ChoosePlayersIcon,
} from './BenefitIcons';
import './value-benefits.css';

export interface ValueBenefitItem {
  id: string;
  icon: React.ReactNode;
  titleLine1: string;
  titleLine2: string;
  text: string;
  delayMs: number;
}

export const VALUE_BENEFITS_DATA: readonly ValueBenefitItem[] = [
  {
    id: 'simplify-updates',
    icon: <SimplifyIcon size={26} />,
    titleLine1: 'Simplify content',
    titleLine2: 'updates.',
    text: 'Simplify content updates.',
    delayMs: 120,
  },
  {
    id: 'organize-content',
    icon: <OrganizeIcon size={26} />,
    titleLine1: 'Organize content',
    titleLine2: 'and screens.',
    text: 'Organize content and screens.',
    delayMs: 200,
  },
  {
    id: 'publish-remotely',
    icon: <PublishRemotelyIcon size={26} />,
    titleLine1: 'Publish updates',
    titleLine2: 'remotely.',
    text: 'Publish updates remotely.',
    delayMs: 280,
  },
  {
    id: 'choose-players',
    icon: <ChoosePlayersIcon size={26} />,
    titleLine1: 'Choose players',
    titleLine2: 'and content.',
    text: 'Choose players and content.',
    delayMs: 360,
  },
] as const;

export interface ValueBenefitsSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  items?: readonly ValueBenefitItem[];
}

export function ValueBenefitsSection({
  badge = 'Benefits',
  heading = 'Get More Value from Your Digital Displays',
  description = 'Make your screen network easier to manage while creating more useful and engaging experiences for your audience.',
  items = VALUE_BENEFITS_DATA,
}: ValueBenefitsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

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
      aria-label="Get More Value from Your Digital Displays"
      className={`value-benefits-section ${isVisible ? 'is-visible' : ''}`}
    >
      <Container size="xl">
        <div className="value-benefits-grid">
          {/* Left Column: Heading & Description */}
          <div className="value-benefits-intro">
            <span className="value-benefits-badge">{badge}</span>
            <h2 className="value-benefits-heading">
              <span className="value-benefits-heading-line">Get More Value from</span>
              <span className="value-benefits-heading-line">Your Digital Displays</span>
            </h2>
            <p className="value-benefits-description">{description}</p>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="value-cards-container">
            {items.map((item) => (
              <div
                key={item.id}
                className="value-card"
                style={{
                  transitionDelay: `${item.delayMs}ms`,
                }}
              >
                <div className="value-card-icon-box">{item.icon}</div>
                <h3 className="value-card-text">
                  <span className="value-card-text-line">{item.titleLine1 || item.text}</span>
                  {item.titleLine2 && (
                    <span className="value-card-text-line">{item.titleLine2}</span>
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
