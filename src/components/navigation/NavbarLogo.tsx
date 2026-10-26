import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoSvg from '@/assets/brand/logo/rocketscreens-logo.webp';
import './navbar.css';

export function NavbarLogo() {
  return (
    <Link
      href="/"
      className="rs-navbar-logo"
      aria-label="RocketScreens Homepage"
    >
      <Image
        src={logoSvg}
        alt="RocketScreens"
        priority
        className="rs-navbar-logo-img"
      />
    </Link>
  );
}
