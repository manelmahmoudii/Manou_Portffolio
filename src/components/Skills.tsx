import React, { useEffect, useState } from 'react';
import { Code, Database, BarChart3, Cpu, Globe, Heart, Trophy, Languages } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars progressively
          setTimeout(() => {
            const skills = document.querySelectorAll('.skill-bar');
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'Project Management', level: 95, color: 'from-blue-500 to-blue-600', icon: BarChart3 },
    { name: 'Electronics Engineering', level: 98, color: 'from-purple-500 to-purple-600', icon: Cpu },
    { name: 'Python Programming', level: 85, color: 'from-green-500 to-green-600', icon: Code },
    { name: 'Database Management', level: 90, color: 'from-orange-500 to-orange-600', icon: Database },
    { name: 'VBA & Excel Advanced', level: 92, color: 'from-teal-500 to-teal-600', icon: BarChart3 },
    { name: 'HTML/CSS/JavaScript', level: 80, color: 'from-pink-500 to-pink-600', icon: Globe },
    { name: 'AutoCAD & Design Tools', level: 88, color: 'from-indigo-500 to-indigo-600', icon: Cpu },
    { name: 'Dashboard Development', level: 87, color: 'from-cyan-500 to-cyan-600', icon: BarChart3 }
  ];

  const languages = [
    { name: 'Arabic', level: 100, flag: '🇹🇳' },
    { name: 'French', level: 95, flag: '🇫🇷' },
    { name: 'English', level: 92, flag: '🇺🇸' },
    { name: 'German', level: 70, flag: '🇩🇪' }
  ];

  const interests = [
    { name: 'Chess Strategy', icon: Trophy, color: 'from-slate-500 to-slate-600' },
    { name: 'Mathematics', icon: BarChart3, color: 'from-blue-500 to-indigo-600' },
    { name: 'Sports & Fitness', icon: Heart, color: 'from-red-500 to-pink-600' },
    { name: 'Charity Work', icon: Heart, color: 'from-green-500 to-teal-600' }
  ];

  const certificationTools = [
    'MS Project', 'Primavera P6', 'MATLAB', 'LabVIEW', 'Simulink',
    'Power BI', 'Tableau', 'SAP', 'Oracle', 'AutoCAD Electrical'
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-bl from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-800 dark:via-blue-950/20 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced blue effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-40 bg-gradient-to-r from-blue-100/40 via-blue-50/30 to-transparent dark:from-blue-900/15 dark:via-blue-950/10 dark:to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-100/25 dark:bg-blue-900/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-50/35 dark:bg-blue-950/12 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Technical Expertise</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Skills & Expertise
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">Technical and leadership competencies</p>
        </div>

        {/* Technical Skills */}
        <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group">
                {/* Subtle blue overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/20 dark:from-blue-900/0 dark:to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Professional Level</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Proficiency</div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out relative overflow-hidden`}
                        style={{
                          width: animatedSkills[index] ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                      </div>
                    </div>

                    {/* Skill level indicator */}
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
            <Languages className="w-8 h-8 mr-3 text-blue-600" />
            Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <h4 className="font-bold text-slate-800 mb-3">{lang.name}</h4>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                      style={{ 
                        width: animatedSkills[technicalSkills.length + index] ? `${lang.level}%` : '0%',
                        transitionDelay: `${800 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <span className="text-slate-600 text-sm font-semibold">{lang.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Tools */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Professional Tools & Software</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certificationTools.map((tool, index) => (
              <div 
                key={index}
                className={`px-6 py-3 bg-gradient-to-r from-slate-100 to-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-slate-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 50}ms` }}
              >
                <span className="text-slate-700 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Personal Interests & Hobbies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${interest.color} mb-4`}>
                    <interest.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800">{interest.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;