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
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
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
            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Continuous Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-slate-800 dark:from-blue-400 dark:to-slate-200 bg-clip-text text-transparent">Training</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">15+ MOOC Certifications & Professional Training Programs</p>
        </div>

        {/* MOOC Certifications */}
        <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center space-x-2">
            <Globe className="w-6 h-6 text-blue-600" />
            <span>MOOC Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moocCertifications.map((cert, index) => (
              <div 
                key={index}
                className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{cert.title}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-2">{cert.provider}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{cert.year}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">{cert.grade}</span>
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
