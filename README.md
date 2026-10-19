# Edwin de Jong · Personal Homepage

![GitHub last commit](https://img.shields.io/github/last-commit/eddoww/personal-homepage)

The source of [edwindejong.net](https://edwindejong.net) (and [edwindejong.com](https://edwindejong.com)): a CV, the Ugaris story, the homelab, and some writing.

## Stack

- [Next.js 16](https://nextjs.org/) App Router, statically exported (`output: "export"`)
- React 19, CSS Modules, no UI framework
- MDX for articles (`@next/mdx`, `remark-gfm`, `rehype-slug`)
- Self-hosted Inter and JetBrains Mono via Fontsource
- [`@react-pdf/renderer`](https://react-pdf.org/) for the CV PDF, generated at build time
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/)

## Where things live

| Path | What |
| --- | --- |
| `lib/site.js` | **All profile content**: experience, skills, Ugaris, homelab, side projects, personal. The homepage, `/cv/` and the PDF all render from here. |
| `lib/articles.js` | Article index (title, date, tags, excerpt, `published` flag) |
| `content/articles/*.mdx` | Article bodies |
| `app/` | Routes: `/`, `/cv/`, `/writing/[slug]/`, sitemap, robots, OG image, 404 |
| `components/home/` | Homepage sections |
| `components/CommandPalette.jsx` | `/` or `Ctrl+K` jump menu, and the `~` shell easter egg |
| `scripts/build-cv-pdf.mjs` | Renders `out/edwin-de-jong-cv.pdf` after `next build` |
| `public/_headers`, `public/_redirects` | Cloudflare Pages headers and redirects (old `/articles/*` URLs → `/writing/*`) |

### Adding an article

1. Write `content/articles/<slug>.mdx`.
2. Add an entry to `lib/articles.js` with `published: true`.

Unpublished entries still get a "coming soon" page, marked `noindex`, and are left out of the listing and the sitemap.

### Homelab numbers

The homelab section is hand-maintained in `lib/site.js`. It deliberately publishes specs and service categories only: no IPs, internal hostnames, domains or VLAN IDs.

## Development

Requires Node 20.9+ (Pages builds with the version in `.nvmrc`).

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/, plus the CV PDF
npm start          # serve out/ locally
```

The build caps static generation at 4 workers (`experimental.cpus` in `next.config.mjs`).

## Deployment

Cloudflare Pages builds `main` on every push:

- Build command: `npm run build`
- Output directory: `out`
- Node version: from `.nvmrc`

Both `edwindejong.net` and `edwindejong.com` (with and without `www`) point at the same Pages project.

## Easter eggs

Press `~` anywhere. Or try the Konami code.

## License

This project is open source and available under the MIT License.
