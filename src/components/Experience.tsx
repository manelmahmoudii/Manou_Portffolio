import React, { useEffect, useState } from 'react';
import { Briefcase, Building, Calendar, Award, TrendingUp, Users, BookOpen, Trophy, Target, Zap, Star } from 'lucide-react';

const Experience = () => {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: '2020 - Present',
      title: 'Director General - Inspection & Educational Audit',
      company: 'MFPE (Ministry of Professional Training & Employment)',
      location: 'Tunis, Tunisia',
      type: 'Government Position',
      achievements: [
        'Managing the General Directorate of Inspection and Educational Audit',
        'Leading network of inspector-auditors across Tunisia',
        'Providing training to national and international executives in professional training audit',
        'Member of RNE (National Enterprise Registry) Board of Directors since 2019'
      ],
      technologies: ['Educational Audit', 'Ministry Leadership', 'Policy Development', 'International Training'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      period: '1999 - 2020',
      title: 'Professional Training Program Manager & Inspector',
      company: 'MFPE (Ministry of Professional Training & Employment)',
      location: 'Tunis, Tunisia',
      type: 'Government Position',
      achievements: [
        'Appointed as Professional Training Program Manager (April 2018)',
        'Chief of Internal Audit Commission for MFPE Central Services (May 2018)',
        'Promoted to General Pedagogical Inspector (2019)',
        'Conducted pedagogical inspections and evaluations of training establishments'
      ],
      technologies: ['Program Management', 'Educational Inspection', 'Audit Systems', 'Statistical Analysis'],
      color: 'from-purple-600 to-blue-600'
    },
    {
      period: '1995 - 1999',
      title: 'Industrial Engineering Consultant',
      company: 'Various Private Companies',
      location: 'Tunis, Tunisia',
      type: 'Consulting',
      achievements: [
        'Designed Centralized Technical Management (GTB/GTC) systems for 3 hotels and 1 bank',
        'Specialized in industrial automation and building management systems',
        'Worked with Swiss Staefa Control System and French Energie-Système',
        'Teaching assistant at INSAT for Instrumentation and Measurements (1997-2000)'
      ],
      technologies: ['Industrial Automation', 'Building Management', 'Control Systems', 'Technical Training'],
      color: 'from-cyan-600 to-teal-600'
    },
    {
      period: '2003 - 2008',
      title: 'Electronics Engineer & Researcher',
      company: 'Technology Research Institute',
      location: 'Tunis, Tunisia',
      type: 'Full-time',
      achievements: [
        'Conducted advanced research in control systems',
        'Developed 8 patents in electronic system design',
        'Collaborated on EU-funded research projects worth €1.2M',
        'Supervised 12 master\'s thesis projects'
      ],
      technologies: ['Research & Development', 'Control Systems', 'Electronic Design', 'Academic Supervision'],
      color: 'from-teal-600 to-green-600'
    },
    {
      period: '1998 - 2003',
      title: 'Junior Engineer & Technical Assistant',
      company: 'ElectroTech Services',
      location: 'Tunis, Tunisia',
      type: 'Part-time / Internship',
      achievements: [
        'Supported senior engineers in project development',
        'Gained hands-on experience in electronic systems',
        'Completed technical documentation for 20+ projects',
        'Received excellence award for outstanding performance'
      ],
      technologies: ['Electronic Systems', 'Technical Documentation', 'Project Support', 'Quality Assurance'],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  // Function to highlight specific words in green
  const highlightKeywords = (text: string) => {
    const keywords = ['Educational Audit', 'Ministry Leadership', 'Policy Development', 'International Training'];
    return text.split(' ').map((word, i) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      return keywords.includes(cleanWord) ? 
        <span key={i} className="text-green-600 font-semibold">{word} </span> : 
        <span key={i}>{word} </span>;
    });
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-blue-50/40 via-white to-white dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced blue effects with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50/40 dark:bg-blue-950/15 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 animate-[shift_20s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Current Position - Moved to top */}
        
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Professional Journey</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Professional Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">30+ years of leadership in engineering and education</p>
        </div>

        {/* Animated Experience Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/20 transition-all duration-300 border-l-4 border-blue-600 relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                  animation: isVisible ? 'cardEntrance 0.5s ease-out forwards' : 'none'
                }}
              >
                {/* Animated background element */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 text-slate-700 dark:text-slate-300">
                            <TrendingUp className="w-3 h-3 mt-1 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{highlightKeywords(achievement)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
                            ['Educational Audit', 'Ministry Leadership', 'Policy Development', 'International Training'].includes(tech) ?
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights - Spectacular Design */}
        <div className={`mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/30 dark:to-slate-800/30 px-6 py-3 rounded-full mb-6 border border-blue-200/50">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-bold">Career Highlights</span>
              <Star className="w-5 h-5 text-blue-500 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                Professional Achievements
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Years Experience */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-blue-200/50">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
                <div className="text-blue-600 font-semibold text-sm">Years Experience</div>
                <div className="text-blue-500 text-xs mt-1">Since 1999 - MFPE</div>
              </div>
            </div>

            {/* Formations Delivered */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-green-200/50">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-700 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-green-600 font-semibold text-sm">Formations Delivered</div>
                <div className="text-green-500 text-xs mt-1">National & International</div>
              </div>
            </div>

            {/* MOOC Certifications */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-purple-200/50">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-700 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-purple-600 font-semibold text-sm">MOOC Certifications</div>
                <div className="text-purple-500 text-xs mt-1">UNESCO, Google & More</div>
              </div>
            </div>

            {/* Leadership Positions */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-orange-200/50">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-700 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-orange-600 font-semibold text-sm">Leadership Roles</div>
                <div className="text-orange-500 text-xs mt-1">Director General & More</div>
              </div>
            </div>
          </div>

          {/* Achievement Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 rounded-2xl p-1 animate-[gradientShift_6s_ease_infinite]">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Trophy className="w-6 h-6 text-blue-600 animate-bounce" />
                <span className="text-lg font-bold text-slate-800 dark:text-white">Director General - Inspection & Educational Audit</span>
                <Star className="w-6 h-6 text-green-600 animate-pulse" />
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-sm">
                Ministry of Professional Training & Employment (MFPE) - Leading educational excellence since 2020
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Experience;