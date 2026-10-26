/**
 * RocketScreens Motion & Transition Tokens
 */

export const motion = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  },
} as const;

export const semanticTransitions = {
  default: `all ${motion.duration.normal} ${motion.easing.standard}`,
  fast: `all ${motion.duration.fast} ${motion.easing.standard}`,
  colors: `color, background-color, border-color, box-shadow ${motion.duration.fast} ${motion.easing.standard}`,
  transform: `transform ${motion.duration.normal} ${motion.easing.emphasized}`,
} as const;

export type MotionTokens = typeof motion;
