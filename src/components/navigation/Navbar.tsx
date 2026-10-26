'use client';

import React, { useState } from 'react';
import { Container, Icon } from '@/components/ui';
import { NavbarLogo } from './NavbarLogo';
import { NavbarLinks } from './NavbarLinks';
import { NavbarActions } from './NavbarActions';
import { MobileNavbar } from './MobileNavbar';
import { MARKETING_NAV_ITEMS } from '@/lib/constants/navigation';
import './navbar.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="rs-navbar-header">
        <Container size="xl">
          <div className="rs-navbar-wrapper">
            {/* Left: Brand Logo */}
            <NavbarLogo />

            {/* Center: Desktop Navigation Links */}
            <NavbarLinks items={MARKETING_NAV_ITEMS} />

            {/* Right: Desktop Action CTAs */}
            <NavbarActions />

            {/* Mobile Menu Hamburger Trigger */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rs-mobile-trigger"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </Container>
      </header>

      {/* Full-Height Mobile Slide-over Sidebar */}
      <MobileNavbar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
