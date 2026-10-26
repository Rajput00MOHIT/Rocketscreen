import React from 'react';
import Image, { StaticImageData } from 'next/image';
import mockupsImg from '@/assets/mockups.png';
import dashboardTabletImg from '@/assets/Players/Dashboard tablet mockup.png';
import bgDottedImg from '@/assets/bg.png';
import { PlayerTypeId } from './PlayerConnectionDiagram';

export interface PlayerPreviewPanelProps {
  activeType: PlayerTypeId;
  isVisible?: boolean;
}

const PLAYER_PREVIEWS: Record<PlayerTypeId, { image: StaticImageData; alt: string }> = {
  android: {
    image: mockupsImg,
    alt: 'RocketScreens running on Android player tablet device',
  },
  desktop: {
    image: dashboardTabletImg,
    alt: 'RocketScreens running on Desktop player display',
  },
  web: {
    image: mockupsImg,
    alt: 'RocketScreens running on Web player browser interface',
  },
};

export function PlayerPreviewPanel({
  activeType,
  isVisible = true,
}: PlayerPreviewPanelProps) {
  const currentPreview = PLAYER_PREVIEWS[activeType] || PLAYER_PREVIEWS.android;

  return (
    <div
      className={`pt-preview-panel ${isVisible ? 'is-visible' : ''}`}
      role="region"
      aria-label="Player dashboard interface preview"
    >
      {/* Background dotted image asset */}
      <div className="pt-bg-container" aria-hidden="true">
        <Image
          src={bgDottedImg}
          alt=""
          fill
          priority
          className="pt-bg-img"
        />
      </div>

      {/* Foreground dashboard mockup */}
      <div className="pt-mockup-wrapper">
        <Image
          key={activeType}
          src={currentPreview.image}
          alt={currentPreview.alt}
          priority
          className="pt-mockup-img"
        />
      </div>
    </div>
  );
}
