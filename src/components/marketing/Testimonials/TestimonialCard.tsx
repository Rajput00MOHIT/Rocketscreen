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
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="ts-card-col">
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
  );
}
