import React from 'react';

export interface StatItemProps {
  value: string;
  label: string;
  isVisible: boolean;
  delayIndex: number;
}

export function StatItem({ value, label, isVisible, delayIndex }: StatItemProps) {
  return (
    <div
      className={`stat-item ${isVisible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${delayIndex * 100}ms`,
      }}
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export interface StatsRowProps {
  isVisible: boolean;
}

const STATS_DATA = [
  { value: '100+', label: 'Integrations' },
  { value: '03', label: 'Player Types' },
  { value: '14', label: 'Day Free Trial' },
] as const;

export function StatsRow({ isVisible }: StatsRowProps) {
  return (
    <div className="stats-row">
      {STATS_DATA.map((stat, idx) => (
        <React.Fragment key={stat.label}>
          {idx > 0 && (
            <div
              className={`stat-separator ${isVisible ? 'is-visible' : ''}`}
              aria-hidden="true"
            />
          )}
          <StatItem
            value={stat.value}
            label={stat.label}
            isVisible={isVisible}
            delayIndex={idx}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
