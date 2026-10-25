import styles from './UserProfile.module.css';
import { MakeRequestButton, ResetPasswordButton } from './ProfileButtons';

export interface UserProfileProps {
  username?: string;
  initials?: string;
  onBack?: () => void;
  onMenu?: () => void;
  onProfile?: () => void;
  onResetPassword?: () => void;
  onMakeRequest?: () => void;
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M4.5 21v-1.5A5.5 5.5 0 0 1 10 14h4a5.5 5.5 0 0 1 5.5 5.5V21" />
    </svg>
  );
}

export function UserProfile({
  username = 'Kai_Pai_14',
  initials = 'PJ',
  onBack,
  onMenu,
  onProfile,
  onResetPassword,
  onMakeRequest,
}: UserProfileProps) {
  return (
    <main className={styles.profile}>
      <header className={styles.header}>
        <div className={styles.brand}>FamBoard</div>
        <nav className={styles.navigation} aria-label="Profile navigation">
          <button className={styles.navigationButton} type="button" aria-label="Go back" onClick={onBack}>
            <BackIcon />
          </button>
          <button className={styles.navigationButton} type="button" aria-label="Open menu" onClick={onMenu}>
            <MenuIcon />
          </button>
          <button className={styles.navigationButton} type="button" aria-label="View profile" onClick={onProfile}>
            <UserIcon />
          </button>
        </nav>
      </header>

      <section className={styles.content} aria-label="User profile">
        <div className={styles.avatar} aria-hidden="true">{initials}</div>
        <p className={styles.username}>{username}</p>
        <div className={styles.profileActions}>
          <ResetPasswordButton onClick={onResetPassword} />
          <MakeRequestButton onClick={onMakeRequest} />
        </div>
      </section>
    </main>
  );
}

export { MakeRequestButton, ResetPasswordButton } from './ProfileButtons';
export type { OutlineButtonProps, ProfileButtonProps } from './ProfileButtons';
