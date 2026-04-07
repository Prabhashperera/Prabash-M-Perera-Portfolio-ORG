"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Server, Smartphone, Database, Cloud, GitBranch, Palette, Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────────────────── */
interface Skill { name: string; level: number }
interface SkillCategory {
  id: string; label: string; abbr: string;
  icon: React.ElementType; color: string; skills: Skill[];
}

/* ─── Data ──────────────────────────────────────────────────────────── */
const categories: SkillCategory[] = [
  {
    id: "frontend", label: "Frontend", abbr: "FE", icon: Monitor, color: "#a78bfa",
    skills: [
      { name: "React", level: 5 }, { name: "Next.js", level: 4 }, { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 }, { name: "HTML5 / CSS3", level: 5 }, { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 }, { name: "Redux / Zustand", level: 4 },
      { name: "Vue.js", level: 3 }, { name: "SASS / SCSS", level: 4 },
    ],
  },
  {
    id: "backend", label: "Backend", abbr: "BE", icon: Server, color: "#60a5fa",
    skills: [
      { name: "Node.js", level: 5 }, { name: "Express.js", level: 5 }, { name: "Spring Boot", level: 4 },
      { name: "Java", level: 4 }, { name: "Python", level: 4 }, { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 3 }, { name: "PHP / Laravel", level: 3 },
      { name: "Socket.io", level: 4 }, { name: "Microservices", level: 4 },
    ],
  },
  {
    id: "mobile", label: "Mobile", abbr: "MB", icon: Smartphone, color: "#818cf8",
    skills: [
      { name: "React Native", level: 5 }, { name: "Expo", level: 4 }, { name: "Flutter", level: 3 },
      { name: "Android (Kotlin)", level: 3 }, { name: "iOS Basics", level: 2 },
      { name: "Push Notifications", level: 4 }, { name: "App Store Deploy", level: 4 },
    ],
  },
  {
    id: "database", label: "Databases", abbr: "DB", icon: Database, color: "#38bdf8",
    skills: [
      { name: "MongoDB", level: 5 }, { name: "PostgreSQL", level: 4 }, { name: "MySQL", level: 4 },
      { name: "Firebase", level: 4 }, { name: "Redis", level: 3 }, { name: "Supabase", level: 4 },
      { name: "Prisma ORM", level: 4 }, { name: "Mongoose", level: 5 },
    ],
  },
  {
    id: "devops", label: "DevOps", abbr: "DO", icon: Cloud, color: "#7dd3fc",
    skills: [
      { name: "Docker", level: 4 }, { name: "AWS", level: 3 }, { name: "Vercel / Netlify", level: 5 },
      { name: "CI/CD Pipelines", level: 4 }, { name: "GitHub Actions", level: 4 },
      { name: "Nginx", level: 3 }, { name: "Linux / Shell", level: 4 }, { name: "Kubernetes", level: 2 },
    ],
  },
  {
    id: "tools", label: "Tools", abbr: "TL", icon: GitBranch, color: "#c084fc",
    skills: [
      { name: "Git / GitHub", level: 5 }, { name: "VS Code", level: 5 }, { name: "Postman", level: 5 },
      { name: "Jira / Trello", level: 4 }, { name: "Webpack / Vite", level: 4 },
      { name: "ESLint / Prettier", level: 5 }, { name: "npm / yarn / pnpm", level: 5 },
    ],
  },
  {
    id: "design", label: "Design", abbr: "DS", icon: Palette, color: "#e879f9",
    skills: [
      { name: "Figma", level: 4 }, { name: "Photoshop", level: 4 }, { name: "Illustrator", level: 3 },
      { name: "Adobe XD", level: 3 }, { name: "Canva Pro", level: 5 }, { name: "Design Systems", level: 4 },
      { name: "Responsive Design", level: 5 }, { name: "Wireframing", level: 4 },
    ],
  },
  {
    id: "creative", label: "AI & Creative", abbr: "AI", icon: Sparkles, color: "#f0abfc",
    skills: [
      { name: "Premiere Pro", level: 4 }, { name: "After Effects", level: 3 },
      { name: "DaVinci Resolve", level: 3 }, { name: "Photography", level: 4 },
      { name: "Prompt Engineering", level: 5 }, { name: "ChatGPT / Claude", level: 5 },
      { name: "Midjourney", level: 4 }, { name: "Stable Diffusion", level: 3 },
    ],
  },
];

const LEVEL_LABEL = ["", "Novice", "Familiar", "Proficient", "Advanced", "Expert"];

/* ─── Meter bar ─────────────────────────────────────────────────────── */
function MeterBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const pct = level * 20;
  return (
    <div className="meter-track">
      <motion.div
        className="meter-fill"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: `linear-gradient(90deg, ${color}66, ${color})` }}
      />
      <motion.div
        className="meter-tip"
        initial={{ left: "0%" }}
        animate={{ left: `${pct}%` }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: color, boxShadow: `0 0 8px 2px ${color}80` }}
      />
    </div>
  );
}

/* ─── Skill row ─────────────────────────────────────────────────────── */
function SkillRow({ skill, index, color }: { skill: Skill; index: number; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.36, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* hover glow bg */}
      <motion.div
        className="row-hover-bg"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.18 }}
        style={{ background: `linear-gradient(90deg, ${color}0d 0%, transparent 100%)` }}
      />

      {/* active left bar */}
      <motion.div
        className="row-side-bar"
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.18 }}
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />

      <div className="row-left">
        <span className="row-idx" style={{ color: hovered ? color : undefined }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="row-name">{skill.name}</span>
      </div>

      <div className="row-right">
        <MeterBar level={skill.level} color={color} delay={index * 0.04 + 0.12} />
        <span className="row-level" style={{ color: hovered ? color : undefined }}>
          {LEVEL_LABEL[skill.level]}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── HUD corner ────────────────────────────────────────────────────── */
function HUDCorner({ pos, color }: { pos: "tl" | "tr" | "bl" | "br"; color: string }) {
  const s: React.CSSProperties = {
    position: "absolute", width: 10, height: 10,
    borderColor: color, opacity: 0.8,
    ...(pos === "tl" ? { top: -1, left: -1, borderTopWidth: 1.5, borderLeftWidth: 1.5, borderStyle: "solid" } : {}),
    ...(pos === "tr" ? { top: -1, right: -1, borderTopWidth: 1.5, borderRightWidth: 1.5, borderStyle: "solid" } : {}),
    ...(pos === "bl" ? { bottom: -1, left: -1, borderBottomWidth: 1.5, borderLeftWidth: 1.5, borderStyle: "solid" } : {}),
    ...(pos === "br" ? { bottom: -1, right: -1, borderBottomWidth: 1.5, borderRightWidth: 1.5, borderStyle: "solid" } : {}),
  };
  return <div style={s} />;
}

/* ─── Main ──────────────────────────────────────────────────────────── */
export default function SkillsSection() {
  const [activeId, setActiveId] = useState("frontend");
  const [blink, setBlink] = useState(true);
  const active = categories.find((c) => c.id === activeId)!;
  const totalSkills = categories.reduce((s, c) => s + c.skills.length, 0);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="skills" className="ss-root">
      {/* ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      {/* dot grid */}
      <div className="dot-grid" />

      <div className="ss-wrap">

        {/* ── HEADER ── */}
        <motion.div
          className="ss-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="hdr-left">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>SYSTEM.STACK</span>
              <span className="eyebrow-dot" />
            </div>
            <h2 className="hdr-title">
              Skills<span className="amp">&nbsp;&amp;&nbsp;</span>Arsenal
              <span className="cursor-blink" style={{ opacity: blink ? 1 : 0 }}>_</span>
            </h2>
            <p className="hdr-sub">Scanning {totalSkills} technologies across {categories.length} domains</p>
          </div>

          <div className="hdr-stats">
            {([
              [totalSkills + "+", "Technologies"],
              [categories.length, "Domains"],
              ["5+", "Years XP"],
            ] as [string | number, string][]).map(([n, l]) => (
              <div key={l} className="stat-chip" style={{ position: "relative" }}>
                <HUDCorner pos="tl" color="#a78bfa" />
                <HUDCorner pos="tr" color="#a78bfa" />
                <HUDCorner pos="bl" color="#a78bfa" />
                <HUDCorner pos="br" color="#a78bfa" />
                <span className="stat-n">{n}</span>
                <span className="stat-l">{l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CATEGORY TABS ── */}
        <motion.div
          className="cat-strip"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`cat-btn ${isActive ? "cat-btn--on" : ""}`}
                style={{ "--cc": cat.color } as React.CSSProperties}
              >
                {isActive && (
                  <motion.div
                    layoutId="cat-bg"
                    className="cat-bg"
                    style={{ background: `${cat.color}15`, borderColor: `${cat.color}50` }}
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <Icon size={13} className="cat-icon" style={{ color: isActive ? cat.color : undefined }} />
                <span className="cat-lbl">{cat.label}</span>
                {isActive && (
                  <span className="cat-badge" style={{ background: `${cat.color}22`, color: cat.color }}>
                    {cat.skills.length}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── SKILLS PANEL ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="skills-panel"
            style={{ "--ac": active.color } as React.CSSProperties}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26 }}
          >
            {/* HUD bar */}
            <div className="hud-bar" style={{ borderBottomColor: `${active.color}35` }}>
              <div className="hud-l" style={{ color: active.color }}>
                <active.icon size={13} />
                <span className="hud-name">{active.label.toUpperCase()}</span>
                <span className="hud-div">|</span>
                <span className="hud-info">{active.skills.length} MODULES LOADED</span>
              </div>
              <div className="hud-r">
                <span className="hud-live" style={{ color: active.color, borderColor: `${active.color}45`, background: `${active.color}15` }}>
                  ● ACTIVE
                </span>
              </div>
            </div>

            {/* list */}
            <div className="skill-list">
              {active.skills.map((skill, i) => (
                <SkillRow key={skill.name} skill={skill} index={i} color={active.color} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── LEGEND ── */}
        <motion.div
          className="legend-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          {LEVEL_LABEL.slice(1).map((lbl, i) => (
            <div key={lbl} className="leg-item">
              <div className="leg-track">
                <div className="leg-fill" style={{
                  width: `${(i + 1) * 20}%`,
                  background: `linear-gradient(90deg, ${active.color}44, ${active.color})`,
                }} />
              </div>
              <span className="leg-lbl">{lbl}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Rajdhani:wght@300;400;500;600&display=swap');

        .ss-root {
          --ap: #a78bfa;
          --as: #60a5fa;
          --bg: #05050f;
          --surf: #0b0b1c;
          --card: #0e0e20;
          --bd: rgba(167,139,250,0.1);
          --bdh: rgba(167,139,250,0.28);
          --txt: #e2e8f0;
          --mut: #566070;
          --fd: 'Orbitron', monospace;
          --fb: 'Rajdhani', sans-serif;

          position: relative;
          background: var(--bg);
          color: var(--txt);
          font-family: var(--fb);
          padding: 6rem 1.5rem 5rem;
          overflow: hidden;
        }

        .orb { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
        .orb-1 { width: 600px; height: 600px; top: -150px; left: -120px; background: radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 65%); }
        .orb-2 { width: 450px; height: 450px; bottom: -100px; right: -100px; background: radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 65%); }
        .orb-3 { width: 350px; height: 350px; top: 45%; left: 55%; transform: translate(-50%,-50%); background: radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 65%); }

        .dot-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image: radial-gradient(rgba(167,139,250,0.2) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(ellipse 75% 75% at 50% 40%, black 20%, transparent 100%);
        }

        .ss-wrap { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; }

        /* ── Header ── */
        .ss-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          flex-wrap: wrap; gap: 2rem; margin-bottom: 3rem;
        }
        .hdr-left { flex: 1; min-width: 260px; }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--fd); font-size: 10px;
          letter-spacing: 0.22em; color: var(--ap);
          margin-bottom: 14px;
        }
        .eyebrow-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--ap); box-shadow: 0 0 7px var(--ap);
          animation: pdot 2.2s ease-in-out infinite;
        }
        @keyframes pdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(.65)} }

        .hdr-title {
          font-family: var(--fd);
          font-size: clamp(2rem,5vw,3.2rem);
          font-weight: 700; color: #f1f5f9;
          margin: 0 0 10px; line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .amp { color: var(--ap); }
        .cursor-blink { color: var(--ap); margin-left: 2px; }

        .hdr-sub { font-size: 14px; color: var(--mut); letter-spacing: 0.03em; }

        /* stats */
        .hdr-stats { display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start; padding-top: 8px; }
        .stat-chip {
          background: var(--card); border: 1px solid var(--bd);
          padding: 16px 22px; text-align: center; min-width: 82px;
        }
        .stat-n {
          font-family: var(--fd); font-size: 22px; font-weight: 700;
          color: var(--ap); display: block;
          text-shadow: 0 0 22px rgba(167,139,250,.55);
        }
        .stat-l {
          font-size: 9px; text-transform: uppercase;
          letter-spacing: 0.16em; color: var(--mut); display: block; margin-top: 4px;
        }

        /* ── Cat tabs ── */
        .cat-strip {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.5rem;
        }
        .cat-btn {
          position: relative; display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 16px; background: transparent;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 4px;
          color: var(--mut); font-family: var(--fb); font-size: 13px; font-weight: 500;
          cursor: pointer; transition: color .2s, border-color .2s;
          letter-spacing: 0.04em; overflow: hidden;
        }
        .cat-btn:hover { color: var(--txt); border-color: rgba(167,139,250,.25); }
        .cat-btn--on { color: var(--txt); border-color: transparent; }
        .cat-bg {
          position: absolute; inset: 0; border-radius: 4px;
          border: 1px solid; z-index: 0;
        }
        .cat-icon, .cat-lbl, .cat-badge { position: relative; z-index: 1; }
        .cat-icon { opacity: .65; }
        .cat-btn--on .cat-icon { opacity: 1; }
        .cat-badge {
          font-size: 9px; padding: 1px 6px; border-radius: 10px;
          font-family: var(--fd); letter-spacing: .06em;
        }

        /* ── Panel ── */
        .skills-panel {
          background: var(--surf);
          border: 1px solid var(--bd);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 1.25rem;
          box-shadow: 0 0 40px rgba(167,139,250,.04);
        }

        .hud-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 20px;
          border-bottom: 1px solid;
          background: rgba(0,0,0,.35);
          backdrop-filter: blur(4px);
        }
        .hud-l {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--fd); font-size: 10px; letter-spacing: .15em;
        }
        .hud-div { opacity: .25; }
        .hud-info { color: var(--mut); }
        .hud-live {
          font-family: var(--fd); font-size: 9px; letter-spacing: .18em;
          padding: 3px 9px; border-radius: 3px; border: 1px solid;
          animation: live 2.6s ease-in-out infinite;
        }
        @keyframes live { 0%,100%{opacity:1} 50%{opacity:.45} }

        /* ── Skill list ── */
        .skill-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 6px 0;
        }

        /* ── Skill row ── */
        .skill-row {
          position: relative; display: flex; align-items: center;
          justify-content: space-between; gap: 12px;
          padding: 13px 20px;
          border-bottom: 1px solid rgba(255,255,255,.04);
          overflow: hidden; cursor: default;
        }
        .row-hover-bg {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
        }
        .row-side-bar {
          position: absolute; left: 0; top: 10px; bottom: 10px;
          width: 2px; border-radius: 2px; z-index: 1;
          transform-origin: center;
        }
        .row-left {
          display: flex; align-items: center; gap: 10px;
          min-width: 0; z-index: 1; flex: 1;
        }
        .row-idx {
          font-family: var(--fd); font-size: 9px; color: var(--mut);
          letter-spacing: .08em; flex-shrink: 0;
          transition: color .18s;
        }
        .row-name {
          font-size: 14px; font-weight: 500; color: var(--txt);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .row-right {
          display: flex; align-items: center; gap: 12px;
          flex-shrink: 0; z-index: 1;
        }

        /* meter */
        .meter-track {
          position: relative; width: 96px; height: 2px;
          background: rgba(255,255,255,.07); border-radius: 2px;
          overflow: visible; flex-shrink: 0;
        }
        .meter-fill { height: 100%; border-radius: 2px; position: absolute; top: 0; left: 0; }
        .meter-tip {
          position: absolute; top: 50%;
          transform: translate(-50%, -50%);
          width: 6px; height: 6px; border-radius: 50%;
        }
        .row-level {
          font-family: var(--fd); font-size: 9px; letter-spacing: .12em;
          color: var(--mut); white-space: nowrap; transition: color .18s;
          width: 62px; text-align: right;
        }

        /* ── Legend ── */
        .legend-row { display: flex; gap: 1px; flex-wrap: wrap; }
        .leg-item {
          flex: 1; min-width: 80px;
          background: var(--card); border: 1px solid var(--bd);
          padding: 10px 12px;
          font-family: var(--fd); font-size: 9px;
          letter-spacing: .12em; color: var(--mut);
          display: flex; flex-direction: column; gap: 6px;
        }
        .leg-track {
          height: 2px; background: rgba(255,255,255,.06); border-radius: 2px; overflow: hidden;
        }
        .leg-fill { height: 100%; border-radius: 2px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .ss-root { padding: 4rem 1rem 3rem; }
          .ss-header { flex-direction: column; gap: 1.5rem; }
          .hdr-stats { flex-direction: row; }
          .skill-list { grid-template-columns: 1fr; }
          .meter-track { width: 64px; }
          .row-level { display: none; }
          .cat-btn { padding: 7px 11px; font-size: 12px; }
        }
        @media (max-width: 480px) {
          .hdr-title { font-size: 1.75rem; }
          .hdr-stats { gap: 8px; }
          .stat-chip { padding: 12px 16px; }
          .stat-n { font-size: 18px; }
          .legend-row { display: none; }
        }
      `}</style>
    </section>
  );
}