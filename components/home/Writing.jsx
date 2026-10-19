import Link from "next/link";
import { formatDate, publishedArticles } from "@/lib/articles";
import Section from "./Section";
import styles from "./Writing.module.css";

export default function Writing() {
  return (
    <Section id="writing" path="writing" title="Stuff I've written.">
      <ul className={styles.list}>
        {publishedArticles.map((a, i) => (
          <li key={a.slug} data-reveal style={{ "--reveal-delay": `${i * 70}ms` }}>
            <Link href={`/writing/${a.slug}/`} className={styles.item}>
              <div className={styles.meta}>
                <time dateTime={a.date}>{formatDate(a.date)}</time>
                <span>{a.readTime} min read</span>
              </div>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <ul className={`tags ${styles.tags}`}>
                  {a.tags.map((t) => (
                    <li key={t} className="tag">
                      #{t}
                    </li>
                  ))}
                </ul>
              </div>
              <span className={styles.go} aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
