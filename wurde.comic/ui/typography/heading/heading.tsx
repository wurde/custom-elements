import React, { ReactNode } from 'react';

export type HeadingProps = {
  children?: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

export function Heading({ children, variant, className }: HeadingProps) {
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`text-6xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`text-5xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`text-4xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`text-3xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={`text-2xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          className={`text-xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h6>
      );
    default:
      return (
        <h2
          className={`text-5xl font-main text-copy-primary ${className}`}
        >
          {children}
        </h2>
      );
  }
}

Heading.defaultProps = {
  variant: 'h2',
  className: '',
};
