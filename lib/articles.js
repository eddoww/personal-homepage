// Article index. The MDX body lives in content/articles/<slug>.mdx; metadata
// lives here so the homepage, sitemap and command palette can list articles
// without importing every MDX file.

export const articles = [
  {
    slug: "building-ugaris",
    title: "Building Ugaris: A Decade-Long Journey in Game Development",
    date: "2026-04-15",
    readTime: 6,
    tags: ["ugaris", "c", "databases", "gamedev"],
    excerpt:
      "In 2014 I forked an open-source MMORPG called Mercenaries of Astonia. I played it as a kid and met my wife on it. Twelve years later it's still the project that drives me. This is how a dusty C codebase became a containerized platform.",
    published: true,
  },
  {
    slug: "homelab-odyssey",
    title: "From Bare Metal to Kubernetes: A Homelab Odyssey",
    date: "2026-04-15",
    readTime: 7,
    tags: ["homelab", "kubernetes", "proxmox", "networking"],
    excerpt:
      "It started with a forum in high school. Then gaming clans needed voice servers, and a custom ladder system meant learning to code. Now it's a rack of Proxmox servers, a Talos Kubernetes cluster, and servers named after Game of Thrones houses.",
    published: true,
  },
  {
    slug: "llms-engineering-trenches",
    title: "LLMs in the Engineering Trenches: Coaching Developers to Code with AI",
    date: null,
    readTime: 5,
    tags: ["ai", "devex", "coaching"],
    excerpt:
      "What actually works when you roll out AI coding tools to a team of engineers.",
    published: false,
  },
];

export const publishedArticles = articles.filter((a) => a.published);

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso) {
  if (!iso) return "Coming soon";
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
