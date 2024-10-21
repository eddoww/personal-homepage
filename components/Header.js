import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Edwin de Jong</h1>
      <p className={styles.subtitle}>
        DevOps Engineer / Cloud Engineer / Site Reliability Engineer (SRE)
      </p>
    </header>
  );
}
