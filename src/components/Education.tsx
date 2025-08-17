import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

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

  const educationData = [
    {
      icon: GraduationCap,
      level: 'Master in Electronic Machines and Computers',
      institution: 'Kiev Institute of Civil Aviation Engineers',
      year: '1984-1990',
      description: 'Specialization in Electronic Machines and Computers (6 years including preparatory year)',
      grade: 'Graduated June 25, 1990',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Award,
      level: 'Baccalauréat in Math-Sciences',
      institution: 'Lycée 2 Mars 1934, La Goulette-Tunis',
      year: '1976-1983',
      description: 'Mathematics and Sciences (7 years)',
      grade: 'Session June 1983',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      level: 'Professional Training Certifications',
      institution: 'Multiple International Institutions',
      year: '1999-2022',
      description: 'CENAFFIF, AFPA France, British Council, ENA Tunis',
      grade: 'Various Certifications',
      color: 'from-cyan-500 to-teal-500'
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

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.06),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move opacity-50"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-float-slow shadow-lg shadow-blue-400/30"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-slate-400/40 rounded-full animate-float-fast shadow-lg shadow-slate-400/20"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-300/70 rounded-full animate-float-medium delay-1000 shadow-lg shadow-blue-300/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Academic Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education & <span className="bg-gradient-to-r from-blue-600 to-slate-800 dark:from-blue-400 dark:to-slate-200 bg-clip-text text-transparent">Learning</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Academic Foundation & Continuous Learning</p>
        </div>

        {/* Simple Education Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${edu.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {edu.level}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-lg">{edu.institution}</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{edu.description}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">{edu.grade}</span>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-full">
                      <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Studies - Simple List */}
          <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Additional Training</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full flex-shrink-0"></div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{study}</p>
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