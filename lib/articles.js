// Article index. The MDX body lives in content/articles/<slug>.mdx; metadata
// lives here so the homepage, sitemap and command palette can list articles
// without importing every MDX file.

export const articles = [
  {
    slug: "porting-ugaris-to-godot",
    title: "Porting a 20-Year-Old MMORPG Client to Godot",
    date: "2026-10-18",
    readTime: 5,
    tags: ["ugaris", "godot", "gamedev", "performance"],
    excerpt:
      "The Ugaris client was a C program for years. In September 2026 I started an experiment to rebuild it in Godot. Six weeks later it went from 16 FPS to 244, replaced the launcher, and became the client we're shipping on Steam.",
    published: true,
  },
  {
    slug: "shipping-ugaris-to-steam",
    title: "Getting Ugaris onto Steam, Without Uploading a Single Build by Hand",
    date: "2026-10-19",
    readTime: 4,
    tags: ["ugaris", "steam", "ci-cd", "github-actions"],
    excerpt:
      "Ugaris has had a Steam page for years. Here's why the release took so long, and the pipeline that now builds, checks, signs and uploads every update for me.",
    published: true,
  },
  {
    slug: "rewriting-the-ugaris-web-stack",
    title: "Go to Rust, Astro to SvelteKit: Rewriting the Ugaris Website (Again)",
    date: "2026-10-16",
    readTime: 4,
    tags: ["ugaris", "rust", "go", "sveltekit"],
    excerpt:
      "The Ugaris website went from PHP to Go and Astro, and now to Rust and SvelteKit. Go and Astro weren't bad choices. Here's what actually happened, and why I'd still pick either of them.",
    published: true,
  },
  {
    slug: "llms-engineering-trenches",
    title: "LLMs in the Engineering Trenches: Coaching Developers to Code with AI",
    date: "2026-09-23",
    readTime: 5,
    tags: ["ai", "agents", "devex", "coaching"],
    excerpt:
      "I pushed for AI coding agents at work and spent a lot of time showing engineers what they can really do. What changed people's minds, what to watch out for, and why you still own every line you merge.",
    published: true,
  },
  {
    slug: "building-ugaris",
    title: "Building Ugaris: A Decade-Long Journey in Game Development",
    date: "2026-04-15",
    readTime: 7,
    tags: ["ugaris", "c", "databases", "gamedev"],
    excerpt:
      "In 2014 I forked an open-source MMORPG called Mercenaries of Astonia. I played it as a kid and met my wife on it. Twelve years later it's still the project that drives me. This is how a dusty C codebase turned into a Godot client, a Rust backend and an automated Steam pipeline.",
    published: true,
  },
  {
    slug: "homelab-odyssey",
    title: "From Bare Metal to Kubernetes: A Homelab Odyssey",
    date: "2026-04-15",
    readTime: 6,
    tags: ["homelab", "kubernetes", "proxmox", "networking"],
    excerpt:
      "It started with a forum in high school. Then gaming clans needed voice servers, and a custom ladder system meant learning to code. Now it's a rack of Proxmox servers, a Talos Kubernetes cluster, and servers named after Game of Thrones houses.",
    published: true,
  },
];

// Newest first, whatever order the entries above are in.
export const publishedArticles = articles
  .filter((a) => a.published)
  .sort((a, b) => b.date.localeCompare(a.date));

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
