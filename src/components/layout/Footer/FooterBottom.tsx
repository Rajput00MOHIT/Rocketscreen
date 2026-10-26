import React from 'react';
import Link from 'next/link';
import { FOOTER_LEGAL_LINKS } from './footer-data';

export function FooterBottom() {
  return (
    <div className="rs-footer-bottom">
      <div className="rs-footer-bottom-inner">
        {/* Left: Copyright text */}
        <p className="rs-footer-copyright">
          Copyright © 2026 RocketScreens. All Rights Reserved.
        </p>

        {/* Right: Legal Links with subtle vertical divider */}
        <div className="rs-footer-legal-links">
          {FOOTER_LEGAL_LINKS.map((link, idx) => (
            <React.Fragment key={link.label}>
              {idx > 0 && (
                <span className="rs-footer-legal-divider" aria-hidden="true" />
              )}
              <Link href={link.href} className="rs-footer-legal-link">
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
