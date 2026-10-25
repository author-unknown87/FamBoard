import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className = '', type = 'button', ...props }: ButtonProps) {
  return (
    <button className={`design-button ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
