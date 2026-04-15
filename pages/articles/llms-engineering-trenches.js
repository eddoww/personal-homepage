import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Article.module.css";

export default function LLMsEngineeringTrenches() {
  return (
    <div>
      <Head>
        <title>LLMs in the Engineering Trenches - Coming Soon - Edwin de Jong</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <section className={styles.article}>
          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>

          <div className={styles.articleHeader}>
            <h1>LLMs in the Engineering Trenches: Coaching Developers to Code with AI</h1>
            <div className={styles.meta}>
              <span>Coming Soon</span>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>
              This article is currently being curated and will be published soon.
              Check back later or follow me on GitHub for updates.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}