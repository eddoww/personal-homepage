import {
  duration,
  experience,
  formatMonth,
  homelab,
  site,
  sideProjects,
  skills,
  summary,
  ugaris,
} from "@/lib/site";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";
import PrintButton from "./PrintButton";
import styles from "./cv.module.css";

export const metadata = {
  title: "CV",
  description: `CV of ${site.name}, ${site.role}. Azure, Terraform, Ansible, Kubernetes and CI/CD.`,
  alternates: { canonical: "/cv/" },
};

const pdfName = "edwin-de-jong-cv.pdf";

export default function CV() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.toolbar}`}>
        <p className={styles.path}>~/cv</p>
        <div className={styles.toolActions}>
          <PrintButton />
          <a href={`/${pdfName}`} className="btn btn-primary" download>
            <DownloadIcon />
            Download PDF
          </a>
        </div>
      </div>

      <article className={styles.sheet}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.name}>{site.name}</h1>
            <p className={styles.role}>{site.role}</p>
          </div>
          <ul className={styles.contact}>
            <li>
              <MailIcon />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <MapPinIcon />
              <span>{site.location}</span>
            </li>
            <li>
              <LinkedInIcon />
              <a href={site.links.linkedin}>linkedin.com/in/jongdeedwin</a>
            </li>
            <li>
              <GitHubIcon />
              <a href={site.links.github}>github.com/eddoww</a>
            </li>
          </ul>
        </header>

        <section className={styles.block}>
          <h2>Profile</h2>
          <div className={styles.summary}>
            {summary.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h2>Experience</h2>
          {experience.map((job) => (
            <div key={job.company} className={styles.job}>
              <div className={styles.jobHead}>
                <h3>
                  {job.title} <span>· {job.company}</span>
                </h3>
                <p className={styles.dates}>
                  {formatMonth(job.start)} - {formatMonth(job.end)}
                  <span> · {duration(job.start, job.end)}</span>
                </p>
              </div>
              <p className={styles.loc}>{job.location}</p>
              <ul className={styles.bullets}>
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 30)}>{h}</li>
                ))}
              </ul>
              <p className={styles.stack}>{job.stack.join(" · ")}</p>
            </div>
          ))}
        </section>

        <section className={styles.block}>
          <h2>Ugaris MMORPG</h2>
          <div className={styles.job}>
            <div className={styles.jobHead}>
              <h3>
                {ugaris.role} <span>· Ugaris: The Legend Recovered</span>
              </h3>
              <p className={styles.dates}>
                {formatMonth(ugaris.since)} - Present
              </p>
            </div>
            <p className={styles.loc}>Open-source MMORPG · ugaris.com · {ugaris.status}</p>
            <ul className={styles.bullets}>
              <li>
                Forked and modernized the open-source Mercenaries of Astonia C codebase into a live, free-to-play MMORPG, and have run it in production since 2014.
              </li>
              <li>
                Migrated every raw memory-dump BLOB of quest, NPC and character state into normalized relational tables over several months, with reversible migrations and no player data lost.
              </li>
              <li>
                Rebuilt the data layer around connection pooling, ProxySQL and a three-node replicated MariaDB cluster.
              </li>
              <li>
                Moved from bare metal to Docker, then to Ansible-managed VMs with separate dev, pre-production and production environments and full CI/CD.
              </li>
              <li>
                Built the surrounding services: an SDL3 client, a C++ chat server, a Go API, an Electron launcher, and a Python Discord bot with two-way chat sync.
              </li>
            </ul>
            <p className={styles.stack}>C · C++ · SDL3 · Go · Python · Electron · Astro · MariaDB · ProxySQL · Docker · Ansible</p>
          </div>
        </section>

        <div className={styles.twoCol}>
          <section className={styles.block}>
            <h2>Skills</h2>
            <dl className={styles.skills}>
              {skills.map((g) => (
                <div key={g.group}>
                  <dt>{g.group}</dt>
                  <dd>{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div>
            <section className={styles.block}>
              <h2>Homelab</h2>
              <p className={styles.small}>
                A four-host Proxmox VE cluster (two Dell R730xds, a Dell NAS and an HP EliteDesk) with ~100 TB of ZFS, a six-node Talos Kubernetes cluster managed through ArgoCD, Terraform and Ansible, and segmented UniFi networking. It runs {homelab.totals.find((t) => t.label === "Pods").value} pods, including Ugaris production.
              </p>
            </section>

            <section className={styles.block}>
              <h2>Side projects</h2>
              <ul className={styles.projects}>
                {sideProjects.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name}</strong>: {p.kind.toLowerCase()}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.block}>
              <h2>Languages</h2>
              <p className={styles.small}>
                {site.languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(" · ")}
              </p>
            </section>
          </div>
        </div>

        <footer className={styles.sheetFoot}>
          <span>{site.url.replace("https://", "")}</span>
          <span>References available on request</span>
        </footer>
      </article>
    </div>
  );
}
