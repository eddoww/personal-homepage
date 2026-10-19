import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatDate, getArticle, publishedArticles } from "@/lib/articles";
import { site } from "@/lib/site";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import ReadingProgress from "@/components/ReadingProgress";
import styles from "./article.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/writing/${a.slug}/` },
    robots: a.published ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      url: `/writing/${a.slug}/`,
      publishedTime: a.date || undefined,
      authors: [site.name],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const idx = publishedArticles.findIndex((a) => a.slug === slug);
  const next = idx >= 0 ? publishedArticles[(idx + 1) % publishedArticles.length] : null;

  let Body = null;
  if (article.published) {
    Body = (await import(`@/content/articles/${slug}.mdx`)).default;
  }

  const ld = article.published && {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    url: `${site.url}/writing/${article.slug}/`,
  };

  return (
    <article className={styles.article}>
      {Body && <ReadingProgress />}
      {ld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      )}
      <div className={`container ${styles.wrap}`}>
        <Link href="/#writing" className={styles.back}>
          <ArrowLeftIcon /> cd ../writing
        </Link>

        <header className={styles.header}>
          <ul className="tags">
            {article.tags.map((t) => (
              <li key={t} className="tag">
                #{t}
              </li>
            ))}
          </ul>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.meta}>
            <img src="/images/avatar.png" alt="" width="28" height="28" className={styles.avatar} />
            <span>{site.name}</span>
            <span aria-hidden>·</span>
            {article.date ? <time dateTime={article.date}>{formatDate(article.date)}</time> : <span>Coming soon</span>}
            <span aria-hidden>·</span>
            <span>{article.readTime} min read</span>
          </p>
        </header>

        <div className={styles.body}>
          {Body ? (
            <Body />
          ) : (
            <p>
              This one is still being written. Check back soon, or follow along on{" "}
              <a href={site.links.github} className="link">
                GitHub
              </a>
              .
            </p>
          )}
        </div>

        {next && next.slug !== slug && (
          <footer className={styles.footer}>
            <p className={styles.nextLabel}>Next up</p>
            <Link href={`/writing/${next.slug}/`} className={styles.next}>
              <span>{next.title}</span>
              <ArrowRightIcon />
            </Link>
          </footer>
        )}
      </div>
    </article>
  );
}
