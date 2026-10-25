import { Header } from '../Header/Header.tsx';
import { NavMenuButton } from '../Buttons/NavMenuButton';
import styles from './LandingPage.module.css';

const menuItems = ['Dinners', 'Snacks', 'Events', 'Requests'];

export interface LandingPageProps {
  onMenuSelect?: (item: string) => void;
}

export function LandingPage({ onMenuSelect }: LandingPageProps) {
  return (
    <main className={styles.layout}>
      <Header />

      <section className={styles.spotSays} aria-label="Spot says">
        <p className={styles.spotText}>Spot Says Goes Here</p>
      </section>

      <nav className={styles.navMenu} aria-label="Main navigation">
        {menuItems.map((item) => (
          <NavMenuButton
            key={item}
            label={item}
            onClick={() => onMenuSelect?.(item)}
          />
        ))}
      </nav>
    </main>
  );
}

export default LandingPage;
