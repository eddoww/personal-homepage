"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon, SearchIcon } from "./icons";
import { sections } from "@/lib/nav";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently under the header.
  useEffect(() => {
    if (!onHome) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    // Entries only report changes, so keep the full picture and pick the
    // topmost section in the band; none (e.g. back in the hero) clears it.
    const inBand = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inBand.add(e.target);
          else inBand.delete(e.target);
        }
        const top = els.find((el) => inBand.has(el));
        setActive(top ? top.id : null);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => setOpen(false), [pathname]);

  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Edwin de Jong, home">
          <span className={styles.prompt} aria-hidden>
            ~/
          </span>
          <span>edwin</span>
          <span className={styles.cursor} aria-hidden />
        </Link>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Sections"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={href(s.id)}
              className={`${styles.navLink} ${
                active === s.id ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/cv/"
            className={`${styles.navLink} ${
              pathname.startsWith("/cv") ? styles.active : ""
            }`}
          >
            CV
          </Link>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.search}
            onClick={() => window.dispatchEvent(new Event("palette:open"))}
            aria-label="Open command palette"
          >
            <SearchIcon />
            <span className={styles.searchLabel}>Jump to…</span>
            <kbd>/</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
