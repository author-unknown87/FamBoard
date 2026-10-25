import { useState } from 'react';
import { Button } from './Button';
import styles from './RequestsView.module.css';

type Request = { title: string; details?: string; open?: boolean };

const requests: Request[] = [
  { title: 'Pasta Alfredo' },
  { title: 'Jambalaya', open: true, details: 'Requested By: Kai_Pie_14\nRequested On: 10/14/2026' },
  { title: 'Cheeseburgers and Fries' },
  { title: 'Baked Salmon with Lemon' },
];

function Chevron({ open }: { open: boolean }) {
  return <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true" />;
}

export default function RequestsView() {
  const [openRequest, setOpenRequest] = useState<number | null>(1);

  return (
    <main className={styles.mainFrame}>
      <header className={styles.headerFrame}>
        <div className={styles.brand}>FamBoard</div>
        <nav className={styles.navPanel} aria-label="Primary navigation">
          <button className={styles.navIcon} aria-label="Back">←</button>
          <button className={styles.navIcon} aria-label="Menu">☰</button>
          <button className={styles.navIcon} aria-label="Profile">♙</button>
        </nav>
      </header>

      <div className={styles.tabSwitch} role="tablist" aria-label="Content type">
        <Button variant="primary" role="tab" aria-selected="true">Dinners</Button>
        <Button variant="outline" role="tab" aria-selected="false">Snacks</Button>
      </div>

      <section className={styles.contentFrame} aria-label="Requests">
        {requests.map((request, index) => {
          const open = openRequest === index;
          return (
            <div className={styles.requestItem} key={request.title}>
              <button
                className={styles.requestTrigger}
                aria-expanded={open}
                onClick={() => setOpenRequest(open ? null : index)}
              >
                <span>{request.title}</span>
                <Chevron open={open} />
              </button>
              {open && request.details && <div className={styles.requestContent}>{request.details}</div>}
            </div>
          );
        })}
      </section>
    </main>
  );
}
