import styles from './Header.module.css';

export interface HeaderProps {
  title?: string;
}

export function Header({ title = 'FamBoard' }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
    </header>
  );
}
