import styles from "../styles/Experience.module.css";

export default function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Nord Pool AS",
      period: "October 2022 - Present",
      location: "Oslo, Norway (Hybrid)",
      responsibilities: [
        "Spearheaded migration of infrastructure between Azure Intune environments, minimizing downtime and ensuring seamless service transitions.",
        "Developed and maintained Terraform IaC for Azure, optimizing resource provisioning and reducing manual intervention.",
        "Enhanced security measures by implementing hardened CIS images via Ansible, contributing to the overall security framework within Azure.",
        "Contributed to the development of Landing Zones, bolstering security and compliance.",
        "Negotiated and secured favorable vendor contracts, achieving significant cost savings while maintaining service quality.",
        "Provided 24/7 infrastructure support and incident management through on-call rotations, ensuring high availability.",
      ],
      technologies: [
        "Terraform",
        "Azure",
        "Ansible",
        "Kubernetes",
        "Kafka",
        "Cloudflare",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "ArgoCD",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Tappin AS",
      period: "May 2019 - October 2022",
      location: "Oslo, Norway",
      responsibilities: [
        "Transitioned from Senior Software Engineer to sole Technical Lead, managing all technical operations.",
        "Led the complete system overhaul from outdated PHP versions, significantly improving performance and security.",
        "Designed, developed, and maintained a high-traffic online event management platform with features like chat, voting, and speaker management.",
        "Recruited, trained, and mentored a new technical team, fostering collaboration and improving productivity.",
        "Sole technical responsibility for maintaining a large legacy application and modernizing key components.",
      ],
      technologies: ["PHP", "Laravel", "AWS", "Kubernetes", "MySQL"],
    },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h2>Professional Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} className={styles.job}>
          <h3>
            {job.title} | {job.company}
          </h3>
          <p className={styles.period}>
            {job.period} | {job.location}
          </p>
          <ul>
            {job.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
          <div className={styles.technologies}>
            <strong>Technologies:</strong> {job.technologies.join(", ")}
          </div>
        </div>
      ))}
    </section>
  );
}
