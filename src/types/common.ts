import React from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type Status = 'active' | 'inactive' | 'pending' | 'offline' | 'error';
