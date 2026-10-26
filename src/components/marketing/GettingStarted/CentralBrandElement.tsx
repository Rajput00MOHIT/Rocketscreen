import React from 'react';
import Image from 'next/image';
import rocketLogoCenter from '@/assets/brand/logo/rocket logo center.png';

export interface CentralBrandElementProps {
  isVisible: boolean;
}

export function CentralBrandElement({ isVisible }: CentralBrandElementProps) {
  return (
    <div className="gs-center-brand-wrapper">
      <div className={`gs-center-brand-box ${isVisible ? 'is-visible' : ''}`}>
        <Image
          src={rocketLogoCenter}
          alt="RocketScreens"
          priority
          className="gs-center-brand-img"
        />
      </div>
    </div>
  );
}
