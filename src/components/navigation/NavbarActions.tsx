import React from 'react';
import Link from 'next/link';
import { Button, Icon } from '@/components/ui';
import { NAV_ACTIONS } from '@/lib/constants/navigation';
import './navbar.css';

export interface NavbarActionsProps {
  className?: string;
  onActionClick?: () => void;
}

export function NavbarActions({
  className = '',
  onActionClick,
}: NavbarActionsProps) {
  return (
    <div className={`rs-navbar-actions ${className}`}>
      {/* Login Text Link */}
      <Link
        href={NAV_ACTIONS.login.href}
        onClick={onActionClick}
        className="rs-login-link"
      >
        {NAV_ACTIONS.login.label}
      </Link>

      {/* Free Trial Button */}
      <Link href={NAV_ACTIONS.freeTrial.href} onClick={onActionClick}>
        <Button variant="brand-outline" size="sm">
          {NAV_ACTIONS.freeTrial.label}
        </Button>
      </Link>

      {/* Book a Demo CTA */}
      <Link href={NAV_ACTIONS.bookDemo.href} onClick={onActionClick}>
        <Button
          variant="primary"
          size="sm"
          rightIcon={<Icon name="ArrowUpRight" size={15} />}
        >
          {NAV_ACTIONS.bookDemo.label}
        </Button>
      </Link>
    </div>
  );
}
