import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Menu, X, Sun, Moon, Download, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (  
    <>
      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl py-2' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-lg py-0'}`}>
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ease-out ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer relative">
              {/* Animated background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

              <div className="transform group-hover:translate-x-1 group-hover:scale-105 transition-all duration-500 ease-out relative z-10">
                <span className="text-gray-800 dark:text-white font-bold text-xl bg-gradient-to-r from-gray-800 dark:from-white to-blue-600 bg-clip-text text-transparent animate-gradient">Mounir Mahmoudi</span>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Engineering Director</div>
              </div>

              {/* Sparkle effect */}
              <Sparkles className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <button onClick={() => scrollToSection('home')} className="nav-item text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105">
                <span className="relative z-10">{t('nav.home')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              </button>
              <button onClick={() => scrollToSection('experience')} className="nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105">
                <span className="relative z-10">{t('nav.experience')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              </button>
              <button onClick={() => scrollToSection('education')} className="nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105">
                <span className="relative z-10">{t('nav.education')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              </button>
              <button onClick={() => scrollToSection('skills')} className="nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105">
                <span className="relative z-10">{t('nav.skills')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              </button>
              <button onClick={() => scrollToSection('certifications')} className="nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105">
                <span className="relative z-10">{t('nav.certifications')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              </button>
            </div>

            {/* Language, Theme Toggle & Contact CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <LanguageSelector />
              
              <button className="relative px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl font-medium hover:from-blue-900 hover:to-indigo-900 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-800/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{t('common.contactMe')}</span>
                  <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12" />
                </span>
              </button>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 transform hover:scale-110"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'translate-y-2.5'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 ">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="mobile-nav-item text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2">
                  <span className="font-medium">Home</span>
                  <div className="text-xs text-gray-400 mt-1">Welcome & Introduction</div>
                </button>
                <button onClick={() => scrollToSection('personal-info')} className="mobile-nav-item text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2">
                  <span className="font-medium">About</span>
                  <div className="text-xs text-gray-400 mt-1">Personal Information</div>
                </button>
                <button onClick={() => scrollToSection('experience')} className="mobile-nav-item text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2">
                  <span className="font-medium">Experience</span>
                  <div className="text-xs text-gray-400 mt-1">Professional Journey</div>
                </button>
                <button onClick={() => scrollToSection('education')} className="mobile-nav-item text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2">
                  <span className="font-medium">Education</span>
                  <div className="text-xs text-gray-400 mt-1">Academic Background</div>
                </button>
                <button onClick={() => scrollToSection('skills')} className="mobile-nav-item text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2">
                  <span className="font-medium">Skills</span>
                  <div className="text-xs text-gray-400 mt-1">Technical Expertise</div>
                </button>
                <button onClick={() => scrollToSection('trainings')} className="mobile-nav-item text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2">
                  <span className="font-medium">Certifications</span>
                  <div className="text-xs text-gray-400 mt-1">Professional Development</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden pt-20">
        {/* Simple Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Greeting */}
              <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="text-blue-800 dark:text-blue-400 text-xl font-semibold bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full shadow-lg">Hi, I'm Mounir Mahmoudi</span>
              </div>

              {/* Main Title */}
              <h1 className={`text-4xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-slate-900 bg-clip-text text-transparent">
                  Senior Engineering Director
                </span>
              </h1>

              {/* Typing effect subtitle */}
              <div className={`text-xl text-slate-700 mb-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="typing-text">Inspection & Educational Audit</span>
                <span className="typing-cursor">|</span>
              </div>

              {/* Description */}
              <p className={`text-slate-700 dark:text-slate-300 mb-10 leading-relaxed text-lg transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Experienced engineering leader with <span className="text-blue-800 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg text-lg">30+ years</span> of expertise in professional training,
                educational audit, and ministry leadership. Master's degree from Kiev Institute of Civil Aviation Engineers (1990).
                Currently serving as Director General at MFPE since 2020.
              </p>

              {/* Stats */}
             
              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-800/50">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
               <a 
  href="/CV_FR_Mounir Mahmoudi_2024.pdf" 
  download 
  className="flex items-center space-x-2 px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-blue-800 hover:text-blue-800 hover:bg-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
>
  <Download className="w-5 h-5 group-hover:animate-bounce" />
  <span>Download CV</span>
</a>
              </div>

              {/* Availability Badge */}
              <div className={`inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-sm font-medium">Available for projects</span>
              </div>
            </div>

            {/* Right Image */}
            <div className={`lg:w-1/2 flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/60 to-slate-100/60 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>

                {/* Rotating ring */}
                <div className="absolute -inset-2 rounded-full border border-blue-200/60 rotate-ring"></div>

                {/* Profile image */}
                {/* Pour utiliser votre propre image, remplacez l'URL par "/images/votre-photo.jpg" */}
                <div className="relative">
                  <img
                    src="/images/manou.jpg"
                    alt="Mounir Mahmoudi"
                    className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition duration-300"
                  />

                  {/* Professional badges */}
                  
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Expert
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1 h-3 bg-blue-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;