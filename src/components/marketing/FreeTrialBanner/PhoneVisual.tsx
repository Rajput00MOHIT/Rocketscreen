import React from 'react';
import Image from 'next/image';
import mobileMockup from '@/assets/mobile mockup.png';

export function PhoneVisual() {
  return (
    <div className="ft-visual-col" aria-hidden="true">
      {/* Soft coral/pink gradient glow behind phone */}
      <div className="ft-gradient-backdrop" />

      {/* Smartphone Mockup */}
      <div className="ft-phone-wrapper">
        <Image
          src={mobileMockup}
          alt="RocketScreens mobile app on smartphone"
          priority
          className="ft-phone-img"
        />
      </div>
    </div>
  );
}
