import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Layers, Database, BarChart, FileText, Settings, Lightbulb, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  color: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projectsDataFr: Project[] = [
    {
      title: 'Systèmes de Gestion Technique du Bâtiment (GTB/GTC)',
      category: 'Automatisation',
      description: 'Conception et mise en œuvre de systèmes GTB/GTC pour l\'optimisation énergétique des bâtiments.',
      details: [
        "Réduction significative de la consommation énergétique par l\'automatisation.",
        'Développement de programmes informatiques de commande et de régulation.',
        'Formation et assistance technique des équipes d\'exploitation.'
      ],
      icon: Settings,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Rédaction de Cahiers de Charges Fonctionnels et Techniques',
      category: 'Gestion de Projet',
      description: 'Élaboration de cahiers de charges détaillés pour divers projets, assurant une spécification claire des besoins.',
      details: [
        'Analyse approfondie des besoins utilisateurs et fonctionnels.',
        'Définition des exigences techniques et opérationnelles.',
        'Standardisation des documents pour des projets nationaux et inter-ministériels.'
      ],
      icon: FileText,
      color: 'from-emerald-600 to-green-600'
    },
    {
      title: 'Conception et Optimisation de Bases de Données',
      category: 'Informatique',
      description: 'Création et gestion de bases de données relationnelles pour le suivi et l\'analyse de données complexes.',
      details: [
        'Modélisation des données et implémentation de schémas optimisés.',
        'Développement de requêtes complexes et d\'outils de reporting.',
        'Sécurisation et maintenance des systèmes de bases de données.'
      ],
      icon: Database,
      color: 'from-purple-600 to-fuchsia-600'
    },
    {
      title: 'Développement de Tableaux de Bord Interactifs (Dashboards)',
      category: 'Analyse de Données',
      description: 'Création de tableaux de bord dynamiques pour la visualisation et l\'aide à la décision stratégique.',
      details: [
        'Intégration de données multi-sources (Excel, Power BI, Oracle).',
        'Conception d\'interfaces utilisateur intuitives et performantes.',
        'Formation des utilisateurs à l\'exploitation des tableaux de bord.'
      ],
      icon: BarChart,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Études et Audits Nationaux et Sectoriels',
      category: 'Recherche & Analyse',
      description: 'Réalisation d\'études approfondies et d\'audits stratégiques pour les secteurs public et privé.',
      details: [
        'Collecte et analyse de données macroéconomiques et sectorielles.',
        'Formulation de recommandations stratégiques pour l\'amélioration des politiques.',
        'Publication de rapports d\'audit et de faisabilité.'
      ],
      icon: TrendingUp,
      color: 'from-red-600 to-rose-600'
    },
    {
      title: 'Projets Inter-Ministériels et Coopération Internationale',
      category: 'Coordination',
      description: 'Gestion et coordination de projets complexes impliquant plusieurs ministères et partenaires internationaux.',
      details: [
        'Élaboration de partenariats stratégiques et de conventions.',
        'Suivi de l\'exécution des projets et gestion des équipes pluridisciplinaires.',
        'Représentation auprès des instances nationales et internationales.'
      ],
      icon: Layers,
      color: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Élaboration de Business Plans et Stratégies Opérationnelles',
      category: 'Stratégie',
      description: 'Développement de business plans robustes et de stratégies opérationnelles pour la croissance.',
      details: [
        'Analyse de marché et identification des opportunités.',
        'Projection financière et analyse de rentabilité.',
        'Mise en place de plans d\'action et d\'indicateurs de performance.'
      ],
      icon: Lightbulb,
      color: 'from-pink-600 to-rose-600'
    },
  ];

  const projectsDataEn: Project[] = [
    {
      title: 'Building Technical Management Systems (GTB/GTC)',
      category: 'Automation',
      description: 'Design and implementation of GTB/GTC systems for energy optimization in buildings.',
      details: [
        "Significant reduction of energy consumption through automation.",
        'Development of control and regulation computer programs.',
        'Training and technical support for operations teams.',
      ],
      icon: Settings,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Drafting Functional and Technical Specifications',
      category: 'Project Management',
      description:
        'Developing detailed specifications for various projects, ensuring a clear definition of needs.',
      details: [
        'In-depth analysis of user and functional requirements.',
        'Definition of technical and operational constraints.',
        'Standardization of documents for national and inter-ministerial projects.',
      ],
      icon: FileText,
      color: 'from-emerald-600 to-green-600',
    },
    {
      title: 'Design and Optimization of Databases',
      category: 'IT',
      description: 'Creation and management of relational databases for tracking and analyzing complex data.',
      details: [
        'Data modeling and implementation of optimized schemas.',
        'Development of complex queries and reporting tools.',
        'Securing and maintaining database systems.',
      ],
      icon: Database,
      color: 'from-purple-600 to-fuchsia-600',
    },
    {
      title: 'Development of Interactive Dashboards',
      category: 'Data Analytics',
      description: 'Creating dynamic dashboards for visualizing data and supporting strategic decision-making.',
      details: [
        'Integration of multi-source data (Excel, Power BI, Oracle).',
        'Designing intuitive and high-performance user interfaces.',
        'Training users to operate dashboards.',
      ],
      icon: BarChart,
      color: 'from-yellow-600 to-orange-600',
    },
    {
      title: 'National and Sectorial Studies & Audits',
      category: 'Research & Analysis',
      description: 'Carrying out in-depth studies and strategic audits for public and private sectors.',
      details: [
        'Collection and analysis of macroeconomic and sector data.',
        'Formulation of strategic recommendations to improve policies.',
        'Publication of audit and feasibility reports.',
      ],
      icon: TrendingUp,
      color: 'from-red-600 to-rose-600',
    },
    {
      title: 'Inter-ministerial Projects and International Cooperation',
      category: 'Coordination',
      description: 'Management and coordination of complex projects involving multiple ministries and international partners.',
      details: [
        'Development of strategic partnerships and agreements.',
        'Monitoring project execution and managing multidisciplinary teams.',
        'Representing the initiative before national and international bodies.',
      ],
      icon: Layers,
      color: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Development of Business Plans and Operational Strategies',
      category: 'Strategy',
      description: 'Developing robust business plans and operational strategies for growth.',
      details: [
        'Market analysis and identification of opportunities.',
        'Financial projections and profitability analysis.',
        'Implementation of action plans and performance indicators.',
      ],
      icon: Lightbulb,
      color: 'from-pink-600 to-rose-600',
    },
  ];

  const projectsData = isFr ? projectsDataFr : projectsDataEn;

  const toggleProject = (index: number) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced blue effects */}
      
      
      
      
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">
              {isFr ? 'Projets & Réalisations' : 'Projects & Achievements'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              {isFr ? 'Travaux Importants Réalisés' : 'Significant Work Completed'}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            {isFr
              ? 'Présentation des projets clés et réalisations majeures au cours de ma carrière.'
              : 'Presentation of key projects and major accomplishments throughout my career.'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {projectsData.map((project, index) => {
            const isOpen = openProjectIndex === index;
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Left side color accent — vertical bar */}
                <div className={`absolute left-0 top-6 w-1 h-16 bg-gradient-to-b ${project.color} rounded-r-full`}></div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + category */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900/50 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description (always visible) */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expandable details */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-3 mt-1 border-t border-gray-100 dark:border-gray-700">
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Toggle button — sits at the bottom of the card */}
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => toggleProject(index)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none"
                    >
                      <span>{isOpen ? (isFr ? 'Réduire' : 'Show less') : (isFr ? 'Voir les détails' : 'See details')}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
