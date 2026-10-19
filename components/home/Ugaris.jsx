import Link from "next/link";
import { site, ugaris } from "@/lib/site";
import { ArrowRightIcon, DiscordIcon, GitHubIcon, SteamIcon } from "../icons";
import Section from "./Section";
import styles from "./Ugaris.module.css";

export default function Ugaris() {
  return (
    <Section
      id="ugaris"
      path="side-quest/ugaris"
      title="Ugaris, the game I couldn't let go."
    >
      <div className={styles.spotlight} data-reveal>
        <div className={styles.glow} aria-hidden />

        <div className={styles.top}>
          <div className={styles.brand}>
            <picture>
              <source srcSet="/images/ugaris-logo.webp" type="image/webp" />
              <img
                src="/images/ugaris-logo.png"
                alt="Ugaris"
                width="600"
                height="191"
                className={styles.logo}
                loading="lazy"
              />
            </picture>
            <p className={styles.kicker}>{ugaris.title}</p>
            <p className={styles.status}>
              <span className="dot dot-pulse" aria-hidden />
              {ugaris.status}
            </p>
          </div>

          <div className={styles.intro}>
            {ugaris.intro.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <p className={styles.role}>
              <span>{ugaris.role}</span>
            </p>
            <div className={styles.ctas}>
              <a href={site.links.ugaris} className={`btn ${styles.gold}`} target="_blank" rel="noopener noreferrer">
                Play free
                <ArrowRightIcon />
              </a>
              <a href={site.links.steam} className="btn" target="_blank" rel="noopener noreferrer">
                <SteamIcon />
                Wishlist on Steam
              </a>
              <a href={site.links.discord} className="btn btn-ghost" target="_blank" rel="noopener noreferrer" aria-label="Ugaris Discord">
                <DiscordIcon />
              </a>
              <a href="https://github.com/eddoww/astonia3" className="btn btn-ghost" target="_blank" rel="noopener noreferrer" aria-label="Astonia 3 engine on GitHub">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <dl className={styles.stats}>
          {ugaris.stats.map((s) => (
            <div key={s.label}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>

        <div className={styles.cols}>
          <div>
            <h3 className={styles.h3}>
              <span>$</span> docker compose ps
            </h3>
            <ul className={styles.arch}>
              {ugaris.architecture.map((a) => (
                <li key={a.name}>
                  <span className="dot" aria-hidden />
                  <span className={styles.archName}>{a.name}</span>
                  <span className={styles.archTech}>{a.tech}</span>
                  <span className={styles.archNote}>{a.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.h3}>
              <span>$</span> git log --oneline
            </h3>
            <ol className={styles.log}>
              {ugaris.milestones.map((m) => (
                <li key={m.tag} className={m.tag === "next" ? styles.next : ""}>
                  <span className={styles.logTag}>{m.tag}</span>
                  <div>
                    <p className={styles.logTitle}>{m.title}</p>
                    <p className={styles.logText}>{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={styles.foot}>
          <p>
            <strong>The BLOB migration</strong> is still the thing I&rsquo;m
            most proud of. The original server saved quest, NPC and character
            data as raw memory dumps. Turning all of that into proper tables,
            one reversible migration at a time without losing any player
            data, took months.
          </p>
          <Link href="/writing/building-ugaris/" className="btn">
            Read the full story
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </Section>
  );
}
