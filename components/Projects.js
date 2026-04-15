import { useState } from "react";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "evolution", label: "Evolution" },
    { id: "architecture", label: "Architecture" },
    { id: "achievements", label: "Key Achievements" },
    { id: "future", label: "Future Plans" },
  ];

  const ugarisDetails = {
    overview: (
      <>
        <p>
          Ugaris is the game I played as a child. It's where I met my wife. And
          since 2014, it's been the project that defines my evenings, my
          weekends, and a significant part of who I am as an engineer.
        </p>
        <p>
          Originally based on Mercenaries of Astonia by{" "}
          <a href="https://www.lite.games/" target="_blank">
            Intent Software
          </a>
          , open-sourced by lead developer{" "}
          <a href="https://brockhaus.org/" target="_blank">
            Daniel Brockhaus
          </a>
          , I grabbed the codebase the moment it went public. What started as
          curiosity — can I even get this thing to compile? — became a
          decade-long journey of modernization, architecture, and stubborn
          passion.
        </p>
        <p>
          This isn't a portfolio piece. It's not about money or fame. Ugaris is
          the game that gave my life meaning, and everything I've built around it
          — the infrastructure, the tooling, the community — exists because the
          game deserves it.
        </p>
      </>
    ),
    evolution: (
      <>
        <h4>From Mercenaries of Astonia to Ugaris:</h4>
        <p>
          What started on a CentOS dedicated server in Hetzner — way overkill
          hardware for a game with a handful of players — evolved into something
          I never could have imagined:
        </p>
        <ul>
          <li>
            2014: Daniel Brockhaus open-sourced Mercenaries of Astonia
          </li>
          <li>
            Forked the original codebase and spent weeks just getting it to
            compile and run
          </li>
          <li>Extensive modernization of the codebase:</li>
          <ul>
            <li>Updated to modern C/C++ standards and compilers</li>
            <li>Migrated to containerized infrastructure</li>
            <li>Upgraded and replaced outdated libraries</li>
            <li>Implemented modern build systems</li>
          </ul>
          <li>
            Expanded the game with new features, content, and improved gameplay
            mechanics
          </li>
          <li>
            Evolved from a single bare-metal server to a full Kubernetes
            deployment
          </li>
        </ul>
      </>
    ),
    architecture: (
      <>
        <h4>Ugaris Architecture:</h4>
        <ul>
          <li>
            <strong>Game Server:</strong> C — the original core, still running.
            The heart of the game.
          </li>
          <li>
            <strong>Client:</strong> C with SDL3 for cross-platform graphics
            rendering
          </li>
          <li>
            <strong>API Backend:</strong> Go — the new API layer powering
            account management, leaderboards, and external integrations
          </li>
          <li>
            <strong>Website:</strong> Astro frontend (rewrite in progress from
            the old PHP site)
          </li>
          <li>
            <strong>Discord Bot:</strong> Python, integrating community
            features with gameplay — including full chat synchronization
          </li>
          <li>
            <strong>Launcher:</strong> Electron-based cross-platform application
            with auto-update
          </li>
          <li>
            <strong>Chat Server:</strong> C++ — handling real-time
            communication
          </li>
          <li>
            <strong>Database:</strong> MySQL with connection pooling and ProxySQL
            for load balancing
          </li>
          <li>
            <strong>Infrastructure:</strong> Containerized deployment on
            Kubernetes with full CI/CD pipelines
          </li>
          <li>
            <strong>Monitoring:</strong> Comprehensive logging and metrics
            collection
          </li>
        </ul>
      </>
    ),
    achievements: (
      <>
        <ul>
          <li>
            <strong>The BLOB Migration:</strong> The original codebase stored
            quest states, NPC states, and character data as raw memory dump
            blobs — literally memcpy'd from server memory into the database. I
            systematically converted every blob into normalized database entries,
            making the data queryable, debuggable, and actually useful. This was
            terrifying and took months, but it was the single most important
            architectural change.
          </li>
          <li>
            Refactored the entire communication layer between server and
            database to properly use MySQL connection pooling and added a
            ProxySQL layer for load balancing
          </li>
          <li>
            Built a cross-platform launcher with auto-update functionality and
            integrated community features
          </li>
          <li>
            Orchestrated migration from bare-metal servers to a fully
            containerized, cloud-native infrastructure on Kubernetes
          </li>
          <li>
            Built full synchronization between Discord and in-game chat —
            players can talk across platforms seamlessly
          </li>
        </ul>
      </>
    ),
    future: (
      <>
        <p>
          The future of Ugaris is driven by the same thing that started it:
          passion, not deadlines.
        </p>
        <ul>
          <li>
            Complete the Go API + Astro frontend rewrite, replacing the legacy
            PHP website with a modern, fast web presence
          </li>
          <li>
            Create new areas, quests, and dungeons to expand the game world
          </li>
          <li>
            Develop a robust GUI system for the SDL3 client to modernize and
            improve the user experience
          </li>
          <li>
            Enhance current game mechanics to be more modern, engaging, and fun
          </li>
          <li>
            Further optimization of server infrastructure for increased
            scalability and reduced latency
          </li>
        </ul>
      </>
    ),
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2>Ugaris MMORPG</h2>
      <p className={styles.subtitle}>A decade of passion, code, and community</p>
      <div className={styles.projectHeader}>
        <img src="/ugaris_logo.png" alt="Ugaris Logo" className={styles.logo} />
        <div>
          <h3>Ugaris — Evolution of Mercenaries of Astonia</h3>
          <p className={styles.role}>Lead Developer & Project Manager</p>
          <p className={styles.period}>March 2014 - Present</p>
        </div>
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{ugarisDetails[activeTab]}</div>
      <div className={styles.cta}>
        <a
          href="https://ugaris.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Visit Ugaris Website
        </a>
        <a
          href="https://github.com/eddoww/astonia3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}