/**
 * Validated Environment Variables Access
 */

export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'RocketScreens',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  appEnv: (process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
} as const;
