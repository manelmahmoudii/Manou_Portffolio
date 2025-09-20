import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, LucideIcon } from 'lucide-react';

interface EducationItem {
  icon: LucideIcon;
  level: string;
  institution: string;
  year: string;
  description: string;
  grade: string;
  color: string;
  flag?: string;
}

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      level: 'Master in Electronic Machines and Computers',
      institution: 'Kiev Institute of Civil Aviation Engineers',
      year: '1984-1990',
      description: 'Specialization in Electronic Machines and Computers (6 years including preparatory year)',
      grade: 'Graduated June 25, 1990',
      color: 'from-purple-500 to-blue-600',
      flag: 'ru'
    },
    {
      icon: Award,
      level: 'Baccalauréat in Math-Sciences',
      institution: 'Lycée 2 Mars 1934, La Goulette-Tunis',
      year: '1976-1983',
      description: 'Mathematics and Sciences (7 years)',
      grade: 'Session June 1983',
      color: 'from-blue-500 to-cyan-500',
      flag: 'tn'
    },
    {
      icon: BookOpen,
      level: 'Professional Training Certifications',
      institution: 'Multiple International Institutions',
      year: '1999-2022',
      description: 'CENAFFIF, AFPA France, British Council, ENA Tunis',
      grade: 'Various Certifications',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Calendar,
      level: '15+ MOOC Certifications',
      institution: 'UNESCO, Google, École Centrale Lille',
      year: '2015-2020',
      description: 'Education Statistics, Project Management, Digital Marketing, HR Management',
      grade: 'Excellent Grades (17-19/20)',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const additionalStudies = [
    'Educational Audit Training - AFPA France (2006-2007) - 11 weeks certification',
    'English Certification - British Council Tunis (2009) - Excellent 19/20',
    'Pedagogical Coaching Certification (2015)',
    'Public Policy Development - ENA Tunis (2022) - 7 months program',
    'ISO-17024 Audit Standards - UTICA (2016) - 3 weeks with German auditor',
    'Early Warning Systems Training (2022) - Government officials program'
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
          className="mr-2 rounded-sm shadow-sm"
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
          className="mr-2 rounded-sm shadow-sm"
        />
      );
    }
    return null;
  };

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced blue effects */}
      
      
      
      
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Academic Foundation</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Education & Learning
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">Academic foundation and continuous learning journey spanning decades of professional development</p>
        </div>

        {/* Enhanced Education Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
                    <div>
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
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Training Section */}
          <div className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Additional Professional Training</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {additionalStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600/30 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
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
    </section>
  );
};

export default Education;