import React, { useEffect, useState } from 'react';
import { Code, Database, BarChart3, Cpu, Globe, Heart, Trophy, Languages, BookOpen, Edit3, FileText, Users, Brain, Target, GitBranch } from 'lucide-react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'Gestion de Projet', level: 95, icon: BarChart3, proficiency: 'Expert' },
    { name: 'Ingénierie Électronique', level: 98, icon: Cpu, proficiency: 'Expert' },
    { name: 'Programmation Python', level: 85, icon: Code, proficiency: 'Avancé' },
    { name: 'Gestion de Bases de Données', level: 90, icon: Database, proficiency: 'Expert' },
    { name: 'VBA & Excel Avancé', level: 92, icon: BarChart3, proficiency: 'Expert' },
    { name: 'HTML/CSS/JavaScript', level: 80, icon: Globe, proficiency: 'Avancé' },
    { name: 'AutoCAD & Outils de Conception', level: 88, icon: Cpu, proficiency: 'Expert' },
    { name: 'Développement de Tableaux de Bord', level: 87, icon: BarChart3, proficiency: 'Avancé' },
    { name: 'Analyse et Rapports de Données', level: 90, icon: BarChart3, proficiency: 'Expert' },
    { name: 'Modélisation de Processus', level: 82, icon: GitBranch, proficiency: 'Avancé' },
    { name: 'Outils d\'Aide à la Décision', level: 85, icon: Target, proficiency: 'Avancé' }
  ];

  const languages = [
    { name: 'Arabe', level: 100, flag: 'tn', proficiency: 'Langue maternelle' },
    { name: 'Français', level: 95, flag: 'fr', proficiency: 'Courant' },
    { name: 'Anglais', level: 92, flag: 'us', proficiency: 'Courant' },
    { name: 'Russe', level: 65, flag: 'ru', proficiency: 'Intermédiaire' }
  ];

  const interests = [
    { name: 'Stratégie d\'Échecs', icon: Trophy },
    { name: 'Mathématiques', icon: BarChart3 },
    { name: 'Sports & Fitness', icon: Heart },
    { name: 'Œuvres Caritatives', icon: Heart },
    { name: 'MOOCs en Ligne', icon: BookOpen },
    { name: 'Cartographie Mentale', icon: Brain }
  ];

  const documentationSkills = [
    { name: 'Rédaction Documentaire Multilingue', icon: Edit3, description: 'Rédaction et correction de documents en plusieurs langues' },
    { name: 'Rapports Synthétiques', icon: FileText, description: 'Élaboration de rapports synthétiques et analytiques' },
    { name: 'Analyse Statistique', icon: BarChart3, description: 'Analyse statistique avancée et interprétation des données' },
    { name: 'Systèmes Éducatifs', icon: Users, description: 'Connaissance des systèmes éducatifs et politiques publiques inclusives' }
  ];

  // Interface pour typer l'objet toolIcons
  interface ToolIcons {
    [key: string]: string;
  }

  const toolIcons: ToolIcons = {
    'MS Project': '/images/MS.jpg',
    'Primavera P6': '/images/primavera.png',
    'LabVIEW': '/images/labview.svg',
    'Simulink': '/images/simulink.png',
    'Power BI': '/images/powerbi.png',
    'SAP': '/images/sap.svg',
    'Oracle': '/images/oracle.png',
    'AutoCAD Electrical': '/images/autocad.svg',
    'MS Access': '/images/access.png',
    'MS Visio': '/images/visio.png',
    'Office 365': '/images/office365.png',
    'HTML': '/images/html.png',
    'CSS': '/images/css.png',
    'Cmap-Tools': '/images/cmap.png',
    'Trello': '/images/trello.png',
    'Kanban': '/images/kanban.png',
    'Python': '/images/python.svg',
    'VBA': '/images/vba.jpg',
    'Dashboard Design': '/images/dashboard.png',
    'Newsletter Automation': '/images/newsletter.png',
    'Process Modeling': '/images/process-modeling.png',
    'Simulator Design': '/images/simulator.png'
  };

  const certificationTools = Object.keys(toolIcons);

  // Fonction pour afficher l'icône d'outil (image ou émoji de secours)
  const renderToolIcon = (tool: string) => {
    const iconSrc = toolIcons[tool];
    
    // Si c'est une URL d'image
    if (iconSrc.startsWith('/')) {
      return (
        <img 
          src={iconSrc} 
          alt={tool} 
          className="w-6 h-6 mr-2 object-contain"
          onError={(e) => {
            // En cas d'erreur de chargement, afficher un emoji de secours
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
      );
    }
    
    // Sinon, afficher l'emoji (comme solution de secours)
    return <span className="mr-2 text-lg">{iconSrc}</span>;
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced blue effects */}
      
      
      
      
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-base font-medium uppercase tracking-wide">Expertise Technique</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Compétences & Expertise
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Compétences techniques et de leadership</p>
        </div>

        {/* Technical Skills */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <BarChart3 className="mr-3 h-7 w-7 text-blue-600" />
            Compétences Techniques
          </h3>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-lg text-slate-800 dark:text-white">{skill.name}</span>
                      <div className="text-sm text-slate-500 dark:text-gray-400 font-medium">{skill.proficiency}</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1500 ease-out relative overflow-hidden"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation & Reporting Skills */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Edit3 className="mr-3 h-7 w-7 text-blue-600" />
            Expertise en Documentation & Rapports
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {documentationSkills.map((skill, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-white mb-3">{skill.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Languages className="mr-3 h-7 w-7 text-blue-600" />
            Langues
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={`https://flagcdn.com/w20/${lang.flag}.png`} 
                      srcSet={`https://flagcdn.com/w40/${lang.flag}.png 2x`}
                      width="20"
                      height="15"
                      alt={lang.flag}
                      className="mr-2 rounded-sm shadow-sm dark:border-gray-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-white mb-3">{lang.name}</h4>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-3 mx-auto" style={{maxWidth: '120px'}}>
                    <div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${lang.level}%` : '0%',
                        transitionDelay: `${800 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <span className="text-slate-600 dark:text-gray-300 text-sm font-semibold bg-slate-100 dark:bg-slate-600/30 px-3 py-1 rounded-full">{lang.proficiency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Tools */}
        <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Cpu className="mr-3 h-7 w-7 text-blue-600" />
            Outils & Logiciels Professionnels
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {certificationTools.map((tool, index) => (
              <div 
                key={index}
                className={`flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${800 + index * 30}ms` }}
              >
                {renderToolIcon(tool)}
                <span className="text-base text-slate-700 dark:text-gray-300 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className={`mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Heart className="mr-3 h-7 w-7 text-blue-600" />
            Intérêts Personnels & Loisirs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <interest.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-base text-slate-800 dark:text-white">{interest.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOOC Passion */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 max-w-5xl mx-auto group hover:shadow-lg transition-all duration-300">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Passion pour les MOOCs en ligne</h3>
                <p className="text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  Engagement continu dans les cours en ligne pour le développement professionnel et l'acquisition de nouvelles compétences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;