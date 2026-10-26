/**
 * RocketScreens Border Tokens
 */

import { primitiveColors } from './colors';

export const borders = {
  width: {
    none: '0px',
    thin: '1px',
    medium: '2px',
    thick: '3px',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    none: 'none',
  },
} as const;

export const semanticBorders = {
  default: `1px solid ${primitiveColors.neutral[200]}`, // #E3E3E8
  subtle: `1px solid ${primitiveColors.neutral[100]}`,  // #F4F4F5
  hover: `1px solid ${primitiveColors.neutral[300]}`,   // #BABABE
  focus: `1px solid ${primitiveColors.brand[600]}`,     // #D91C8A
  error: `1px solid ${primitiveColors.feedback.error}`, // #EF4444
} as const;

export type BorderTokens = typeof borders;
export type SemanticBorderTokens = typeof semanticBorders;
