// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'

// function App() {

//   return (
//     <>
//     <Routes>
//       <Route path='/' element={<Home />} />
//     </Routes>
//     </>
//   )
// }

// export default App

import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';

// A simple template for you to build upon later
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#050914] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
     {/* Background Elements */}
     <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
     
     <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
        {title}
     </h1>
     <p className="text-xl text-slate-400 mb-12 text-center max-w-lg">
        This is the dedicated space for {title.toLowerCase()}. You can build your content here!
     </p>
     
     <Link to="/" className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all duration-300 flex items-center gap-2">
        ← Back to Home
     </Link>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
      <Route path="/blogs" element={<PlaceholderPage title="Blogs" />} />
      <Route path="/skills" element={<PlaceholderPage title="Skills" />} />
      <Route path="/other" element={<PlaceholderPage title="Other" />} />
    </Routes>
  );
}

export default App;