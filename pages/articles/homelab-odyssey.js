import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Article.module.css";

export default function HomelabOdyssey() {
  return (
    <div>
      <Head>
        <title>From Bare Metal to Kubernetes: A Homelab Odyssey - Edwin de Jong</title>
        <meta
          name="description"
          content="It started with a laptop. Now it's a full enterprise rack with four Proxmox servers, a 7-node Talos Kubernetes cluster, and VLANs named after Game of Thrones houses."
        />
      </Head>

      <main>
        <section className={styles.article}>
          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>

          <div className={styles.articleHeader}>
            <h1>From Bare Metal to Kubernetes: A Homelab Odyssey</h1>
            <div className={styles.meta}>
              <span>April 2026</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>
              It started with a laptop. Just a laptop, running a game server,
              hosting a website, doing everything on one machine because that's
              all I had. It worked — sort of — until it didn't. When the laptop
              overheated during a raid event and the whole thing went down, I
              realized I needed to think about this differently.
            </p>

            <h2>The Progression</h2>
            <p>
              After the laptop came a Raspberry Pi. Then a second-hand desktop
              I found on Finn.no. Then another desktop. Then a proper server.
              Then another server. At some point I looked at the pile of
              hardware and thought: I should probably organize this. And that's
              how the homelab was born.
            </p>
            <p>
              Ugaris was the driver for most of these upgrades. The game needed
              a database, so I needed a machine for that. The database needed
              backups, so I needed storage. The website needed hosting. The
              Discord bot needed to run somewhere. Each requirement pushed me
              to the next piece of infrastructure, and before I knew it, I was
              building an actual data center in my house.
            </p>

            <h2>The Proxmox Cluster</h2>
            <p>
              Today, the homelab runs on four Dell servers, each running
              Proxmox VE. I named them after Game of Thrones houses — because
              naming things is hard, and I refuse to call my servers
              &quot;server-01&quot; through &quot;server-04.&quot;
            </p>
            <p>
              <strong>Tully</strong> is the smart home server — it runs Home
              Assistant, Frigate NVR, N8N, MQTT, Zigbee2MQTT, Nextcloud, and
              OpenClaw. It's the workhorse of daily life. If Tully goes down,
              the lights stop working, the cameras go blind, and the
              automations die. No pressure.
            </p>
            <p>
              <strong>Baratheon</strong> hosts the NAS, the production Ugaris
              game servers, and a Docker VM running Vaultwarden and various
              websites. <strong>Greyjoy</strong> is currently empty — potential
              backup server, potential future expansion. I'll figure it out
              when I need it. And <strong>Arryn</strong> is the new kid,
              running the Talos Kubernetes cluster and the new Ugaris
              infrastructure as I migrate things over from Baratheon.
            </p>

            <h2>The Kubernetes Journey</h2>
            <p>
              Do I need a 7-node Talos Kubernetes cluster for my homelab?
              Absolutely not. Was it fun to set up? Heck yea.
            </p>
            <p>
              Kubernetes was one of those things I'd been using at work but
              never fully understood from the infrastructure side. Running
              pods? Sure. Managing a cluster? That was someone else's problem.
              Setting up my own cluster with Talos Linux — an immutable,
              purpose-built Kubernetes OS — forced me to learn every layer.
              Certificate management, node bootstrapping, networking, storage
              classes, ingress controllers. When something breaks in the
              cluster now, I know exactly where to look, because I built it
              from the ground up.
            </p>
            <p>
              The Ugaris infrastructure runs on this cluster. Containerized
              game servers, the Go API, the Astro frontend, CI/CD runners,
              monitoring — all of it. It's over-engineered, and I love it.
            </p>

            <h2>Networking</h2>
            <p>
              The networking layer is the part I'm most proud of. I have proper
              VLAN isolation — the smart home devices are on their own
              network, the Ugaris infrastructure lives on VLAN 70, general
              services on another. VPN access for when I'm away. Firewall
              rules that actually make sense. It's very well put together, if I
              say so myself.
            </p>
            <p>
              The Ubiquiti UDM Pro ties it all together — unified management,
              deep packet inspection, and enough dashboard graphs to satisfy my
              inner nerd. I can see exactly what's talking to what, and I can
              shut down any device or VLAN with a couple of clicks. In a
              household with smart devices, cameras, and game servers, that
              kind of control matters.
            </p>

            <h2>What I Learned</h2>
            <p>
              Each stage of the homelab taught me something different. Bare
              metal taught me about hardware — what fails, what overheats, why
              you don't cheap out on power supplies. Containers taught me about
              isolation and reproducibility — why &quot;it works on my
              machine&quot; is a problem, and how to solve it. Kubernetes
              taught me about orchestration — how to manage complexity without
              losing visibility.
            </p>
            <p>
              And the whole journey reinforced something I've always believed:
              you don't truly understand a system until you've built it,
              broken it, and fixed it yourself. Reading documentation is good.
              Taking a course is fine. But running production workloads on
              hardware you own, with no one to call when it breaks at 2 AM —
              that's where the real learning happens.
            </p>

            <h2>The Homelab Philosophy</h2>
            <p>
              People ask me why I do this. Why spend time and money on an
              enterprise-grade homelab when cloud services exist? Why run your
              own email, your own DNS, your own monitoring, your own
              everything?
            </p>
            <p>
              Because it's not about need. It's about understanding systems from
              the inside out. Every skill I've developed in the homelab —
              Terraform, Ansible, Kubernetes, networking, monitoring — I use
              professionally. Every outage I've debugged at home made me faster
              at debugging outages at work. The homelab is my lab, my
              playground, and my proof that I can build and run real
              infrastructure.
            </p>
            <p>
              Also, it's just really satisfying to see everything light up
              green in Grafana. I'm not going to pretend otherwise.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}