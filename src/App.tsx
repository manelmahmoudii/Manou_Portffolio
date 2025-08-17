import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Trainings from './components/Trainings';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50/30 dark:bg-blue-900/20 rounded-full opacity-30 transform animate-pulse"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute top-1/2 -left-20 w-60 h-60 bg-slate-50/20 dark:bg-slate-800/20 rounded-full opacity-20 transform animate-pulse"
          style={{ transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.1}px)`, animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-50/20 dark:bg-purple-900/10 rounded-full opacity-15 transform animate-pulse"
          style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px)`, animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Trainings />
        <Footer />
      </div>
    </div>
  );
}

export default App;