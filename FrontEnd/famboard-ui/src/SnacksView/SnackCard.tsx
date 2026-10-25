import type { CSSProperties } from "react";
import styles from "./SnacksView.module.css";

export interface SnackCardProps {
  title?: string;
  description?: string;
  amount?: string;
  onRequest?: () => void;
  className?: string;
  style?: CSSProperties;
}

export function SnackCard({
  title = "Aurora Scout",
  description = "SKU: LS-2029",
  onRequest,
  amount = "1 bag",
  className = "",
  style,
}: SnackCardProps) {
  return (
    <article className={`${styles.snackCard} ${className}`} style={style}>
      <div className={styles.cardHeader} aria-hidden="true" />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.snackAmount}>{amount}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardActions}>
        <button className={styles.requestButton} type="button" onClick={onRequest}>
          <svg className={styles.plusIcon} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 5v10M5 10h10" />
          </svg>
          <span>Request</span>
        </button>
      </div>
    </article>
  );
}

export default SnackCard;
