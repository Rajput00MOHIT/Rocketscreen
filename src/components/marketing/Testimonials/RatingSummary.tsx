import React from 'react';

export interface RatingSummaryProps {
  rating?: string;
  reviewCount?: string;
}

export function RatingSummary({
  rating = '4.8',
  reviewCount = '500+ Reviews',
}: RatingSummaryProps) {
  return (
    <div className="ts-rating-col" aria-label={`Overall rating ${rating} out of 5 based on ${reviewCount}`}>
      <span className="ts-rating-number">{rating}</span>

      {/* 5 Orange Stars */}
      <div className="ts-stars-row" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ts-star-icon"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <p className="ts-review-count">{reviewCount}</p>
    </div>
  );
}
