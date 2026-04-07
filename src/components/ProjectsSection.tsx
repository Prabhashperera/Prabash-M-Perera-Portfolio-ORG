import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Layers, Code2, Smartphone, Brain } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "BUILDME - HAbbit Builder",
    desc: "A comprehensive habit-building web app with streak tracking, analytics dashboard, and gamification elements that keep users engaged.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    icon: Layers,
    year: "2026",
    role: "Full-Stack Developer",
    accent: "primary",
    image: "/assets/Habit.jpg",
    size: "large",
  },
  {
    title: "CrossFit Companion",
    desc: "Cross-platform mobile application for workout tracking with real-time sync, social features, and AI-powered form correction.",
    tags: ["React Native", "Firebase", "TypeScript"],
    icon: Smartphone,
    year: "2024",
    role: "Mobile Developer",
    accent: "accent",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop",
    size: "small",
  },
  {
    title: "MedConnect Platform",
    desc: "Healthcare microservices platform with appointment scheduling, patient records, and HIPAA-compliant secure messaging.",
    tags: ["Spring Boot", "PostgreSQL", "Docker", "React"],
    icon: Code2,
    year: "2023",
    role: "Backend Architect",
    accent: "primary",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    size: "small",
  },
  {
    title: "AI Content Studio",
    desc: "Generative AI-powered content creation tool for social media managers with automated scheduling and analytics.",
    tags: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
    icon: Brain,
    year: "2023",
    role: "AI Engineer",
    accent: "accent",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    size: "large",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0); setHovered(false);
  };

  const Icon = project.icon;
  const isAccent = project.accent === "accent";
  const isLarge = project.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group ${isLarge ? "md:col-span-2 md:row-span-1" : "md:col-span-1"}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer will-change-transform h-full"
      >
        {/* Image */}
        <div className={`relative overflow-hidden ${isLarge ? "h-56 md:h-72" : "h-44 md:h-52"}`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          {/* Floating badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-md ${
              isAccent ? "bg-accent/20 text-accent border border-accent/20" : "bg-primary/20 text-primary border border-primary/20"
            }`}>
              <Icon size={14} />
            </div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-foreground/70 backdrop-blur-md bg-card/30 px-2 py-1 rounded-md border border-border/30">
              {project.year}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: hovered ? 0 : -45, scale: hovered ? 1.15 : 1 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md ${
              isAccent
                ? "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                : "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            } transition-colors duration-300 border border-border/20`}
          >
            <ArrowUpRight size={15} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <span className="text-[10px] text-muted-foreground/60 font-medium tracking-widest uppercase">
            {project.role}
          </span>
          <h3 className="font-display font-bold text-foreground text-lg md:text-xl mt-1 mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md ${
                  isAccent
                    ? "bg-accent/5 text-accent/80 border border-accent/10"
                    : "bg-primary/5 text-primary/80 border border-primary/10"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow */}
        <motion.div
          className={`absolute inset-0 rounded-2xl opacity-0 pointer-events-none ${
            isAccent ? "shadow-[inset_0_0_60px_hsl(var(--accent)/0.12)]" : "shadow-[inset_0_0_60px_hsl(var(--primary)/0.12)]"
          }`}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shine */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.04) 45%, transparent 50%)" }}
          animate={{ x: hovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">The Vault</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Selected<br /><span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
            A curated collection of work spanning full-stack, mobile, AI, and cloud engineering.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/Prabashperera"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-border bg-card overflow-hidden font-display font-medium text-foreground transition-all duration-300 hover:border-primary/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
            <span className="relative z-10">View Full GitHub Archive</span>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
