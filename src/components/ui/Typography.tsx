import React from 'react';
import { cn } from '@/lib/utils';

export type TypographyVariant =
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'label-lg'
  | 'label-md'
  | 'label-sm'
  | 'caption';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'brand'
  | 'accent'
  | 'inverse'
  | 'success'
  | 'error';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  color?: TypographyColor;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  children: React.ReactNode;
}

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  'display-xl': 'h1',
  'display-lg': 'h1',
  'display-md': 'h2',
  'heading-xl': 'h2',
  'heading-lg': 'h3',
  'heading-md': 'h4',
  'heading-sm': 'h5',
  'body-lg': 'p',
  'body-md': 'p',
  'body-sm': 'p',
  'label-lg': 'span',
  'label-md': 'span',
  'label-sm': 'span',
  caption: 'span',
};

const variantStyles: Record<TypographyVariant, string> = {
  'display-xl': 'text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]', // 72px
  'display-lg': 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]',
  'display-md': 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2]',
  'heading-xl': 'text-3xl sm:text-4xl font-bold tracking-tight leading-tight', // 36px
  'heading-lg': 'text-2xl sm:text-3xl font-bold tracking-tight leading-snug',   // 30px
  'heading-md': 'text-xl sm:text-2xl font-semibold tracking-tight leading-snug',// 24px
  'heading-sm': 'text-lg sm:text-xl font-semibold tracking-tight leading-normal',// 20px
  'body-lg': 'text-lg leading-relaxed',       // 18px (Figma body)
  'body-md': 'text-base leading-relaxed',     // 16px
  'body-sm': 'text-sm leading-normal',        // 14px
  'label-lg': 'text-base font-semibold leading-normal',
  'label-md': 'text-sm font-medium leading-tight',
  'label-sm': 'text-xs font-medium leading-tight tracking-wide uppercase',
  caption: 'text-sm leading-normal',
};

const colorStyles: Record<TypographyColor, string> = {
  primary: 'text-[#171717]',
  secondary: 'text-[#666673]',
  muted: 'text-[#8E8E93]',
  brand: 'text-[#D91C8A]',
  accent: 'text-[#F47A20]',
  inverse: 'text-white',
  success: 'text-emerald-600',
  error: 'text-rose-600',
};

const alignStyles: Record<TypographyAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const weightStyles: Record<TypographyWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

export function Typography({
  variant = 'body-md',
  as,
  color = 'primary',
  align = 'left',
  weight,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as || defaultElementMap[variant] || 'p';

  return (
    <Component
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        alignStyles[align],
        weight && weightStyles[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
