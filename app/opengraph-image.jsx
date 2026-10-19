import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { milestones, site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (pkg, file) =>
  readFile(join(process.cwd(), "node_modules", pkg, "files", file));

export default async function Image() {
  const [inter700, inter500, mono500, avatar] = await Promise.all([
    font("@fontsource/inter", "inter-latin-700-normal.woff"),
    font("@fontsource/inter", "inter-latin-500-normal.woff"),
    font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-500-normal.woff"),
    readFile(join(process.cwd(), "public/images/avatar.png")),
  ]);
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;
  const year = new Date().getFullYear();

  const rows = [
    ["day-job", "Lead DevOps @ Kongsberg Discovery"],
    ["ugaris", `live · ${year - milestones.ugaris}y in prod · Steam soon`],
    ["homelab", "4 Proxmox hosts · 6 Talos nodes"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 64,
          background: "#0a0d12",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(74,222,128,0.16), transparent 50%), linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 44px 44px, 44px 44px",
          color: "#e6edf3",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontFamily: "Mono", fontSize: 26, color: "#4ade80" }}>
            ~/edwin
            <div style={{ width: 13, height: 28, marginLeft: 6, background: "#4ade80" }} />
          </div>
          <div style={{ display: "flex", marginTop: 52, fontSize: 84, fontWeight: 700, letterSpacing: -3.5, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 36, fontWeight: 500, color: "#9ba8b5", letterSpacing: -0.8 }}>
            {site.role} · MMORPG developer
          </div>
          <div style={{ marginTop: "auto", display: "flex", fontFamily: "Mono", fontSize: 24, color: "#66727f" }}>
            edwindejong.net · {site.location}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 410,
            alignSelf: "center",
            borderRadius: 20,
            border: "1px solid #2b3644",
            background: "#10151c",
            padding: 26,
            fontFamily: "Mono",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={avatarSrc} width={72} height={72} style={{ borderRadius: 14, imageRendering: "pixelated" }} />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 16 }}>
              <div style={{ fontSize: 22, color: "#e6edf3" }}>edwin@vestfold</div>
              <div style={{ fontSize: 17, color: "#66727f", marginTop: 4 }}>all systems operational</div>
            </div>
          </div>
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#4ade80", marginRight: 14 }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 20, color: "#e6edf3" }}>{k}</div>
                <div style={{ fontSize: 16, color: "#66727f" }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter700, weight: 700, style: "normal" },
        { name: "Inter", data: inter500, weight: 500, style: "normal" },
        { name: "Mono", data: mono500, weight: 500, style: "normal" },
      ],
    }
  );
}
