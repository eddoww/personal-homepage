import styles from "../styles/Skills.module.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Infrastructure & Cloud",
      skills: [
        "Azure",
        "Azure DevOps",
        "Azure Kubernetes Service",
        "Terraform",
        "Ansible",
        "Kubernetes",
        "Proxmox",
        "Cloudflare",
      ],
    },
    {
      title: "CI/CD & Automation",
      skills: ["Azure Pipelines", "GitHub Actions", "ArgoCD", "Docker"],
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "Azure Monitor", "Loki"],
    },
    {
      title: "Development",
      skills: [
        "Go",
        "Python",
        "C/C++",
        "JavaScript/TypeScript",
        "PHP",
        "SQL",
      ],
    },
    {
      title: "Game Development",
      skills: ["SDL3", "Electron", "MMORPG Architecture"],
    },
    {
      title: "Networking & Security",
      skills: ["VLANs", "VPN", "Firewall Management", "PKI/TLS"],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills & Technologies</h2>
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.card}>
            <h3>{category.title}</h3>
            <ul className={styles.skillList}>
              {category.skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}