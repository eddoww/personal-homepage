import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="#about">About</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#articles">Articles</Link>
    </nav>
  );
}
