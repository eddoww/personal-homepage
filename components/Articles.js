import Link from "next/link";
import styles from "../styles/Articles.module.css";

export default function Articles() {
  const articles = [
    {
      slug: "building-ugaris",
      title: "Building Ugaris: A Decade-Long Journey in Game Development",
      date: "April 2026",
      readTime: "6 min read",
      excerpt:
        "In 2014, I forked an open-source MMORPG called Mercenaries of Astonia. I played this game as a child. I met my wife on this game. Eleven years later, it's still the project that drives me — here's the story of how a dusty C codebase became a modern containerized platform.",
    },
    {
      slug: "homelab-odyssey",
      title: "From Bare Metal to Kubernetes: A Homelab Odyssey",
      date: "April 2026",
      readTime: "8 min read",
      excerpt:
        "It started with a forum in high school. Then gaming clans needed voice servers. Then a custom ladder system required learning to code. Now it's a full enterprise rack with four Proxmox servers, a 7-node Talos Kubernetes cluster, and VLANs named after Game of Thrones houses. Here's what I learned along the way.",
    },
    {
      slug: "llms-engineering-trenches",
      title: "LLMs in the Engineering Trenches: Coaching Developers to Code with AI",
      date: "April 2026",
      readTime: "5 min read",
      excerpt:
        "At Kongsberg Discovery, we got the green light for Copilot — and I made it my mission to show engineers what's actually possible. From OpenCode sessions that search, modify, and commit code autonomously, to Agents.md workflows that give AI context about your project, here's what works in practice.",
    },
  ];

  return (
    <section id="articles" className={styles.articles}>
      <h2>Recent Articles</h2>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <Link
            href={`/articles/${article.slug}`}
            key={index}
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <h3>{article.title}</h3>
              <div className={styles.meta}>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <span className={styles.readMore}>Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}