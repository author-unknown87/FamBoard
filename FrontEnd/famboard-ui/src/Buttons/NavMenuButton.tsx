import type { ButtonHTMLAttributes } from 'react';
import styles from './NavMenuButton.module.css';

export interface NavMenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
}

export function NavMenuButton({ label, className, ...props }: NavMenuButtonProps) {
  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(' ')}
      {...props}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
