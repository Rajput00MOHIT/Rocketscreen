'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import {
  PRODUCT_CAPABILITIES,
  ProductCapabilityItem,
} from '../data/capabilities-data';
import './product-capabilities.css';

export interface ProductCapabilitiesSectionProps {
  /** Optional section title override */
  heading?: string;
  /** Optional custom capabilities data */
  capabilities?: readonly ProductCapabilityItem[];
}

interface CapabilityRowProps {
  item: ProductCapabilityItem;
  index: number;
}

function CapabilityRow({ item, index }: CapabilityRowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

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

  const isTextLeft = item.layoutDirection === 'text-left';

  return (
    <div
      ref={rowRef}
      className={`pc-row ${
        isTextLeft ? 'pc-row-text-left' : 'pc-row-text-right'
      } ${isVisible ? 'is-visible' : ''}`}
      data-capability={item.id}
    >
      {/* Text Content Column */}
      <div className="pc-col-content">
        <span className="pc-category-label">{item.category}</span>
        <h3 className="pc-capability-heading">{item.heading}</h3>
        <p className="pc-capability-description">{item.description}</p>
      </div>

      {/* Product Illustration Mockup Column */}
      <div className="pc-col-visual">
        <div className="pc-mockup-wrapper">
          <Image
            src={item.image}
            alt={item.imageAlt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="pc-mockup-img"
          />
        </div>
      </div>
    </div>
  );
}

export function ProductCapabilitiesSection({
  heading = 'Everything You Need to Power Your Digital Displays.',
  capabilities = PRODUCT_CAPABILITIES,
}: ProductCapabilitiesSectionProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsHeaderVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
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
      aria-label="Product Capabilities"
      className="product-capabilities-section"
    >
      <Container size="xl">
        {/* Section Introduction Heading */}
        <div
          ref={headerRef}
          className={`pc-intro-wrapper ${isHeaderVisible ? 'is-visible' : ''}`}
        >
          <h2 className="pc-intro-heading">{heading}</h2>
        </div>

        {/* 5 Alternating Capability Rows */}
        <div className="pc-rows-container">
          {capabilities.map((item, index) => (
            <CapabilityRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
