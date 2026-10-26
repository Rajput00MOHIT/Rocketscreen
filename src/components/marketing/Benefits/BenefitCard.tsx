import React from 'react';
import { StaticImageData } from 'next/image';
import { BenefitIllustration } from './BenefitIllustration';

export interface BenefitCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  isVisible: boolean;
  delayMs?: number;
}

export function BenefitCard({
  title,
  description,
  imageSrc,
  isVisible,
  delayMs = 0,
}: BenefitCardProps) {
  return (
    <div
      className={`benefit-card ${isVisible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <BenefitIllustration imageSrc={imageSrc} altText={`${title} illustration`} />

      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-description">{description}</p>
    </div>
  );
}
