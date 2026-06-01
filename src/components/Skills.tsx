import { useEffect, useState } from 'react';
import { Code, Database, BarChart3, Cpu, Globe, Heart, Trophy, Languages, BookOpen, Edit3, FileText, Users, Brain, Target, GitBranch } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type AccentKey = 'blue' | 'purple' | 'emerald' | 'orange' | 'pink' | 'red' | 'cyan' | 'amber';

interface AccentTheme {
  iconBg: string;
  iconColor: string;
  cardIconGradient: string;
  cardIconShadow: string;
  line: string;
  hoverIconBg: string;
}

const accentMap: Record<AccentKey, AccentTheme> = {
  blue: {
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    cardIconGradient: 'from-blue-500 to-blue-700',
    cardIconShadow: 'shadow-blue-500/30',
    line: 'from-blue-200 dark:from-blue-800',
    hoverIconBg: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60',
  },
  purple: {
    iconBg: 'bg-purple-100 dark:bg-purple-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    cardIconGradient: 'from-purple-500 to-purple-700',
    cardIconShadow: 'shadow-purple-500/30',
    line: 'from-purple-200 dark:from-purple-800',
    hoverIconBg: 'group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60',
  },
  emerald: {
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    cardIconGradient: 'from-emerald-500 to-emerald-700',
    cardIconShadow: 'shadow-emerald-500/30',
    line: 'from-emerald-200 dark:from-emerald-800',
    hoverIconBg: 'group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/60',
  },
  orange: {
    iconBg: 'bg-orange-100 dark:bg-orange-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
    cardIconGradient: 'from-orange-500 to-orange-700',
    cardIconShadow: 'shadow-orange-500/30',
    line: 'from-orange-200 dark:from-orange-800',
    hoverIconBg: 'group-hover:bg-orange-100 dark:group-hover:bg-orange-900/60',
  },
  pink: {
    iconBg: 'bg-pink-100 dark:bg-pink-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
    cardIconGradient: 'from-pink-500 to-pink-700',
    cardIconShadow: 'shadow-pink-500/30',
    line: 'from-pink-200 dark:from-pink-800',
    hoverIconBg: 'group-hover:bg-pink-100 dark:group-hover:bg-pink-900/60',
  },
  red: {
    iconBg: 'bg-red-100 dark:bg-red-900/40',
    iconColor: 'text-red-600 dark:text-red-400',
    cardIconGradient: 'from-red-500 to-red-700',
    cardIconShadow: 'shadow-red-500/30',
    line: 'from-red-200 dark:from-red-800',
    hoverIconBg: 'group-hover:bg-red-100 dark:group-hover:bg-red-900/60',
  },
  cyan: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/40',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    cardIconGradient: 'from-cyan-500 to-cyan-700',
    cardIconShadow: 'shadow-cyan-500/30',
    line: 'from-cyan-200 dark:from-cyan-800',
    hoverIconBg: 'group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/60',
  },
  amber: {
    iconBg: 'bg-amber-100 dark:bg-amber-900/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    cardIconGradient: 'from-amber-500 to-amber-700',
    cardIconShadow: 'shadow-amber-500/30',
    line: 'from-amber-200 dark:from-amber-800',
    hoverIconBg: 'group-hover:bg-amber-100 dark:group-hover:bg-amber-900/60',
  },
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const isFr = language === 'fr';

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

  const technicalSkillsFr: { name: string; level: number; icon: any; proficiency: string; accent: AccentKey }[] = [
    { name: 'Gestion de Projet', level: 95, icon: BarChart3, proficiency: 'Expert', accent: 'blue' },
    { name: 'Ingénierie Électronique', level: 98, icon: Cpu, proficiency: 'Expert', accent: 'purple' },
    { name: 'Programmation Python', level: 85, icon: Code, proficiency: 'Avancé', accent: 'emerald' },
    { name: 'Gestion de Bases de Données', level: 90, icon: Database, proficiency: 'Expert', accent: 'orange' },
    { name: 'VBA & Excel Avancé', level: 92, icon: BarChart3, proficiency: 'Expert', accent: 'pink' },
    { name: 'HTML/CSS/JavaScript', level: 80, icon: Globe, proficiency: 'Avancé', accent: 'cyan' },
    { name: 'AutoCAD & Outils de Conception', level: 88, icon: Cpu, proficiency: 'Expert', accent: 'amber' },
    { name: 'Développement de Tableaux de Bord', level: 87, icon: BarChart3, proficiency: 'Avancé', accent: 'red' },
    { name: 'Analyse et Rapports de Données', level: 90, icon: BarChart3, proficiency: 'Expert', accent: 'blue' },
    { name: 'Modélisation de Processus', level: 82, icon: GitBranch, proficiency: 'Avancé', accent: 'purple' },
    { name: 'Outils d\'Aide à la Décision', level: 85, icon: Target, proficiency: 'Avancé', accent: 'emerald' }
  ];

  const technicalSkillsEn: { name: string; level: number; icon: any; proficiency: string; accent: AccentKey }[] = [
    { name: 'Project Management', level: 95, icon: BarChart3, proficiency: 'Expert', accent: 'blue' },
    { name: 'Electronic Engineering', level: 98, icon: Cpu, proficiency: 'Expert', accent: 'purple' },
    { name: 'Python Programming', level: 85, icon: Code, proficiency: 'Advanced', accent: 'emerald' },
    { name: 'Database Management', level: 90, icon: Database, proficiency: 'Expert', accent: 'orange' },
    { name: 'Advanced VBA & Excel', level: 92, icon: BarChart3, proficiency: 'Expert', accent: 'pink' },
    { name: 'HTML/CSS/JavaScript', level: 80, icon: Globe, proficiency: 'Advanced', accent: 'cyan' },
    { name: 'AutoCAD & Design Tools', level: 88, icon: Cpu, proficiency: 'Expert', accent: 'amber' },
    { name: 'Dashboard Development', level: 87, icon: BarChart3, proficiency: 'Advanced', accent: 'red' },
    { name: 'Data Analysis & Reporting', level: 90, icon: BarChart3, proficiency: 'Expert', accent: 'blue' },
    { name: 'Process Modeling', level: 82, icon: GitBranch, proficiency: 'Advanced', accent: 'purple' },
    { name: 'Decision Support Tools', level: 85, icon: Target, proficiency: 'Advanced', accent: 'emerald' },
  ];

  const technicalSkills = isFr ? technicalSkillsFr : technicalSkillsEn;
  const expertLabel = isFr ? 'Expert' : 'Expert';

  const languagesFr = [
    { name: 'Arabe', level: 100, flag: 'tn', proficiency: 'Langue maternelle' },
    { name: 'Français', level: 95, flag: 'fr', proficiency: 'Courant' },
    { name: 'Anglais', level: 92, flag: 'us', proficiency: 'Courant' },
    { name: 'Russe', level: 65, flag: 'ru', proficiency: 'Intermédiaire' }
  ];

  const languagesEn = [
    { name: 'Arabic', level: 100, flag: 'tn', proficiency: 'Native language' },
    { name: 'French', level: 95, flag: 'fr', proficiency: 'Fluent' },
    { name: 'English', level: 92, flag: 'us', proficiency: 'Fluent' },
    { name: 'Russian', level: 65, flag: 'ru', proficiency: 'Intermediate' },
  ];

  const languages = isFr ? languagesFr : languagesEn;

  // Per-item accent colors for Personal Interests
  const interestsFr: { name: string; icon: any; accent: AccentKey }[] = [
    { name: 'Stratégie d\'Échecs', icon: Trophy, accent: 'purple' },
    { name: 'Mathématiques', icon: BarChart3, accent: 'blue' },
    { name: 'Sports & Remise en forme', icon: Heart, accent: 'red' },
    { name: 'Œuvres Caritatives', icon: Heart, accent: 'pink' },
    { name: 'MOOCs en Ligne', icon: BookOpen, accent: 'emerald' },
    { name: 'Cartographie Mentale', icon: Brain, accent: 'amber' },
  ];

  const interestsEn: { name: string; icon: any; accent: AccentKey }[] = [
    { name: 'Chess Strategy', icon: Trophy, accent: 'purple' },
    { name: 'Mathematics', icon: BarChart3, accent: 'blue' },
    { name: 'Sports & Fitness', icon: Heart, accent: 'red' },
    { name: 'Charitable Works', icon: Heart, accent: 'pink' },
    { name: 'Online MOOCs', icon: BookOpen, accent: 'emerald' },
    { name: 'Mind Mapping', icon: Brain, accent: 'amber' },
  ];

  const interests = isFr ? interestsFr : interestsEn;

  const documentationSkillsFr: { name: string; icon: any; description: string; accent: AccentKey }[] = [
    { name: 'Rédaction Documentaire Multilingue', icon: Edit3, description: 'Rédaction et correction de documents en plusieurs langues', accent: 'purple' },
    { name: 'Rapports Synthétiques', icon: FileText, description: 'Élaboration de rapports synthétiques et analytiques', accent: 'amber' },
    { name: 'Analyse Statistique', icon: BarChart3, description: 'Analyse statistique avancée et interprétation des données', accent: 'red' },
    { name: 'Systèmes Éducatifs', icon: Users, description: 'Connaissance des systèmes éducatifs et politiques publiques inclusives', accent: 'pink' },
  ];

  const documentationSkillsEn: { name: string; icon: any; description: string; accent: AccentKey }[] = [
    { name: 'Multilingual Documentation Writing', icon: Edit3, description: 'Writing and proofreading documents in multiple languages', accent: 'purple' },
    { name: 'Executive Summaries & Analytical Reports', icon: FileText, description: 'Creating concise executive summaries and analytical reports', accent: 'amber' },
    { name: 'Statistical Analysis', icon: BarChart3, description: 'Advanced statistical analysis and interpretation of data', accent: 'red' },
    { name: 'Educational Systems', icon: Users, description: 'Knowledge of educational systems and inclusive public policies', accent: 'pink' },
  ];

  const documentationSkills = isFr ? documentationSkillsFr : documentationSkillsEn;

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

  const renderToolIcon = (tool: string) => {
    const iconSrc = toolIcons[tool];
    if (iconSrc.startsWith('/')) {
      return (
        <img
          src={iconSrc}
          alt={tool}
          className="w-6 h-6 object-contain"
          onError={(e) => {
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
      );
    }
    return <span className="text-base">{iconSrc}</span>;
  };

  const SubHeader = ({ icon: Icon, title }: { icon: any; title: string; accent?: AccentKey }) => (
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" strokeWidth={2} />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-200 dark:from-blue-800 to-transparent ml-1"></div>
    </div>
  );

  return (
    <section id="skills" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header — matches Experience / Projects */}
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">
              {isFr ? 'Expertise Technique' : 'Technical Expertise'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              {isFr ? 'Compétences & Expertise' : 'Skills & Expertise'}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            {isFr
              ? "Un éventail complet de compétences techniques et de leadership acquises au fil de 30+ années d'expérience."
              : 'A comprehensive set of technical and leadership competencies acquired over 30+ years of experience.'}
          </p>
        </div>

        {/* === Technical Skills — blue accent === */}
        <div className={`mb-14 max-w-6xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SubHeader icon={BarChart3} title={isFr ? 'Compétences Techniques' : 'Technical Skills'} accent="blue" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {technicalSkills.map((skill, i) => {
              const isExpert = skill.proficiency === expertLabel;
              return (
                <div
                  key={i}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 dark:from-blue-900/30 dark:to-blue-900/10 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200/60 dark:group-hover:from-blue-900/50 transition-colors duration-300">
                      <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight truncate">
                        {skill.name}
                      </h4>
                      <span
                        className={`inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isExpert
                            ? 'bg-green-500/15 text-green-700 dark:text-green-400'
                            : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex-shrink-0 tabular-nums">
                      {skill.level}
                      <span className="text-sm font-medium opacity-60">%</span>
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gray-100 dark:bg-gray-700/60 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1)',
                        transitionDelay: `${300 + i * 60}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === Documentation & Reporting — purple sub-header, per-item colors === */}
        <div className={`mb-14 max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SubHeader icon={Edit3} title={isFr ? 'Documentation & Rapports' : 'Documentation & Reporting'} accent="blue" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentationSkills.map((skill, i) => {
              const c = accentMap[skill.accent];
              return (
                <div
                  key={i}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.cardIconGradient} flex items-center justify-center flex-shrink-0 shadow-md ${c.cardIconShadow} group-hover:scale-105 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1.5 leading-snug">{skill.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === Languages — emerald accent === */}
        <div className={`mb-14 max-w-6xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SubHeader icon={Languages} title={isFr ? 'Langues' : 'Languages'} accent="blue" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((lang, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`https://flagcdn.com/w80/${lang.flag}.png`}
                    srcSet={`https://flagcdn.com/w160/${lang.flag}.png 2x`}
                    width="40"
                    alt={lang.flag}
                    className="w-10 h-7 rounded shadow-sm object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg truncate leading-tight">{lang.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate font-medium uppercase tracking-wider mt-0.5">{lang.proficiency}</p>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400 flex-shrink-0 tabular-nums">
                    {lang.level}%
                  </span>
                </div>
                <div className="w-full h-1 bg-gray-100 dark:bg-gray-700/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                    style={{
                      width: isVisible ? `${lang.level}%` : '0%',
                      transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: `${600 + i * 80}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Professional Tools — orange accent === */}
        <div className={`mb-14 max-w-6xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SubHeader icon={Cpu} title={isFr ? 'Outils & Logiciels' : 'Tools & Software'} accent="blue" />
          <div className="flex flex-wrap gap-2.5">
            {certificationTools.map((tool, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, border-color 0.3s, box-shadow 0.3s',
                  transitionDelay: `${700 + i * 30}ms`,
                }}
              >
                {renderToolIcon(tool)}
                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === Personal Interests — pink sub-header, per-item colors === */}
        <div className={`mb-12 max-w-6xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SubHeader icon={Heart} title={isFr ? 'Intérêts Personnels' : 'Personal Interests'} accent="blue" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {interests.map((interest, i) => {
              const c = accentMap[interest.accent];
              return (
                <div
                  key={i}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-3 ${c.hoverIconBg} group-hover:scale-105 transition-all duration-300`}>
                    <interest.icon className={`w-6 h-6 ${c.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white leading-tight">{interest.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* === MOOC Passion Banner === */}
        <div className={`max-w-6xl mx-auto transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 dark:border-blue-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-white dark:from-blue-900/20 dark:via-gray-800 dark:to-gray-800 pointer-events-none"></div>
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-300/30 dark:bg-blue-500/15 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

            <div className="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-r-full"></div>

            <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center gap-5">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center space-x-1.5 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full mb-2 border border-blue-200 dark:border-blue-800">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    {isFr ? 'Apprentissage continu' : 'Continuous learning'}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-1 leading-snug text-gray-900 dark:text-white">
                  {isFr ? 'Passion pour les MOOCs en ligne' : 'Passion for Online MOOCs'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isFr
                    ? "Engagement continu dans les cours en ligne pour le développement professionnel et l'acquisition de nouvelles compétences."
                    : 'Continuous engagement in online courses for professional development and the acquisition of new skills.'}
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
