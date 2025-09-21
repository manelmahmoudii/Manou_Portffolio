import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, LucideIcon, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface EducationItem {
  icon: LucideIcon;
  level: string;
  institution: string;
  year: string;
  description: string;
  grade: string;
  color: string;
  flag?: string;
  images?: string[]; // Added for multiple images
}

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const educationData: EducationItem[] = [
    {
      icon: GraduationCap,
      level: 'Master en Machines Électroniques et Ordinateurs',
      institution: 'Institut de l\'Aviation Civile de Kiev',
      year: '1984-1990',
      description: 'Spécialisation en Machines Électroniques et Ordinateurs (6 ans incluant l\'année préparatoire)',
      grade: 'Diplômé le 25 juin 1990',
      color: 'from-purple-500 to-blue-600',
      flag: 'ru',
      images: [ // Placeholder for Master's degree images
        '/images/master_diploma_1.jfif',
        '/images/master_diploma_2.jpg',
        '/images/equivalence.jfif',
      ]
    },
    {
      icon: Award,
      level: 'Baccalauréat Mathématiques-Sciences',
      institution: 'Lycée 2 Mars 1934, La Goulette-Tunis',
      year: '1976-1983',
      description: 'Mathématiques et Sciences (7 ans)',
      grade: 'Session de Juin 1983',
      color: 'from-blue-500 to-cyan-500',
      flag: 'tn',
      images: [ // Placeholder for Baccalauréat images
        '/images/bac_diploma_1.jpg',
        '/images/bac_diploma_2.jpg',
      ]
    },
    {
      icon: BookOpen,
      level: 'Certifications de Formation Professionnelle',
      institution: 'Multiples Institutions Internationales',
      year: '1999-2022',
      description: 'CENAFFIF, AFPA France, British Council, ENA Tunis',
      grade: 'Diverses Certifications',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Calendar,
      level: '15+ Certifications MOOC',
      institution: 'UNESCO, Google, École Centrale Lille',
      year: '2015-2020',
      description: 'Statistiques Éducatives, Gestion de Projet, Marketing Digital, Gestion des Ressources Humaines',
      grade: 'Excellentes Notes (17-19/20)',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const additionalStudies = [
    'Formation en Audit Pédagogique - AFPA France (2006-2007) - Certification de 11 semaines',
    'Certification d\'Anglais - British Council Tunis (2009) - Excellent 19/20',
    'Certification de Coaching Pédagogique (2015)',
    'Développement de Politiques Publiques - ENA Tunis (2022) - Programme de 7 mois',
    'Normes d\'Audit ISO-17024 - UTICA (2016) - 3 semaines avec un auditeur allemand',
    'Formation aux Systèmes d\'Alerte Précoce (2022) - Programme pour fonctionnaires'
  ];

  // Fonction pour obtenir le drapeau approprié - CORRIGÉ
  const getFlag = (flagCode: string) => {
    if (flagCode === 'ru') {
      return (
        <img 
          src="https://flagcdn.com/w20/ru.png" 
          srcSet="https://flagcdn.com/w40/ru.png 2x"
          width="20"
          height="10"
          alt="Russia"
          className="mr-2 rounded-sm shadow-sm dark:border-gray-500"
        />
      );
    } else if (flagCode === 'tn') {
      return (
        <img 
          src="https://flagcdn.com/w20/tn.png" 
          srcSet="https://flagcdn.com/w40/tn.png 2x"
          width="20"
          height="10"
          alt="Tunisia"
          className="mr-2 rounded-sm shadow-sm dark:border-gray-500"
        />
      );
    }
    return null;
  };

  const openImageModal = (images: string[]) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced blue effects */}
      
      
      
      
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Fondation Académique</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Éducation & Apprentissage
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">Fondation académique et parcours d'apprentissage continu couvrant des décennies de développement professionnel</p>
        </div>

        {/* Enhanced Education Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-800/20 transition-all duration-300 relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${200 + index * 150}ms`,
                  borderLeft: `4px solid ${index === 0 ? '#7c3aed' : index === 1 ? '#3b82f6' : index === 2 ? '#06b6d4' : '#0d9488'}` 
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>

                <div className="flex flex-col h-full relative z-10">
                  {/* Header with icon */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color} shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <edu.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="max-w-[70%]">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {edu.level}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1 flex items-center">
                        {edu.flag && getFlag(edu.flag)}
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                    {edu.description}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3 border-t border-gray-100 dark:border-gray-600">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{edu.grade}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  {edu.images && edu.images.length > 0 && (
                    <button
                      onClick={() => openImageModal(edu.images || [])}
                      className="absolute top-4 right-6 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center md:right-8"
                      aria-label="View diploma images"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Training Section */}
          <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Formation Professionnelle Additionnelle</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {additionalStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {study.split(' - ').map((part, i) => (
                      <span key={i} className={i === 0 ? "font-medium text-gray-900 dark:text-white" : ""}>
                        {part}
                        {i < study.split(' - ').length - 1 && ' - '}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && selectedImages.length > 0 && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-zoom-in flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Images du Diplôme</h3>
              <button
                onClick={closeImageModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto relative flex items-center justify-center p-4 h-full w-full">
              <img
                src={selectedImages[currentImageIndex]}
                alt={`Diploma image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg lg:max-w-[45%] lg:max-h-[70%]"
              />
              {selectedImages.length > 1 && (
                <>
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-4 p-3 bg-white/70 dark:bg-slate-700/70 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-600 transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 p-3 bg-white/70 dark:bg-slate-700/70 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-600 transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            {selectedImages.length > 1 && (
              <div className="p-4 border-t border-gray-200 dark:border-slate-700 text-center text-sm text-gray-600 dark:text-gray-300">
                {currentImageIndex + 1} / {selectedImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;