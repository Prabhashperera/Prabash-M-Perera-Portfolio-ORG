import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Smartphone, Server, Palette, Sparkles, Database, Cloud, GitBranch, Monitor,
} from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "frontend", label: "Frontend", icon: Monitor,
    skills: [
      { name: "React", level: 5 }, { name: "Next.js", level: 4 }, { name: "TypeScript", level: 5 },
      { name: "JavaScript (ES6+)", level: 5 }, { name: "HTML5 / CSS3", level: 5 }, { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 }, { name: "Redux / Zustand", level: 4 }, { name: "Vue.js", level: 3 },
      { name: "SASS / SCSS", level: 4 },
    ],
  },
  {
    id: "backend", label: "Backend", icon: Server,
    skills: [
      { name: "Node.js", level: 5 }, { name: "Express.js", level: 5 }, { name: "Spring Boot", level: 4 },
      { name: "Java", level: 4 }, { name: "Python", level: 4 }, { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 3 }, { name: "PHP / Laravel", level: 3 }, { name: "Socket.io", level: 4 },
      { name: "Microservices", level: 4 },
    ],
  },
  {
    id: "mobile", label: "Mobile", icon: Smartphone,
    skills: [
      { name: "React Native", level: 5 }, { name: "Expo", level: 4 }, { name: "Flutter", level: 3 },
      { name: "Android (Kotlin)", level: 3 }, { name: "iOS Basics", level: 2 }, { name: "Push Notifications", level: 4 },
      { name: "App Store Deploy", level: 4 },
    ],
  },
  {
    id: "database", label: "Databases", icon: Database,
    skills: [
      { name: "MongoDB", level: 5 }, { name: "PostgreSQL", level: 4 }, { name: "MySQL", level: 4 },
      { name: "Firebase / Firestore", level: 4 }, { name: "Redis", level: 3 }, { name: "Supabase", level: 4 },
      { name: "Prisma ORM", level: 4 }, { name: "Mongoose", level: 5 },
    ],
  },
  {
    id: "devops", label: "DevOps & Cloud", icon: Cloud,
    skills: [
      { name: "Docker", level: 4 }, { name: "AWS (EC2, S3, Lambda)", level: 3 }, { name: "Vercel / Netlify", level: 5 },
      { name: "CI/CD Pipelines", level: 4 }, { name: "GitHub Actions", level: 4 }, { name: "Nginx", level: 3 },
      { name: "Linux / Shell", level: 4 }, { name: "Kubernetes Basics", level: 2 },
    ],
  },
  {
    id: "tools", label: "Tools & Workflow", icon: GitBranch,
    skills: [
      { name: "Git / GitHub", level: 5 }, { name: "VS Code", level: 5 }, { name: "Postman / Insomnia", level: 5 },
      { name: "Jira / Trello", level: 4 }, { name: "Webpack / Vite", level: 4 }, { name: "ESLint / Prettier", level: 5 },
      { name: "npm / yarn / pnpm", level: 5 },
    ],
  },
  {
    id: "design", label: "UI/UX & Design", icon: Palette,
    skills: [
      { name: "Figma", level: 4 }, { name: "Adobe Photoshop", level: 4 }, { name: "Adobe Illustrator", level: 3 },
      { name: "Adobe XD", level: 3 }, { name: "Canva Pro", level: 5 }, { name: "Design Systems", level: 4 },
      { name: "Responsive Design", level: 5 }, { name: "Wireframing", level: 4 },
    ],
  },
  {
    id: "creative", label: "Creative & AI", icon: Sparkles,
    skills: [
      { name: "Video Editing (Premiere)", level: 4 }, { name: "After Effects", level: 3 },
      { name: "DaVinci Resolve", level: 3 }, { name: "Photography", level: 4 },
      { name: "Prompt Engineering", level: 5 }, { name: "ChatGPT / Claude", level: 5 },
      { name: "Midjourney / DALL·E", level: 4 }, { name: "Stable Diffusion", level: 3 },
    ],
  },
];

const levelLabel = (l: number) => ["", "Basic", "Familiar", "Proficient", "Advanced", "Expert"][l];
const levelPercent = (l: number) => l * 20;

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const active = categories.find((c) => c.id === activeCategory)!;
  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">The Ecosystem</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Skills & Arsenal</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-3xl font-display font-bold text-gradient">{totalSkills}+</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Technologies</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-display font-bold text-gradient">{categories.length}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Domains</p>
            </div>
          </div>
        </motion.div>

        {/* Category tabs - horizontal scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 shrink-0 ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skill-tab-bg"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
                <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills content - full width */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.06)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {levelLabel(skill.level)}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${levelPercent(skill.level)}%` }}
                    transition={{ duration: 0.7, delay: i * 0.04, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>

                {/* Dots */}
                <div className="flex gap-1 mt-2.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 w-1 rounded-full transition-colors ${
                        j < skill.level ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
