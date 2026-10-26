import React from 'react';
import Image, { StaticImageData } from 'next/image';
import problemImg from '@/assets/problem solution/problem.png';
import solutionImg from '@/assets/problem solution/solution.png';

export type ProductPreviewVariant = 'problem' | 'solution';

export interface ProductPreviewProps {
  variant: ProductPreviewVariant;
  altText: string;
}

const PREVIEW_ASSETS: Record<ProductPreviewVariant, StaticImageData> = {
  problem: problemImg,
  solution: solutionImg,
};

export function ProductPreview({ variant, altText }: ProductPreviewProps) {
  const imageSrc = PREVIEW_ASSETS[variant];

  return (
    <div className="ps-preview-wrapper" aria-hidden="true">
      <Image
        src={imageSrc}
        alt={altText}
        priority={variant === 'problem'}
        className="ps-preview-image"
      />
    </div>
  );
}
