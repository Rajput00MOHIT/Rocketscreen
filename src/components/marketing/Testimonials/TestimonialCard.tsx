import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: StaticImageData;
}

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  direction?: 'next' | 'prev';
  animKey?: string | number;
}

export function TestimonialCard({
  testimonial,
  direction = 'next',
  animKey,
}: TestimonialCardProps) {
  return (
    <div className="ts-card-col">
      <div
        key={animKey ?? testimonial.id}
        className={`ts-card-anim-wrapper ts-slide-${direction}`}
      >
        <p className="ts-quote-text">“{testimonial.quote}”</p>

        <div className="ts-profile-row">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} portrait`}
            className="ts-avatar-img"
          />
          <div className="ts-profile-info">
            <span className="ts-profile-name">{testimonial.name}</span>
            <span className="ts-profile-role">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
