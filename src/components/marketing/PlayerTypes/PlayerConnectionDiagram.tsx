import React from 'react';
import Image from 'next/image';
import rocketLogoCenter from '@/assets/brand/logo/rocket logo center.png';

export type PlayerTypeId = 'android' | 'desktop' | 'web';

export interface PlayerConnectionDiagramProps {
  activeType: PlayerTypeId;
  isVisible?: boolean;
}

export function PlayerConnectionDiagram({
  activeType,
  isVisible = true,
}: PlayerConnectionDiagramProps) {
  const isAndroidActive = activeType === 'android';
  const isDesktopActive = activeType === 'desktop';
  const isWebActive = activeType === 'web';

  const leftStroke = isAndroidActive ? '#D73093' : '#D1D5DB';
  const centerStroke = isDesktopActive ? '#D73093' : '#D1D5DB';
  const rightStroke = isWebActive ? '#D73093' : '#D1D5DB';

  return (
    <div
      className={`pt-diagram-wrapper ${isVisible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      {/* SVG Connecting Paths */}
      <div className="pt-diagram-svg-container">
        {/* Left SVG */}
        <div className="pt-diagram-branch pt-diagram-branch-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 219"
            fill="none"
            className="pt-branch-svg"
            preserveAspectRatio="none"
          >
            <path
              d="M419 219V25C419 11.7452 408.255 1 395 1H0"
              strokeWidth="2"
              stroke={leftStroke}
            />
          </svg>
        </div>

        {/* Center Vertical SVG */}
        <div className="pt-diagram-branch pt-diagram-branch-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 218"
            fill="none"
            className="pt-center-svg"
            preserveAspectRatio="none"
          >
            <path
              d="M1 0L1.00001 218"
              strokeWidth="2"
              stroke={centerStroke}
            />
          </svg>
        </div>

        {/* Right SVG */}
        <div className="pt-diagram-branch pt-diagram-branch-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 421 219"
            fill="none"
            className="pt-branch-svg"
            preserveAspectRatio="none"
          >
            <path
              d="M1 219V25C1 11.7452 11.7452 1 25 1H421"
              strokeWidth="2"
              stroke={rightStroke}
            />
          </svg>
        </div>
      </div>

      {/* Center Brand Node Circle with official Rocket Logo Center */}
      <div className="pt-brand-node-box">
        <Image
          src={rocketLogoCenter}
          alt="RocketScreens Mark"
          className="pt-brand-node-img"
          priority
        />
      </div>
    </div>
  );
}
