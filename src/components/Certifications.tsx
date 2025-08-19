import React, { useEffect, useState } from 'react';
import { Award, BookOpen, Globe, Calendar, Star, Trophy } from 'lucide-react';

const Certifications = () => {
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

    const element = document.getElementById('certifications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const moocCertifications = [
    {
      title: 'Education Statistics for Planning and Management',
      provider: 'UNESCO-IIEP',
      year: '2015',
      grade: '17.5/20',
      type: 'MOOC',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Learning Assessments',
      provider: 'UNESCO-IIEP',
      year: '2016',
      grade: '18.5/20',
      type: 'MOOC',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Project Management (GdP8 & GdP9)',
      provider: 'École Centrale Lille',
      year: '2016-2017',
      grade: '87-92/100',
      type: 'MOOC',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Human Resources Management',
      provider: 'Brentwood Open Learning College',
      year: '2017',
      grade: 'Excellent (90%+)',
      type: 'MOOC',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Digital Marketing Fundamentals',
      provider: 'Google',
      year: '2017',
      grade: 'Certified',
      type: 'MOOC',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Territorial Governance',
      provider: 'CNFPT (FUN Platform)',
      year: '2019',
      grade: '100%',
      type: 'MOOC',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const professionalTraining = [
    {
      title: 'Educational Audit in Professional Training',
      provider: 'AFPA France',
      year: '2006-2007',
      duration: '11 weeks',
      type: 'Certification',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'English Language Certification',
      provider: 'British Council Tunis',
      year: '2009',
      duration: '6 months',
      grade: 'Excellent 19/20',
      type: 'Language',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Pedagogical Coaching',
      provider: 'Professional Training Center',
      year: '2015',
      duration: '1 semester',
      type: 'Certification',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'ISO-17024 Audit Standards',
      provider: 'UTICA with German Auditor',
      year: '2016',
      duration: '3 weeks',
      type: 'International',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Public Policy Development',
      provider: 'ENA Tunis',
      year: '2022',
      duration: '7 months',
      type: 'Leadership',
      color: 'from-slate-500 to-slate-600'
    },
    {
      title: 'Early Warning Systems',
      provider: 'Government Training Program',
      year: '2022',
      duration: 'Intensive',
      type: 'Specialized',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gradient-to-tr from-white via-blue-50/25 to-blue-100/40 dark:from-gray-900 dark:via-blue-950/15 dark:to-blue-950/25 relative overflow-hidden">
      {/* Enhanced blue effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-blue-100/40 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/8 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-50/30 dark:bg-blue-950/10 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:45px_45px] opacity-35"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Continuous Learning</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Certifications & Training
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">Professional development and continuous learning</p>
        </div>

        {/* MOOC Certifications */}
        <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Online Certifications (MOOCs)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {moocCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle blue overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/25 dark:from-blue-900/0 dark:to-blue-900/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                <div className="flex items-start space-x-3 relative z-10">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">{cert.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-xs mb-2">{cert.provider}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 text-xs">{cert.year}</span>
                      <span className="text-green-600 dark:text-green-400 text-xs font-medium">{cert.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Training */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center space-x-2">
            <Award className="w-6 h-6 text-blue-600" />
            <span>Professional Training & Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalTraining.map((training, index) => (
              <div 
                key={index}
                className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${training.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{training.title}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-2">{training.provider}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{training.year}</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">{training.type}</span>
                </div>
                {training.duration && (
                  <div className="mt-2">
                    <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">{training.duration}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className={`mt-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl p-1 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-800">Continuous Learning Excellence</span>
            </div>
            <p className="text-slate-600 text-lg">
              Committed to lifelong learning with <span className="font-bold text-blue-600">15+ international certifications</span> from 
              prestigious institutions including UNESCO, Google, École Centrale Lille, and British Council.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
