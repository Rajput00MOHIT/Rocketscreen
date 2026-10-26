'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Icon } from '@/components/ui';
import { MARKETING_NAV_ITEMS, NAV_ACTIONS } from '@/lib/constants/navigation';
import logoSvg from '@/assets/brand/logo/rocketscreens-logo.svg';
import './navbar.css';

export interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavbar({ isOpen, onClose }: MobileNavbarProps) {
  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true">
      {/* 1. Backdrop Overlay */}
      <div
        onClick={onClose}
        className="rs-mobile-backdrop"
        aria-hidden="true"
      />

      {/* 2. Slide-over Mobile Sidebar Drawer */}
      <div className="rs-mobile-drawer">
        {/* Top: Header with Logo & Close Button */}
        <div>
          <div className="rs-mobile-drawer-header">
            <Link href="/" onClick={onClose} className="rs-navbar-logo">
              <Image
                src={logoSvg}
                alt="RocketScreens"
                priority
                className="rs-navbar-logo-img"
              />
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="rs-mobile-close-btn"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="rs-mobile-nav-list" aria-label="Mobile Menu Navigation">
            {MARKETING_NAV_ITEMS.map((item) => {
              if (item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0) {
                return (
                  <div key={item.label} className="rs-mobile-nav-group">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="rs-mobile-nav-item"
                    >
                      <span>{item.label}</span>
                      <Icon name="ChevronDown" size={16} />
                    </Link>
                    <div className="rs-mobile-subnav-list">
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={onClose}
                          className="rs-mobile-subnav-item"
                        >
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="rs-mobile-nav-item"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <Icon name="ChevronDown" size={16} />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Action Buttons */}
        <div className="rs-mobile-actions">
          <Link href={NAV_ACTIONS.login.href} onClick={onClose} style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="md" fullWidth>
              {NAV_ACTIONS.login.label}
            </Button>
          </Link>

          <Link href={NAV_ACTIONS.freeTrial.href} onClick={onClose} style={{ textDecoration: 'none' }}>
            <Button variant="brand-outline" size="md" fullWidth>
              {NAV_ACTIONS.freeTrial.label}
            </Button>
          </Link>

          <Link href={NAV_ACTIONS.bookDemo.href} onClick={onClose} style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              rightIcon={<Icon name="ArrowUpRight" size={18} />}
            >
              {NAV_ACTIONS.bookDemo.label}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
