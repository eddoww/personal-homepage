import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Project Highlight</h2>
      <div className={styles.project}>
        <h3>Lead Developer & Project Manager | Ugaris</h3>
        <p>March 2014 - Present | Open Source MMORPG Project</p>
        <ul>
          <li>
            Led comprehensive overhauls of server, client, website, launcher,
            and Discord bot
          </li>
          <li>
            Orchestrated migration to containerized infrastructure using
            Kubernetes
          </li>
          <li>Developed full-stack website application with integrated API</li>
        </ul>
      </div>
    </section>
  );
}
