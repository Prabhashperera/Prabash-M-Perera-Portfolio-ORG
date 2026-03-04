import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';

// Using your actual project images and details
const projectsData = [
  {
    id: 'buildme',
    title: 'BuildMe',
    type: 'Gamified Web App',
    description: 'A habit-building platform integrating GenAI APIs for personalized advice.',
    tech: ['Node.js', 'Express', 'React', 'GenAI'],
    image: '/src/assets/BuildMe.png', 
    github: '#',
    live: '#',
  },
  {
    id: 'petfinder',
    title: 'PetFinder',
    type: 'Full-Stack Platform',
    description: 'A comprehensive application designed for reporting and locating lost pets.',
    tech: ['Spring Boot', 'React', 'Node.js'],
    // Fallback image using a sleek unsplash photo for pets since it wasn't in the assets folder
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=1000', 
    github: '#',
    live: '#',
  },
  {
    id: 'zeidot',
    title: 'ZEIDOT',
    type: 'Desktop Application',
    description: 'A system built to reduce food waste by redistributing surplus food from hotels to charities.',
    tech: ['JavaFX', 'Java'],
    image: '/src/assets/ZEIDOT.png',
    github: '#',
    live: '#',
  },
  {
    id: 'emp',
    title: 'EMP System',
    type: 'Management Tool',
    description: 'Employee management portal for streamlined internal operations.',
    tech: ['MERN Stack', 'Tailwind'],
    image: '/src/assets/EMP.png',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(projectsData[0]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-white/30">
      
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 pb-24">
        
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
            className="text-5xl md:text-7xl font-medium tracking-normal text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Selected Works
          </h1>
          <p className="text-slate-400 text-lg max-w-xl font-light">
            A curated collection of full-stack platforms, mobile interfaces, and software solutions.
          </p>
        </div>

        {/* Main Layout: 
          Mobile -> Stacked list with images inline.
          Desktop -> Left side text list, right side sticky image preview. 
        */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Side: Project List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-0 border-t border-white/10">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                className="group py-8 border-b border-white/10 cursor-pointer flex flex-col transition-all duration-300 hover:pl-4"
              >
                {/* Mobile-only image preview (Hidden on large screens) */}
                <div className="block lg:hidden w-full h-48 mb-6 overflow-hidden bg-[#111111] rounded-lg border border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top opacity-80"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl md:text-5xl font-medium text-slate-500 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h2>
                  <ArrowUpRight 
                    size={32} 
                    strokeWidth={1} 
                    className="text-slate-700 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100" 
                  />
                </div>
                
                <p className="text-slate-400 mb-6 max-w-md font-light text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="text-xs uppercase tracking-widest font-mono text-slate-600">
                    {project.type}
                  </span>
                  <div className="h-1 w-1 bg-slate-700 rounded-full"></div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-sm text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white hover:underline underline-offset-4">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm text-white hover:underline underline-offset-4">
                    <ArrowUpRight size={16} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Dynamic Image Preview (Desktop Only) */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="sticky top-32 w-full aspect-square bg-[#111111] border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500">
              {/* We use absolute positioning and opacity to cross-fade 
                smoothly between images without heavy animation libraries.
              */}
              {projectsData.map((project) => (
                <div 
                  key={project.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredProject.id === project.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {/* Subtle overlay to ensure the image looks cohesive with dark mode */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/20 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Projects;