import React from 'react';
import Image from 'next/image';
import logoSvg from '@/assets/brand/logo/rocketscreens-logo.webp';
import './hero.css';

export interface HeroAnimationCardProps {
  className?: string;
}

/**
 * ============================================================================
 * FUTURE:
 * Replace this static HeroAnimationCard content with the final
 * JSON/Lottie animation without changing the outer hero layout.
 * ============================================================================
 */
export function HeroAnimationCard({ className = '' }: HeroAnimationCardProps) {
  return (
    <div className={`hero-center-card ${className}`}>
      {/* Animation Viewport */}
      <div className="hero-card-viewport">
        {/* Static Animation Placeholder State */}
        <Image
          src={logoSvg}
          alt="RocketScreens"
          priority
          className="hero-card-logo"
        />
      </div>
    </div>
  );
}
