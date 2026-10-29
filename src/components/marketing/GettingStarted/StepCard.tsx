import React from 'react';

export interface StepCardProps {
  stepNumber: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delayMs?: number;
  isActive?: boolean;
  onHover?: () => void;
  onFocus?: () => void;
}

export function StepCard({
  stepNumber,
  title,
  description,
  icon,
  isVisible,
  delayMs = 0,
  isActive = false,
  onHover,
  onFocus,
}: StepCardProps) {
  return (
    <div
      className={`gs-step-card gs-card-step-${stepNumber} ${isVisible ? 'is-visible' : ''} ${isActive ? 'is-active' : ''}`}
      style={{
        transitionDelay: isVisible ? '0ms' : `${delayMs}ms`,
      }}
      tabIndex={0}
      role="article"
      aria-label={`Step ${stepNumber}: ${title}`}
      onMouseEnter={onHover}
      onFocus={onFocus}
    >
      <div className="gs-icon-box" aria-hidden="true">
        {icon}
      </div>

      <h3 className="gs-step-title">{title}</h3>
      <p className="gs-step-description">{description}</p>
    </div>
  );
}
