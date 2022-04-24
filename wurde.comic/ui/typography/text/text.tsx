import React, { ReactNode } from 'react';

export type TextProps = {
  children?: ReactNode;
};

export function Text({ children }: TextProps) {
  return <span>{children}</span>;
}
