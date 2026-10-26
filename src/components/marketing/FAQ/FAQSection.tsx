'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui';
import { FAQ_ITEMS } from './faq-data';
import { FAQItem } from './FAQItem';
import { SupportCTA } from './SupportCTA';
import './faq.css';

export function FAQSection() {
  // First FAQ expanded by default as requested in Section 11 specifications
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="faq-section"
      id="faq"
    >
      <Container size="xl">
        {/* Section Heading */}
        <div className="faq-heading-wrapper">
          <h2 className="faq-heading-title">
            <span className="faq-heading-line">Everything you need to</span>
            <span className="faq-heading-line">know about RocketScreens.</span>
          </h2>
        </div>

        {/* 5-Item FAQ Accordion List */}
        <div className="faq-container" role="region" aria-label="FAQ Accordion">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openFAQIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom Support CTA Panel */}
        <SupportCTA />
      </Container>
    </section>
  );
}
