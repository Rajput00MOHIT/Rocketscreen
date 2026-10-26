import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof LucideIcons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
  'aria-label'?: string;
}

export function Icon({
  name,
  size = 20,
  className,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const IconComponent = LucideIcons[name] as React.ComponentType<{
    size?: number | string;
    className?: string;
    'aria-label'?: string;
  }>;

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn('shrink-0', className)}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
}
