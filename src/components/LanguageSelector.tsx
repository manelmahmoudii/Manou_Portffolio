import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const ariaLabel =
    language === 'fr' ? 'Basculer en anglais' : 'Switch to French';

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      aria-label={ariaLabel}
      title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-semibold uppercase tracking-wide">
        {language === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
};

export default LanguageSelector;
