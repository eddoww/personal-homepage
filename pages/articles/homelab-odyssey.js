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
          content="It started with a forum in high school. Now it's a full enterprise rack with four Proxmox servers, a 7-node Talos Kubernetes cluster, and VLANs named after Game of Thrones houses."
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
              <span>8 min read</span>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>
              It didn't start with a rack. It didn't start with Kubernetes. It
              started in high school, when I decided I wanted my own website.
              An Invision Power Board forum, hosted on whatever shared hosting
              I could afford. I was probably the first teenager in my hometown
              who could say he owned his own website — this was back when that
              actually meant something. Having your own corner of the internet
              felt like magic.
            </p>

            <h2>The Early Years: Forums, Clans, and Voice Servers</h2>
            <p>
              Then came gaming, and with it, clans and guilds and communities.
              Every community needed a forum — a place to call home — and a
              voice server. TeamSpeak was king back then, and I hosted it all.
              vBulletin, Invision Power Board, phpBB — I ran each of them at
              various points, for long stretches at a time. Joomla, WordPress,
              Drupal — if it could host a community site, I probably deployed
              it at some point.
            </p>
            <p>
              The pattern was always the same: find a community that needed
              something, build it, run it, maintain it. I wasn't just running
              software — I was the infrastructure guy before I knew that was a
              job.
            </p>

            <h2>Learning to Code Because Nothing Fit</h2>
            <p>
              At some point, hosting other people's software wasn't enough. A
              gaming community needed a custom ladder system — a ranking and
              match tracking tool — and nothing out there really suited us. We
              needed something built for how we actually played. So I started
              learning to program.
            </p>
            <p>
              That led me to Laravel, and from there to too many projects to
              name. The pattern solidified: I build things because I need them,
              and I need them because I built them. Always focused on making
              things that were useful, not just interesting. If a community
              needed it, I'd figure out how to build it.
            </p>

            <h2>The Hetzner Years</h2>
            <p>
              For a long time, everything ran on a dedicated Hetzner server.
              Virtualmin and Webmin managing about ten to twenty websites. It
              worked — it worked well, actually — but Hetzner isn't cheap when
              you're running that many sites, and most of them had modest
              traffic. I did the math and realized: for what I'm paying this
              hosting company, I could probably do it cheaper myself.
            </p>
            <p>
              Why not at home?
            </p>
            <p>
              That's where the laptop came into play. An old laptop, repurposed
              as a home server. It worked — sort of — until it didn't. When it
              overheated during a gaming event and the whole thing went down, I
              realized I needed to think about this differently.
            </p>
            <p>
              Around this time, I also got interested in smart homes. Home
              Assistant opened a whole new world of automation. And of course,
              the *arr stack for home cinema — Sonarr, Radarr, Prowlarr,
              Bazarr — because if you're going to self-host, you might as well
              self-host everything.
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
              Ugaris was the driver for many of these upgrades. The game needed
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
              &quot;server-01&quot; through &quot;server-04.&quot; There are
              only two hard problems in computer science: cache invalidation,
              naming things, and off-by-one errors.
            </p>
            <p>
              <strong>Tully</strong> is the smart home server — it runs Home
              Assistant, Frigate NVR, N8N, MQTT, Zigbee2MQTT, Nextcloud, and
              OpenClaw. It's the workhorse of daily life. If Tully goes down,
              the lights stop working, the cameras go blind, and the
              automations die. No pressure.
            </p>
            <p>
              <strong>Baratheon</strong> is the NAS — 49TB of ZFS storage,
              serving NFS mounts to the Kubernetes cluster and providing
              backup storage for the homelab.
              <strong>Greyjoy</strong> has a 24-disk ZFS RAIDZ2 pool running
              PBS backups, with room for future expansion. And
              <strong>Arryn</strong> is the new kid, running the Talos
              Kubernetes cluster and the new Ugaris web infrastructure as I
              migrate services over.
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
              The cluster runs Ugaris web services, the Astro frontend, the Go
              API, Listmonk for newsletters, cert-manager for TLS, monitoring
              with Prometheus and Grafana — the works. Ugaris game servers are
              still on Docker outside the cluster for now, but Kubernetes is
              waiting. Maybe once the Steam release happens, we'll make the
              move. Over-engineered? Absolutely. But it's built right.
            </p>

            <h2>Networking</h2>
            <p>
              The networking layer is the part I'm most proud of. I have proper
              VLAN isolation — the smart home devices are on their own network,
              the Ugaris production infrastructure lives on VLAN 70, general
              services on another. VPN access for remote management. Firewall
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
              Each stage of the homelab taught me something different. Forums
              and shared hosting taught me about web servers, DNS, and the
              basics of running services that people depend on. Hetzner taught
              me about dedicated infrastructure and the cost of outsourcing.
              Bare metal at home taught me about hardware — what fails, what
              overheats, why you don't cheap out on power supplies. Containers
              taught me about isolation and reproducibility — why &quot;it
              works on my machine&quot; is a problem, and how to solve it.
              Kubernetes taught me about orchestration — how to manage
              complexity without losing visibility.
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