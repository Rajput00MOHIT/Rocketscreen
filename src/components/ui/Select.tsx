'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  options?: SelectOption[];
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      options,
      fullWidth = true,
      id: customId,
      disabled,
      required,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = customId || generatedId;
    const hasError = Boolean(errorMessage);

    return (
      <div className={cn('flex flex-col space-y-1.5', fullWidth ? 'w-full' : 'w-auto')}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-[#171717] flex items-center gap-1 select-none"
          >
            {label}
            {required && <span className="text-[#D91C8A]">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${selectId}-error`
                : helperText
                ? `${selectId}-helper`
                : undefined
            }
            className={cn(
              'w-full px-3.5 py-2.5 pr-10 text-base bg-white text-[#171717] rounded-lg transition-colors duration-150 appearance-none',
              'border border-[#E3E3E8] hover:border-[#BABABE]',
              'focus:outline-none focus:border-[#D91C8A] focus:ring-3 focus:ring-[#D91C8A]/20 cursor-pointer',
              hasError &&
                'border-rose-500 hover:border-rose-600 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900',
              disabled &&
                'bg-zinc-50 border-[#E3E3E8] text-[#8E8E93] opacity-60 cursor-not-allowed pointer-events-none',
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          <ChevronDown
            className="absolute right-3.5 h-4 w-4 text-[#8E8E93] pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {hasError && (
          <p id={`${selectId}-error`} className="text-xs text-rose-600 font-medium mt-1">
            {errorMessage}
          </p>
        )}

        {!hasError && helperText && (
          <p id={`${selectId}-helper`} className="text-xs text-[#666673] mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
