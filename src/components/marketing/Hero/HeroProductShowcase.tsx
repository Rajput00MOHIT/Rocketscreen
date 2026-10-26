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
          {/* 3. Browser Controls / Traffic Light Dots */}
          <div aria-hidden="true" className="hero-traffic-controls">
            <span className="hero-traffic-dot hero-dot-red" />
            <span className="hero-traffic-dot hero-dot-yellow" />
            <span className="hero-traffic-dot hero-dot-green" />
          </div>

          {/* 4. Large Centered Product Animation Card */}
          <HeroAnimationCard />
        </div>
      </div>
    </div>
  );
}
