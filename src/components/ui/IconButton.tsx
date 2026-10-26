'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { ButtonVariant } from './Button';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  icon: React.ReactNode;
  variant?: ButtonVariant;
  size?: IconButtonSize;
  loading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      'aria-label': ariaLabel,
      icon,
      variant = 'ghost',
      size = 'md',
      loading = false,
      disabled = false,
      type = 'button',
      className,
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
        'bg-white text-[#D91C8A] border border-[#D91C8A] hover:bg-[#FDF2F8] active:bg-[#FBCFE8] shadow-xs focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25',
      ghost:
        'bg-transparent text-[#666673] hover:text-[#171717] hover:bg-zinc-100 active:bg-zinc-200 border border-transparent focus-visible:ring-3 focus-visible:ring-[#D91C8A]/25',
      destructive:
        'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 border border-transparent shadow-xs focus-visible:ring-3 focus-visible:ring-rose-500/25',
      link:
        'bg-transparent text-[#D91C8A] hover:underline p-0 border-0 focus-visible:ring-2 focus-visible:ring-[#D91C8A]/25',
      success:
        'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 border border-transparent shadow-xs focus-visible:ring-3 focus-visible:ring-emerald-500/25',
    };

    const sizeStyles: Record<IconButtonSize, string> = {
      sm: 'h-8 w-8 text-sm rounded-md',
      md: 'h-10 w-10 text-base rounded-lg',
      lg: 'h-12 w-12 text-lg rounded-lg',
    };

    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          'inline-flex items-center justify-center shrink-0 transition-colors duration-150',
          'focus:outline-none cursor-pointer',
          'disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden="true" />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
