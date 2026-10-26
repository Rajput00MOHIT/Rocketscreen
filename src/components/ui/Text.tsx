import React from 'react';
import { cn } from '@/lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div';
  variant?: 'default' | 'muted' | 'lead' | 'caption' | 'brand';
}

export function Text({
  as: Component = 'p',
  variant = 'default',
  className,
  children,
  ...props
}: TextProps) {
  const variantStyles = {
    default: 'text-zinc-700 text-base leading-relaxed',
    muted: 'text-zinc-500 text-sm leading-normal',
    lead: 'text-zinc-600 text-lg sm:text-xl leading-relaxed',
    caption: 'text-zinc-400 text-xs',
    brand: 'text-pink-600 font-medium',
  };

  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
