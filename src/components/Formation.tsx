import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, LucideIcon, Building, Star, Eye } from 'lucide-react';

interface EducationItem {
  icon: LucideIcon;
  level: string;
  institution: string;
  year: string;
  description: string;
  grade: string;
  color: string;
}

const Formation = () => {
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
      level: 'Planification de l\'éducation',
      institution: 'IIPE-UNESCO',
      year: '2023',
      description: 'Formation avancée en planification et gestion des systèmes éducatifs au niveau international',
      grade: '95%',
      color: 'Education'
    },
    {
      icon: Award,
      level: 'Digital Marketing Fundamentals',
      institution: 'Google Digital Active',
      year: '2022',
      description: 'Certification Google en marketing digital et stratégies numériques',
      grade: '92%',
      color: 'Marketing'
    },
    {
      icon: BookOpen,
      level: 'Microsoft Office Specialist',
      institution: 'Microsoft',
      year: '2022',
      description: 'Certification avancée sur la suite Microsoft Office et outils de productivité',
      grade: '88%',
      color: 'Bureautique'
    },
    {
      icon: Calendar,
      level: 'Python Programming',
      institution: 'SOLOLEARN',
      year: '2021',
      description: 'Formation complète en programmation Python et développement d\'applications',
      grade: '90%',
      color: 'Programmation'
    },
    {
      icon: GraduationCap,
      level: 'Gestion de projet',
      institution: 'FUN-MOOC',
      year: '2021',
      description: 'Méthodologies de gestion de projet et outils collaboratifs',
      grade: '87%',
      color: 'Management'
    },
    {
      icon: Award,
      level: 'English for Professional Development',
      institution: 'British Council',
      year: '2020',
      description: 'Anglais professionnel et communication internationale certifiée',
      grade: '91%',
      color: 'Langues'
    },
    {
      icon: BookOpen,
      level: 'Data Analysis with Excel',
      institution: 'UNOW',
      year: '2020',
      description: 'Analyse de données avancée avec Excel et VBA',
      grade: '89%',
      color: 'Analyse'
    },
    {
      icon: Calendar,
      level: 'Intelligence Artificielle',
      institution: 'FUN-MOOC',
      year: '2019',
      description: 'Introduction à l\'IA et applications pédagogiques',
      grade: '93%',
      color: 'IA'
    }
  ];


  return (
    <section id="education" className="py-20 bg-white dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-blue-600" />
            Formations à distance / MOOC
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2 leading-tight">{edu.level}</h4>
                    <div className="flex items-center text-blue-600 text-sm mb-2">
                      <Building className="w-4 h-4 mr-1" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    edu.color === 'Education' ? 'bg-blue-500' :
                    edu.color === 'Marketing' ? 'bg-green-500' :
                    edu.color === 'Bureautique' ? 'bg-purple-500' :
                    edu.color === 'Programmation' ? 'bg-orange-500' :
                    edu.color === 'Management' ? 'bg-red-500' :
                    edu.color === 'Langues' ? 'bg-yellow-500' :
                    edu.color === 'Analyse' ? 'bg-blue-600' :
                    edu.color === 'IA' ? 'bg-purple-600' :
                    'bg-blue-500'
                  }`}>
                    {edu.color}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  {edu.description}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center text-black font-bold">
                    <Star className="w-4 h-4 mr-1 fill-yellow-500 text-yellow-500" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium text-sm transition-colors duration-300 flex items-center justify-center border"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Voir Certificat
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formation;