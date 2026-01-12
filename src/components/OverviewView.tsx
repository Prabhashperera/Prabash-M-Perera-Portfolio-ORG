// --- CONTENT VIEWS ---

import { motion } from "framer-motion";
import { Terminal} from "lucide-react";
import GlassCard from "./GlassCard";
import myPhoto from '../assets/my.jpg'
import SkillSection from "./SkillSection";

const OverviewView = () => {

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
                        Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">Prabash Perera</span>
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 md:w-100 md:h-100 bg-linear-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-[50px] animate-pulse-slow"></div>
                    <GlassCard className="relative w-65 h-65 md:w-90 md:h-90 mx-auto rounded-[30px] overflow-hidden border-2 border-white/10 p-2 z-10 group">
                        <div className="w-full h-full rounded-3xl overflow-hidden relative bg-slate-800 flex items-center justify-center text-slate-500 flex-col gap-2">
                            <img src={myPhoto} alt="my photo" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050914] via-transparent to-transparent opacity-60"></div>
                        </div>
                    </GlassCard>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <SkillSection />
        </motion.div>
    );
};

export default OverviewView
