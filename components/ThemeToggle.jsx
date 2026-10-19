"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
    const onChange = () => setTheme(document.documentElement.dataset.theme);
    window.addEventListener("theme:change", onChange);
    return () => window.removeEventListener("theme:change", onChange);
  }, []);

  const toggle = () => setSiteTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      title="Toggle theme"
    >
      {/* Both icons render; CSS shows the right one so there's no flash. */}
      <SunIcon className={styles.sun} />
      <MoonIcon className={styles.moon} />
    </button>
  );
}

export function setSiteTheme(next) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
  window.dispatchEvent(new Event("theme:change"));
}
