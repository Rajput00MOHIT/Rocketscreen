'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      leadingIcon,
      trailingIcon,
      fullWidth = true,
      id: customId,
      disabled,
      required,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = customId || generatedId;
    const hasError = Boolean(errorMessage);

    return (
      <div className={cn('flex flex-col space-y-1.5', fullWidth ? 'w-full' : 'w-auto')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[#171717] flex items-center gap-1 select-none"
          >
            {label}
            {required && <span className="text-[#D91C8A]">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {leadingIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-[#8E8E93]">
              {leadingIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={cn(
              'w-full px-3.5 py-2.5 text-base bg-white text-[#171717] placeholder-[#8E8E93] rounded-lg transition-colors duration-150',
              'border border-[#E3E3E8] hover:border-[#BABABE]',
              'focus:outline-none focus:border-[#D91C8A] focus:ring-3 focus:ring-[#D91C8A]/20',
              hasError &&
                'border-rose-500 hover:border-rose-600 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 placeholder-rose-400',
              disabled &&
                'bg-zinc-50 border-[#E3E3E8] text-[#8E8E93] opacity-60 cursor-not-allowed pointer-events-none',
              leadingIcon && 'pl-10',
              trailingIcon && 'pr-10',
              className
            )}
            {...props}
          />

          {trailingIcon && (
            <div className="absolute right-3 flex items-center pointer-events-none text-[#8E8E93]">
              {trailingIcon}
            </div>
          )}
        </div>

        {hasError && (
          <p id={`${inputId}-error`} className="text-xs text-rose-600 font-medium mt-1">
            {errorMessage}
          </p>
        )}

        {!hasError && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-[#666673] mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
