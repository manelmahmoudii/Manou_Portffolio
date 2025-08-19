import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500 transform hover:scale-110 group overflow-hidden"
      aria-label="Toggle language"
      title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-slate-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
      <div className="relative z-10 flex items-center space-x-2">
        <Languages className="w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
        <span className="text-sm font-medium uppercase tracking-wide">
          {language === 'fr' ? 'EN' : 'FR'}
        </span>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-slate-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
    </button>
  );
};

export default LanguageSelector;
