'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/lib/constants/navigation';
import { Icon } from '@/components/ui';
import './navbar.css';

export interface ProductDropdownProps {
  item: NavItem;
  onItemClick?: () => void;
}

export function ProductDropdown({ item, onItemClick }: ProductDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.dropdownItems && item.dropdownItems.some(sub => pathname === sub.href));

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="rs-nav-dropdown-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="rs-nav-link-group">
        <Link
          href={item.href}
          onClick={() => {
            setIsOpen(false);
            onItemClick?.();
          }}
          className={`rs-nav-link ${isActive ? 'is-active' : ''}`}
          aria-current={isActive ? 'page' : undefined}
        >
          <span>{item.label}</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`rs-nav-chevron-btn ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`${item.label} menu`}
        >
          <Icon
            name="ChevronDown"
            size={14}
            className="rs-nav-chevron"
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && item.dropdownItems && item.dropdownItems.length > 0 && (
        <div
          className="rs-dropdown-menu"
          role="menu"
          aria-label={`${item.label} dropdown`}
        >
          {item.dropdownItems.map((subItem) => {
            const isSubActive = pathname === subItem.href;
            return (
              <Link
                key={subItem.label}
                href={subItem.href}
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
                className={`rs-dropdown-item ${isSubActive ? 'is-active' : ''}`}
                aria-current={isSubActive ? 'page' : undefined}
              >
                <div className="rs-dropdown-item-content">
                  <div className="rs-dropdown-item-title">{subItem.label}</div>
                  {subItem.description && (
                    <div className="rs-dropdown-item-desc">
                      {subItem.description}
                    </div>
                  )}
                </div>
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="rs-dropdown-item-arrow"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
