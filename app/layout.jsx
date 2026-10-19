import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CommandPalette from "@/components/CommandPalette";
import Effects from "@/components/Effects";
import { site } from "@/lib/site";

const description = site.tagline;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Edwin de Jong",
    "DevOps",
    "Platform Engineering",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Talos",
    "Proxmox",
    "Homelab",
    "Ugaris",
    "MMORPG",
    "Norway",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description,
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0d12" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7f9" },
  ],
};

// Runs before first paint: picks the theme (dark by default) and marks JS as
// available so scroll-reveal styles only apply when they can be undone.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');d.dataset.theme=t==='light'?'light':'dark';}catch(e){}})();`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: "Kongsberg Discovery" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sande i Vestfold",
    addressCountry: "NO",
  },
  knowsLanguage: site.languages.map((l) => l.name),
  sameAs: [site.links.github, site.links.linkedin, site.links.ugaris],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CommandPalette />
        <Effects />
      </body>
    </html>
  );
}
