'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import connectAppsImg from '@/assets/connect app integration card image.png';
import './connect-apps.css';

export interface TagItem {
  label: string;
  href?: string;
}

const DEFAULT_TAGS: TagItem[] = [
  { label: 'Integration logos', href: '/integrations' },
  { label: 'Category filters', href: '/integrations#categories' },
  { label: 'How Integrations work', href: '/integrations#how-it-works' },
  { label: 'Browse all Integrations', href: '/integrations' },
];

export interface ConnectAppsSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  tags?: TagItem[];
}

export function ConnectAppsSection({
  badge = 'Integrations',
  heading = 'Connect the Apps Your Team Already Uses',
  description = 'Bring supported apps and content sources into your digital signage workflow. Make it easier to manage the information your audience sees without switching between multiple tools.',
  tags = DEFAULT_TAGS,
}: ConnectAppsSectionProps) {
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
      aria-label="Connect the Apps Your Team Already Uses"
      className={`connect-apps-section ${isVisible ? 'is-visible' : ''}`}
    >
      <Container size="xl">
        <div className="connect-apps-grid">
          {/* Left Column: Text & Filter Buttons */}
          <div className="connect-apps-content">
            <span className="connect-apps-badge">{badge}</span>
            <h2 className="connect-apps-heading">{heading}</h2>
            <p className="connect-apps-description">{description}</p>

            <div className="connect-apps-tags">
              {tags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href || '/integrations'}
                  className="connect-apps-tag-btn"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Illustration Visual */}
          <div className="connect-apps-visual">
            <div className="connect-apps-illustration-wrapper">
              <Image
                src={connectAppsImg}
                alt="Connect the Apps Your Team Already Uses - integrations with digital display"
                priority={false}
                className="connect-apps-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
