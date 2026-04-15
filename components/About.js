import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        I'm a Lead DevOps Engineer at Kongsberg Discovery AS, based in Sand i Vestfold, Norway.
        I've been building, breaking, and fixing things in tech for over
        a decade — from hosting community forums and game servers as a teenager to
        architecting enterprise-grade infrastructure at scale.
      </p>
      <p>
        At home, I run a full homelab with four Proxmox servers, a 7-node Talos
        Kubernetes cluster, and a network architecture I'm genuinely proud of.
        It's where I learn, experiment, and push things until they break — then
        figure out why. Every layer of the stack teaches something different, and
        I like understanding systems from the inside out.
      </p>
      <p>
        I'm also the lead developer of Ugaris — an open-source MMORPG I've been
        building since 2014. It's the game I played as a child, and the place
        where I met my wife. It's not a side project for a resume; it's the
        project that gave my life meaning, and it still drives me every day.
      </p>
      <p>
        Whether it's infrastructure, game servers, or a dusty C codebase that
        stores quest states as raw memory dumps — if it's complex and
        interesting, I'm probably already working on it.
      </p>
    </section>
  );
}