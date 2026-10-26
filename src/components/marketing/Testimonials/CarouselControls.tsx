import React from 'react';
import { Icon } from '@/components/ui';

export interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function CarouselControls({ onPrev, onNext }: CarouselControlsProps) {
  return (
    <div className="ts-controls-bar">
      <button
        type="button"
        onClick={onPrev}
        className="ts-nav-btn"
        aria-label="Previous testimonials"
      >
        <Icon name="ArrowLeft" size={18} />
      </button>

      <button
        type="button"
        onClick={onNext}
        className="ts-nav-btn"
        aria-label="Next testimonials"
      >
        <Icon name="ArrowRight" size={18} />
      </button>
    </div>
  );
}
