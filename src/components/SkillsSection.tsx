"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Server, Smartphone, Database, Cloud, GitBranch, Palette, Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────────────────── */
interface Skill { name: string; level: number }
interface SkillCategory {
  id: string; label: string;
  icon: React.ElementType; skills: Skill[];
}

/* ─── Data ──────────────────────────────────────────────────────────── */
const categories: SkillCategory[] = [
  {
    id: "frontend", label: "Frontend", icon: Monitor,
    skills: [
      { name: "React", level: 5 }, { name: "Next.js", level: 4 }, { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 }, { name: "HTML5 / CSS3", level: 5 }, { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 }, { name: "Redux / Zustand", level: 4 },
    ],
  },
  {
    id: "backend", label: "Backend", icon: Server,
    skills: [
      { name: "Node.js", level: 5 }, { name: "Express.js", level: 5 }, { name: "Spring Boot", level: 4 },
      { name: "Java", level: 4 }, { name: "Python", level: 4 }, { name: "REST APIs", level: 5 },
      { name: "JavaScript", level: 4 }, { name: "Microservices", level: 4 },
    ],
  },
  {
    id: "mobile", label: "Mobile", icon: Smartphone,
    skills: [
      { name: "React Native", level: 5 }, { name: "Expo", level: 4 },
      { name: "Android (Kotlin)", level: 3 }, { name: "iOS Basics", level: 2 },
      { name: "Push Notifications", level: 4 }, { name: "App Store Deploy", level: 4 },
    ],
  },
  {
    id: "database", label: "Databases", icon: Database,
    skills: [
      { name: "MongoDB", level: 5 }, { name: "PostgreSQL", level: 4 }, { name: "MySQL", level: 4 },
      { name: "Firebase", level: 4 }, { name: "Redis", level: 3 }, { name: "Supabase", level: 4 },
      { name: "Prisma ORM", level: 4 }, { name: "Mongoose", level: 5 },
    ],
  },
  {
    id: "devops", label: "DevOps & Cloud", icon: Cloud,
    skills: [
      { name: "Docker", level: 4 }, { name: "Vercel / Netlify", level: 5 },
      { name: "CI/CD Pipelines", level: 4 }, { name: "GitHub Actions", level: 4 },
      { name: "Kubernetes", level: 2 },
    ],
  },
  {
    id: "tools", label: "Tools & Workflow", icon: GitBranch,
    skills: [
      { name: "Git / GitHub", level: 5 }, { name: "VS Code", level: 5 }, { name: "Postman", level: 5 },
      { name: "Jira / Trello", level: 4 }, { name: "Webpack / Vite", level: 4 },
      { name: "ESLint / Prettier", level: 5 }, { name: "npm / yarn / pnpm", level: 5 },
    ],
  },
  {
    id: "design", label: "UI/UX & Design", icon: Palette,
    skills: [
      { name: "Figma", level: 4 }, { name: "Photoshop", level: 4 }, { name: "Illustrator", level: 3 },
      { name: "Adobe XD", level: 3 }, { name: "Canva Pro", level: 5 }, { name: "Design Systems", level: 4 },
      { name: "Responsive Design", level: 5 }, { name: "Wireframing", level: 4 },
    ],
  },
  {
    id: "creative", label: "AI & Creative", icon: Sparkles,
    skills: [
      { name: "Premiere Pro", level: 4 }, { name: "After Effects", level: 3 },
      { name: "DaVinci Resolve", level: 3 }, { name: "Photography", level: 4 },
      { name: "Prompt Engineering", level: 5 }, { name: "ChatGPT / Claude", level: 5 },
      { name: "Midjourney", level: 4 }, { name: "Stable Diffusion", level: 3 },
    ],
  },
];

const LEVEL_LABEL = ["", "Novice", "Familiar", "Proficient", "Advanced", "Expert"];

/* ─── Skill Row ─────────────────────────────────────────────────────── */
function SkillRow({ skill, index, isOdd }: { skill: Skill; index: number; isOdd: boolean }) {
  const [hovered, setHovered] = useState(false);
  const pct = skill.level * 20;

  return (
    <motion.div
      className={`skill-row${isOdd ? " skill-row--odd" : ""}`}
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.38, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* hover bg — same gradient pattern as ProjectCard shine */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "linear-gradient(105deg, hsl(var(--primary)/0.05) 0%, hsl(var(--accent)/0.04) 100%)",
          boxShadow: "inset 0 0 40px hsl(var(--primary)/0.06)",
        }}
      />

      {/* left accent bar */}
      <motion.div
        className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-full"
        style={{
          background: "hsl(var(--primary))",
          boxShadow: "0 0 8px hsl(var(--primary)/0.7)",
          transformOrigin: "center",
        }}
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="row-inner">
        {/* index number */}
        <span className={`font-display text-[10px] tracking-widest font-bold transition-colors duration-200 w-6 text-right shrink-0 ${
          hovered ? "text-primary" : "text-muted-foreground/30"
        }`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* name */}
        <span className={`text-sm font-medium flex-1 min-w-0 transition-colors duration-200 ${
          hovered ? "text-primary" : "text-foreground"
        }`}>
          {skill.name}
        </span>

        {/* meter */}
        <div className="shrink-0 w-24 md:w-28">
          <div className="relative h-px bg-border rounded-full overflow-visible">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), hsl(var(--primary)))" }}
              initial={{ width: "0%" }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.65, delay: index * 0.04 + 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* glowing tip */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2"
              style={{
                background: "hsl(var(--primary))",
                boxShadow: "0 0 7px 2px hsl(var(--primary)/0.6)",
              }}
              initial={{ left: "0%" }}
              animate={{ left: `${pct}%` }}
              transition={{ duration: 0.65, delay: index * 0.04 + 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* level label */}
        <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold w-16 text-right shrink-0 transition-colors duration-200 hidden sm:block ${
          hovered ? "text-primary" : "text-muted-foreground/40"
        }`}>
          {LEVEL_LABEL[skill.level]}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────── */
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
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">

      {/* ambient orbs — identical to ProjectsSection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-[120px]" />
      </div>

      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)/0.12) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 75% 80% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ── HEADER — exact same structure as ProjectsSection ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            {/* eyebrow — same as "The Vault" */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">The Ecosystem</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Skills &amp;<br />
              <span className="text-gradient">Arsenal</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
              A curated stack spanning frontend, backend, mobile, AI, and everything in between.
            </p>
            {/* stat chips */}
            <div className="flex items-center gap-3">
              {([
                [totalSkills + "+", "Technologies"],
                [categories.length, "Domains"],
                ["2+", "Years XP"],
              ] as [string, string][]).map(([n, l]) => (
                <div key={l} className="relative px-4 py-3 rounded-xl border border-border bg-card text-center min-w-[76px]">
                  {/* HUD corners */}
                  <span className="hud-corner hud-tl" />
                  <span className="hud-corner hud-tr" />
                  <span className="hud-corner hud-bl" />
                  <span className="hud-corner hud-br" />
                  <p className="font-display font-bold text-xl text-gradient leading-none">{n}</p>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── CATEGORY TABS — same pill style as original ── */}
        <motion.div
          className="mb-8 flex gap-2 flex-wrap"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative group/tab inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border overflow-hidden whitespace-nowrap ${
                  isActive
                    ? "text-primary-foreground border-primary/30"
                    : "text-muted-foreground border-border bg-card hover:border-primary/20 hover:text-foreground"
                }`}
              >
                {/* active gradient bg — matches ProjectCard hover */}
                {isActive && (
                  <motion.div
                    layoutId="skill-tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {/* inactive shimmer on hover */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover/tab:opacity-100 transition-opacity duration-500" />
                )}
                <Icon size={13} className="relative z-10 shrink-0" />
                <span className="relative z-10">{cat.label}</span>
                <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── SKILLS PANEL ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mb-5"
          >
            {/* HUD panel header */}
            <div className="flex items-center justify-between px-5 py-3 rounded-t-2xl border border-b-0 border-border bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <active.icon size={13} className="text-primary" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
                  {active.label}
                </span>
                <span className="text-muted-foreground/30 text-xs hidden sm:block">|</span>
                <span className="text-muted-foreground text-xs hidden sm:block">
                  {active.skills.length} modules
                </span>
              </div>
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-md border"
                style={{
                  color: "hsl(var(--primary))",
                  borderColor: "hsl(var(--primary)/0.3)",
                  background: "hsl(var(--primary)/0.08)",
                  animation: "badge-pulse 2.6s ease-in-out infinite",
                  opacity: blink ? 1 : 0.45,
                  transition: "opacity 0.15s",
                }}
              >
                ● Active
              </span>
            </div>

            {/* 2-col skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-b-2xl border border-t-0 border-border bg-card/30 backdrop-blur-sm overflow-hidden">
              {active.skills.map((skill, i) => (
                <SkillRow key={skill.name} skill={skill} index={i} isOdd={i % 2 === 0} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── LEGEND ── */}
        <motion.div
          className="flex flex-wrap gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {LEVEL_LABEL.slice(1).map((lbl, i) => (
            <div
              key={lbl}
              className="flex-1 min-w-[72px] rounded-xl border border-border bg-card/40 px-3 py-2.5 flex flex-col gap-1.5"
            >
              <div className="h-px w-full bg-border rounded-full overflow-visible relative">
                <div
                  className="h-full rounded-full absolute top-0 left-0"
                  style={{
                    width: `${(i + 1) * 20}%`,
                    background: "linear-gradient(90deg, hsl(var(--primary)/0.5), hsl(var(--primary)))",
                  }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium">
                {lbl}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        /* ── Skill row ── */
        .skill-row {
          position: relative;
          padding: 13px 20px;
          border-bottom: 1px solid hsl(var(--border));
          overflow: hidden;
          cursor: default;
          transition: background 0.2s;
        }
        .skill-row:last-child { border-bottom: none; }

        @media (min-width: 768px) {
          .skill-row--odd { border-right: 1px solid hsl(var(--border)); }
        }

        .row-inner {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 12px;
        }

        /* HUD corner marks */
        .hud-corner {
          position: absolute; width: 8px; height: 8px;
          border-color: hsl(var(--primary)/0.45); border-style: solid;
        }
        .hud-tl { top: -1px; left: -1px; border-width: 1.5px 0 0 1.5px; }
        .hud-tr { top: -1px; right: -1px; border-width: 1.5px 1.5px 0 0; }
        .hud-bl { bottom: -1px; left: -1px; border-width: 0 0 1.5px 1.5px; }
        .hud-br { bottom: -1px; right: -1px; border-width: 0 1.5px 1.5px 0; }
      `}</style>
    </section>
  );
}