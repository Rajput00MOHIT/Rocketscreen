'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MARKETING_NAV_ITEMS, NavItem } from '@/lib/constants/navigation';
import { Icon } from '@/components/ui';
import { ProductDropdown } from './ProductDropdown';
import './navbar.css';

export interface NavbarLinksProps {
  items?: readonly NavItem[];
  className?: string;
  onItemClick?: () => void;
}

export function NavbarLinks({
  items = MARKETING_NAV_ITEMS,
  className = '',
  onItemClick,
}: NavbarLinksProps) {
  const pathname = usePathname();

  const isLinkActive = (targetHref: string) => {
    if (!pathname) return false;
    if (targetHref === '/') return pathname === '/';
    return pathname === targetHref || pathname.startsWith(`${targetHref}/`);
  };

  return (
    <nav aria-label="Main Navigation" className={`rs-navbar-nav ${className}`}>
      {items.map((item) => {
        // If item has dropdown and dropdownItems configured (e.g. Product), render ProductDropdown
        if (item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0) {
          return (
            <ProductDropdown
              key={item.label}
              item={item}
              onItemClick={onItemClick}
            />
          );
        }

        const isActive = isLinkActive(item.href);

        if (item.hasDropdown) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onItemClick}
              className={`rs-nav-link ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span>{item.label}</span>
              <Icon
                name="ChevronDown"
                size={14}
                className="rs-nav-chevron"
                aria-hidden="true"
              />
            </Link>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className={`rs-nav-link ${isActive ? 'is-active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
