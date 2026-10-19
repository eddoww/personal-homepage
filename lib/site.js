// Single source of truth for everything the site says about Edwin.
// The homepage, /cv, and the generated PDF all render from this file.

export const site = {
  name: "Edwin de Jong",
  handle: "eddow",
  url: "https://edwindejong.net",
  role: "Lead DevOps Engineer",
  tagline:
    "Lead DevOps Engineer at Kongsberg Discovery. I've been building Ugaris, an MMORPG, since 2014, and I run a homelab that got a bit out of hand.",
  location: "Sande i Vestfold, Norway",
  email: "info@edwindejong.net",
  links: {
    github: "https://github.com/eddoww",
    linkedin: "https://www.linkedin.com/in/jongdeedwin/",
    discord: "https://discord.gg/dPFkgjD",
    ugaris: "https://ugaris.com",
    steam:
      "https://store.steampowered.com/app/1044010/Ugaris__The_Legend_Recovered/",
  },
  languages: [
    { name: "Dutch", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Norwegian", level: "Fluent" },
  ],
};

// Years since Edwin moved to Norway and since Ugaris started, kept as data so
// the hero never goes stale.
export const milestones = {
  norway: 2011,
  ugaris: 2014,
};

// The hero's status board. Static text, rendered at build time.
export const statusBoard = [
  { name: "day-job", detail: "Lead DevOps @ Kongsberg Discovery", state: "healthy" },
  { name: "ugaris", detail: "live · Steam release soon", state: "healthy" },
  { name: "homelab", detail: "4 Proxmox hosts · 6 Talos nodes", state: "healthy" },
  { name: "d&d-campaign", detail: "next session: when calendars align", state: "pending" },
];

export const summary = [
  "I'm a Lead DevOps Engineer at Kongsberg Discovery, where I modernize CI/CD and Azure platform infrastructure, and coach engineers on working with AI tools.",
  "Before that I worked on infrastructure at Nord Pool, one of Europe's power exchanges, and was the only technical lead on an event platform at Tappin.",
  "Outside of work I've spent more than ten years building Ugaris, an MMORPG I played as a kid, and running the homelab it lives on.",
];

export const experience = [
  {
    title: "Lead DevOps Engineer",
    company: "Kongsberg Discovery",
    start: "2025-04",
    end: null,
    location: "Horten, Norway · Hybrid",
    summary:
      "Leading CI/CD and Azure platform work for a maritime technology company, and coaching engineers on AI-assisted development.",
    highlights: [
      "Modernizing CI/CD across Azure DevOps and writing the reference pipeline definitions other teams now build, test and deploy from.",
      "Leading large Azure infrastructure migrations with minimal disruption to production.",
      "Running Azure DevOps governance: branch policies, service connections, variable groups and repository conventions.",
      "Writing Terraform and Ansible for Azure, so provisioning across landing zones and subscriptions is reproducible and auditable.",
      "Designing the platform on AKS, Azure Container Registry and Azure Monitor.",
      "Coaching engineers on using LLMs day to day, including GitHub Copilot, OpenCode and AGENTS.md-driven workflows.",
    ],
    stack: [
      "Azure",
      "Azure DevOps",
      "AKS",
      "Terraform",
      "Ansible",
      "Azure Monitor",
      "ACR",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Nord Pool",
    start: "2022-10",
    end: "2025-03",
    location: "Oslo, Norway · Hybrid",
    summary:
      "Infrastructure for one of Europe's biggest power exchanges, where the trading platform can't go down.",
    highlights: [
      "Led a migration of infrastructure between Azure Intune environments with minimal downtime.",
      "Wrote and maintained the Terraform for Azure, replacing manual provisioning.",
      "Built hardened CIS images with Ansible as part of the Azure security baseline.",
      "Helped design Landing Zones to strengthen security and compliance.",
      "Negotiated vendor contracts that cut costs significantly without lowering service quality.",
      "Took part in the 24/7 on-call rotation for incident response.",
    ],
    stack: [
      "Azure",
      "Terraform",
      "Ansible",
      "Kubernetes",
      "ArgoCD",
      "Kafka",
      "GitHub Actions",
      "Cloudflare",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Senior Software Engineer → Technical Lead",
    company: "Tappin",
    start: "2019-05",
    end: "2022-10",
    location: "Oslo, Norway",
    summary:
      "Joined as a senior engineer and became the sole technical lead of a high-traffic online event platform.",
    highlights: [
      "Took over all technical operations as the company's only technical lead.",
      "Led the rewrite of an outdated PHP version, improving both performance and security.",
      "Designed, built and ran the high-traffic event platform, including live chat, voting and speaker management.",
      "Hired, trained and mentored a new technical team.",
      "Kept a large legacy application running while modernizing its key components.",
    ],
    stack: ["PHP", "Laravel", "AWS", "Kubernetes", "MySQL"],
  },
];

export const skills = [
  {
    group: "Cloud & Infrastructure",
    items: [
      "Azure",
      "AKS",
      "Kubernetes",
      "Talos Linux",
      "Proxmox VE",
      "ZFS",
      "Cloudflare",
      "AWS",
    ],
  },
  {
    group: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "Sealed Secrets", "Helm"],
  },
  {
    group: "CI/CD & GitOps",
    items: ["Azure Pipelines", "GitHub Actions", "ArgoCD", "Docker"],
  },
  {
    group: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Azure Monitor"],
  },
  {
    group: "Networking & Security",
    items: [
      "VLAN design",
      "Cilium",
      "MetalLB",
      "Traefik",
      "VPN",
      "PKI / TLS",
      "CIS hardening",
    ],
  },
  {
    group: "Languages",
    items: ["C / C++", "Go", "Python", "TypeScript", "PHP", "SQL", "Bash"],
  },
  {
    group: "Data",
    items: ["MariaDB / MySQL", "ProxySQL", "PostgreSQL", "Valkey", "Kafka"],
  },
  {
    group: "Ways of working",
    items: [
      "AI-assisted engineering",
      "On-call & incident response",
      "Mentoring",
      "Vendor management",
    ],
  },
];

export const ugaris = {
  title: "Ugaris: The Legend Recovered",
  role: "Lead Developer & Project Lead",
  since: "2014-03",
  status: "Live · Steam release coming soon",
  intro: [
    "Ugaris is the game I played as a kid and the place I met my wife. In 2014 Daniel Brockhaus open-sourced Mercenaries of Astonia, and I grabbed the code the day it went public.",
    "At first I just wanted to see if I could get it to compile. Twelve years later it's a free-to-play isometric MMORPG with a small group of loyal players who log in every day, and it has a Steam page.",
  ],
  stats: [
    { label: "Registered accounts", value: "1,300+" },
    { label: "Years in production", value: "since 2014" },
    { label: "Environments", value: "dev · ppe · prod" },
    { label: "Discord members", value: "~100" },
  ],
  architecture: [
    {
      name: "Game server",
      tech: "C",
      note: "The original core, still running. Each area runs as its own container.",
    },
    {
      name: "Client",
      tech: "C · SDL3",
      note: "A cross-platform renderer, moved forward from the 2002 client.",
    },
    {
      name: "Chat server",
      tech: "C++",
      note: "Real-time chat, bridged to Discord.",
    },
    {
      name: "API",
      tech: "Go",
      note: "Accounts, leaderboards and external integrations.",
    },
    {
      name: "Website",
      tech: "Astro",
      note: "Rebuilding the twelve-year-old PHP site.",
    },
    {
      name: "Discord bot",
      tech: "Python",
      note: "Two-way chat sync between Discord and the game.",
    },
    {
      name: "Launcher",
      tech: "Electron",
      note: "Cross-platform, with auto-update.",
    },
    {
      name: "Data",
      tech: "MariaDB · ProxySQL",
      note: "A three-node replicated cluster in production, behind ProxySQL.",
    },
  ],
  // Ordered, not dated: the exact years are fuzzy, so they read as releases.
  milestones: [
    {
      tag: "v0.1",
      title: "Fork",
      text: "Mercenaries of Astonia goes open source. Forked it, got it compiling, and ran it on a Hetzner server way too big for it.",
    },
    {
      tag: "v0.2",
      title: "Accounts",
      text: "The first sign-up page: PHP calling C executables. It worked. Nobody should look at it.",
    },
    {
      tag: "v1",
      title: "Community site",
      text: "Player profiles, high scores, clans and spawn timers. The point where old friends started finding each other again.",
    },
    {
      tag: "v2",
      title: "BLOB migration",
      text: "Every raw memory dump of quest, NPC and character data became proper tables. It took months and it was scary.",
    },
    {
      tag: "v3",
      title: "Data layer",
      text: "Connection pooling, then ProxySQL. The database stopped being a single fragile connection.",
    },
    {
      tag: "v4",
      title: "Containers",
      text: "Moved from bare metal to Docker, with each game area in its own container and full CI/CD.",
    },
    {
      tag: "v5",
      title: "Real environments",
      text: "Moved to Ansible-managed VMs on an isolated network, with separate dev, pre-production and production environments and a replicated database cluster.",
    },
    {
      tag: "next",
      title: "Steam",
      text: "The Steam release, the Go API with the new Astro site, and Kubernetes for the game servers.",
    },
  ],
};

// Numbers come from the live cluster (read-only), rounded so they stay true
// for a while. No IPs, internal hostnames or VLAN IDs: see the README.
export const homelab = {
  intro:
    "It started with a forum I hosted in high school. Then came voice servers for gaming clans, a Hetzner server running up to twenty sites, a laptop that overheated during a gaming event, a Raspberry Pi, and a couple of second-hand desktops from Finn.no. Today it's a full rack in Vestfold.",
  nodes: [
    {
      name: "tully",
      house: "House Tully",
      words: "Family, Duty, Honor",
      hw: "HP EliteDesk 800 G2",
      cpu: "i7-6700 · 8 threads",
      ram: "32 GB",
      storage: "1 TB SSD (ZFS)",
      role: "Smart home",
      detail: "Home Assistant, NVR with object detection, Zigbee, MQTT, automations, a mail gateway, Nextcloud, and a third of the Kubernetes control plane.",
    },
    {
      name: "baratheon",
      house: "House Baratheon",
      words: "Ours Is the Fury",
      hw: "Dell PowerEdge",
      cpu: null,
      ram: null,
      storage: "42 TB usable · ZFS",
      role: "NAS",
      detail: "Serves NFS to the cluster for media, photos, app data and the control-plane disks. Snapshotted and backed up off-site with restic.",
    },
    {
      name: "greyjoy",
      house: "House Greyjoy",
      words: "We Do Not Sow",
      hw: "Dell PowerEdge R730xd",
      cpu: "2× Xeon E5-2690 v4 · 56 threads",
      ram: "64 GB",
      storage: "24 × 900 GB · 2× RAIDZ2",
      role: "Backups & compute",
      detail: "Proxmox Backup Server for every VM in the cluster, plus a Kubernetes control-plane node and two workers.",
    },
    {
      name: "arryn",
      house: "House Arryn",
      words: "As High as Honor",
      hw: "Dell PowerEdge R730xd",
      cpu: "2× Xeon E5-2680 v4 · 56 threads",
      ram: "128 GB",
      storage: "12 × 3 TB · RAIDZ2",
      role: "Kubernetes & Ugaris",
      detail: "Ugaris dev, pre-production and production, the replicated MariaDB cluster, PostgreSQL and Valkey, CI runners, monitoring, and Talos nodes on a ZFS pool.",
    },
  ],
  totals: [
    { label: "CPU threads", value: "120+" },
    { label: "RAM", value: "224+ GB" },
    { label: "Storage", value: "~100 TB" },
    { label: "Talos nodes", value: "6" },
    { label: "Pods", value: "120+" },
    { label: "ArgoCD apps", value: "40+" },
  ],
  cluster:
    "Six Talos nodes, with the three control-plane nodes on three different physical hosts. Any one box can die without taking Kubernetes down with it.",
  stack: [
    {
      layer: "Hypervisor",
      items: ["Proxmox VE 9 cluster", "ZFS", "Proxmox Backup Server"],
    },
    {
      layer: "Kubernetes",
      items: ["Talos Linux", "Cilium", "MetalLB", "Traefik", "cert-manager"],
    },
    {
      layer: "GitOps",
      items: ["ArgoCD", "Sealed Secrets", "Terraform", "Ansible"],
    },
    {
      layer: "Observability",
      items: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Uptime Kuma"],
    },
    {
      layer: "Network",
      items: ["UniFi Dream Machine Pro", "USW Pro 24 PoE", "3× U7 Pro", "10+ VLANs"],
    },
  ],
  runs: [
    "Ugaris (dev · ppe · prod)",
    "Smart home & cameras",
    "Media & audiobooks",
    "Photo library",
    "Password vault",
    "DNS ad-blocking",
    "Side-project sites",
    "Self-hosted AI tooling",
    "Off-site backups",
  ],
};

export const sideProjects = [
  {
    name: "Ons Klaverjas",
    url: "https://onsklaverjas.nl",
    kind: "Card game · Android & web",
    blurb:
      "Klaverjassen like at the kitchen table: big Dutch cards, no rush, free and without ads. Play against the computer or online with family and friends, with challenges, tournaments and lessons for people who are new to the game.",
    stack: ["Kotlin", "TypeScript", "PostgreSQL", "coturn"],
  },
  {
    name: "AoM Guides",
    url: "https://www.aomguides.com",
    kind: "Community site · Age of Mythology",
    blurb:
      "God guides, strategies, videos and recorded games for every version of Age of Mythology, from the original to Retold. Recently rebuilt from PHP 7.4 to a modern stack.",
    stack: ["TypeScript", "PostgreSQL", "Docker"],
  },
  {
    name: "Ashen Empires: Beginner's Route",
    url: "https://eddoww.github.io/ashen-empires-beginners-guide/",
    repo: "https://github.com/eddoww/ashen-empires-beginners-guide",
    kind: "Guide · Old-school MMO",
    blurb:
      "A quest-by-quest route from the beach of Valinor to level 30. The whole guide is one Markdown file, and the walkthrough images get collected and credited automatically.",
    stack: ["Python", "Markdown", "GitHub Pages"],
  },
  {
    name: "Uncut Gaming",
    url: "https://www.uncutgaming.com",
    kind: "Gaming community · since 2012",
    blurb:
      "A multi-game community founded in 2012: League, Minecraft and ARK, with TeamSpeak, forums and meet-ups in Greece, England, Belgium and the Netherlands. The servers are quiet now, but the Discord is still there.",
    stack: ["Community", "TeamSpeak", "Forums"],
  },
];

export const personal = {
  story: [
    `I grew up in the Netherlands and moved to Norway in ${milestones.norway}. After years in Bærum and Oslo we settled in Vestfold in 2025, where I live with my wife and our son.`,
    "When I'm not behind a screen I'm usually at a table playing board games, or Dungeons & Dragons whenever the group manages to find a date that works for everyone.",
  ],
  boardgames: [
    "Spirit Island",
    "Frosthaven",
    "Gloomhaven",
    "Through the Ages",
    "Terraforming Mars",
    "Caverna",
    "Arkham Horror",
    "Everdell",
    "Power Grid",
    "Village",
    "Pandemic",
    "The Resistance",
    "Coup",
    "Catan",
    "Rummikub",
    "Risk",
  ],
  interests: [
    {
      title: "Dungeons & Dragons",
      text: "The best kind of multiplayer. Of course I ended up self-hosting a tool for our campaign notes.",
    },
    {
      title: "Metal & Graspop",
      text: "Graspop Metal Meeting in Belgium. I built a planner so my friends and I could rate the bands and plan our days.",
    },
    {
      title: "Keeping old games alive",
      text: "Astonia, Ashen Empires, Age of Mythology. Old games deserve guides, servers and people who still care about them.",
    },
    {
      title: "Smart home tinkering",
      text: "Zigbee, Home Assistant, and cameras that can tell a person from a passing car. Most of the time anyway.",
    },
  ],
};

export function formatMonth(ym) {
  if (!ym) return "Present";
  const [y, m] = ym.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function duration(start, end) {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end
    ? end.split("-").map(Number)
    : [now.getUTCFullYear(), now.getUTCMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo`]
    .filter(Boolean)
    .join(" ");
}
