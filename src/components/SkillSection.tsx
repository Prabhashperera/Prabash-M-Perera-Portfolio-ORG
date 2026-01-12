import { LayoutGrid, Code2, Server, Terminal, Cpu, Layers } from "lucide-react"
import GlassCard from "./GlassCard"
import SkillBadge from "./SkillBadge"

const SkillSection = (props:any) => {
  return (
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
                            {props.frontendSkills.map((skill: string) => <SkillBadge key={skill} name={skill} icon={Code2} />)}
                        </div>
                    </GlassCard>
                    <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <Server size={20} className="text-blue-400"/> Backend & DB
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {props.backendSkills.map((skill: string) => <SkillBadge key={skill} name={skill} icon={Terminal} />)}
                        </div>
                    </GlassCard>
                     <GlassCard className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold text-slate-200 mb-4">
                            <Cpu size={20} className="text-emerald-400"/> Tools & DevOps
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {props.toolsSkills.map((skill: string) => <SkillBadge key={skill} name={skill} icon={Layers} />)}
                        </div>
                    </GlassCard>
                </div>
            </section>
  )
}

export default SkillSection