import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, ChevronDown, ExternalLink } from 'lucide-react';

// Added 'image' to each course object
const coursesData = [
  {
    id: 'mobile-dev',
    title: 'Advanced Mobile Developer',
    issuer: 'University / Institute',
    date: 'Feb 2026',
    status: 'Completed',
    skills: ['React Native', 'Mobile UI/UX', 'Expo'],
    link: '#', // Replace with the real verification link
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000', // Replace with your certificate image
  },
  {
    id: 'mern-stack',
    title: 'Full-Stack Web Engineering',
    issuer: 'Tech Academy',
    date: 'Dec 2025',
    status: 'Certified',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'java-spring',
    title: 'Java Spring Boot Microservices',
    issuer: 'Online Platform',
    date: 'Oct 2025',
    status: 'Certified',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'data-science',
    title: 'Data Analysis with Python',
    issuer: 'Tech Bootcamp',
    date: 'Jan 2026',
    status: 'Completed',
    skills: ['Python', 'Pandas', 'Data Science'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000',
  }
];

const Certifications = () => {
  const navigate = useNavigate();
  // State to track which row is currently open
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    // If clicking the currently open row, close it. Otherwise, open the new one.
    setExpandedId(expandedId === id ? null : id);
  };

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
            <div className="col-span-1 text-right">View</div>
          </div>

          {/* Table Rows */}
          {coursesData.map((course) => {
            const isExpanded = expandedId === course.id;

            return (
              <div 
                key={course.id}
                className="group border-b border-white/10 transition-colors duration-300 -mx-4 px-4 lg:mx-0 lg:px-0"
              >
                {/* Clickable Header Row */}
                <div 
                  onClick={() => toggleRow(course.id)}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-8 cursor-pointer hover:bg-white/[0.02] items-start lg:items-center"
                >
                  {/* Date & Status */}
                  <div className="lg:col-span-2 flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-1 mb-2 lg:mb-0">
                    <span className="font-mono text-slate-400 text-sm">{course.date}</span>
                    <span className="flex items-center gap-1 text-xs font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-sm border border-emerald-400/20">
                      <BadgeCheck size={12} /> {course.status}
                    </span>
                  </div>

                  {/* Course Title & Issuer */}
                  <div className="lg:col-span-5 mb-4 lg:mb-0">
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-200 group-hover:text-white transition-colors duration-300 mb-1">
                      {course.title}
                    </h2>
                    <p className="text-slate-500 font-light">
                      {course.issuer}
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="lg:col-span-4 flex flex-wrap gap-2 pointer-events-none">
                    {course.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs text-slate-400 bg-[#111111] px-3 py-1.5 border border-white/5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Chevron Toggle */}
                  <div className="hidden lg:flex lg:col-span-1 justify-end items-center text-slate-500 group-hover:text-white transition-colors">
                    <ChevronDown 
                      size={24} 
                      strokeWidth={1.5} 
                      className={`transition-transform duration-500 ${isExpanded ? '-rotate-180' : 'rotate-0'}`} 
                    />
                  </div>
                </div>

                {/* Expanded Content Section (Image & Button) */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start bg-[#111111] border border-white/5 rounded-xl p-6 lg:p-8 ml-0 lg:ml-[16.666%]">
                    
                    {/* Certificate Image */}
                    <div className="w-full md:w-2/3 border border-white/10 rounded-lg overflow-hidden bg-white/5 shadow-xl">
                      <img 
                        src={course.image} 
                        alt={`${course.title} Certificate`} 
                        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </div>
                    
                    {/* Call to Action Details */}
                    <div className="w-full md:w-1/3 flex flex-col items-start pt-2">
                      <h3 className="text-lg font-medium text-white mb-2">Verification</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        This credential verifies the successful completion of the {course.title} program issued by {course.issuer}.
                      </p>
                      
                      <a 
                        href={course.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-medium text-sm rounded-lg hover:bg-slate-200 transition-colors w-full"
                      >
                        Verify Original <ExternalLink size={16} />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
};

export default Certifications;