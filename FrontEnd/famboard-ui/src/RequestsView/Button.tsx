import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './RequestsView.module.css';

export type ButtonVariant = 'primary' | 'outline' | 'secondary' | 'destructive';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses = {
  primary: styles.buttonPrimary,
  outline: styles.buttonOutline,
  secondary: styles.buttonSecondary,
  destructive: styles.buttonDestructive,
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
