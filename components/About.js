import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        Experienced DevOps Engineer and Software Developer based in Baerum,
        Akershus, Norway. Skilled in infrastructure management, automation, and
        full-stack development. Passionate about building secure, efficient, and
        scalable solutions.
      </p>
      <p>
        Contact: <a href="mailto:info@edwindejong.net">info@edwindejong.net</a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/eddoww"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/eddoww
        </a>
      </p>
    </section>
  );
}
