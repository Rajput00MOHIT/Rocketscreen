import React from 'react';
import { PlatformFeatureId } from './PlatformVisual';

export interface PlatformFeatureItemData {
  id: PlatformFeatureId;
  title: string;
  description: string;
}

export interface FeatureListProps {
  features: readonly PlatformFeatureItemData[];
  activeId: PlatformFeatureId;
  onSelect: (id: PlatformFeatureId) => void;
}

export function FeatureList({ features, activeId, onSelect }: FeatureListProps) {
  return (
    <div
      role="tablist"
      aria-label="Platform capabilities"
      className="pf-list-col"
    >
      {features.map((feature) => {
        const isActive = feature.id === activeId;
        return (
          <button
            key={feature.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`pf-panel-${feature.id}`}
            id={`pf-tab-${feature.id}`}
            onClick={() => onSelect(feature.id)}
            className={`pf-feature-item-btn ${isActive ? 'is-active' : ''}`}
          >
            <span className="pf-feature-title">{feature.title}</span>
            <span className="pf-feature-description">{feature.description}</span>
          </button>
        );
      })}
    </div>
  );
}
