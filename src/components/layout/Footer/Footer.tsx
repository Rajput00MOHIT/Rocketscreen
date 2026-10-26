import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import logoSvg from '@/assets/brand/logo/rocketscreens-logo.svg';
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_RESOURCES_LINKS,
} from './footer-data';
import { FooterLinkColumn } from './FooterLinkColumn';
import { FooterContact } from './FooterContact';
import { FooterBottom } from './FooterBottom';
import './footer.css';

export function Footer() {
  return (
    <footer className="rs-footer" role="contentinfo" aria-label="Site Footer">
      <Container size="xl">
        {/* Main Footer: 4-Column Layout */}
        <div className="rs-footer-main">
          <div className="rs-footer-grid">
            {/* Column 1: Brand Logo (~36% width on desktop) */}
            <div className="rs-footer-brand">
              <Link
                href="/"
                className="rs-footer-logo-link"
                aria-label="RocketScreens Homepage"
              >
                <Image
                  src={logoSvg}
                  alt="RocketScreens"
                  className="rs-footer-logo-img"
                  priority
                />
              </Link>
            </div>

            {/* Column 2: Company Links */}
            <FooterLinkColumn
              heading="Company"
              links={FOOTER_COMPANY_LINKS}
            />

            {/* Column 3: Resources Links */}
            <FooterLinkColumn
              heading="Resources"
              links={FOOTER_RESOURCES_LINKS}
            />

            {/* Column 4: Contact Information */}
            <FooterContact />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <FooterBottom />
      </Container>
    </footer>
  );
}
