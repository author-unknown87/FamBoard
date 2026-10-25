import { useEffect, useState } from 'react';
import { Header } from '../Header/Header.tsx';
import { NavPanel } from '../NavPanel/NavPanel';
import { useDataFetch } from '../Hooks/DataFetch';
import { SnackCard } from './SnackCard';
import styles from './SnacksView.module.css';

interface SnackRecord {
  PrimaryKey: number;
  Name?: string | null;
  Description?: string | null;
  Quantity?: number | null;
  Measurement?: string | null;
}

export interface SnacksViewProps {
  onBack?: () => void;
  onMenu?: () => void;
  onProfile?: () => void;
  onRequest?: () => void;
}

export function SnacksView({ onBack, onMenu, onProfile, onRequest }: SnacksViewProps) {
  const dataFetch = useDataFetch();
  const [snacks, setSnacks] = useState<SnackRecord[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadSnacks() {
      try {
        const response = await dataFetch('Snack/get-snacks');
        const data = (await response.json()) as SnackRecord[];

        if (!cancelled) {
          setSnacks(data);
        }
      } catch {
        if (!cancelled) {
          setSnacks([]);
        }
      }
    }

    void loadSnacks();

    return () => {
      cancelled = true;
    };
  }, [dataFetch]);

  return (
    <main className={styles.view}>
      <Header />
      <NavPanel onBack={onBack} onMenu={onMenu} onProfile={onProfile} />
      <section className={styles.content}>
        {snacks.map((snack) => {
          console.log(snack);
          return (
            <SnackCard
            key={snack.PrimaryKey}
            title={snack.name ?? ''}
            description={snack.description ?? ''}
            amount={`${snack.quantity ?? ''} - ${snack.measurement ?? ''}`}
            className={styles.snackCard}
            onRequest={onRequest}
          />
          )
        })}
      </section>
    </main>
  );
}

export default SnacksView;
