'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'brand-outline'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'success';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      type = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-[#D91C8A] text-white hover:bg-[#C3197C] active:bg-[#9E1564] border border-transparent shadow-xs focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25',
      secondary:
        'bg-white text-[#171717] border border-[#E3E3E8] hover:bg-[#FAFAFB] hover:border-[#BABABE] active:bg-zinc-100 shadow-xs focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25',
      outline:
        'bg-transparent text-[#171717] border border-[#E3E3E8] hover:bg-[#FAFAFB] hover:border-[#BABABE] active:bg-zinc-100 focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25',
      'brand-outline':
        'bg-white text-[#D91C8A] border border-[#D91C8A] hover:bg-[#FDF2F8] active:bg-[#FBCFE8] shadow-xs focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25 font-semibold',
      ghost:
        'bg-transparent text-[#666673] hover:text-[#171717] hover:bg-zinc-100 active:bg-zinc-200 border border-transparent focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25',
      destructive:
        'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 border border-transparent shadow-xs focus-visible:ring-3 focus-visible:ring-rose-500/25',
      link:
        'bg-transparent text-[#D91C8A] hover:underline underline-offset-4 p-0 h-auto font-medium border-0 focus-visible:ring-2 focus-visible:ring-[#D91C8A]/25',
      success:
        'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 border border-transparent shadow-xs focus-visible:ring-3 focus-visible:ring-emerald-500/25',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3.5 py-1.5 text-sm font-medium rounded-lg gap-1.5',
      md: 'px-5 py-2.5 text-sm font-semibold rounded-lg gap-2',
      lg: 'px-6 py-3 text-base font-semibold rounded-lg gap-2.5',
      icon: 'p-2.5 rounded-lg justify-center',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          'inline-flex items-center justify-center select-none transition-colors duration-150',
          'focus:outline-none cursor-pointer',
          'disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed',
          variantStyles[variant],
          variant !== 'link' && sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden="true" />
            <span>{children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
