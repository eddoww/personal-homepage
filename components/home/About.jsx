import { site, skills, summary } from "@/lib/site";
import Section from "./Section";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" path="about" title="Infrastructure, from the inside out.">
      <div className={styles.grid}>
        <div className={styles.prose} data-reveal>
          {summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>
            It all started with a forum in high school. Then came voice
            servers for gaming clans, and a ladder system I had to learn to
            code for. I build things because I need them, and I like knowing
            how stuff works all the way down. Whether that&rsquo;s a branch
            policy in Azure DevOps or a C struct from 2002 that someone
            memcpy&rsquo;d into a database.
          </p>
        </div>

        <aside className={styles.side} data-reveal style={{ "--reveal-delay": "80ms" }}>
          <dl className={styles.facts}>
            <div>
              <dt>role</dt>
              <dd>{site.role}</dd>
            </div>
            <div>
              <dt>based</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>speaks</dt>
              <dd>{site.languages.map((l) => l.name).join(" · ")}</dd>
            </div>
            <div>
              <dt>focus</dt>
              <dd>Azure platform · IaC · CI/CD · Kubernetes</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className={styles.skills}>
        {skills.map((g, i) => (
          <div
            key={g.group}
            className={styles.skillGroup}
            data-reveal
            style={{ "--reveal-delay": `${(i % 4) * 60}ms` }}
          >
            <h3>{g.group}</h3>
            <ul className="tags">
              {g.items.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
