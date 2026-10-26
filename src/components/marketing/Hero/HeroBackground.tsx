import React from 'react';
import Image from 'next/image';
import pastelCloudBg from '@/assets/Hero/Pastel cloud background.png';
import './hero.css';

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="hero-bg-container">
      {/* Background Cloud Image Asset */}
      <Image
        src={pastelCloudBg}
        alt=""
        priority
        fill
        className="hero-bg-image"
        sizes="100vw"
      />

      {/* Subtle Top & Bottom Gradient Blends */}
      <div className="hero-bg-fade-top" />
      <div className="hero-bg-fade-bottom" />
    </div>
  );
}
