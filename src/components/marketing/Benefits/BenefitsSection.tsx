'use client';

import React, { useEffect, useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import { Container } from '@/components/ui';
import { BenefitCard } from './BenefitCard';
import centralizedMgmtImg from '@/assets/Benefits/Centralized management illustration.png';
import connectedContentImg from '@/assets/Benefits/Connected content illustration.png';
import easyToScaleImg from '@/assets/Benefits/Multi-screen scaling illustration.png';
import alwaysUpToDateImg from '@/assets/Benefits/Scheduling calendar illustration.png';
import './benefits.css';

export interface BenefitItemData {
  id: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  delayMs: number;
}

const BENEFITS_DATA: BenefitItemData[] = [
  {
    id: 'centralized-management',
    title: 'Centralized Management',
    description:
      'Manage content, screens, players, and schedules from one platform.',
    imageSrc: centralizedMgmtImg,
    delayMs: 100,
  },
  {
    id: 'connected-content',
    title: 'Connected Content',
    description:
      'Bring data and content from the tools you already use directly to your screens.',
    imageSrc: connectedContentImg,
    delayMs: 200,
  },
  {
    id: 'easy-to-scale',
    title: 'Easy to Scale',
    description:
      'Manage multiple screens and locations without the complexity.',
    imageSrc: easyToScaleImg,
    delayMs: 300,
  },
  {
    id: 'always-up-to-date',
    title: 'Always Up to Date',
    description: 'Schedule and update your displays whenever you need.',
    imageSrc: alwaysUpToDateImg,
    delayMs: 400,
  },
];

export function BenefitsSection() {
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
      aria-label="Discover the Benefits of RocketScreens"
      className="benefits-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className={`benefits-heading-wrapper ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="benefits-heading-title">
            <span className="benefits-heading-line">Discover the Benefits of</span>
            <span className="benefits-heading-line">RocketScreens</span>
          </h2>
        </div>

        {/* 2x2 Grid with Thin Dividers */}
        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              imageSrc={benefit.imageSrc}
              isVisible={isVisible}
              delayMs={benefit.delayMs}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
