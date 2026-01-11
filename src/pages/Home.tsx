import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  Layers,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Database,
  LayoutGrid,
  Image as ImageIcon,
  BookOpen,
  ExternalLink,
  GitBranch,
  Star
} from 'lucide-react';

// --- REUSABLE UI COMPONENTS ---

// A reusable glass card component for that futuristic OS feel
const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${className}`}>
    {children}
  </div>
);

// A glowing skill pill
const SkillBadge = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/50 rounded-full hover:bg-cyan-900/50 transition-colors duration-300 cursor-default">
    <Icon size={16} className="text-cyan-400" />
    {name}
  </div>
);

// Project Card Placeholder
const ProjectCard = ({ title, description, tags, stars, forks }: any) => (
    <GlassCard className="p-6 group hover:border-cyan-500/50 transition-all duration-500">
      <div className="h-40 mb-6 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center text-slate-600">
          {/* REPLACE THIS WITH YOUR PROJECT IMAGE */}
          <span className="flex items-center gap-2"><ImageIcon size={20}/> Project Preview Image</span>
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
         <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><ExternalLink size={18} /></a>
      </div>
      <p className="text-slate-300 text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, index: number) => (
          <span key={index} className="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-300 border border-white/5">{tag}</span>
        ))}
      </div>

      {/* Fake Github Stats for the showcase feel */}
      <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {stars}</span>
          <span className="flex items-center gap-1"><GitBranch size={14} className="text-purple-500" /> {forks}</span>
      </div>
    </GlassCard>
);


// --- MAIN COMPONENT ---

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const navbarItems = [
    { icon: LayoutGrid, label: "Overview" }, // Maps to Hero/Skills
    { icon: Terminal, label: "Projects" },
    { icon: BookOpen, label: "Courses" },
    { icon: ImageIcon, label: "Gallery" },
  ];

  // All skills categorized for better UI organization
  const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux", "React Native"];
  const backendSkills = ["Java", "Spring Boot", "Node.js (Express)", "MongoDB", "MySQL"];
  const toolsSkills = ["Git", "Github", "Postman", "Figma", "Photoshop", "Premiere Pro"];

  return (
    <main className="min-h-screen bg-[#050914] text-slate-200 overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      
      {/* Background Futuristic Elements (Glowing Lines/Grids) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div> {/* Optional: Add a subtle grid svg if you have one */}
      </div>

      {/* ================= MAIN LAYOUT CONTAINER ================= */}
      {/* On desktop: Navbar on left, content on right. On mobile: Content on top, Navbar fixed bottom. */}
      <div className="flex flex-col md:flex-row h-screen max-h-screen relative z-10">

        {/* ================= THE "VISION PRO" STYLE NAVBAR ================= */}
        {/* This is designed as a floating dock on mobile, and a sleek side rail on desktop */}
        <nav className="order-2 md:order-1 fixed bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:static md:left-0 w-auto md:w-24 md:h-full z-50">
            <GlassCard className="flex md:flex-col items-center justify-between gap-1 p-2 md:py-8 md:px-2 rounded-full md:rounded-none md:rounded-r-2xl h-full md:h-auto border-white/20 backdrop-blur-2xl bg-black/40">
                 {/* Logo Placeholder */}
                 <div className="hidden md:flex w-12 h-12 mb-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl items-center justify-center font-bold text-xl text-white">
                    P.
                 </div>

                {/* Nav Links */}
                <div className="flex md:flex-col gap-1 md:gap-4">
                    {navbarItems.map((item, index) => (
                    <button key={index} className={`relative group p-3 rounded-full md:rounded-xl flex items-center justify-center transition-all duration-300 ${index === 0 ? 'bg-white/10 text-cyan-400' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}>
                        <item.icon size={22} strokeWidth={1.5} />
                        {/* Tooltip style label for desktop */}
                        <span className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-xs rounded-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap hidden md:block border border-white/10">
                            {item.label}
                        </span>
                        {/* Active indicator dot */}
                        {index === 0 && <span className="absolute bottom-1 md:bottom-auto md:left-1 w-1 h-1 md:w-1 md:h-6 bg-cyan-400 rounded-full"></span>}
                    </button>
                    ))}
                </div>
                
                 {/* Bottom Social Links placeholder for desktop */}
                 <div className="hidden md:flex flex-col gap-4 mt-auto">
                    <Github size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer"/>
                    <Linkedin size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer"/>
                 </div>
            </GlassCard>
        </nav>


        {/* ================= CONTENT VIEWPORT ================= */}
        {/* This area would dynamically change content based on the navbar click in a full app. */}
        {/* Currently displaying the HERO and SKILLS section as the "default view". */}
        <div className="order-1 md:order-2 flex-1 h-full overflow-y-auto overflow-x-hidden p-4 md:p-8 custom-scrollbar scroll-smooth">
          <motion.div 
            className="max-w-6xl mx-auto space-y-12 md:space-y-24 pb-24 md:pb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* ----- SECTION 1: HERO ----- */}
            <section id="overview" className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 pt-8 md:pt-16">
              
              {/* Hero Text Content */}
              <motion.div className="flex-1 text-center md:text-left space-y-6" variants={itemVariants}>
                {/* A "chip" indicating status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 text-sm font-mono mb-4">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    System Online. Available for work.
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">Prabash Perera</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-slate-300">
                  FullStack Developer & Digital Architect
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
                  Crafting high-performance digital experiences where engineering meets intuitive design. Specializing in the React ecosystem and robust Java backend systems.
                </p>
                
                {/* Hero Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-100 transition-colors flex items-center gap-2 relative overflow-hidden group">
                    <span className="relative z-10">Explore Projects</span>
                    <Terminal size={18} className="relative z-10 group-hover:translate-x-1 transition-transform"/>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
                  </button>
                  <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2">
                    Contact Me <Mail size={18}/>
                  </button>
                </div>
              </motion.div>
              
              {/* Hero Photo / Avatar Container */}
              <motion.div className="flex-1 relative" variants={itemVariants}>
                  {/* The glowing ring effect behind the photo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-[50px] animate-pulse-slow"></div>
                  
                  {/* Photo Placeholder Glass Container */}
                  <GlassCard className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] mx-auto rounded-[30px] overflow-hidden border-2 border-white/10 p-2 z-10 group">
                     <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-slate-800 flex items-center justify-center text-slate-500 flex-col gap-2">
                        
                        {/* === REPLACE THE IMAGE TAG BELOW WITH YOUR PHOTO === */}
                        {/* Example: <img src="/your-photo.jpg" alt="Prabash Perera" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /> */}
                        <ImageIcon size={48} className="opacity-50"/>
                        <span className="text-sm font-mono">Add Your Photo Here</span>

                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-60"></div>
                     </div>
                  </GlassCard>
              </motion.div>
            </section>

             {/* ----- SECTION 2: SKILLS "DATA VISUALIZATION" ----- */}
            <motion.section variants={itemVariants} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <Database className="text-cyan-400" size={28}/>
                    <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
                     <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 ml-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Frontend Column */}
                    <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <LayoutGrid size={20} className="text-purple-400"/> Frontend
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map(skill => <SkillBadge key={skill} name={skill} icon={Code2} />)}
                        </div>
                    </GlassCard>
                    
                    {/* Backend Column */}
                    <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <ServerIcon size={20} className="text-blue-400"/> Backend & DB
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {backendSkills.map(skill => <SkillBadge key={skill} name={skill} icon={Terminal} />)}
                        </div>
                    </GlassCard>

                    {/* Tools Column */}
                     <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <Cpu size={20} className="text-emerald-400"/> Tools & DevOps
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {toolsSkills.map(skill => <SkillBadge key={skill} name={skill} icon={Layers} />)}
                        </div>
                    </GlassCard>
                </div>
            </motion.section>

            {/* ----- SECTION 3: GITHUB PROJECTS SHOWCASE ----- */}
            <motion.section variants={itemVariants} className="space-y-8 pt-8">
                 <div className="flex items-center gap-4 mb-8">
                    <Github className="text-purple-400" size={28}/>
                    <h3 className="text-3xl font-bold text-white">Deployed Units (Projects)</h3>
                    <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* PROJECT 1 PLACEHOLDER */}
                    <ProjectCard 
                        title="E-Commerce Core"
                        description="A full-stack microservices based e-commerce platform built with Spring Boot and React."
                        tags={["Java", "Spring Boot", "React", "MySQL"]}
                        stars="24" forks="8"
                    />
                     {/* PROJECT 2 PLACEHOLDER */}
                    <ProjectCard 
                        title="TaskOS AI"
                        description="Productivity application utilizing OpenAI API for intelligent task prioritization and summarizing."
                        tags={["Next.js", "TypeScript", "Tailwind", "OpenAI API"]}
                        stars="45" forks="12"
                    />
                     {/* PROJECT 3 PLACEHOLDER */}
                    <ProjectCard 
                        title="Native Fitness Tracker"
                        description="Cross-platform mobile application for tracking workouts and nutrition data in real-time."
                        tags={["React Native", "Redux", "Firebase"]}
                        stars="18" forks="4"
                    />
                </div>
            </motion.section>

            {/* ----- PLACEHOLDER FOR COURSES & GALLERY ----- */}
            {/* These sections are here just to show structure, they would likely be separate views in a real app */}
            <motion.div variants={itemVariants} className="pt-16 opacity-50 grayscale text-center">
                 <div className="p-12 border border-dashed border-slate-700 rounded-2xl">
                    <h4 className="text-xl font-mono text-slate-400 mb-2">
                         <BookOpen className="inline mr-2"/> Courses & <ImageIcon className="inline mx-2"/> Gallery Sections
                    </h4>
                    <p>Content hidden. Connect UI state to reveal these data logs.</p>
                 </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </main>
  );
};

// Simple Icon wrapper for backend column to avoid import conflicts
const ServerIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><rect width={20} height={8} x={2} y={2} rx={2} ry={2} /><rect width={20} height={8} x={2} y={14} rx={2} ry={2} /><line x1={6} x2={6.01} y1={6} y2={6} /><line x1={6} x2={6.01} y1={18} y2={18} /></svg>
)

export default Home;