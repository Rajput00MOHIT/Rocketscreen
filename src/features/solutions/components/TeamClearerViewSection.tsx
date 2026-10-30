'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { DEPARTMENTS, DepartmentItem } from '../data/team-clearer-view-data';
import './team-clearer-view.css';

export interface TeamClearerViewSectionProps {
  /** Section heading line 1 override */
  headingLine1?: string;
  /** Section heading line 2 override */
  headingLine2?: string;
  /** Optional custom departments list */
  departments?: readonly DepartmentItem[];
}

export function TeamClearerViewSection({
  headingLine1 = 'Give Every Team a',
  headingLine2 = 'Clearer View',
  departments = DEPARTMENTS,
}: TeamClearerViewSectionProps) {
  const [activeId, setActiveId] = useState<string>(departments[0]?.id || 'sales');
  const [displayedDepartment, setDisplayedDepartment] = useState<DepartmentItem>(
    departments[0]
  );
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeDepartment =
    departments.find((d) => d.id === activeId) || departments[0];

  // Smooth switch visual with brief fade transition
  useEffect(() => {
    if (activeDepartment.id === displayedDepartment.id) return;

    setIsTransitioning(true);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedDepartment(activeDepartment);
      setIsTransitioning(false);
    }, 150);

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [activeDepartment, displayedDepartment.id]);

  const handleSelect = (id: string) => {
    setActiveId(id);
  };

  return (
    <section
      aria-label="Give Every Team a Clearer View"
      className="team-clearer-view-section"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className="team-view-header">
          <h2 className="team-view-heading">
            <span className="team-view-heading-line">{headingLine1}</span>
            <span className="team-view-heading-line">{headingLine2}</span>
          </h2>
        </div>

        {/* Two-Column Responsive Grid */}
        <div className="team-view-grid">
          {/* Left Column: Interactive Department List */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Departments"
            className="team-view-list"
          >
            {departments.map((dept) => {
              const isActive = dept.id === activeId;
              const tabId = `team-tab-${dept.id}`;
              const panelId = `team-panel-${dept.id}`;

              return (
                <button
                  key={dept.id}
                  id={tabId}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  onClick={() => handleSelect(dept.id)}
                  onMouseEnter={() => handleSelect(dept.id)}
                  className={`team-view-item-btn ${isActive ? 'is-active' : ''}`}
                >
                  <h3 className="team-view-item-title">{dept.title}</h3>
                  <p className="team-view-item-desc">{dept.description}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Preview Panel */}
          <div
            id={`team-panel-${displayedDepartment.id}`}
            role="tabpanel"
            aria-labelledby={`team-tab-${displayedDepartment.id}`}
            className="team-view-preview-card"
          >
            <div className="team-view-visual-wrapper">
              <div
                className={`team-view-visual-stage ${
                  isTransitioning ? 'is-transitioning' : ''
                }`}
              >
                <Image
                  src={displayedDepartment.image}
                  alt={displayedDepartment.imageAlt}
                  priority
                  className="team-view-visual-img"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

