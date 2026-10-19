"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { sections } from "@/lib/nav";
import { publishedArticles } from "@/lib/articles";
import { homelab, milestones, site } from "@/lib/site";
import { setSiteTheme } from "./ThemeToggle";
import { ArrowRightIcon, SearchIcon, TerminalIcon } from "./icons";
import styles from "./CommandPalette.module.css";

// One overlay, two modes: a fuzzy "jump to" list, and (after typing ">" or
// pressing ~) a tiny fake shell for the curious.

function useCommands(router, close) {
  return useMemo(() => {
    const go = (path) => () => {
      close();
      if (path.startsWith("/#") && window.location.pathname === "/") {
        document.getElementById(path.slice(2))?.scrollIntoView();
        history.replaceState(null, "", path.slice(1));
      } else {
        router.push(path);
      }
    };
    const open = (url) => () => {
      close();
      window.open(url, "_blank", "noopener,noreferrer");
    };
    return [
      ...sections.map((s) => ({
        group: "Sections",
        label: s.label,
        hint: `#${s.id}`,
        run: go(`/#${s.id}`),
      })),
      { group: "Pages", label: "CV", hint: "/cv", run: go("/cv/") },
      {
        group: "Pages",
        label: "Download CV (PDF)",
        hint: "pdf",
        run: () => {
          close();
          window.location.href = "/edwin-de-jong-cv.pdf";
        },
      },
      ...publishedArticles.map((a) => ({
        group: "Writing",
        label: a.title,
        hint: `${a.readTime} min`,
        run: go(`/writing/${a.slug}/`),
      })),
      { group: "Links", label: "Email", hint: site.email, run: () => { close(); window.location.href = `mailto:${site.email}`; } },
      { group: "Links", label: "GitHub", hint: "eddoww", run: open(site.links.github) },
      { group: "Links", label: "LinkedIn", hint: "in/jongdeedwin", run: open(site.links.linkedin) },
      { group: "Links", label: "Play Ugaris", hint: "ugaris.com", run: open(site.links.ugaris) },
      { group: "Links", label: "Ugaris on Steam", hint: "wishlist", run: open(site.links.steam) },
      { group: "Links", label: "Ugaris Discord", hint: "discord", run: open(site.links.discord) },
      {
        group: "Actions",
        label: "Toggle theme",
        hint: "light / dark",
        run: () => {
          close();
          setSiteTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
        },
      },
      { group: "Actions", label: "Open terminal", hint: ">", run: null, terminal: true },
    ];
  }, [router, close]);
}

function score(label, q) {
  const l = label.toLowerCase();
  if (!q) return 1;
  if (l.startsWith(q)) return 3;
  if (l.includes(q)) return 2;
  let i = 0;
  for (const ch of l) if (ch === q[i]) i++;
  return i === q.length ? 1 : 0;
}

const years = () => new Date().getFullYear();

const neofetch = () =>
  [
    "        ▄▄▄▄▄▄▄          edwin@vestfold",
    "      ▄█████████▄        ──────────────",
    "     ██▀▀▀▀▀▀▀▀▀██       OS: Human, Dutch build, Norwegian locale",
    "     ██ ▀▀   ▀▀ ██       Uptime: " + (years() - milestones.norway) + "y in Norway, " + (years() - milestones.ugaris) + "y on Ugaris",
    "     ██  ▄▄ ▄▄  ██       Shell: fish",
    "     ██    ▄    ██       Role: Lead DevOps Engineer",
    "      ██▄ ▀▀▀ ▄██        Packages: Azure, Terraform, Ansible, Kubernetes",
    "        ▀█████▀          Homelab: " + homelab.nodes.length + " Proxmox hosts, 6 Talos nodes",
    "                         Side quest: Ugaris (since " + milestones.ugaris + ")",
    "                         Party: wife, son, D&D group",
  ].join("\n");

const fortunes = [
  "There are only two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
  "It's always DNS. Except when it's the power supply.",
  "A homelab is just production with a smaller blast radius and a bigger electricity bill.",
  "Spirit Island is a cooperative game. Arguing about the best move is also cooperative.",
  "Somewhere a 2002 C struct is still being memcpy'd. Not on my watch.",
  "Never deploy on a Friday. Never roll for initiative on an empty stomach.",
];

function runShell(input) {
  const [cmd, ...args] = input.trim().split(/\s+/);
  switch (cmd) {
    case "":
      return "";
    case "help":
      return [
        "available commands:",
        "  whoami      who is this guy",
        "  neofetch    system information",
        "  ls          list things",
        "  cat <file>  read a file",
        "  uptime      how long things have been running",
        "  kubectl     talk to the cluster (sort of)",
        "  fortune     wisdom",
        "  ugaris      you know you want to",
        "  clear       clear the screen",
        "  exit        close the terminal",
      ].join("\n");
    case "whoami":
      return `${site.name}: ${site.role.toLowerCase()}, mmorpg developer, homelab operator, board gamer.`;
    case "neofetch":
      return neofetch();
    case "ls":
      return "about.txt  experience/  ugaris/  homelab/  boardgames.txt  cv.pdf";
    case "cat": {
      const f = args[0] || "";
      if (f.startsWith("boardgames")) return "Spirit Island, Frosthaven, Gloomhaven, Through the Ages, Terraforming Mars, Caverna, Arkham Horror, Everdell, Power Grid, Village, Pandemic, The Resistance, Coup, Catan, Rummikub, Risk";
      if (f.startsWith("about")) return "Dutch. In Norway since " + milestones.norway + ". Builds things because he needs them, and needs them because he built them.";
      if (f.startsWith("cv")) return "binary file. try: open cv";
      if (!f) return "cat: missing operand";
      return `cat: ${f}: No such file or directory`;
    }
    case "uptime":
      return [
        `norway   up ${years() - milestones.norway} years`,
        `ugaris   up ${years() - milestones.ugaris} years`,
        `homelab  up "since that first forum"`,
      ].join("\n");
    case "kubectl":
      if (args[0] === "get" && (args[1] === "nodes" || args[1] === "no"))
        return [
          "NAME          STATUS   ROLES           VERSION",
          "talos-cp-1    Ready    control-plane   v1.34",
          "talos-cp-2    Ready    control-plane   v1.34",
          "talos-cp-3    Ready    control-plane   v1.34",
          "talos-w-1     Ready    <none>          v1.34",
          "talos-w-gj1   Ready    <none>          v1.34",
          "talos-w-gj2   Ready    <none>          v1.34",
        ].join("\n");
      if (args[0] === "delete")
        return "Error from server (Forbidden): nice try.";
      return "usage: kubectl get nodes";
    case "sudo":
      return "edwin is not in the sudoers file. This incident will be reported.";
    case "rm":
      return "rm: refusing to remove anything. backups exist, but still.";
    case "fortune":
      return fortunes[Math.floor(Math.random() * fortunes.length)];
    case "ugaris":
      document.documentElement.classList.toggle("ugaris-mode");
      return document.documentElement.classList.contains("ugaris-mode")
        ? "✦ the legend is recovered. (run again to undo)"
        : "back to green.";
    case "open":
      if (args[0] === "cv") {
        window.location.href = "/cv/";
        return "opening /cv …";
      }
      return "usage: open cv";
    case "exit":
      return null;
    default:
      return `${cmd}: command not found. try 'help'`;
  }
}

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("jump");
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const outRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const commands = useCommands(router, close);

  const openWith = useCallback((m) => {
    setMode(m);
    setOpen(true);
    if (m === "shell" && history.length === 0)
      setHistory([{ out: "edwin's shell. type 'help' to get started." }]);
  }, [history.length]);

  useEffect(() => {
    const onKey = (e) => {
      const target = e.target;
      const typing =
        target instanceof HTMLElement &&
        (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !open)) {
        e.preventDefault();
        openWith("jump");
      } else if ((e.key === "~" || e.key === "`") && !typing && !open) {
        e.preventDefault();
        openWith("shell");
      } else if (e.key === "Escape" && open) {
        close();
      }
    };
    const onOpen = () => openWith("jump");
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", onOpen);
    };
  }, [open, openWith, close]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, mode]);

  useEffect(() => {
    outRef.current?.scrollTo({ top: outRef.current.scrollHeight });
  }, [history]);

  const q = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      commands
        .map((c) => ({ c, s: Math.max(score(c.label, q), score(c.group, q) && q ? 1 : 0) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .map((x) => x.c),
    [commands, q]
  );

  useEffect(() => setIndex(0), [q]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [index]);

  if (!open) return null;

  const runItem = (item) => {
    if (!item) return;
    if (item.terminal) {
      setQuery("");
      openWith("shell");
      return;
    }
    item.run();
  };

  const onJumpKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runItem(results[index]);
    }
  };

  const onJumpChange = (e) => {
    const v = e.target.value;
    if (v === ">") {
      setQuery("");
      openWith("shell");
      return;
    }
    setQuery(v);
  };

  const onShellKey = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const cmd = query;
    setQuery("");
    if (cmd.trim() === "clear") {
      setHistory([]);
      return;
    }
    const out = runShell(cmd);
    if (out === null) {
      close();
      return;
    }
    setHistory((h) => [...h, { cmd, out }]);
  };

  let lastGroup = null;

  return (
    <div className={styles.backdrop} onMouseDown={close} role="presentation">
      <div
        className={`${styles.panel} ${mode === "shell" ? styles.shell : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={mode === "shell" ? "Terminal" : "Command palette"}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.bar}>
          <span className={styles.lights} aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.title}>
            {mode === "shell" ? "edwin@vestfold: ~" : "jump to"}
          </span>
          <kbd>esc</kbd>
        </div>

        {mode === "jump" ? (
          <>
            <label className={styles.inputRow}>
              <SearchIcon className={styles.inputIcon} />
              <input
                ref={inputRef}
                className={styles.input}
                value={query}
                onChange={onJumpChange}
                onKeyDown={onJumpKey}
                placeholder="Search sections, articles, links… (type > for a shell)"
                aria-label="Search"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={`palette-item-${index}`}
                autoComplete="off"
                spellCheck={false}
              />
            </label>
            <ul className={styles.list} id="palette-list" role="listbox" ref={listRef}>
              {results.length === 0 && <li className={styles.empty}>No matches. Try “ugaris”.</li>}
              {results.map((item, i) => {
                const header = item.group !== lastGroup && !q ? item.group : null;
                lastGroup = item.group;
                return (
                  <li key={item.group + item.label} role="none">
                    {header && <div className={styles.group}>{header}</div>}
                    <button
                      type="button"
                      id={`palette-item-${i}`}
                      data-index={i}
                      role="option"
                      aria-selected={i === index}
                      className={`${styles.item} ${i === index ? styles.selected : ""}`}
                      onMouseMove={() => setIndex(i)}
                      onClick={() => runItem(item)}
                    >
                      {item.terminal ? <TerminalIcon /> : <ArrowRightIcon />}
                      <span className={styles.label}>{item.label}</span>
                      <span className={styles.hint}>{item.hint}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className={styles.footer}>
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> open</span>
              <span><kbd>~</kbd> terminal</span>
            </div>
          </>
        ) : (
          <div className={styles.term} onClick={() => inputRef.current?.focus()}>
            <div className={styles.out} ref={outRef} aria-live="polite">
              {history.map((h, i) => (
                <div key={i}>
                  {h.cmd !== undefined && (
                    <div>
                      <span className={styles.ps1}>edwin@vestfold:~$</span> {h.cmd}
                    </div>
                  )}
                  {h.out && <pre className={styles.pre}>{h.out}</pre>}
                </div>
              ))}
            </div>
            <label className={styles.termRow}>
              <span className={styles.ps1}>edwin@vestfold:~$</span>
              <input
                ref={inputRef}
                className={styles.termInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onShellKey}
                aria-label="Terminal input"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
