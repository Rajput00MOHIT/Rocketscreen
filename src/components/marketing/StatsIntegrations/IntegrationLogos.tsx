import React from 'react';
import Image, { StaticImageData } from 'next/image';
import googleLogo from '@/assets/Integration logo/Google.png';
import trelloLogo from '@/assets/Integration logo/Trello.png';
import asanaLogo from '@/assets/Integration logo/Asana.png';
import canvaLogo from '@/assets/Integration logo/Canva.png';
import slackLogo from '@/assets/Integration logo/Slack.png';
import jiraLogo from '@/assets/Integration logo/Jira.png';

interface IntegrationPartner {
  name: string;
  logo: StaticImageData;
}

const INTEGRATION_PARTNERS: IntegrationPartner[] = [
  { name: 'Google', logo: googleLogo },
  { name: 'Trello', logo: trelloLogo },
  { name: 'Asana', logo: asanaLogo },
  { name: 'Canva', logo: canvaLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Jira', logo: jiraLogo },
];

export interface IntegrationLogosProps {
  isVisible: boolean;
}

export function IntegrationLogos({ isVisible }: IntegrationLogosProps) {
  // Duplicate partners array to allow seamless, infinite marquee scrolling
  const marqueeList = [...INTEGRATION_PARTNERS, ...INTEGRATION_PARTNERS];

  return (
    <div
      className={`integrations-marquee-container ${isVisible ? 'is-visible' : ''}`}
      role="region"
      aria-label="Supported integration partners marquee"
    >
      <div className="integrations-marquee-track">
        {marqueeList.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className="integration-logo-item"
            title={partner.name}
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} integration`}
              className="integration-logo-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
