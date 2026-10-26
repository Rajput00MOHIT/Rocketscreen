import React from 'react';
import Image from 'next/image';
import analyticsChartIcon from '@/assets/Hero/Analytics chart icon.png';
import './hero.css';

/**
 * Floating decorative elements attached near the hero headline
 * Consumes the official assets with custom CSS classes.
 */

export function FloatingChartElement() {
  return (
    <span aria-hidden="true" className="hero-deco-wrapper">
      <span className="hero-chart-badge">
        <Image
          src={analyticsChartIcon}
          alt=""
          priority
          className="hero-chart-img"
        />
      </span>
    </span>
  );
}

export function FloatingBrowserElement() {
  return (
    <span aria-hidden="true" className="hero-deco-wrapper">
      <span className="hero-browser-badge">
        {/* Browser Dots */}
        <span className="hero-mini-dots">
          <span className="hero-mini-dot hero-mini-dot-red" />
          <span className="hero-mini-dot hero-mini-dot-yellow" />
          <span className="hero-mini-dot hero-mini-dot-green" />
        </span>
        {/* Mini Layout Wireframe */}
        <span className="hero-mini-wireframe">
          <span className="hero-mini-bar" />
        </span>
      </span>
    </span>
  );
}
