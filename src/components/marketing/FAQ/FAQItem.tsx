import React from 'react';
import { FAQItemData } from './faq-data';

export interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={`faq-item ${isOpen ? 'is-expanded' : ''}`}>
      {/* Accordion Trigger Button */}
      <button
        type="button"
        id={`faq-trigger-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${item.id}`}
        onClick={onToggle}
        className="faq-trigger"
      >
        <span className="faq-question-text">{item.question}</span>

        {/* Plus / Minus Circle Icon */}
        <span className="faq-icon-bubble" aria-hidden="true">
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="faq-icon-svg"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="faq-icon-svg"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </span>
      </button>

      {/* Accordion Content Panel */}
      <div
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        className={`faq-panel ${isOpen ? 'is-open' : ''}`}
      >
        <div className="faq-panel-inner">
          <p className="faq-answer-text">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
