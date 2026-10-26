'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container } from '@/components/ui';
import physicalPlayerImg from '@/assets/power every section/Physical player.png';
import desktopPlayerImg from '@/assets/power every section/Desktop player.png';
import webTvImg from '@/assets/power every section/Web tv.png';
import otherSupportedImg from '@/assets/power every section/other supported.png';
import './product-player-grid.css';

export interface ProductPlayerCardItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  delayMs: number;
}

const PRODUCT_PLAYERS: readonly ProductPlayerCardItem[] = [
  {
    id: 'physical-player',
    title: 'Physical Player',
    description:
      'Connect compatible hardware to a display and deliver digital signage content.',
    image: physicalPlayerImg,
    imageAlt: 'Physical digital-signage media player connected to display hardware',
    delayMs: 100,
  },
  {
    id: 'desktop-player',
    title: 'Desktop Player',
    description: 'Use a supported desktop environment to display your content.',
    image: desktopPlayerImg,
    imageAlt: 'Desktop monitor displaying the RocketScreens dashboard',
    delayMs: 200,
  },
  {
    id: 'webtv-player',
    title: 'WebTV Player',
    description:
      'Display content through a compatible web-based viewing environment.',
    image: webTvImg,
    imageAlt: 'WebTV interface with multiple digital signage content panels and media layouts',
    delayMs: 300,
  },
  {
    id: 'other-supported-players',
    title: 'Other Supported Players',
    description:
      'Explain any additional player options available in the RocketScreens product.',
    image: otherSupportedImg,
    imageAlt: 'Digital signage screen with compatible media player hardware and accessories',
    delayMs: 400,
  },
] as const;

export interface ProductPlayerGridSectionProps {
  headingLine1?: string;
  headingLine2?: string;
  players?: readonly ProductPlayerCardItem[];
}

export function ProductPlayerGridSection({
  headingLine1 = 'Power Every Screen,',
  headingLine2 = 'Your Way.',
  players = PRODUCT_PLAYERS,
}: ProductPlayerGridSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

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

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Power Every Screen, Your Way"
      className={`product-player-section ${isVisible ? 'is-visible' : ''}`}
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className="pp-heading-wrapper">
          <h2 className="pp-heading-title">
            <span className="pp-heading-line">{headingLine1}</span>
            <span className="pp-heading-line">{headingLine2}</span>
          </h2>
        </div>

        {/* 2x2 Player Cards Grid with vertical divider */}
        <div className="pp-grid-container">
          {players.map((card) => (
            <div
              key={card.id}
              className="pp-card"
              style={{
                transitionDelay: `${card.delayMs}ms`,
              }}
            >
              <div className="pp-card-visual-wrapper">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  priority={false}
                  className="pp-card-img"
                />
              </div>

              <h3 className="pp-card-title">{card.title}</h3>
              <p className="pp-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
