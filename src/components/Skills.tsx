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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
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
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-slate-800 dark:from-blue-400 dark:to-slate-200 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">Technical and Leadership Competencies</p>
        </div>

        {/* Technical Skills */}
        <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="group skill-bar bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <skill.icon className="w-6 h-6 text-white" />
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