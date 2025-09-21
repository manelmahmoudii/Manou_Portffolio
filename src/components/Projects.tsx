import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Layers, Database, BarChart, FileText, Settings, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';

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

  const projectsData: Project[] = [
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

  const toggleProject = (index: number) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced blue effects */}
      
      
      
      
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Projets & Réalisations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Travaux Importants Réalisés
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">Présentation des projets clés et réalisations majeures au cours de ma carrière.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-500 professional-card ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleProject(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} shadow-md`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{project.category}</p>
                  </div>
                </div>
                {openProjectIndex === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              {openProjectIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
