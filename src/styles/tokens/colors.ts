/**
 * RocketScreens Centralized Color Tokens
 * Generated from RocketScreens Figma Design System
 * 
 * Primary Brand: #D91C8A (Magenta / Pink)
 * Canvas Background: #FAFAFB / #FFFFFF
 * Text: #171717 / #666673
 * Border: #E3E3E8
 */

export const primitiveColors = {
  brand: {
    50: '#FDF2F8',
    100: '#FCE7F3',
    200: '#FBCFE8',
    300: '#F9A8D4',
    400: '#F472B6',
    500: '#E12A96',
    600: '#D91C8A', // Primary Brand Base
    700: '#C3197C', // Primary Hover / Active
    800: '#9E1564',
    900: '#801352',
    950: '#4A062D',
  },
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFB',
    100: '#F4F4F5',
    200: '#E3E3E8', // Default Border
    300: '#BABABE', // Hover Border
    400: '#8E8E93',
    500: '#666673', // Secondary text
    600: '#474751',
    700: '#32323A',
    800: '#17171C',
    900: '#171717', // Primary text
    950: '#0C0C0E',
  },
  accent: {
    orange: '#F47A20',
  },
  feedback: {
    success: '#10B981',
    successSubtle: '#ECFDF5',
    warning: '#F59E0B',
    warningSubtle: '#FFFBEB',
    error: '#EF4444',
    errorSubtle: '#FEF2F2',
    info: '#3B82F6',
    infoSubtle: '#EFF6FF',
  },
} as const;

export const semanticColors = {
  // Brand & Action
  primary: primitiveColors.brand[600],
  primaryHover: primitiveColors.brand[700],
  primaryActive: primitiveColors.brand[800],
  primarySubtle: primitiveColors.brand[50],
  primaryForeground: primitiveColors.neutral[0],
  primaryRing: 'rgba(217, 28, 138, 0.20)',

  // Surfaces & Backgrounds
  background: primitiveColors.neutral[0],
  backgroundCanvas: primitiveColors.neutral[50],
  surface: primitiveColors.neutral[0],
  surfaceSecondary: primitiveColors.neutral[50],
  surfaceHover: 'rgba(23, 23, 23, 0.04)',

  // Typography / Text
  textPrimary: primitiveColors.neutral[900],
  textSecondary: primitiveColors.neutral[500],
  textMuted: primitiveColors.neutral[400],
  textInverse: primitiveColors.neutral[0],
  textBrand: primitiveColors.brand[600],
  textAccent: primitiveColors.accent.orange,

  // Borders & Dividers
  border: primitiveColors.neutral[200],
  borderSubtle: primitiveColors.neutral[100],
  borderHover: primitiveColors.neutral[300],
  borderFocus: primitiveColors.brand[600],

  // Status & Feedback
  success: primitiveColors.feedback.success,
  successSubtle: primitiveColors.feedback.successSubtle,
  warning: primitiveColors.feedback.warning,
  warningSubtle: primitiveColors.feedback.warningSubtle,
  error: primitiveColors.feedback.error,
  errorSubtle: primitiveColors.feedback.errorSubtle,
  info: primitiveColors.feedback.info,
  infoSubtle: primitiveColors.feedback.infoSubtle,
} as const;

export const colors = {
  ...primitiveColors,
  semantic: semanticColors,
} as const;

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
export type ColorTokens = typeof colors;
