import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Code2,
  Layers,
  Github,
  Linkedin,
  Mail,
  Terminal,
  LayoutGrid,
  Image as ImageIcon,
  BookOpen,
  ExternalLink,
  GitBranch,
  Star,
  Server
} from 'lucide-react';
import myPhoto from '../assets/my.jpg'

// --- REUSABLE UI COMPONENTS (Restored from V1) ---

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${className}`}>
    {children}
  </div>
);

const SkillBadge = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/50 rounded-full hover:bg-cyan-900/50 transition-colors duration-300 cursor-default">
    <Icon size={16} className="text-cyan-400" />
    {name}
  </div>
);

const ProjectCard = ({ title, description, tags, stars, forks }: any) => (
    <GlassCard className="p-6 group hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full">
      <div className="h-40 mb-6 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center text-slate-600 group-hover:text-cyan-500/50 transition-colors">
          <ImageIcon size={32} />
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
         <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><ExternalLink size={18} /></a>
      </div>
      <p className="text-slate-300 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, index: number) => (
          <span key={index} className="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-300 border border-white/5">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mt-auto pt-4 border-t border-white/5">
          <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {stars}</span>
          <span className="flex items-center gap-1"><GitBranch size={14} className="text-purple-500" /> {forks}</span>
      </div>
    </GlassCard>
);

// --- CONTENT VIEWS ---

const OverviewView = () => {
    // Data from your prompt
    const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux", "React Native"];
    const backendSkills = ["Java", "Spring Boot", "Node.js (Express)", "MongoDB", "MySQL"];
    const toolsSkills = ["Git", "Github", "Postman", "Figma", "Photoshop", "Premiere Pro"];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
            className="space-y-12 md:space-y-24 pb-8"
        >
            {/* HERO SECTION */}
            <section className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 pt-8 md:pt-16">
                <div className="flex-1 text-center md:text-left space-y-6">
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
                    
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-100 transition-colors flex items-center gap-2 relative overflow-hidden group">
                            <span className="relative z-10">Explore Projects</span>
                            <Terminal size={18} className="relative z-10 group-hover:translate-x-1 transition-transform"/>
                            <div className="absolute inset-0 h-full w-full bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-[50px] animate-pulse-slow"></div>
                    <GlassCard className="relative w-65 h-[260px] md:w-[360px] md:h-[360px] mx-auto rounded-[30px] overflow-hidden border-2 border-white/10 p-2 z-10 group">
                        <div className="w-full h-full rounded-3xl overflow-hidden relative bg-slate-800 flex items-center justify-center text-slate-500 flex-col gap-2">
                            <img src={myPhoto} alt="my photo" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050914] via-transparent to-transparent opacity-60"></div>
                        </div>
                    </GlassCard>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <LayoutGrid className="text-cyan-400" size={28}/>
                    <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
                    <div className="h-px bg-linear-to-r from-cyan-500/50 to-transparent flex-1 ml-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <Code2 size={20} className="text-purple-400"/> Frontend
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map(skill => <SkillBadge key={skill} name={skill} icon={Code2} />)}
                        </div>
                    </GlassCard>
                    <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <Server size={20} className="text-blue-400"/> Backend & DB
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {backendSkills.map(skill => <SkillBadge key={skill} name={skill} icon={Terminal} />)}
                        </div>
                    </GlassCard>
                     <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <Cpu size={20} className="text-emerald-400"/> Tools & DevOps
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {toolsSkills.map(skill => <SkillBadge key={skill} name={skill} icon={Layers} />)}
                        </div>
                    </GlassCard>
                </div>
            </section>
        </motion.div>
    );
};

const ProjectsView = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
            className="pt-8"
        >
             <div className="flex items-center gap-4 mb-12">
                <Terminal className="text-purple-400" size={28}/>
                <h3 className="text-3xl font-bold text-white">Deployed Units (Projects)</h3>
                <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard 
                    title="E-Commerce Core"
                    description="A full-stack microservices based e-commerce platform built with Spring Boot and React. Features include secure payments, inventory tracking, and admin dashboard."
                    tags={["Java", "Spring Boot", "React", "MySQL"]}
                    stars="24" forks="8"
                />
                <ProjectCard 
                    title="TaskOS AI"
                    description="Productivity application utilizing OpenAI API for intelligent task prioritization and summarizing. Built with Next.js 14 and Tailwind for optimal performance."
                    tags={["Next.js", "TypeScript", "Tailwind", "OpenAI API"]}
                    stars="45" forks="12"
                />
                <ProjectCard 
                    title="Native Fitness Tracker"
                    description="Cross-platform mobile application for tracking workouts and nutrition data in real-time. Syncs with health APIs and visualizes progress."
                    tags={["React Native", "Redux", "Firebase"]}
                    stars="18" forks="4"
                />
            </div>
        </motion.div>
    )
}

const PlaceholderView = ({ title, icon: Icon }: any) => (
    <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="h-[60vh] flex flex-col items-center justify-center text-center opacity-60"
    >
        <div className="p-12 border border-dashed border-slate-700 rounded-3xl bg-white/5">
            <Icon size={48} className="mx-auto mb-4 text-slate-500"/>
            <h2 className="text-2xl font-bold text-slate-300">{title} Module</h2>
            <p className="text-slate-500 mt-2">Content stream not connected.</p>
        </div>
    </motion.div>
);


// --- MAIN APP COMPONENT ---

const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const navbarItems = [
    { id: 'overview', icon: LayoutGrid, label: "Overview" },
    { id: 'projects', icon: Terminal, label: "Projects" },
    { id: 'courses', icon: BookOpen, label: "Courses" },
    { id: 'gallery', icon: ImageIcon, label: "Gallery" },
  ];

  return (
    <main className="min-h-screen bg-[#050914] text-slate-200 overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      
      {/* ================= BACKGROUND (Updated to Cyber Grid) ================= */}
      <div className="fixed inset-0 pointer-events-none">
          {/* Cyber Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {/* Top Left Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
          {/* Bottom Right Glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
          {/* Vignette to darken edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050914_100%)]"></div>
      </div>

      <div className="flex flex-col md:flex-row h-screen max-h-screen relative z-10">

        {/* ================= NAVBAR (Original Vision Pro Floating Style) ================= */}
        {/* Floating dock logic restored, but added onClick handlers */}
        <nav className="order-2 md:order-1 fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:static md:left-0 w-auto md:w-28 md:h-full z-50 flex items-center justify-center pointer-events-none">
            <GlassCard className="pointer-events-auto flex md:flex-col items-center justify-between gap-2 p-2 md:py-8 md:px-2 rounded-full md:rounded-none md:rounded-r-2xl h-auto md:h-[90%] border-white/10 backdrop-blur-2xl bg-black/40 shadow-2xl">
                 
                 {/* Logo */}
                 <div className="hidden md:flex w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl items-center justify-center font-bold text-xl text-white shadow-lg shadow-purple-500/20">
                    P.
                 </div>

                {/* Nav Links */}
                <div className="flex md:flex-col gap-2 md:gap-4">
                    {navbarItems.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <button 
                                key={item.id} 
                                onClick={() => setActiveTab(item.id)}
                                className={`relative group p-3 rounded-full md:rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}
                            >
                                <item.icon size={24} strokeWidth={1.5} />
                                {/* Tooltip */}
                                <span className="absolute left-full ml-5 px-3 py-1.5 bg-[#0a0a0a] text-xs font-medium rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap hidden md:block border border-white/10 text-slate-300 shadow-xl">
                                    {item.label}
                                </span>
                                {/* Active Dot */}
                                {isActive && <span className="absolute -bottom-1 md:bottom-auto md:-left-1 w-1 h-1 md:w-1 md:h-6 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>}
                            </button>
                        );
                    })}
                </div>
                
                 {/* Socials */}
                 <div className="hidden md:flex flex-col gap-6 mt-auto pb-4">
                    <Github size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer"/>
                    <Linkedin size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer"/>
                 </div>
            </GlassCard>
        </nav>

        {/* ================= CONTENT AREA ================= */}
        {/* Swaps content based on State */}
        <div className="order-1 md:order-2 flex-1 h-full overflow-y-auto overflow-x-hidden p-4 md:p-12 custom-scrollbar scroll-smooth">
             <AnimatePresence mode="wait">
                {activeTab === 'overview' && <OverviewView key="overview" />}
                {activeTab === 'projects' && <ProjectsView key="projects" />}
                {activeTab === 'courses' && <PlaceholderView key="courses" title="Courses" icon={BookOpen} />}
                {activeTab === 'gallery' && <PlaceholderView key="gallery" title="Gallery" icon={ImageIcon} />}
             </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Home;