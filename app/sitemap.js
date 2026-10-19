import { publishedArticles } from "@/lib/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/cv/`, changeFrequency: "monthly", priority: 0.8 },
    ...publishedArticles.map((a) => ({
      url: `${site.url}/writing/${a.slug}/`,
      lastModified: a.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
