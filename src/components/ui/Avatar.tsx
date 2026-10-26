'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  status,
  className,
  ...props
}: AvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);

  const getInitials = (fullName?: string) => {
    if (!fullName) return '?';
    const parts = fullName.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const sizeStyles: Record<AvatarSize, string> = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-9 w-9 text-sm font-medium',
    lg: 'h-11 w-11 text-base font-semibold',
    xl: 'h-14 w-14 text-lg font-bold',
  };

  const statusSizeStyles: Record<AvatarSize, string> = {
    sm: 'h-2 w-2 ring-1',
    md: 'h-2.5 w-2.5 ring-2',
    lg: 'h-3 w-3 ring-2',
    xl: 'h-3.5 w-3.5 ring-2',
  };

  const statusColorStyles: Record<AvatarStatus, string> = {
    online: 'bg-emerald-500',
    offline: 'bg-zinc-400',
    busy: 'bg-rose-500',
    away: 'bg-amber-500',
  };

  const showImage = src && !hasImageError;

  return (
    <div className={cn('relative inline-flex shrink-0 select-none', className)} {...props}>
      <div
        className={cn(
          'rounded-full flex items-center justify-center overflow-hidden border border-[#E3E3E8]',
          'bg-[#FDF2F8] text-[#D91C8A]',
          sizeStyles[size]
        )}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            onError={() => setHasImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{getInitials(name || alt)}</span>
        )}
      </div>

      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full ring-white',
            statusSizeStyles[size],
            statusColorStyles[status]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}
