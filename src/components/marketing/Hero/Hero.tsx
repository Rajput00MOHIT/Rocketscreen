import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroProductShowcase } from './HeroProductShowcase';
import './hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      {/* Soft Atmospheric Background */}
      <HeroBackground />

      <div className="hero-content-wrapper">
        {/* Main Hero Header Content */}
        <HeroContent />

        {/* Hero Product Showcase & Animation Window */}
        <HeroProductShowcase />
      </div>
    </section>
  );
}
