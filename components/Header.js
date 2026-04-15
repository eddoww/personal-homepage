import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Edwin De Jong</h1>
        <p className={styles.title}>
          Lead DevOps Engineer | Game Developer | Homelab Architect | Boardgame Fanatic
        </p>
        <p className={styles.location}>Bærum, Norway</p>
        <div className={styles.contact}>
          <a href="mailto:vevionez@protonmail.com">vevionez@protonmail.com</a>{" "}
          |{" "}
          <a
            href="https://github.com/eddoww"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/edwindejong"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://discord.gg/ugaris"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </header>
  );
}