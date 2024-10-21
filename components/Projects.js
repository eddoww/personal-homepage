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
          Ugaris is an ambitious, long-term open-source MMORPG project that
          showcases my passion for game development, project management, and
          full-stack engineering. Since 2014, I've been the driving force behind
          this complex endeavor, wearing multiple hats as Lead Developer,
          Project Manager, and Community Leader.
        </p>
        <p>
          Originally based on Mercenaries of Astonia by{" "}
          <a href="https://www.lite.games/" target="_blank">
            Intent Software
          </a>{" "}
          open sourced my the lead developer{" "}
          <a href="https://brockhaus.org/" target="_blank">
            Daniel Brockhaus
          </a>
          , Ugaris has evolved into a significantly enhanced and modernized
          version, demonstrating my ability to take an existing codebase and
          transform it into a cutting-edge, scalable application.
        </p>
      </>
    ),
    evolution: (
      <>
        <h4>From Mercenaries of Astonia to Ugaris:</h4>
        <ul>
          <li>2014: Intent Software open-sourced Mercenaries of Astonia</li>
          <li>Forked the original codebase (available on my GitHub)</li>
          <li>Extensive modernization of the codebase:</li>
          <ul>
            <li>Updated to modern C++ standards</li>
            <li>Migrated to containerized infrastructure</li>
            <li>Upgraded and replaced outdated libraries</li>
            <li>Implemented modern build systems and compilers</li>
          </ul>
          <li>
            Expanded the game with new features, content, and improved gameplay
            mechanics
          </li>
        </ul>
      </>
    ),
    architecture: (
      <>
        <h4>Ugaris Architecture:</h4>
        <ul>
          <li>
            <strong>Launcher:</strong> Python-based cross-platform application
          </li>
          <li>
            <strong>Discord Bot:</strong> Python, integrating community features
            with gameplay
          </li>
          <li>
            <strong>Gateway:</strong> Go service managing player connections and
            load balancing
          </li>
          <li>
            <strong>Game Server:</strong> C/C++, core game logic and world
            simulation
          </li>
          <li>
            <strong>Client:</strong> C with SDL2 for cross-platform graphics
            rendering
          </li>
          <li>
            <strong>Database:</strong> MySQL Cluster for high-availability data
            storage
          </li>
          <li>
            <strong>Website & API:</strong> Astro for the frontend, Go for the
            backend API
          </li>
          <li>
            <strong>Infrastructure:</strong> Containerized deployment with
            Kubernetes
          </li>
          <li>
            <strong>CI/CD:</strong> Automated testing and deployment pipelines
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
            Refactored the entire communication layer between server and
            database, to effectively use MySQL pooling and added a ProxySQL
            layer for load balancing.
          </li>
          <li>
            Built a cross-platform launcher with auto-update functionality and
            integrated community features
          </li>
          <li>
            Orchestrated migration from bare-metal servers to a fully
            containerized, cloud-native infrastructure
          </li>
          <li>
            Integrated Discord bot for community engagement and in-game
            interactions. Full synchronization between Discord and the game
            chat.
          </li>
        </ul>
      </>
    ),
    future: (
      <>
        <p>
          The future of Ugaris is bright, with several exciting developments on
          the horizon:
        </p>
        <ul>
          <li>
            Create new areas, quests, and dungeons to expand the game world
          </li>
          <li>
            Enhance current game mechanics to be more modern, engaging, and fun.
          </li>
          <li>
            Development of a robust GUI system for the client, to modernize and
            improve the user experience.
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
      <h2>Featured Project: Ugaris MMORPG</h2>
      <div className={styles.projectHeader}>
        <img src="/ugaris_logo.png" alt="Ugaris Logo" className={styles.logo} />
        <div>
          <h3>Ugaris - Evolution of Mercenaries of Astonia</h3>
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
