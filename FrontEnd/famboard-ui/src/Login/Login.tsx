import { useState, type FormEvent } from 'react';
import { Button } from './Button';
import styles from './Login.module.css';

type IconName = 'arrow-big-left' | 'menu' | 'user';

function Icon({ name }: { name: IconName }) {
  const paths = {
    'arrow-big-left': <><path d="M13 9 8 4 3 9" /><path d="M8 4v16" /><path d="M3 15h11a4 4 0 0 1 4 4v1" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    user: <><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /></>,
  };

  return (
    <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Header() {
  return (
    <header className={styles.headerFrame}>
      <div className={styles.brandBar}>
        <div className={styles.brand}>FamBoard</div>
      </div>
      <nav className={styles.navPanel} aria-label="Main navigation">
        <button className={styles.navButton} type="button" aria-label="Back"><Icon name="arrow-big-left" /></button>
        <button className={styles.navButton} type="button" aria-label="Menu"><Icon name="menu" /></button>
        <button className={styles.navButton} type="button" aria-label="Profile"><Icon name="user" /></button>
      </nav>
    </header>
  );
}

function LoginField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className={styles.fieldGroup}>
      <span className={styles.fieldLabel}>{label}</span>
      <input className={styles.input} value={value} onChange={(event) => onChange(event.target.value)} placeholder="Input Value" />
    </label>
  );
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className={styles.mainFrame}>
      <Header />
      <form className={styles.contentFrame} onSubmit={handleSubmit}>
        <LoginField label="Username" value={username} onChange={setUsername} />
        <LoginField label="Password" value={password} onChange={setPassword} />
        <div className={styles.buttonBar}>
          <Button type="submit">Login</Button>
          <Button type="button">Forgot Password</Button>
        </div>
      </form>
    </main>
  );
}
