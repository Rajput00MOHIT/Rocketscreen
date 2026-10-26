'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui';
import {
  UploadCloudIcon,
  CombineSourcesIcon,
  BuildChannelsIcon,
  PreviewScreenIcon,
  AssignChannelsIcon,
} from './ChannelIcons';
import './create-channels.css';

export interface ChannelFeatureItem {
  id: string;
  icon: React.ReactNode;
  text: string;
  delayMs: number;
}

export const CHANNEL_FEATURES_DATA: readonly ChannelFeatureItem[] = [
  {
    id: 'upload-organize',
    icon: <UploadCloudIcon size={20} />,
    text: 'Upload and organize media',
    delayMs: 120,
  },
  {
    id: 'combine-sources',
    icon: <CombineSourcesIcon size={20} />,
    text: 'Combine supported content sources.',
    delayMs: 180,
  },
  {
    id: 'build-manage',
    icon: <BuildChannelsIcon size={20} />,
    text: 'Build and manage channels.',
    delayMs: 240,
  },
  {
    id: 'preview-screens',
    icon: <PreviewScreenIcon size={20} />,
    text: 'Preview content on screens.',
    delayMs: 300,
  },
  {
    id: 'assign-players',
    icon: <AssignChannelsIcon size={20} />,
    text: 'Assign channels to compatible players.',
    delayMs: 360,
  },
] as const;

export interface CreateChannelsSectionProps {
  /** Optional title line 1 override */
  headingLine1?: string;
  /** Optional title line 2 override */
  headingLine2?: string;
  /** Optional features data override */
  features?: readonly ChannelFeatureItem[];
}

export function CreateChannelsSection({
  headingLine1 = 'Create Channels That',
  headingLine2 = 'Work for You.',
  features = CHANNEL_FEATURES_DATA,
}: CreateChannelsSectionProps) {
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
      aria-label="Create Channels That Work for You"
      className={`create-channels-section ${isVisible ? 'is-visible' : ''}`}
    >
      <Container size="xl">
        {/* Top Accent Line */}
        <div className="channel-accent-line accent-top" aria-hidden="true" />

        {/* Section Heading */}
        <div className="channel-heading-wrapper">
          <h2 className="channel-heading-title">
            <span className="channel-heading-line">{headingLine1}</span>
            <span className="channel-heading-line">{headingLine2}</span>
          </h2>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="channel-cards-grid">
          {features.map((item) => (
            <div
              key={item.id}
              className="channel-feature-card"
              style={{
                transitionDelay: `${item.delayMs}ms`,
              }}
            >
              <div className="channel-card-icon-box">{item.icon}</div>
              <p className="channel-card-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="channel-accent-line accent-bottom" aria-hidden="true" />
      </Container>
    </section>
  );
}
