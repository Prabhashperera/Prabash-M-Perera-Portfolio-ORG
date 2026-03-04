import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BadgeCheck } from 'lucide-react';

// Using your actual tech stack to create realistic placeholder courses
const coursesData = [
  {
    id: 'mobile-dev',
    title: 'Advanced Mobile Developer',
    issuer: 'University / Institute',
    date: 'Feb 2026',
    status: 'Completed',
    skills: ['React Native', 'Mobile UI/UX', 'Expo'],
    link: '#',
  },
  {
    id: 'mern-stack',
    title: 'Full-Stack Web Engineering',
    issuer: 'Tech Academy',
    date: 'Dec 2025',
    status: 'Certified',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
  },
  {
    id: 'java-spring',
    title: 'Java Spring Boot Microservices',
    issuer: 'Online Platform',
    date: 'Oct 2025',
    status: 'Certified',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
    link: '#',
  },
  {
    id: 'data-science',
    title: 'Data Analysis with Python',
    issuer: 'Tech Bootcamp',
    date: 'Jan 2026',
    status: 'Completed',
    skills: ['Python', 'Pandas', 'Data Science'],
    link: '#',
  }
];

const Certifications = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-white/30">
      
      {/* Background Subtle Grid */}
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
            className="text-5xl md:text-7xl font-medium tracking-normal text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ledger of Learning
          </h1>
          <p className="text-slate-400 text-lg max-w-xl font-light">
            An index of professional certifications, coursework, and continuous education in software engineering.
          </p>
        </div>

        {/* Ledger Table Layout */}
        <div className="flex flex-col border-t border-white/10">
          
          {/* Table Header (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-12 gap-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 border-b border-white/10">
            <div className="col-span-2">Date</div>
            <div className="col-span-5">Course / Certification</div>
            <div className="col-span-4">Acquired Skills</div>
            <div className="col-span-1 text-right">Verify</div>
          </div>

          {/* Table Rows */}
          {coursesData.map((course) => (
            <a 
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 items-start lg:items-center -mx-4 px-4 lg:mx-0 lg:px-0"
            >
              
              {/* Date & Status (Mobile: Top / Desktop: Col 1) */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-1 mb-2 lg:mb-0">
                <span className="font-mono text-slate-400 text-sm">{course.date}</span>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-sm border border-emerald-400/20">
                  <BadgeCheck size={12} /> {course.status}
                </span>
              </div>

              {/* Course Title & Issuer (Mobile: Middle / Desktop: Col 2) */}
              <div className="lg:col-span-5 mb-4 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-medium text-slate-200 group-hover:text-white transition-colors duration-300 mb-1">
                  {course.title}
                </h2>
                <p className="text-slate-500 font-light">
                  {course.issuer}
                </p>
              </div>

              {/* Skills Tags (Mobile: Bottom / Desktop: Col 3) */}
              <div className="lg:col-span-4 flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs text-slate-400 bg-[#111111] px-3 py-1.5 border border-white/5 rounded-full group-hover:border-white/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Link (Mobile: Hidden or inline / Desktop: Col 4) */}
              <div className="hidden lg:flex lg:col-span-1 justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Certifications;