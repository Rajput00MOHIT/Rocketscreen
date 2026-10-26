import React from 'react';
import Link from 'next/link';
import { FooterLink } from './footer-data';

export interface FooterLinkColumnProps {
  heading: string;
  links: readonly FooterLink[];
}

export function FooterLinkColumn({ heading, links }: FooterLinkColumnProps) {
  return (
    <div className="rs-footer-col">
      <h3 className="rs-footer-heading">{heading}</h3>
      <ul className="rs-footer-links-list">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="rs-footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
