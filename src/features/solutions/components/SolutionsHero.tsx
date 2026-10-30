import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import solutionsHeroImg from '@/assets/SOlution page hero imgae.png';
import './solutions-hero.css';

export interface SolutionsHeroProps {
  /** Optional badge text override (defaults to "Business Solutions") */
  badgeText?: string;
  /** Optional headline line 1 override (defaults to "Screens That Work for") */
  headingLine1?: string;
  /** Optional headline line 2 override (defaults to "Your Business") */
  headingLine2?: string;
  /** Optional description copy override */
  description?: string;
}

export function SolutionsHero({
  badgeText = 'Business Solutions',
  headingLine1 = 'Screens That Work for',
  headingLine2 = 'Your Business',
  description = 'Share the right content with every team across connected screens using RocketScreens.',
}: SolutionsHeroProps) {
  return (
    <section
      aria-label="Business Solutions Hero"
      className="solutions-hero-section"
    >
      {/* Subtle soft pink background atmosphere glow */}
      <div className="solutions-hero-bg-glow" aria-hidden="true" />

      <Container size="xl">
        <div className="solutions-hero-content">
          {/* Hero Badge: "Business Solutions" */}
          <div className="solutions-hero-badge" role="status">
            <span>{badgeText}</span>
          </div>

          {/* Large Two-line Headline */}
          <h1 className="solutions-hero-heading">
            <span className="solutions-hero-heading-line">{headingLine1}</span>
            <span className="solutions-hero-heading-line">{headingLine2}</span>
          </h1>

          {/* Supporting Description */}
          <p className="solutions-hero-description">{description}</p>

          {/* Central Connected Business Displays Visual */}
          <div className="solutions-hero-showcase">
            <div className="solutions-hero-img-wrapper">
              <Image
                src={solutionsHeroImg}
                alt="RocketScreens connected business displays network connecting team content, tools, and digital signage"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1020px"
                className="solutions-hero-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
