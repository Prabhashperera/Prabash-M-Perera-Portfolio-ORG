import type { ElementType } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Code2, 
  Layout, 
  Server, 
  Network, 
  Database, 
  Wrench,
  Waypoints,
  Activity
} from 'lucide-react';

// 1. Define exactly what a Skill object can contain
interface Skill {
  name: string;
  desc: string;
  iconUrl?: string;      // Optional: URL to a custom SVG/PNG
  invert?: boolean;      // Optional: Flag to invert image color
  isLucide?: boolean;    // Optional: Flag if using a Lucide icon
  LucideIcon?: ElementType; // Optional: The actual Lucide component
}

// 2. Define exactly what a Skill Category contains
interface SkillCategory {
  name: string;
  icon: ElementType;
  skills: Skill[];       // Tell TypeScript that skills use the Skill interface
}

// Standardized categories with real logos using the Devicon CDN
const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Java', desc: 'Object-oriented enterprise development', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'JavaScript / TS', desc: 'Full-stack web logic & scripting', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Python', desc: 'Data analysis and automation', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    ]
  },
  {
    name: 'Frontend Technologies',
    icon: Layout,
    skills: [
      { name: 'React.js', desc: 'Component-driven web interfaces', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'React Native', desc: 'Cross-platform mobile applications', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', desc: 'Utility-first responsive styling', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  {
    name: 'Backend Technologies',
    icon: Server,
    skills: [
      { name: 'Spring Boot', desc: 'Java-based microservices architecture', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      { name: 'Node.js', desc: 'Event-driven server-side execution', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', desc: 'Minimalist web framework for Node', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
    ]
  },
  {
    name: 'Architectures & Microservices',
    icon: Network,
    skills: [
      { name: 'Apache Kafka', desc: 'Distributed event streaming & brokers', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
      { name: 'API Gateways', desc: 'Centralized routing & traffic control', isLucide: true, LucideIcon: Waypoints },
      { name: 'Circuit Breakers', desc: 'Fault tolerance and resilience', isLucide: true, LucideIcon: Activity },
    ]
  },
  {
    name: 'Databases & Data',
    icon: Database,
    skills: [
      { name: 'MongoDB', desc: 'NoSQL document database design', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', desc: 'Relational database management', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Pandas', desc: 'Python library for data manipulation', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: Wrench,
    skills: [
      { name: 'Docker', desc: 'Application containerization', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', desc: 'Container orchestration & scaling', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Git', desc: 'Version control and collaboration', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    ]
  }
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-white/30">
      
      {/* Background Subtle Grid - Matching the rest of the portfolio */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-12 pb-24">
        
        {/* Navigation / Header */}
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-300 mb-16 text-sm tracking-widest uppercase font-mono"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Index
        </button>

        <div className="mb-20">
          <h1 
            className="text-5xl md:text-6xl font-medium tracking-normal text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Technical Skills
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            A comprehensive overview of the technologies, languages, and architectures I use to build robust, scalable applications.
          </p>
        </div>

        {/* Using a placeholder abstract dark geometric shape that blends in */}
         <img 
            src="https://images.pexels.com/photos/6547182/pexels-photo-6547182.jpeg"
            alt="Abstract Branding"
            // absolute position, negative right margin to bleed off screen, low opacity, slight blur
            className="absolute top-30 -right-44 md:-right-30 w-[800px] md:w-[800px]  opacity-20 mix-blend-screen" // blur-sm rotate-12
         />

                               {/* Using a placeholder abstract dark geometric shape that blends in */}
         <img 
            src="https://images.pexels.com/photos/1727658/pexels-photo-1727658.jpeg"
            alt="Abstract Branding"
            // absolute position, negative right margin to bleed off screen, low opacity, slight blur
            className="absolute top-200 -right-4 md:-right-30 w-[500px] md:w-[800px] blur-sm  opacity-20 mix-blend-screen" // blur-sm rotate-12
         />

        {/* Categories Grid */}
        <div className="flex flex-col gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Category Header */}
              <div className="w-full lg:w-1/3 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-[#111111] rounded-lg text-white border border-white/10">
                    <category.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-medium text-white tracking-wide">
                    {category.name}
                  </h2>
                </div>
                {/* Visual Line for structural separation */}
                <div className="h-px w-full bg-linear-to-r from-white/10 to-transparent mt-6 hidden lg:block"></div>
              </div>

              {/* Skills Boxes */}
              <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    // The boxes are lighter than the background (#1a1a1a) to reduce eye strain, but stay in the dark theme
                    className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222222] border border-white/10 hover:border-white/30 rounded-xl p-5 transition-all duration-300 shadow-sm group"
                  >
                    
                    {/* Icon Rendering */}
                    <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#0a0a0a] rounded-lg border border-white/5 p-2.5">
                      {skill.isLucide && skill.LucideIcon ? (
                        <skill.LucideIcon size={28} className="text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                      ) : (
                        <img 
                          src={skill.iconUrl} 
                          alt={skill.name} 
                          className={`w-full h-full object-contain ${skill.invert ? 'filter invert opacity-90' : ''}`}
                        />
                      )}
                    </div>

                    {/* Skill Text */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors mb-0.5">
                        {skill.name}
                      </h3>
                      {/* Lighter gray text for readability */}
                      <p className="text-sm text-slate-400 leading-snug font-light">
                        {skill.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Skills;