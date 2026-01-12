import { ImageIcon, ExternalLink, Star, GitBranch } from "lucide-react";
import GlassCard from "./GlassCard";

const ProjectCard = ({ title, description, tags, stars, forks }: any) => (
    <GlassCard className="p-6 group hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full">
      <div className="h-40 mb-6 rounded-lg bg-linear-to-tr from-slate-800 to-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center text-slate-600 group-hover:text-cyan-500/50 transition-colors">
          <ImageIcon size={32} />
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
         <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><ExternalLink size={18} /></a>
      </div>
      <p className="text-slate-300 text-sm mb-4 line-clamp-3 grow">{description}</p>
      
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

export default ProjectCard