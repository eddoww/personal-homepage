import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Edwin De Jong</h1>
        <p className={styles.title}>
          DevOps Engineer / Cloud Engineer / Site Reliability Engineer (SRE) /
          Software Engineer
        </p>
        <p className={styles.location}>Baerum, Akershus, Norway</p>
        <div className={styles.contact}>
          <a href="mailto:info@edwindejong.net">info@edwindejong.net</a> |
          <a
            href="https://github.com/eddoww"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://edwindejong.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
      </div>
    </header>
  );
}
