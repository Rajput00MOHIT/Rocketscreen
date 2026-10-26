import React from 'react';

export interface StepCardProps {
  stepNumber: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delayMs?: number;
}

export function StepCard({
  stepNumber,
  title,
  description,
  icon,
  isVisible,
  delayMs = 0,
}: StepCardProps) {
  return (
    <div
      className={`gs-step-card gs-card-step-${stepNumber} ${isVisible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="gs-icon-box" aria-hidden="true">
        {icon}
      </div>

      <h3 className="gs-step-title">{title}</h3>
      <p className="gs-step-description">{description}</p>
    </div>
  );
}
