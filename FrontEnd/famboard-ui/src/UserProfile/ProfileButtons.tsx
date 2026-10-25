import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './UserProfile.module.css';

export interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function OutlineButton({ children, className = '', type = 'button', ...props }: OutlineButtonProps) {
  return (
    <button className={`${styles.outlineButton} ${className}`.trim()} type={type} {...props}>
      {children}
    </button>
  );
}

export type ProfileButtonProps = Omit<OutlineButtonProps, 'children'>;

export function MakeRequestButton(props: ProfileButtonProps) {
  return <OutlineButton {...props}>Make Request</OutlineButton>;
}

export function ResetPasswordButton(props: ProfileButtonProps) {
  return <OutlineButton {...props}>Reset Password</OutlineButton>;
}
