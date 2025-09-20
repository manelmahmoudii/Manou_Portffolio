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