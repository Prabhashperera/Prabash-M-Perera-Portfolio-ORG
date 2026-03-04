import { useNavigate } from 'react-router-dom';
import { Code, Award, Image as ImageIcon, BookOpen, Wrench, Package } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const boxes = [
    { id: 'projects', title: 'Projects', desc: 'My recent development work', icon: Code, path: '/projects' },
    { id: 'skills', title: 'Skills', desc: 'Technologies and tools', icon: Wrench, path: '/skills' },
    { id: 'certifications', title: 'Certifications', desc: 'Professional achievements', icon: Award, path: '/certifications' },
    { id: 'blogs', title: 'Blogs', desc: 'Articles and writings', icon: BookOpen, path: '/blogs' },
    { id: 'gallery', title: 'Gallery', desc: 'Visuals and moments', icon: ImageIcon, path: '/gallery' },
    { id: 'other', title: 'Other', desc: 'Miscellaneous items', icon: Package, path: '/other' },
  ];

  return (
    // Ensure overflow-x-hidden is on main to prevent scrollbars from images bleeding off-screen
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 overflow-x-hidden selection:bg-white/30 font-sans relative">
      
      {/* 1. Background Grid (Existing) - z-0 */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      {/* 2. BRANDING IMAGES CONTAINER - New Layer (z-10) */}
      {/* These sit above the grid but below the text. pointer-events-none is crucial so clicking works. */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
         
         {/* Top Right Image - Hero Section Branding */}
         {/* Using a placeholder abstract dark geometric shape that blends in */}
         <img 
            src="https://images.playground.com/7fbb19aa-2b72-4cef-ae9a-c96d0eb395f9.jpeg"
            alt="Abstract Branding"
            // absolute position, negative right margin to bleed off screen, low opacity, slight blur
            className="absolute top-0 -right-24 md:-right-18 w-[500px] md:w-[800px] opacity-20 mix-blend-screen" // blur-sm rotate-12
         />

         {/* Bottom Left Image - Footer/Lower Section Branding */}
         <img 
            src=""
            alt="Abstract Tech Branding"
            // absolute position bottom left, low opacity
            className="absolute bottom-0 -left-24 md:-left-48 w-[500px] md:w-[700px] opacity-10 blur-md -rotate-12 mix-blend-screen"
         />
      </div>


      {/* 3. MAIN CONTENT CONTAINER (Existing) - Higher z-index (z-20) */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* ================= HERO SECTION ================= */}
        <section className="pt-32 pb-24 border-b border-white/5">
          <div className="max-w-4xl">
            <p className="text-slate-500 font-mono uppercase tracking-widest text-sm mb-6">
              Portfolio
            </p>

            <h1 
              className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-normal mb-8 leading-none text-white" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prabash Perera
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-slate-400 leading-relaxed max-w-2xl">
              A Full-Stack Developer crafting high-performance digital experiences where engineering meets intuitive design.
            </p>
          </div>
        </section>

        {/* ================= NAVIGATION BOXES SECTION ================= */}
        <section className="py-20">
          <div className="mb-12">
             <h2 className="text-2xl font-medium text-white">Explore</h2>
          </div>

          {/* Added a subtle background to the grid area to ensure readability over branding images if needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 backdrop-blur-sm">
            {boxes.map((box) => (
              <div
                key={box.id}
                onClick={() => navigate(box.path)}
                className="group cursor-pointer bg-[#111111]/90 border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a] transition-colors duration-300 p-8 h-64 flex flex-col justify-between"
              >
                {/* Top Icon */}
                <div>
                  <box.icon 
                    size={28} 
                    strokeWidth={1.5} 
                    className="text-slate-500 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                
                {/* Bottom Text */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide">
                    {box.title}
                  </h3>
                  <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;