import { LayoutGrid, Cpu, Server, Code2, Database, Globe } from "lucide-react";
import GlassCard from "./GlassCard"; // Assuming you have this from previous code

// --- IMPORTING BRAND ICONS ---
// We use 'si' (Simple Icons) for brands and 'fa' (FontAwesome) for standard stuff
import { 
  SiReact, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, 
  SiNextdotjs, SiRedux, SiExpo, SiNodedotjs, SiExpress, SiMongodb, 
  SiSpring, SiSpringboot, SiMysql, SiPython, SiNumpy, SiPandas, 
  SiGit, SiGithub, SiPostman, SiFigma, SiAdobephotoshop, SiAdobepremierepro, 
  SiBootstrap,
  SiMaterialdesign,
  SiJavascript
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// --- DATA STRUCTURE WITH COLORS ---
const skillCategories = [
  {
    title: "Frontend Ecosystem",
    icon: Code2,
    color: "text-purple-400",
    skills: [
      { name: "React JS", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#E34F26" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      {name : "Bootstrap", icon: SiBootstrap, color : "#764ABC"},
      {name : "MaterialUI", icon: SiMaterialdesign, color : "#764ABC"},
      { name: "React Native", icon: SiReact, color: "#61DAFB" }, // React Native uses React logo
      { name: "Expo", icon: SiExpo, color: "#000020" }, // Dark/White usually
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ]
  },
  {
    title: "Backend & Databases",
    icon: Server,
    color: "text-blue-400",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" }, // Standard Java Blue/Red
      { name: "Java EE", icon: FaJava, color: "#F80000" }, // Using Java icon with distinct color
      { name: "Java FX", icon: FaJava, color: "#E76F00" }, 
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "Data Science & Python",
    icon: Database,
    color: "text-emerald-400",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Data Science", icon: Globe, color: "#10B981" }, // Generic Globe/Graph for Concept
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
    ]
  },
  {
    title: "Tools & Design",
    icon: Cpu,
    color: "text-orange-400",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#9999FF" },
    ]
  }
];

const SkillSection = () => {
  return (
    <section className="space-y-12">
      {/* SECTION TITLE */}
      <div className="flex items-center gap-4 mb-8">
        <LayoutGrid className="text-cyan-400" size={28}/>
        <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
        <div className="h-px bg-linear-to-r from-cyan-500/50 to-transparent flex-1 ml-4"></div>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-1 gap-8">
        {skillCategories.map((category, idx) => (
          <GlassCard key={idx} className="p-6 md:p-8 relative overflow-hidden group/card">
             {/* Subtle colored glow background based on category */}
             <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-10 ${category.color.replace('text-', 'bg-')}`}></div>

            <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <category.icon size={24} className={category.color} />
                  <h4 className="text-xl font-semibold text-slate-200">{category.title}</h4>
                </div>

                {/* Skills Grid - Auto-fit Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 relative overflow-hidden cursor-default"
                    >
                      {/* Hover Color Glow Effect */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      ></div>

                      {/* Icon */}
                      <skill.icon 
                        size={32} 
                        className="text-slate-400 group-hover:scale-110 transition-transform duration-300" 
                        style={{ color:  undefined /* We apply color on hover via css or class if preferred, but usually keeping them subtle until hover is nicer. Uncomment next line for always colored: */ 
                        /* color: skill.color */ }}
                      />
                      
                      {/* Text */}
                      <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                      
                      {/* Floating colored underline on hover */}
                      <div 
                        className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                    </div>
                  ))}
                </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;