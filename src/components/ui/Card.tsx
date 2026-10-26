import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'interactive';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  radius?: 'md' | 'lg';
}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', radius = 'md', children, ...props }, ref) => {
    const variantStyles: Record<CardVariant, string> = {
      default: 'bg-white border border-[#E3E3E8] shadow-xs',
      outlined: 'bg-white border border-[#E3E3E8]',
      elevated: 'bg-white border border-[#E3E3E8] shadow-md',
      interactive:
        'bg-white border border-[#E3E3E8] shadow-xs hover:border-[#BABABE] hover:shadow-md transition-all duration-200 cursor-pointer',
    };

    const radiusStyles = {
      md: 'rounded-lg', // 8px (Figma spec)
      lg: 'rounded-xl', // 12px (Large panels)
    };

    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden text-[#171717]',
          radiusStyles[radius],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = 'Card';

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pb-3 flex flex-col space-y-1.5', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-xl font-bold tracking-tight text-[#171717]', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-sm text-[#666673]', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'p-6 pt-0 flex items-center justify-between border-t border-[#F4F4F5] mt-4 pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
