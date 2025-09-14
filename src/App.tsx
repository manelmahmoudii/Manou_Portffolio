import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects'; // Import the new Projects component
import Contact from './components/Contact'; // Import the new Contact component
import { LanguageProvider } from './contexts/LanguageContext';
import Formation from './components/Formation';

function App() {

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-50 dark:from-gray-900 dark:via-blue-950/5 dark:to-gray-900">
        {/* Enhanced Global Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
          {/* Floating blue orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/10 dark:bg-blue-900/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-50/15 dark:bg-blue-950/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10">
          <Header />
          <Experience />
          <Education />
          <Projects /> {/* Add the Projects component here */}
          <Skills />
          <Formation />
          <Certifications />
          <Contact /> {/* Add the Contact component here */}
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;