import { useState } from 'react';
import { Button } from './components/Button';
import './CreateUser.css';

function ArrowLeftIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>;
}

function MenuIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>;
}

function UserIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" /></svg>;
}

function Header() {
  return (
    <header className="header-frame">
      <div className="brand-panel">FamBoard</div>
      <nav className="nav-panel" aria-label="Primary navigation">
        <button type="button" aria-label="Back"><ArrowLeftIcon /></button>
        <button type="button" aria-label="Open menu"><MenuIcon /></button>
        <button type="button" aria-label="User profile"><UserIcon /></button>
      </nav>
    </header>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function Field({ label, value, onChange }: FieldProps) {
  return (
    <label className="field">
      <span>{label}</span>
      <input value={value} placeholder="Input Value" onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

export function MainFrame() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <main className="main-frame">
      <Header />
      <form className="content-frame" onSubmit={(event) => event.preventDefault()}>
        <Field label="Username" value={username} onChange={setUsername} />
        <Field label="Password" value={password} onChange={setPassword} />
        <Field label="Repeat Password" value={repeatPassword} onChange={setRepeatPassword} />
        <div className="button-bar">
          <Button type="submit">Finished</Button>
          <Button type="button" onClick={() => { setUsername(''); setPassword(''); setRepeatPassword(''); }}>Restart</Button>
        </div>
      </form>
    </main>
  );
}

export default MainFrame;
