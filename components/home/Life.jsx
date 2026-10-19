import { personal, site } from "@/lib/site";
import { MailIcon } from "../icons";
import Section from "./Section";
import styles from "./Life.module.css";

// Box art is a bit much; a shelf of spines in the accent palette reads better.
const spineHues = [152, 190, 38, 270, 12, 205, 330, 95];

export default function Life() {
  return (
    <Section id="life" path="life" title="Away from the keyboard.">
      <div className={styles.grid}>
        <div className={styles.story} data-reveal>
          {personal.story.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}

          <div className={styles.interests}>
            {personal.interests.map((it) => (
              <div key={it.title} className={styles.interest}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.shelfWrap} data-reveal style={{ "--reveal-delay": "80ms" }}>
          <h3 className={styles.h3}>
            <span>$</span> ls ~/shelf
          </h3>
          <ul className={styles.shelf} aria-label="Favorite board games">
            {personal.boardgames.map((g, i) => (
              <li key={g} className={styles.slot}>
                <span
                  className={styles.spine}
                  style={{
                    "--h": spineHues[i % spineHues.length],
                    "--w": `${28 + ((g.length * 7) % 18)}px`,
                    "--t": `${150 + ((i * 37) % 48)}px`,
                  }}
                >
                  <span>{g}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.shelfNote}>
            Mostly co-op, engine builders and bluffing games. The D&amp;D
            dice have their own, much bigger box.
          </p>
        </aside>
      </div>

      <div className={styles.cta} data-reveal>
        <div>
          <h3>Say hello.</h3>
          <p>
            Want to talk platform work, homelab stuff or Spirit Island? Or did
            you play Astonia twenty years ago? Send me an email.
          </p>
        </div>
        <a href={`mailto:${site.email}`} className="btn btn-primary">
          <MailIcon />
          {site.email}
        </a>
      </div>
    </Section>
  );
}
