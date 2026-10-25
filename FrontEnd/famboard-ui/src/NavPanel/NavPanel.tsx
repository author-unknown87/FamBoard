import styles from './NavPanel.module.css';

export interface NavPanelProps {
  onBack?: () => void;
  onMenu?: () => void;
  onProfile?: () => void;
  className?: string;
}

type IconName = 'arrow-big-left' | 'menu' | 'user';

function Icon({ name }: { name: IconName }) {
  if (name === 'arrow-big-left') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 9V5l-8 7 8 7v-4c5 0 8 1.5 10 4-1-5-4-10-10-10Z" /></svg>;
  }

  if (name === 'user') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
}

export function NavPanel({ onBack, onMenu, onProfile, className = '' }: NavPanelProps) {
  return (
    <nav className={`${styles.panel} ${className}`.trim()} aria-label="Navigation">
      <button className={styles.button} type="button" aria-label="Back" onClick={onBack} disabled={!onBack}><Icon name="arrow-big-left" /></button>
      <button className={styles.button} type="button" aria-label="Open menu" onClick={onMenu}><Icon name="menu" /></button>
      <button className={styles.button} type="button" aria-label="Open profile" onClick={onProfile}><Icon name="user" /></button>
    </nav>
  );
}
