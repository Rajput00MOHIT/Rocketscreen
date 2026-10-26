import React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export function Heading({
  as: Component = 'h2',
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  const defaultSizeMap: Record<string, string> = {
    h1: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900',
    h2: 'text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900',
    h3: 'text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900',
    h4: 'text-lg font-semibold text-zinc-900',
    h5: 'text-base font-semibold text-zinc-900',
    h6: 'text-sm font-semibold uppercase tracking-wider text-zinc-700',
  };

  const explicitSizeMap: Record<string, string> = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-semibold',
    lg: 'text-xl sm:text-2xl font-semibold tracking-tight',
    xl: 'text-2xl sm:text-3xl font-bold tracking-tight',
    '2xl': 'text-3xl sm:text-4xl font-bold tracking-tight',
    '3xl': 'text-4xl sm:text-5xl font-extrabold tracking-tight',
  };

  return (
    <Component
      className={cn(
        size ? explicitSizeMap[size] : defaultSizeMap[Component],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
