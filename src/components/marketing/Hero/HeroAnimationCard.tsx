import React from 'react';
import './hero.css';

export interface HeroAnimationCardProps {
  className?: string;
}

export function HeroAnimationCard({ className = '' }: HeroAnimationCardProps) {
  return (
    <div className={`hero-card-viewport ${className}`}>
      <video
        src="/videos/rocketscreens-logo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero-card-video"
      />
    </div>
  );
}
