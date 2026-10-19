import styles from "./Section.module.css";

// Shared section frame: a mono "path" label, a heading and optional intro.
export default function Section({ id, path, title, intro, children, wide }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <p className={styles.path}>
            <span className={styles.hash}>#</span> {path}
          </p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={`${styles.intro} ${wide ? styles.wide : ""}`}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
