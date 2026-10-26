/**
 * RocketScreens Spacing Tokens
 * Base unit: 16px (1rem)
 * 
 * xs: 8px (0.5rem)   — Tight inline gaps
 * sm: 16px (1rem)    — Compact component spacing
 * md: 32px (2rem)    — Default padding / gutters
 * lg: 48px (3rem)    — Card padding and section gutters
 * xl: 64px (4rem)    — Larger section spacing
 * 2xl: 96px (6rem)   — Hero & major landmark spacing
 */

export const spacing = {
  0: '0rem',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px  (xs)
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px (sm - base unit)
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px (md)
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px (lg)
  16: '4rem',     // 64px (xl)
  20: '5rem',     // 80px
  24: '6rem',     // 96px (2xl)
  32: '8rem',     // 128px
} as const;

export const semanticSpacing = {
  tight: spacing[2],       // 8px
  compact: spacing[4],     // 16px
  default: spacing[8],     // 32px
  relaxed: spacing[12],    // 48px
  loose: spacing[16],      // 64px
  section: spacing[24],    // 96px
} as const;

export type SpacingTokens = typeof spacing;
export type SemanticSpacing = typeof semanticSpacing;
