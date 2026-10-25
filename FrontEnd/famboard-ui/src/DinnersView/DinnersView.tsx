import { useEffect, useState } from 'react';
import { Header } from '../Header/Header.tsx';
import { useDataFetch } from '../Hooks/DataFetch';
import { DinnerCardOpen } from './DinnerCard/DinnerCardOpen.tsx';
import { NavPanel } from '../NavPanel/NavPanel';
import styles from './DinnersView.module.css';

export interface Dinner {
  primaryKey: number;
  name: string;
  description: string;
}

export interface DinnersViewProps {
  dinners?: Dinner[];
  onBack?: () => void;
  className?: string;
}

export function DinnersView({ dinners: initialDinners, onBack, className = '' }: DinnersViewProps) {
  const [dinners, setDinners] = useState<Dinner[]>(initialDinners ?? []);
  const dataFetch = useDataFetch();

  useEffect(() => {
    let cancelled = false;

    async function loadDinners() {
      try {
        const response = await dataFetch('Dinner/get-dinners');

        const data = (await response.json()) as Dinner[];

        if (!cancelled) {
          setDinners(data);
        }
      } catch {
        if (!cancelled) {
          setDinners([]);
        }
      }
    }

    void loadDinners();

    return () => {
      cancelled = true;
    };
  }, [dataFetch]);

  return (
    <main className={`${styles.view} ${className}`.trim()}>
      <Header />
      <NavPanel onBack={onBack} />
      <section className={styles.dinners} aria-label="Dinners">
        {dinners.map((dinner) => (
          <DinnerCardOpen key={dinner.primaryKey} name={dinner.name} description={dinner.description} />
        ))}
      </section>
    </main>
  );
}
