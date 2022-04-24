import React, { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode
  className?: string
  onClick?: () => void
};

export function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button type="button" className={`mx-1 p-1 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
