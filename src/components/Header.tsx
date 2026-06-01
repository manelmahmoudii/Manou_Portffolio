import { useEffect, useState } from 'react';
import { Sun, Moon, Download, Linkedin, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // New state for active section

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', offset: 0 },
        { id: 'personal-info', offset: 0 }, // Added personal-info section
        { id: 'experience', offset: 0 },
        { id: 'education', offset: 0 },
        { id: 'skills', offset: 0 },
        { id: 'certifications', offset: 0 },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted condition to trigger section change slightly before section reaches top
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
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
      setActiveSection(sectionId); // Set active section
    }
  };

  return (
    <>
      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-md py-2' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm py-0'}`}>
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ease-out ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center group focus-visible:outline-none min-w-0"
              aria-label="Home"
            >
              <div className="text-left min-w-0">
                <span className="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-white leading-tight whitespace-nowrap">Mounir Mahmoudi</span>
                <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {isFr ? 'Directeur Général' : 'Senior Engineering Director'}
                </div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <button onClick={() => scrollToSection('home')} className={`nav-item text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl focus-visible:outline-none ${activeSection === 'home' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">{t('nav.home')}</span>

              </button>
             
              <button onClick={() => scrollToSection('experience')} className={`nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl focus-visible:outline-none ${activeSection === 'experience' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">{t('nav.experience')}</span>

              </button>
              <button onClick={() => scrollToSection('education')} className={`nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl focus-visible:outline-none ${activeSection === 'education' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">{t('nav.education')}</span>

              </button>
              <button onClick={() => scrollToSection('skills')} className={`nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl focus-visible:outline-none ${activeSection === 'skills' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">{t('nav.skills')}</span>

              </button>
              <button onClick={() => scrollToSection('certifications')} className={`nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 font-medium relative group px-4 py-2 rounded-xl focus-visible:outline-none ${activeSection === 'certifications' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">{t('nav.certifications')}</span>

              </button>
            </div>

            {/* Language, Theme Toggle & Contact CTA */}
            <div className="hidden md:flex items-center space-x-1">
              <LanguageSelector />

              {/* Theme Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus-visible:outline-none"
                aria-label={isFr ? 'Basculer le mode sombre' : 'Toggle dark mode'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/mounir-mahmoudi-6b992119"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus-visible:outline-none"
                aria-label={isFr ? 'Profil LinkedIn' : 'LinkedIn Profile'}
              >
                <Linkedin className="w-5 h-5" />
              </a>


            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-1.5">
              {/* Language Selector — always visible on mobile */}
              <LanguageSelector />

              {/* Theme Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label={isFr ? 'Basculer le mode sombre' : 'Toggle dark mode'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute left-0 block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                  <span className={`absolute left-0 top-2 block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute left-0 block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 border-t border-gray-200 dark:border-gray-700' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className={`mobile-nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2 focus-visible:outline-none ${activeSection === 'home' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                  <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full">{t('nav.home')}</span>
                  <div className="text-xs text-gray-400 mt-1">{isFr ? 'Bienvenue & Introduction' : 'Welcome & Introduction'}</div>
                </button>
               
                <button onClick={() => scrollToSection('experience')} className={`mobile-nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2 focus-visible:outline-none ${activeSection === 'experience' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                  <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full">{t('nav.experience')}</span>
                  <div className="text-xs text-gray-400 mt-1">{isFr ? 'Parcours Professionnel' : 'Professional Journey'}</div>
                </button>
                <button onClick={() => scrollToSection('education')} className={`mobile-nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2 focus-visible:outline-none ${activeSection === 'education' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                  <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full">{t('nav.education')}</span>
                  <div className="text-xs text-gray-400 mt-1">{isFr ? 'Formation académique' : 'Academic Background'}</div>
                </button>
                <button onClick={() => scrollToSection('skills')} className={`mobile-nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2 focus-visible:outline-none ${activeSection === 'skills' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                  <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full">{t('nav.skills')}</span>
                  <div className="text-xs text-gray-400 mt-1">{isFr ? 'Expertise technique' : 'Technical Expertise'}</div>
                </button>
                <button onClick={() => scrollToSection('certifications')} className={`mobile-nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 text-left py-4 px-6 rounded-xl transform hover:translate-x-2 focus-visible:outline-none ${activeSection === 'certifications' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}`}>
                  <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full">{t('nav.certifications')}</span>
                  <div className="text-xs text-gray-400 mt-1">{isFr ? 'Développement professionnel' : 'Professional Development'}</div>
                </button>

                {/* LinkedIn in Mobile Menu */}
                <a
                  href="https://www.linkedin.com/in/mounir-mahmoudi-6b992119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-item text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-left py-4 px-6 rounded-xl flex items-center space-x-2 focus-visible:outline-none mt-2 border-t border-gray-200 dark:border-gray-700 pt-4"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">{isFr ? 'Profil LinkedIn' : 'LinkedIn Profile'}</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden pt-28 ">
        {/* Clean background — grid + 2 floating glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 dark:opacity-20"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/15 rounded-full blur-3xl animate-float-glow-a"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-300/15 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-glow-b"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Eyebrow greeting */}
              <div className={`inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full mb-5 sm:mb-6 border border-blue-200/60 dark:border-blue-800/60 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                  {t('header.greeting')}
                </span>
              </div>

              {/* Main Title — solid color, responsive */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight text-slate-900 dark:text-white transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {t('header.title')}
              </h1>

              {/* Subtitle with typing cursor */}
              <div className={`text-base sm:text-lg md:text-xl font-medium text-blue-700 dark:text-blue-400 mb-5 sm:mb-6 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span>{t('header.subtitle')}</span>
                <span className="typing-cursor ml-0.5">|</span>
              </div>

              {/* Description */}
              <p className={`text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-7 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {isFr ? (
                  <>
                    Ingénieur expérimenté avec{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">+ de 30 ans</span>{' '}
                    d'expertise dans la formation professionnelle, l'audit éducatif et la gestion ministérielle.
                    Titulaire d'un master de l'Institut de génie civil de l'aviation de Kiev (1990).
                    Actuellement Directeur Général au MFPE depuis 2020.
                  </>
                ) : (
                  <>
                    Experienced engineering leader with{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">30+ years</span>{' '}
                    of expertise in professional training, educational audit, and ministry leadership.
                    Master's degree from the Kiev Institute of Civil Aviation Engineering (1990).
                    Currently Director General at MFPE since 2020.
                  </>
                )}
              </p>

              {/* CTA Buttons — full-width on mobile, inline from sm+ */}
              <div className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 sm:mb-7 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300">
                  {t('header.viewWork')}
                </button>
                <a
                  href="/CV_FR_Mounir Mahmoudi_2024.pdf"
                  download
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span>{t('header.downloadCV')}</span>
                </a>
              </div>

              {/* Availability Badge */}
              <div className={`inline-flex items-center space-x-2 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {isFr ? 'Disponible pour des projets' : 'Available for projects'}
                </span>
              </div>

              {/* Scroll indicator for mobile */}
              <div className="flex justify-center mt-8 md:hidden">
                <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full p-1 animate-bounce">
                  <div className="w-1 h-3 bg-blue-500 rounded-full mx-auto animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={`flex justify-center lg:justify-end order-1 lg:order-2 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="relative group cursor-pointer">
                {/* Soft glow — stronger on hover */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/15 to-blue-600/15 group-hover:from-blue-400/35 group-hover:to-blue-600/35 dark:from-blue-500/20 dark:to-blue-700/20 dark:group-hover:from-blue-500/45 dark:group-hover:to-blue-700/45 rounded-full blur-3xl transition-all duration-500 ease-out"></div>

                {/* Thin animated border ring — 4-color alternating */}
                <div className="absolute -inset-2 rounded-full border-2 border-transparent border-t-blue-400 border-r-blue-600 border-b-blue-400 border-l-blue-600 animate-spin-very-slow"></div>

                {/* Hover scale wrapper — independent transform layer */}
                <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  {/* Inner breathe wrapper — composes with hover scale */}
                  <div className="relative animate-breathe">
                    <img
                      src="/images/manouu.jpg"
                      alt="Mounir Mahmoudi"
                      className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                    />
                  </div>

                  {/* Sober experience chip — floats at bottom of photo */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1.5 transition-all duration-500 ease-out group-hover:shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-700">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {isFr ? "30+ ans d'expertise" : '30+ years experience'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator for desktop */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full p-1">
            <div className="w-1 h-3 bg-blue-500 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Header;
