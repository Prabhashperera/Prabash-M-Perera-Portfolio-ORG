import{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Terminal,
  LayoutGrid,
  Image as ImageIcon,
  BookOpen
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ProjectsView from '../components/ProjectsView';
import OverviewView from '../components/OverviewView';

// --- REUSABLE UI COMPONENTS (Restored from V1) ---



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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          {/* Top Left Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600/10 rounded-full blur-[120px]"></div>
          {/* Bottom Right Glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-cyan-600/10 rounded-full blur-[120px]"></div>
          {/* Vignette to darken edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050914_100%)]"></div>
      </div>

      <div className="flex flex-col md:flex-row h-screen max-h-screen relative z-10">

        {/* ================= NAVBAR (Original Vision Pro Floating Style) ================= */}
        {/* Floating dock logic restored, but added onClick handlers */}
        <nav className="order-2 md:order-1 fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:static md:left-0 w-auto md:w-28 md:h-full z-50 flex items-center justify-center pointer-events-none">
            <GlassCard className="pointer-events-auto flex md:flex-col items-center justify-between gap-2 p-2 md:py-8 md:px-2 rounded-full md:rounded-none md:rounded-r-2xl h-auto md:h-[90%] border-white/10 backdrop-blur-2xl bg-black/40 shadow-2xl">
                 
                 {/* Logo */}
                 <div className="hidden md:flex w-12 h-12 mb-4 bg-linear-to-br from-cyan-500 to-purple-600 rounded-xl items-center justify-center font-bold text-xl text-white shadow-lg shadow-purple-500/20">
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
                                className={`cursor-grab relative group p-3 rounded-full md:rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}
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