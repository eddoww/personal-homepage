import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Cloudflare Pages serves /cv/index.html for /cv; trailing slashes keep
  // relative asset paths and canonical URLs consistent with that.
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: { unoptimized: true },
  // react-pdf loads fonts and yoga at runtime; leave it to Node, unbundled.
  serverExternalPackages: ["@react-pdf/renderer"],
  // Static generation fans out one worker per core by default; this machine
  // is shared, and 4 is plenty for a handful of pages.
  experimental: { cpus: 4 },
};

const withMDX = createMDX({
  options: {
    // Strings, not imports: Turbopack can't serialise plugin functions.
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
