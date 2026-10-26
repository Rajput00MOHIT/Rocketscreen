/**
 * RocketScreens Typography Tokens
 * Standard font family: Inter with progressive fallbacks
 */

export const typography = {
  fontFamily: {
    sans: 'var(--font-sans, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
    mono: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace)',
  },
  fontSize: {
    'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }], // 72px
    'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],// 60px
    'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],   // 48px
    
    'heading-xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }], // 36px
    'heading-lg': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.015em' }], // 30px
    'heading-md': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],     // 24px
    'heading-sm': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.005em' }],// 20px

    'body-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0em' }], // 18px (Figma body)
    'body-md': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],      // 16px (Standard)
    'body-sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0em' }], // 14px (Compact)

    'label-lg': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],      // 16px
    'label-md': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.005em' }],// 14px
    'label-sm': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],      // 12px

    caption: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0em' }],  // 14px (Figma caption)
    xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],        // 12px
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
} as const;

export type TypographyTokens = typeof typography;
