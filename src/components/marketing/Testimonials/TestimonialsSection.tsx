'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import { RatingSummary } from './RatingSummary';
import { TestimonialCard, TestimonialItem } from './TestimonialCard';
import { CarouselControls } from './CarouselControls';
import seanSimkinsImg from '@/assets/Testimonial/Sean Simkins portrait.png';
import patrickFImg from '@/assets/Testimonial/Patrick F portrait.png';
import './testimonials.css';

const TESTIMONIALS_DATA: readonly TestimonialItem[] = [
  {
    id: 'sean-simkins',
    quote: 'RocketScreens makes controlling and personalizing multiple TVs easy.',
    name: 'Sean Simkins',
    role: 'Sales Operations Manager, TCGWGlobal',
    avatar: seanSimkinsImg,
  },
  {
    id: 'patrick-f',
    quote: 'Easy Salesforce reporting with seamless integration.',
    name: 'Patrick F.',
    role: 'VP of Technology',
    avatar: patrickFImg,
  },
  {
    id: 'sean-simkins-2',
    quote: 'Our team stays informed in real-time with zero friction.',
    name: 'Sean Simkins',
    role: 'Sales Operations Manager, TCGWGlobal',
    avatar: seanSimkinsImg,
  },
  {
    id: 'patrick-f-2',
    quote: 'Setting up new digital screens across offices takes minutes.',
    name: 'Patrick F.',
    role: 'VP of Technology',
    avatar: patrickFImg,
  },
] as const;

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const total = TESTIMONIALS_DATA.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

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

  // Compute 2 visible testimonials for desktop
  const firstItem = TESTIMONIALS_DATA[currentIndex % total];
  const secondItem = TESTIMONIALS_DATA[(currentIndex + 1) % total];

  return (
    <section
      ref={sectionRef}
      aria-label="Why Businesses Love RocketScreens"
      className="testimonials-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className={`ts-heading-wrapper ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="ts-heading-title">
            <span className="ts-heading-line">Why Businesses Love</span>
            <span className="ts-heading-line">RocketScreens</span>
          </h2>
        </div>

        {/* Unified 3-Column Container */}
        <div className={`ts-unified-container ${isVisible ? 'is-visible' : ''}`}>
          <div className="ts-grid">
            {/* Column 1: Rating Summary */}
            <RatingSummary rating="4.8" reviewCount="500+ Reviews" />

            {/* Column 2: First Testimonial Card */}
            <TestimonialCard testimonial={firstItem} />

            {/* Column 3: Second Testimonial Card */}
            <TestimonialCard testimonial={secondItem} />
          </div>

          {/* Bottom-left Carousel Controls */}
          <CarouselControls onPrev={handlePrev} onNext={handleNext} />
        </div>
      </Container>
    </section>
  );
}
