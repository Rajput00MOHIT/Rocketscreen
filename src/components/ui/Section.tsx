import React from 'react';
import { cn } from '@/lib/utils';

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export type SectionBackground = 'default' | 'canvas' | 'brand-subtle' | 'dark';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: SectionSpacing;
  background?: SectionBackground;
  borderTop?: boolean;
  borderBottom?: boolean;
}

export function Section({
  as: Component = 'section',
  spacing = 'lg',
  background = 'default',
  borderTop = false,
  borderBottom = false,
  className,
  children,
  ...props
}: SectionProps) {
  const spacingStyles: Record<SectionSpacing, string> = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  };

  const backgroundStyles: Record<SectionBackground, string> = {
    default: 'bg-white text-[#171717]',
    canvas: 'bg-[#FAFAFB] text-[#171717]',
    'brand-subtle': 'bg-gradient-to-b from-[#FDF2F8]/60 to-white text-[#171717]',
    dark: 'bg-[#17171C] text-white',
  };

  return (
    <Component
      className={cn(
        'w-full relative',
        spacingStyles[spacing],
        backgroundStyles[background],
        borderTop && 'border-t border-[#E3E3E8]',
        borderBottom && 'border-b border-[#E3E3E8]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
