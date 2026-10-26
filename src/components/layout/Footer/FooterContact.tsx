import React from 'react';
import { Icon } from '@/components/ui';
import { FOOTER_CONTACT_DATA } from './footer-data';

export function FooterContact() {
  return (
    <div className="rs-footer-col">
      <h3 className="rs-footer-heading">{FOOTER_CONTACT_DATA.heading}</h3>
      <div className="rs-footer-contact-info">
        <p className="rs-footer-contact-item">{FOOTER_CONTACT_DATA.company}</p>
        <p className="rs-footer-contact-item">{FOOTER_CONTACT_DATA.address}</p>
        <a
          href={`mailto:${FOOTER_CONTACT_DATA.email}`}
          className="rs-footer-email-link"
          aria-label={`Send email to ${FOOTER_CONTACT_DATA.email}`}
        >
          <Icon name="Mail" size={16} className="rs-footer-email-icon" />
          <span>{FOOTER_CONTACT_DATA.email}</span>
        </a>
      </div>
    </div>
  );
}
