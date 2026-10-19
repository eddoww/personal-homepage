import Link from "next/link";
import { homelab, milestones, site, statusBoard } from "@/lib/site";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "../icons";
import styles from "./Hero.module.css";

// Rendered at build time, so these are "as of the last deploy". Good enough.
const year = new Date().getFullYear();
const pods = homelab.totals.find((t) => t.label === "Pods").value;



const stateDot = {
  healthy: "dot",
  pending: "dot dot-amber",
};

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className="dot dot-pulse" aria-hidden />
            <span>all systems operational</span>
          </p>

          <h1 id="hero-title" className={styles.title}>
            Hi, I&rsquo;m Edwin.
            <span className={styles.subtitle}>
              I build infrastructure that stays up, and an MMORPG that
              won&rsquo;t die.
            </span>
          </h1>

          <p className={styles.lede}>
            Lead DevOps Engineer at{" "}
            <strong>Kongsberg Discovery</strong>, working on Azure, Terraform,
            Kubernetes and helping engineers get good with AI. At home: a
            rack of Proxmox servers and{" "}
            <a href="#ugaris" className="link">
              Ugaris
            </a>
            , the game I&rsquo;ve kept alive since {milestones.ugaris}.
          </p>

          <p className={styles.meta}>
            <MapPinIcon />
            {site.location}
            <span className={styles.sep} aria-hidden>
              ·
            </span>
            NL → NO since {milestones.norway}
          </p>

          <div className={styles.ctas}>
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <MailIcon />
              Get in touch
            </a>
            <Link href="/cv/" className="btn">
              <DownloadIcon />
              CV
            </Link>
            <a
              href={site.links.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={site.links.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <aside className={styles.board} aria-label="Status board">
          <div className={styles.boardBar}>
            <span className={styles.boardTitle}>status.edwindejong.net</span>
            <span className={styles.boardLive}>
              <span className="dot dot-pulse" aria-hidden /> live-ish
            </span>
          </div>

          <div className={styles.profile}>
            <img
              src="/images/avatar.png"
              alt="Pixel-art portrait of Edwin"
              width="72"
              height="72"
              className={styles.avatar}
            />
            <div>
              <p className={styles.handle}>edwin@vestfold</p>
              <p className={styles.handleSub}>
                devops · gamedev · dad
              </p>
            </div>
          </div>

          <dl className={styles.kpis}>
            <div>
              <dt>ugaris</dt>
              <dd>
                {year - milestones.ugaris}
                <span> yrs</span>
              </dd>
            </div>
            <div>
              <dt>in norway</dt>
              <dd>
                {year - milestones.norway}
                <span> yrs</span>
              </dd>
            </div>
            <div>
              <dt>k8s pods</dt>
              <dd>
                {pods.replace("+", "")}
                <span>+</span>
              </dd>
            </div>
          </dl>

          <ul className={styles.services}>
            {statusBoard.map((s) => (
              <li key={s.name}>
                <span className={stateDot[s.state]} aria-hidden />
                <span className={styles.svcName}>{s.name}</span>
                <span className={styles.svcDetail}>{s.detail}</span>
                <span className={`${styles.svcState} ${styles[s.state]}`}>
                  {s.state}
                </span>
              </li>
            ))}
          </ul>

          <p className={styles.boardFoot}>
            <span>
              press <kbd>/</kbd> to jump · <kbd>~</kbd> for a shell
            </span>
          </p>
        </aside>
      </div>
    </section>
  );
}
