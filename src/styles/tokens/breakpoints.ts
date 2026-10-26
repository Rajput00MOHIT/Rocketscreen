/**
 * RocketScreens Responsive Breakpoint Tokens
 */

export const breakpoints = {
  sm: '640px',   // Mobile landscape / small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops / Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px',// Extra large screens / high-res displays
} as const;

export type BreakpointTokens = typeof breakpoints;
