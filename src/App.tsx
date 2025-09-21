import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects'; // Import the new Projects component
import { LanguageProvider } from './contexts/LanguageContext';

function App() {

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Enhanced Global Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="orb orb--blue w-72 h-72 rounded-full absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
          <div className="orb orb--slate w-96 h-96 rounded-full absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-float-medium"></div>
          <div className="orb orb--blue w-60 h-60 rounded-full absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 animate-float-fast"></div>
        </div>

        <div className="relative z-10">
          <Header />
          <Experience />
          <Education />
          <Projects /> {/* Add the Projects component here */}
          <Skills />
          <Certifications />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;