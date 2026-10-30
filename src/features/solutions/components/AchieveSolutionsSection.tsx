import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { ACHIEVE_CARDS, AchieveCardItem } from '../data/achieve-cards-data';
import './achieve-solutions.css';

export interface AchieveSolutionsSectionProps {
  /** Section heading line 1 override */
  headingLine1?: string;
  /** Section heading line 2 override */
  headingLine2?: string;
  /** Optional custom cards list */
  cards?: readonly AchieveCardItem[];
}

export function AchieveSolutionsSection({
  headingLine1 = 'What Do You Want',
  headingLine2 = 'to Achieve?',
  cards = ACHIEVE_CARDS,
}: AchieveSolutionsSectionProps) {
  return (
    <section
      aria-label="What Do You Want to Achieve"
      className="achieve-solutions-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className="achieve-header">
          <h2 className="achieve-heading">
            <span className="achieve-heading-line">{headingLine1}</span>
            <span className="achieve-heading-line">{headingLine2}</span>
          </h2>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="achieve-grid">
          {cards.map((card) => (
            <article key={card.id} className="achieve-card">
              {/* Top: Title, Description, and Action Link */}
              <div className="achieve-card-content">
                <h3 className="achieve-card-title">
                  <span className="achieve-card-title-line">
                    {card.titleLine1}
                  </span>
                  <span className="achieve-card-title-line">
                    {card.titleLine2}
                  </span>
                </h3>

                <p className="achieve-card-desc">{card.description}</p>

                <Link
                  href={card.href}
                  className="achieve-card-link"
                  aria-label={`${card.linkText} for ${card.titleLine1} ${card.titleLine2}`}
                >
                  <span>{card.linkText}</span>
                  <span className="achieve-card-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>

              {/* Bottom: 3D Illustration */}
              <div className="achieve-card-visual" aria-hidden="true">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                  className="achieve-card-img"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

