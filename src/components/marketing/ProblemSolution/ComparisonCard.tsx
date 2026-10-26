import React from 'react';
import { ProductPreview, ProductPreviewVariant } from './ProductPreview';

export interface ComparisonCardProps {
  badgeLabel: string;
  description: React.ReactNode;
  variant: ProductPreviewVariant;
  isVisible: boolean;
  delayMs?: number;
}

export function ComparisonCard({
  badgeLabel,
  description,
  variant,
  isVisible,
  delayMs = 0,
}: ComparisonCardProps) {
  return (
    <div
      className={`ps-card ps-card-${variant} ${isVisible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="ps-card-header">
        <span className="ps-badge">{badgeLabel}</span>
        <p className="ps-card-description">{description}</p>
      </div>

      <ProductPreview
        variant={variant}
        altText={`${badgeLabel} interface visualization`}
      />
    </div>
  );
}
