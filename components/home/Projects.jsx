import { sideProjects } from "@/lib/site";
import { ArrowUpRightIcon, GitHubIcon } from "../icons";
import Section from "./Section";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section
      id="projects"
      path="projects"
      title="Other things I've built and run."
      intro="Small sites for small communities. Most of them run on the homelab too."
    >
      <div className={styles.grid}>
        {sideProjects.map((p, i) => (
          <article
            key={p.name}
            className={styles.card}
            data-reveal
            style={{ "--reveal-delay": `${(i % 2) * 70}ms` }}
          >
            <p className={styles.kind}>{p.kind}</p>
            <h3 className={styles.name}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.stretch}>
                {p.name}
              </a>
              <ArrowUpRightIcon className={styles.arrow} />
            </h3>
            <p className={styles.blurb}>{p.blurb}</p>
            <div className={styles.foot}>
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
              {p.repo && (
                <a
                  href={p.repo}
                  className={styles.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} source on GitHub`}
                >
                  <GitHubIcon />
                </a>
              )}
            </div>
            <p className={styles.url}>{p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
