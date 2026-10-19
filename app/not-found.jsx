import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "404",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className={`container ${styles.wrap}`}>
      <pre className={styles.term} aria-label="Error 404: page not found">
        <span className={styles.ps1}>edwin@vestfold:~$</span> curl -I {"<this page>"}
        {"\n"}HTTP/2 <span className={styles.code}>404</span>
        {"\n"}x-reason: it&apos;s not DNS. this time.
        {"\n"}x-suggestion: cd ~
      </pre>
      <h1 className={styles.title}>Page not found.</h1>
      <p className={styles.text}>
        This page doesn&apos;t exist, or it moved when I rebuilt the site.
        Articles are under <code>/writing/</code> now.
      </p>
      <Link href="/" className="btn btn-primary">
        cd ~
      </Link>
    </div>
  );
}
