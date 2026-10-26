import React from 'react';
import { FloatingChartElement, FloatingBrowserElement } from './HeroDecorations';
import './hero.css';

export function HeroContent() {
  return (
    <div className="hero-content">
      {/* 1. Eyebrow Badge */}
      <div className="hero-badge-wrapper">
        <span className="hero-eyebrow-badge">
          DIGITAL SIGNAGE, SIMPLIFIED
        </span>
      </div>

      {/* 2. Main Display Headline */}
      <h1 className="hero-title">
        <span>Turn any screen into a live</span>
        <span className="hero-title-line2">
          <FloatingChartElement />
          <span>business dashboard</span>
          <FloatingBrowserElement />
        </span>
      </h1>

      {/* 3. Supporting Description Paragraph */}
      <p className="hero-description">
        Connect the tools your team already uses and display the information that
        matters where people can see it.
      </p>
    </div>
  );
}
