import React from 'react';
import Image from 'next/image';
import rocketCircleGradient from '@/assets/brand/logo/rocket-circle-gradient.png';
import rocketSymbolWhite from '@/assets/brand/logo/rocket-symbol-white.png';

export interface CentralBrandElementProps {
  isVisible: boolean;
  rotation?: number;
  activeStep?: number | null;
}

export function CentralBrandElement({
  isVisible,
  rotation = 0,
  activeStep = null,
}: CentralBrandElementProps) {
  return (
    <div className="gs-center-brand-wrapper">
      <div
        className={`gs-center-brand-box ${isVisible ? 'is-visible' : ''} ${
          activeStep !== null ? 'has-active-step' : ''
        }`}
      >
        <div className="gs-center-brand-logo-container">
          {/* Stationary Pink-to-Orange Gradient Circle */}
          <Image
            src={rocketCircleGradient}
            alt=""
            priority
            className="gs-center-brand-bg"
          />

          {/* Rotating White Rocket Symbol Inside the Gradient Circle */}
          <div
            className="gs-center-rocket-rotator"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
            aria-hidden="true"
          >
            <Image
              src={rocketSymbolWhite}
              alt="RocketScreens"
              priority
              className="gs-center-rocket-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
