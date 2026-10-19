"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Page-wide behaviour with no UI of its own: scroll reveal, the Konami code,
// and a hello for anyone who opens devtools.
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-revealed)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    let pos = 0;
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === KONAMI[pos] ? pos + 1 : key === KONAMI[0] ? 1 : 0;
      if (pos === KONAMI.length) {
        pos = 0;
        document.documentElement.classList.toggle("ugaris-mode");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    console.log(
      "%c~/edwin%c\nLooking under the hood? Press ~ for a shell, or say hi: info@edwindejong.net",
      "color:#4ade80;font:600 14px ui-monospace,monospace",
      "color:inherit;font:12px ui-monospace,monospace"
    );
  }, []);

  return null;
}
