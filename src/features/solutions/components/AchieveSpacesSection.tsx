import React from 'react';
import { Container } from '@/components/ui';
import { SPACES_DATA, SpaceItem } from '../data/spaces-data';
import './achieve-spaces.css';

export interface AchieveSpacesSectionProps {
  /** Section heading line 1 override */
  headingLine1?: string;
  /** Section heading line 2 override */
  headingLine2?: string;
  /** Optional custom spaces list */
  spaces?: readonly SpaceItem[];
}

export function AchieveSpacesSection({
  headingLine1 = 'What Do You Want',
  headingLine2 = 'to Achieve?',
  spaces = SPACES_DATA,
}: AchieveSpacesSectionProps) {
  return (
    <section
      aria-label="What Do You Want to Achieve - Spaces"
      className="achieve-spaces-section"
    >
      <Container size="lg">
        {/* Centered Heading */}
        <div className="achieve-spaces-header">
          <h2 className="achieve-spaces-heading">
            <span className="achieve-spaces-heading-line">{headingLine1}</span>
            <span className="achieve-spaces-heading-line">{headingLine2}</span>
          </h2>
        </div>

        {/* 4-Row Two-Column List */}
        <div className="achieve-spaces-list" role="list">
          {spaces.map((item) => (
            <article
              key={item.id}
              className="achieve-spaces-row"
              role="listitem"
            >
              {/* Left Column: Space / Environment Title (~65% desktop split) */}
              <div className="achieve-spaces-col-title">
                <h3 className="achieve-spaces-title">
                  {item.titleLine1 && item.titleLine2 ? (
                    <>
                      <span className="achieve-spaces-title-line">
                        {item.titleLine1}
                      </span>
                      <span className="achieve-spaces-title-line">
                        {item.titleLine2}
                      </span>
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
              </div>

              {/* Right Column: Supporting Description (~35% desktop split) */}
              <div className="achieve-spaces-col-desc">
                <p className="achieve-spaces-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Also export alias if needed
export { AchieveSpacesSection as SpacesSection };

