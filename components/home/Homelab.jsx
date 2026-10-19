import Link from "next/link";
import { homelab } from "@/lib/site";
import { ArrowRightIcon } from "../icons";
import Section from "./Section";
import styles from "./Homelab.module.css";

export default function Homelab() {
  return (
    <Section
      id="homelab"
      path="homelab"
      title="A data center in my house."
      intro={homelab.intro}
      wide
    >
      <dl className={styles.totals} data-reveal>
        {homelab.totals.map((t) => (
          <div key={t.label}>
            <dd>{t.value}</dd>
            <dt>{t.label}</dt>
          </div>
        ))}
      </dl>

      <div className={styles.rack} data-reveal>
        <div className={styles.rackHead}>
          <span>proxmox cluster · 4 nodes</span>
          <span>vestfold, no</span>
        </div>
        {homelab.nodes.map((n, i) => (
          <article
            key={n.name}
            className={styles.unit}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` }}
          >
            <div className={styles.leds} aria-hidden>
              <i />
              <i />
              <i />
            </div>
            <div className={styles.ident}>
              <h3 className={styles.host}>{n.name}</h3>
              <p className={styles.words} title={n.house}>
                &ldquo;{n.words}&rdquo;
              </p>
            </div>
            <div className={styles.role}>
              <span className={styles.roleTag}>{n.role}</span>
              <p className={styles.detail}>{n.detail}</p>
            </div>
            <dl className={styles.specs}>
              <div>
                <dt>hw</dt>
                <dd>{n.hw}</dd>
              </div>
              {n.cpu && (
                <div>
                  <dt>cpu</dt>
                  <dd>{n.cpu}</dd>
                </div>
              )}
              {n.ram && (
                <div>
                  <dt>ram</dt>
                  <dd>{n.ram}</dd>
                </div>
              )}
              <div>
                <dt>disk</dt>
                <dd>{n.storage}</dd>
              </div>
            </dl>
            <div className={styles.vents} aria-hidden />
          </article>
        ))}
      </div>

      <div className={styles.lower}>
        <div className={styles.stack} data-reveal>
          <h3 className={styles.h3}>The stack</h3>
          <p className={styles.cluster}>{homelab.cluster}</p>
          <dl className={styles.layers}>
            {homelab.stack.map((l) => (
              <div key={l.layer}>
                <dt>{l.layer}</dt>
                <dd>
                  <ul className="tags">
                    {l.items.map((it) => (
                      <li key={it} className="tag">
                        {it}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.runs} data-reveal style={{ "--reveal-delay": "80ms" }}>
          <h3 className={styles.h3}>What it runs</h3>
          <ul>
            {homelab.runs.map((r) => (
              <li key={r}>
                <span className="dot" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
          <p className={styles.why}>
            Do I need a six-node Kubernetes cluster at home? No. But most of
            what I use at work I learned here first, usually while something
            was on fire.
          </p>
          <Link href="/writing/homelab-odyssey/" className="btn">
            The homelab odyssey
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </Section>
  );
}
