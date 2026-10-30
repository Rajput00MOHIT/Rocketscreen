import React from 'react';
import { HeroAnimationCard } from './HeroAnimationCard';
import './hero.css';

export function HeroProductShowcase() {
  return (
    <div className="hero-showcase-container">
      {/* 1. Outer Translucent Showcase Frame */}
      <div className="hero-outer-frame">
        {/* 2. Inner Browser / Canvas Window */}
        <div className="hero-browser-window">
          {/* 3. Product Animation Video */}
          <HeroAnimationCard />
        </div>
      </div>
    </div>
  );
}
