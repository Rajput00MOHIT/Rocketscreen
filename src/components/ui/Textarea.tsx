'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      fullWidth = true,
      id: customId,
      disabled,
      required,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = customId || generatedId;
    const hasError = Boolean(errorMessage);

    return (
      <div className={cn('flex flex-col space-y-1.5', fullWidth ? 'w-full' : 'w-auto')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-[#171717] flex items-center gap-1 select-none"
          >
            {label}
            {required && <span className="text-[#D91C8A]">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          className={cn(
            'w-full px-3.5 py-2.5 text-base bg-white text-[#171717] placeholder-[#8E8E93] rounded-lg transition-colors duration-150 resize-y',
            'border border-[#E3E3E8] hover:border-[#BABABE]',
            'focus:outline-none focus:border-[#D91C8A] focus:ring-3 focus:ring-[#D91C8A]/20',
            hasError &&
              'border-rose-500 hover:border-rose-600 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 placeholder-rose-400',
            disabled &&
              'bg-zinc-50 border-[#E3E3E8] text-[#8E8E93] opacity-60 cursor-not-allowed pointer-events-none',
            className
          )}
          {...props}
        />

        {hasError && (
          <p id={`${textareaId}-error`} className="text-xs text-rose-600 font-medium mt-1">
            {errorMessage}
          </p>
        )}

        {!hasError && helperText && (
          <p id={`${textareaId}-helper`} className="text-xs text-[#666673] mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
