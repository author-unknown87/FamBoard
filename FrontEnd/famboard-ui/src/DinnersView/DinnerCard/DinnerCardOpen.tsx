import type { ReactNode } from 'react';
import styles from './DinnerCardOpen.module.css';

export interface DinnerCardOpenProps {
  name: string;
  description: string;
  image?: ReactNode;
  className?: string;
}

export function DinnerCardOpen({
  name,
  description,
  image,
  className = '',
}: DinnerCardOpenProps) {
  return (
    <article className={`${styles.card} ${className}`.trim()}>
      <header className={styles.cardTop}>
        <h2 className={styles.name}>{name}</h2>
      </header>
      <div className={styles.cardContent}>
        <div className={styles.image} aria-label={`${name} image`}>
          {image}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
