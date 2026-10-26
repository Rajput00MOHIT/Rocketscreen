/**
 * RocketScreens Shadow Tokens
 * Gentle, diffused elevations based on Figma design specification
 */

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(23, 23, 28, 0.04), 0 1px 1px 0 rgba(23, 23, 28, 0.02)',
  default: '0 2px 4px -1px rgba(23, 23, 28, 0.06), 0 1px 2px -1px rgba(23, 23, 28, 0.04)',
  md: '0 4px 6px -1px rgba(23, 23, 28, 0.07), 0 2px 4px -2px rgba(23, 23, 28, 0.05)',
  lg: '0 10px 15px -3px rgba(23, 23, 28, 0.08), 0 4px 6px -4px rgba(23, 23, 28, 0.04)',
  xl: '0 20px 25px -5px rgba(23, 23, 28, 0.08), 0 8px 10px -6px rgba(23, 23, 28, 0.04)',
} as const;

export const semanticRings = {
  focusPrimary: '0 0 0 3px rgba(217, 28, 138, 0.16)', // #D91C8A1F
  focusError: '0 0 0 3px rgba(239, 68, 68, 0.16)',    // #EF44441F
} as const;

export type ShadowTokens = typeof shadows;
export type SemanticRingTokens = typeof semanticRings;
