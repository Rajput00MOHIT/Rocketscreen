import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface BenefitIllustrationProps {
  imageSrc: StaticImageData;
  altText: string;
}

export function BenefitIllustration({ imageSrc, altText }: BenefitIllustrationProps) {
  return (
    <div className="benefit-illustration-wrapper" aria-hidden="true">
      <Image
        src={imageSrc}
        alt={altText}
        priority={false}
        className="benefit-illustration-img"
      />
    </div>
  );
}
