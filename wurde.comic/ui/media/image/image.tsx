import React from 'react';

export type ImageProps = {
  src: string
  alt: string
  className?: string;
};

export function Image({ src, alt, className }: ImageProps) {
  return <img src={src} alt={alt} className={className} />;
}

Image.defaultProps = {
  className: '',
};
