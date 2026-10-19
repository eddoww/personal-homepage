// Renders the CV as a PDF from lib/site.js. Served by
// app/edwin-de-jong-cv.pdf/route.js, which `next build` exports as a static
// file, so it ships with any build command. Pure JS, no headless browser.

import { join } from "node:path";
import React from "react";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";
import {
  duration,
  experience,
  formatMonth,
  site,
  sideProjects,
  skills,
  summary,
  ugaris,
} from "./site.js";

// process.cwd(), not import.meta.url: this module runs from bundled output.
const font = (file) => join(process.cwd(), "assets", "fonts", file);

Font.register({
  family: "Inter",
  fonts: [
    { src: font("Inter-Regular.ttf"), fontWeight: 400 },
    { src: font("Inter-Medium.ttf"), fontWeight: 500 },
    { src: font("Inter-SemiBold.ttf"), fontWeight: 600 },
    { src: font("Inter-Bold.ttf"), fontWeight: 700 },
  ],
});
Font.register({
  family: "Mono",
  fonts: [
    { src: font("JetBrainsMono-Regular.ttf"), fontWeight: 400 },
    { src: font("JetBrainsMono-Medium.ttf"), fontWeight: 500 },
  ],
});
// Long tokens like "Azure·DevOps" shouldn't be hyphenated mid-word.
Font.registerHyphenationCallback((word) => [word]);

const ink = "#111827";
const ink2 = "#374151";
const ink3 = "#6b7280";
const mark = "#15803d";
const rule = "#e5e7eb";

const s = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 44,
    fontFamily: "Inter",
    fontSize: 9.2,
    lineHeight: 1.45,
    color: ink2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: ink,
  },
  name: { fontSize: 24, lineHeight: 1.2, fontWeight: 700, color: ink, letterSpacing: -0.6 },
  role: { marginTop: 2, lineHeight: 1.3, fontFamily: "Mono", fontSize: 9.5, fontWeight: 500, color: mark },
  contact: { alignItems: "flex-end", fontSize: 8.6 },
  contactLine: { color: ink2, textDecoration: "none", marginBottom: 1 },
  h2: {
    marginTop: 14,
    marginBottom: 6,
    fontFamily: "Mono",
    fontSize: 8,
    fontWeight: 500,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: mark,
  },
  para: { marginBottom: 3 },
  job: { marginBottom: 9 },
  jobHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  jobTitle: { fontSize: 10.5, fontWeight: 700, color: ink },
  jobCo: { fontWeight: 500, color: ink2 },
  dates: { fontFamily: "Mono", fontSize: 8, color: ink },
  datesDim: { color: ink3 },
  loc: { fontSize: 8.4, color: ink3, marginTop: 1 },
  bullets: { marginTop: 4 },
  bullet: { flexDirection: "row", marginBottom: 2 },
  bulletDot: { width: 10, color: ink3 },
  bulletText: { flex: 1 },
  stack: { marginTop: 3, fontFamily: "Mono", fontSize: 7.6, color: ink3 },
  cols: { flexDirection: "row", gap: 22 },
  col: { flex: 1 },
  skillRow: { marginBottom: 4 },
  skillName: { fontWeight: 600, color: ink, fontSize: 8.8 },
  small: { fontSize: 8.8 },
  footer: {
    position: "absolute",
    top: 841.89 - 34,
    left: 44,
    right: 44,
    textAlign: "right",
    paddingTop: 6,
    borderTopWidth: 0.6,
    borderTopColor: rule,
    fontFamily: "Mono",
    fontSize: 7.4,
    color: ink3,
  },
});

const h = React.createElement;

const Bullets = ({ items }) =>
  h(
    View,
    { style: s.bullets },
    items.map((t, i) =>
      h(View, { key: i, style: s.bullet, wrap: false }, [
        h(Text, { key: "d", style: s.bulletDot }, "•"),
        h(Text, { key: "t", style: s.bulletText }, t),
      ])
    )
  );

const Job = ({ title, company, dates, dim, loc, bullets, stack }) =>
  h(View, { style: s.job, wrap: false }, [
    h(View, { key: "h", style: s.jobHead }, [
      h(Text, { key: "t", style: s.jobTitle }, [
        title,
        h(Text, { key: "c", style: s.jobCo }, `  ·  ${company}`),
      ]),
      h(Text, { key: "d", style: s.dates }, [
        dates,
        dim ? h(Text, { key: "dim", style: s.datesDim }, `  ·  ${dim}`) : null,
      ]),
    ]),
    h(Text, { key: "l", style: s.loc }, loc),
    h(Bullets, { key: "b", items: bullets }),
    h(Text, { key: "s", style: s.stack }, stack.join(" · ")),
  ]);


const CV = () =>
  h(
    Document,
    {
      title: `${site.name} · CV`,
      author: site.name,
      subject: `${site.role} · CV`,
      keywords: "DevOps, Azure, Terraform, Ansible, Kubernetes, CI/CD",
      creator: site.url,
      producer: site.url,
    },
    h(Page, { size: "A4", style: s.page }, [
      h(View, { key: "header", style: s.header }, [
        h(View, { key: "l" }, [
          h(Text, { key: "n", style: s.name }, site.name),
          h(Text, { key: "r", style: s.role }, site.role),
        ]),
        h(View, { key: "r", style: s.contact }, [
          h(Link, { key: "e", src: `mailto:${site.email}`, style: s.contactLine }, site.email),
          h(Text, { key: "loc", style: s.contactLine }, site.location),
          h(Link, { key: "li", src: site.links.linkedin, style: s.contactLine }, "linkedin.com/in/jongdeedwin"),
          h(Link, { key: "gh", src: site.links.github, style: s.contactLine }, "github.com/eddoww"),
        ]),
      ]),

      h(Text, { key: "h-profile", style: s.h2 }, "Profile"),
      ...summary.map((p, i) => h(Text, { key: `p${i}`, style: s.para }, p)),

      h(Text, { key: "h-exp", style: s.h2 }, "Experience"),
      ...experience.map((job) =>
        h(Job, {
          key: job.company,
          title: job.title,
          company: job.company,
          dates: `${formatMonth(job.start)} - ${formatMonth(job.end)}`,
          dim: duration(job.start, job.end),
          loc: job.location,
          bullets: job.highlights,
          stack: job.stack,
        })
      ),

      h(Text, { key: "h-ugaris", style: s.h2, break: false }, "Ugaris MMORPG"),
      h(Job, {
        key: "ugaris",
        title: ugaris.role,
        company: "Ugaris: The Legend Recovered",
        dates: `${formatMonth(ugaris.since)} - Present`,
        loc: `Open-source MMORPG · ugaris.com · ${ugaris.status}`,
        bullets: ugaris.cvHighlights,
        stack: ugaris.cvStack,
      }),

      h(View, { key: "cols", style: s.cols, wrap: false }, [
        h(View, { key: "a", style: s.col }, [
          h(Text, { key: "h", style: s.h2 }, "Skills"),
          ...skills.map((g) =>
            h(View, { key: g.group, style: s.skillRow }, [
              h(Text, { key: "n", style: s.skillName }, g.group),
              h(Text, { key: "i", style: s.small }, g.items.join(", ")),
            ])
          ),
        ]),
        h(View, { key: "b", style: s.col }, [
          h(Text, { key: "h1", style: s.h2 }, "Homelab"),
          h(
            Text,
            { key: "t1", style: s.small },
            "A four-host Proxmox VE cluster (two Dell R730xds, a Dell NAS and an HP EliteDesk) with ~100 TB of ZFS, a six-node Talos Kubernetes cluster managed through ArgoCD, Terraform and Ansible, and segmented UniFi networking. It runs 120+ pods, including Ugaris production."
          ),
          h(Text, { key: "h2", style: s.h2 }, "Side projects"),
          ...sideProjects.map((p) =>
            h(Text, { key: p.name, style: [s.small, { marginBottom: 1.5 }] }, [
              h(Text, { key: "n", style: { fontWeight: 600, color: ink } }, p.name),
              `: ${p.kind.toLowerCase()}`,
            ])
          ),
          h(Text, { key: "h3", style: s.h2 }, "Languages"),
          h(
            Text,
            { key: "t3", style: s.small },
            site.languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join("  ·  ")
          ),
        ]),
      ]),

      h(Text, {
        key: "footer",
        style: s.footer,
        fixed: true,
        render: ({ pageNumber, totalPages }) =>
          `${site.url.replace("https://", "")}    ·    ${pageNumber} / ${totalPages}`,
      }),
    ])
  );

export function renderCvPdf() {
  return renderToBuffer(h(CV));
}
