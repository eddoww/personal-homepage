import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.left}>
          <span className="dot" aria-hidden /> © {year} {site.name}
        </p>
        <p className={styles.mid}>
          This site runs on Cloudflare Pages. Pretty much everything else
          runs at home.
        </p>
        <p className={styles.right}>
          <Link href="/cv/" className="link">
            CV
          </Link>
          <a href={`mailto:${site.email}`} className="link">
            Email
          </a>
          <a href={site.links.github} className="link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className={styles.hint}>
            try <kbd>~</kbd>
          </span>
        </p>
      </div>
    </footer>
  );
}
