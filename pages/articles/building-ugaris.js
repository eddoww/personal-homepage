import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Article.module.css";

export default function BuildingUgaris() {
  return (
    <div>
      <Head>
        <title>Building Ugaris: A Decade-Long Journey in Game Development - Edwin de Jong</title>
        <meta
          name="description"
          content="In 2014, I forked an open-source MMORPG called Mercenaries of Astonia. Eleven years later, it's still the project that drives me — here's how a dusty C codebase became a modern containerized platform."
        />
      </Head>

      <main>
        <section className={styles.article}>
          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>

          <div className={styles.articleHeader}>
            <h1>Building Ugaris: A Decade-Long Journey in Game Development</h1>
            <div className={styles.meta}>
              <span>April 2026</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>
              In 2014, Daniel Brockhaus did something unexpected: he open-sourced
              Mercenaries of Astonia, the MMORPG he'd built and run for years under
              Intent Software. I grabbed the code the moment I saw it. Not because I
              had a plan. Not because I thought I could build something better. I
              grabbed it because this was the game I played as a child — the game
              where I met my wife — and the idea that I could run my own instance,
              modify it, understand how it worked, was irresistible.
            </p>

            <h2>The Codebase</h2>
            <p>
              The first thing I discovered when I opened the source: this was the
              work of a genius, or a madman, or possibly both. The codebase was
              written in C — old C, the kind that assumes you know what you're doing
              with memory and doesn't bother checking. Quest states, NPC states,
              character data — everything was stored as raw memory dump blobs.
              Literally memcpy'd from server memory into the database. No schema, no
              normalization, just binary blobs that only the server process could
              interpret.
            </p>
            <p>
              The patterns were obscure but clever. Hobbyish but real. This wasn't
              enterprise software — it was a labor of love, built by someone who
              cared deeply about the game and not at all about software engineering
              orthodoxy. And honestly? That's what made it beautiful.
            </p>

            <h2>First Steps</h2>
            <p>
              Getting it to compile was the first battle. Getting it to run was the
              second. I rented a CentOS dedicated server from Hetzner — way overkill
              hardware for what I needed, but I didn't know that yet. I just wanted
              to see the world load, walk around in it, and feel that connection to
              the game I'd loved since I was a kid.
            </p>
            <p>
              But a server without players is just a sad process listening on a port.
              There was no website, no way to sign up, nothing. So I built the first
              account creation and character creation page — a barebones PHP site
              with a login form, a database, and calls to C-compiled executables that
              did the actual heavy lifting of creating accounts and characters. I'm
              not proud of the PHP functions I used. Let's just say "unsafe" is
              putting it mildly. But it was functional, and it was enough.
            </p>
            <p>
              From there, I spent a lot of time building what was, for the time, a
              quite impressive website. Player profiles, high scores, game statistics,
              community features — the works. It's twelve years old now and hopelessly
              outdated, which is exactly why we're building the new one. But back then?
              It felt like building a world, not just a website.
            </p>
            <p>
              Once players could register, create characters, and download the client,
              it started feeling real. People signed up. Old friends reunited. Players
              who'd known each other in the original game found each other again in
              Ugaris. It was magical.
            </p>
            <p>
              Then we wanted to change things. And we really started looking into the
              code...
            </p>

            <h2>The Personal Connection</h2>
            <p>
              I need to be clear about something: Ugaris was never about money. It
              was never about fame, or building a portfolio piece, or proving
              something to anyone. I played Mercenaries of Astonia as a child. I met
              my wife on this game. The world, the mechanics, the community — they
              shaped who I am. Taking the codebase and building something from it was
              a way of preserving that, honoring it, and making sure the game didn't
              just disappear when the original servers went dark.
            </p>
            <p>
              Every late night I've spent on this project, every weekend I've
              sacrificed, every architectural decision I've agonized over — it all
              comes back to that. The game gave my life meaning. This is me giving
              something back.
            </p>

            <h2>The Modernization Journey</h2>
            <p>
              The BLOB migration was the first big one. I'd been running the server
              for a while when I realized that the raw memory dump approach meant I
              couldn't query anything. Want to know how many players have completed a
              specific quest? Can't do it. Want to debug why an NPC is behaving
              oddly? Good luck reading binary blobs. So I started the long, terrifying
              process of converting every blob into normalized database entries.
            </p>
            <p>
              This took months. Every wrong step could corrupt player data. Every
              migration had to be reversible. I tested obsessively, backed up
              everything, and moved one table at a time. When it was done, I could
              finally query the database like a normal person. It was the single most
              important architectural change I've made to Ugaris.
            </p>
            <p>
              After that came MySQL connection pooling and ProxySQL for load
              balancing, which transformed the database layer from a fragile
              single-connection setup into something that could actually handle
              concurrent players without falling over. Then containerization — Docker
              wrapping each service, defining proper dependencies, making deploys
              repeatable. I've considered moving everything to Kubernetes
              — maybe once the Steam release happens — but for now, Docker on
              dedicated infrastructure does the job, and I'd rather have stability
              than complexity I don't need yet.
            </p>

            <h2>The Architecture Today</h2>
            <p>
              Ugaris runs on a polyglot stack that reflects its organic growth. The
              game server is still C — the original core, battle-tested and running.
              The client uses SDL3 for cross-platform rendering. I've built a Go API
              backend for account management, leaderboards, and external
              integrations. The website is being rewritten in Astro, replacing the
              old PHP site. The Discord bot is Python, with full chat synchronization
              between Discord and in-game. The launcher is Electron, and there's a
              C++ chat server handling real-time communication.
            </p>
            <p>
              On the infrastructure side: MySQL with connection pooling, ProxySQL,
              containerized with Docker, with full CI/CD pipelines. It's
              over-engineered for the player count, and I don't care. It's built
              right, and I learned something at every step. Kubernetes is on the
              roadmap — maybe once the Steam release happens — but for now,
              stability wins over complexity.
            </p>

            <h2>The Community</h2>
            <p>
              The Ugaris community is small but passionate. They're nostalgic players
              who remember the original game, new players who stumbled in through
              Discord or word of mouth, and people who just think it's cool that
              someone is still building an isometric MMORPG in 2026. The Discord
              server is where it all happens — development updates, bug reports,
              idle chat, and the occasional heated debate about game balance.
            </p>
            <p>
              I know most of them by name. That's the beauty of a small community.
              You're not a ticket number; you're a person who cares about the same
              weird game I do.
            </p>

            <h2>Why It Matters</h2>
            <p>
              Not everything worth doing is about scale. Sometimes it's about the
              game that gave your life meaning. Sometimes it's about the codebase
              that taught you C, the migration that taught you databases, the
              infrastructure that pushed you into DevOps, and the community that
              kept you going when the code was fighting back.
            </p>
            <p>
              Ugaris is that project for me. It's not my job. It's not my side
              hustle. It's the thing I keep building because I can't imagine not
              building it. And after eleven years, I'm still not done.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}