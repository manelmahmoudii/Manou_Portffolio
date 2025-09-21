import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions
const translations = {
  fr: {
    // Header
    'header.greeting': 'Salut, je suis Mounir Mahmoudi',
    'header.title': 'Directeur Général d\'Ingénierie',
    'header.subtitle': 'Inspection & Audit Pédagogique',
    'header.viewWork': 'Voir Mon Travail',
    'header.downloadCV': 'Télécharger CV',
    'header.scrollExplore': 'Défiler pour explorer',

    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.certifications': 'Certifications',

    // Experience
    'experience.badge': 'Parcours Professionnel',
    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': '30+ années de leadership en ingénierie et éducation',

    // Education
    'education.badge': 'Fondation Académique',
    'education.title': 'Formation & Apprentissage',
    'education.subtitle': 'Fondation académique et apprentissage continu',
    'education.additionalTraining': 'Formations Supplémentaires',

    // Skills
    'skills.badge': 'Expertise Technique',
    'skills.title': 'Compétences & Expertise',
    'skills.subtitle': 'Compétences techniques et de leadership',
    'skills.technicalSkills': 'Compétences Techniques',
    'skills.professionalLevel': 'Niveau Professionnel',
    'skills.proficiency': 'Maîtrise',

    // Certifications
    'certifications.badge': 'Apprentissage Continu',
    'certifications.title': 'Certifications & Formation',
    'certifications.subtitle': 'Développement professionnel et apprentissage continu',
    'certifications.professionalCertificatesTitle': 'Certificats Professionnels',
    'certifications.professionalCertificatesDescription': 'Découvrez mes certifications professionnelles obtenues auprès d\'organismes de formation reconnus.',
    'certifications.moocTitle': 'Formations à distance / MOOC',
    'certifications.moocs': 'Certifications en Ligne (MOOCs)',

    // Common
    'common.years': 'ans',
    'common.experience': 'expérience',
  },
  en: {
    // Header
    'header.greeting': 'Hi, I\'m Mounir Mahmoudi',
    'header.title': 'Senior Engineering Director',
    'header.subtitle': 'Inspection & Educational Audit',
    'header.viewWork': 'View My Work',
    'header.downloadCV': 'Download CV',
    'header.scrollExplore': 'Scroll to explore',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',

    // Experience
    'experience.badge': 'Professional Journey',
    'experience.title': 'Professional Experience',
    'experience.subtitle': '30+ years of leadership in engineering and education',

    // Education
    'education.badge': 'Academic Foundation',
    'education.title': 'Education & Learning',
    'education.subtitle': 'Academic foundation and continuous learning',
    'education.additionalTraining': 'Additional Training',

    // Skills
    'skills.badge': 'Technical Expertise',
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technical and leadership competencies',
    'skills.technicalSkills': 'Technical Skills',
    'skills.professionalLevel': 'Professional Level',
    'skills.proficiency': 'Proficiency',

    // Certifications
    'certifications.badge': 'Continuous Learning',
    'certifications.title': 'Certifications & Training',
    'certifications.subtitle': 'Professional development and continuous learning',
    'certifications.professionalCertificatesTitle': 'Professional Certificates',
    'certifications.professionalCertificatesDescription': 'Explore my professional certifications obtained from recognized training organizations.',
    'certifications.moocTitle': 'Online Courses / MOOCs',
    'certifications.moocs': 'Online Certifications (MOOCs)',

    // Common
    'common.years': 'years',
    'common.experience': 'experience',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
