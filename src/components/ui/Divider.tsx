import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export function Divider({
  orientation = 'horizontal',
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('w-px h-full min-h-[1em] bg-[#E3E3E8] shrink-0 self-stretch mx-2', className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn('flex items-center w-full my-4', className)}
        {...props}
      >
        <div className="flex-grow border-t border-[#E3E3E8]" />
        <span className="px-3 text-xs font-medium uppercase tracking-wider text-[#8E8E93] shrink-0">
          {label}
        </span>
        <div className="flex-grow border-t border-[#E3E3E8]" />
      </div>
    );
  }

  return (
    <hr
      className={cn('w-full border-t border-[#E3E3E8] my-4', className)}
      {...props}
    />
  );
}
