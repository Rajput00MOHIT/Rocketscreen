/**
 * RocketScreens Border Radius Tokens
 * 
 * sm: 4px  — Small tags, chips, compact corners
 * md: 8px  — Buttons, inputs, standard cards
 * lg: 12px — Panels, larger containers
 * xl: 16px — Featured surfaces
 * full: 9999px — Badges, pills, avatar circles
 */

export const radii = {
  none: '0',
  sm: '0.25rem',  // 4px
  md: '0.5rem',   // 8px
  lg: '0.75rem',  // 12px
  xl: '1rem',     // 16px
  '2xl': '1.5rem',// 24px
  full: '9999px',
} as const;

export const semanticRadii = {
  button: radii.md,      // 8px
  input: radii.md,       // 8px
  card: radii.md,        // 8px
  panel: radii.lg,       // 12px
  badge: radii.full,     // 9999px
  tag: radii.sm,         // 4px
  modal: radii.lg,       // 12px
  avatar: radii.full,    // 9999px
} as const;

export type RadiiTokens = typeof radii;
export type SemanticRadii = typeof semanticRadii;
