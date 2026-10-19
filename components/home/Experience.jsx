import Link from "next/link";
import { duration, experience, formatMonth } from "@/lib/site";
import { ArrowRightIcon } from "../icons";
import Section from "./Section";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <Section
      id="experience"
      path="experience"
      title="Where I've worked."
      intro="Platform and DevOps work in Norway, at companies where downtime gets expensive quickly."
    >
      <ol className={styles.timeline}>
        {experience.map((job, i) => (
          <li key={job.company} className={styles.item} data-reveal>
            <div className={styles.rail} aria-hidden>
              <span className={`${styles.node} ${!job.end ? styles.current : ""}`} />
            </div>

            <article className={styles.card}>
              <header className={styles.head}>
                <div>
                  <h3 className={styles.role}>{job.title}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <div className={styles.when}>
                  <span className={styles.dates}>
                    {formatMonth(job.start)} → {formatMonth(job.end)}
                  </span>
                  <span className={styles.duration}>
                    {!job.end && <span className="dot dot-pulse" aria-hidden />}
                    {duration(job.start, job.end)} · {job.location}
                  </span>
                </div>
              </header>

              <p className={styles.summary}>{job.summary}</p>

              {/* The most recent role is expanded; older ones fold away. */}
              <details className={styles.details} open={i === 0}>
                <summary>
                  <span className={styles.openLabel}>Highlights</span>
                  <span className={styles.count}>{job.highlights.length}</span>
                </summary>
                <ul className={styles.highlights}>
                  {job.highlights.map((h) => (
                    <li key={h.slice(0, 32)}>{h}</li>
                  ))}
                </ul>
              </details>

              <ul className={`tags ${styles.stack}`}>
                {job.stack.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <p className={styles.more} data-reveal>
        <Link href="/cv/" className="btn">
          Full CV
          <ArrowRightIcon />
        </Link>
      </p>
    </Section>
  );
}
