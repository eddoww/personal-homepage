import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Professional Experience</h2>
      <div className={styles.job}>
        <h3>DevOps Engineer | Nord Pool AS</h3>
        <p>October 2022 - Present | Oslo, Norway (Hybrid)</p>
        <ul>
          <li>Led Azure Intune infrastructure migration</li>
          <li>Developed and maintained Terraform IaC for Azure</li>
          <li>Implemented hardened CIS images via Ansible</li>
          <li>Contributed to Landing Zones development</li>
        </ul>
      </div>
      <div className={styles.job}>
        <h3>Senior Software Engineer | Tappin AS</h3>
        <p>May 2019 - October 2022 | Oslo, Norway</p>
        <ul>
          <li>
            Transitioned to Technical Lead, managing all technical operations
          </li>
          <li>Led complete system overhaul from outdated PHP versions</li>
          <li>
            Designed and developed high-traffic online event management platform
          </li>
        </ul>
      </div>
    </section>
  );
}
