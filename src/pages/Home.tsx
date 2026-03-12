import { useNavigate } from 'react-router-dom';
import { Code, Award, Image as ImageIcon, BookOpen, Wrench, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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

  // Animation variants for the staggered grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each box appearing
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 overflow-x-hidden selection:bg-white/30 font-sans relative">
      
      {/* 1. Background Grid - Static */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      {/* 2. BRANDING IMAGES CONTAINER - Animated */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
         {/* Top Right Image - Slow continuous floating animation */}
         <motion.img 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            src="https://images.playground.com/7fbb19aa-2b72-4cef-ae9a-c96d0eb395f9.jpeg"
            alt="Abstract Branding"
            className="absolute top-0 -right-24 md:-right-18 w-[500px] md:w-[800px] mix-blend-screen" 
         />
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* ================= HERO SECTION ================= */}
        <section className="pt-32 pb-24 border-b border-white/5">
          <div className="max-w-4xl">
            
            {/* Fade in and slide down slightly */}
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-500 font-mono uppercase tracking-widest text-sm mb-6"
            >
              Portfolio
            </motion.p>

            {/* Main Name - Smooth fade and scale up */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-normal mb-8 leading-none text-white" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prabash Perera
            </motion.h1>
            
            {/* Description - Fade in from bottom */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-slate-400 leading-relaxed max-w-2xl"
            >
              A Full-Stack Developer crafting high-performance digital experiences where engineering meets intuitive design.
            </motion.p>

          </div>
        </section>

        {/* ================= NAVIGATION BOXES SECTION ================= */}
        <section className="py-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
             <h2 className="text-2xl font-medium text-white">Explore</h2>
          </motion.div>

          {/* Staggered Grid Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 backdrop-blur-sm"
          >
            {boxes.map((box) => (
              <motion.div
                key={box.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => navigate(box.path)}
                className="group cursor-pointer bg-[#111111]/90 border border-white/10 hover:border-white/40 hover:bg-[#1a1a1a] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 p-8 h-64 flex flex-col justify-between rounded-xl"
              >
                {/* Top Icon */}
                <div>
                  <box.icon 
                    size={28} 
                    strokeWidth={1.5} 
                    className="text-slate-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" 
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
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Home;