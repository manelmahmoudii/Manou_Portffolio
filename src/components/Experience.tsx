import { useEffect, useState } from 'react';
import { Briefcase, Building, Calendar, Award, TrendingUp, Users, BookOpen, Trophy, Target, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
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
      { threshold: 0.05 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiencesFr = [
    {
      period: '2020 - Présent',
      title: 'Directeur général de l\'inspection et de l\'audit pédagogique',
      company: 'MFPE (Ministère de la Formation Professionnelle et de l\'Emploi)',
      companyLink: 'https://www.emploi.gov.tn/fr',
      location: 'Tunis, Tunisie',
      type: 'Poste gouvernemental',
      achievements: [
        'Gestion de la Direction Générale de l\'Inspection et de l\'Audit Pédagogique',
        'Encadrement du réseau des inspecteurs-auditeurs à travers la Tunisie',
        'Formation des cadres nationaux et internationaux en audit de la formation professionnelle',
        'Membre du conseil d\'administration du RNE (Registre National des Entreprises) depuis 2019'
      ],
      technologies: ['Audit pédagogique', 'Leadership ministériel', 'Développement de politiques', 'Formation internationale'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      period: 'Avril 2018 - 2020',
      title: 'Responsable du programme de la formation professionnelle',
      company: 'MFPE (Ministère de la Formation Professionnelle et de l\'Emploi)',
      companyLink: 'https://www.emploi.gov.tn/fr',
      location: 'Tunis, Tunisie',
      type: 'Poste gouvernemental',
      achievements: [
        'Nommé par décision ministérielle "Responsable du programme de la formation professionnelle"',
        'Chef de la commission d\'audit interne des services centraux du ministère MFPE (depuis Mai 2018)',
        'Promu au grade d\'Inspecteur pédagogique général (2019)',
        'Réalisation d\'inspections pédagogiques et d\'évaluations des établissements de formation'
      ],
      technologies: ['Gestion de programme', 'Inspection pédagogique', 'Systèmes d\'audit', 'Analyse statistique'],
      color: 'from-purple-600 to-blue-600'
    },
    {
      period: 'Janvier 1999 - 2018',
      title: 'Ingénieur et cadre au MFPE',
      company: 'MFPE (Ministère de la Formation Professionnelle et de l\'Emploi)',
      companyLink: 'https://www.emploi.gov.tn/fr',
      location: 'Tunis, Tunisie',
      type: 'Poste gouvernemental',
      achievements: [
        'Début de carrière au ministère de la Formation Professionnelle et de l\'Emploi',
        'Evolution progressive vers des postes à responsabilités',
        'Participation à des projets de réforme de la formation professionnelle',
        'Contributions au développement des programmes de formation'
      ],
      technologies: ['Ingénierie de formation', 'Management public', 'Développement de programmes', 'Gestion de projet'],
      color: 'from-cyan-600 to-teal-600'
    },
    {
      period: 'Juin 1997 - Septembre 1998',
      title: 'Ingénieur chargé d\'affaires en GTB/GTC',
      company: 'Tunisie-Energie-Services',
      companyLink: 'https://www.linkedin.com/company/tunisie-energie-services', // Lien à remplacer si disponible
      location: 'Tunis, Tunisie',
      type: 'Poste privé',
      achievements: [
        'Gestion Technique du Bâtiment (GTB/GTC) avec matériel électronique de la société française Energie-Système',
        'Réduction de la consommation énergétique des bâtiments',
        'Conception de programmes informatiques de commande et régulation',
        'Formation et assistance du personnel client'
      ],
      technologies: ['Gestion technique bâtiment', 'Efficacité énergétique', 'Automatismes', 'Systèmes de régulation'],
      color: 'from-teal-600 to-green-600'
    },
    {
      period: '1997-2000 (Enseignement)',
      title: 'Enseignant vacataire en Instrumentation et Mesures',
      company: 'INSAT (Institut National des Sciences Appliquées et de Technologie)',
      companyLink: 'https://insat.rnu.tn',
      location: 'Tunis, Tunisie',
      type: 'Enseignement',
      achievements: [
        'Enseignement des travaux pratiques d\'Instrumentation et Mesures',
        'Encadrement des étudiants de 1ère et 2ème années',
        'Autorisation du Ministre de la formation professionnelle et de l\'emploi'
      ],
      technologies: ['Instrumentation', 'Mesures physiques', 'Pédagogie universitaire', 'Encadrement étudiant'],
      color: 'from-green-600 to-emerald-600'
    },
    {
      period: 'Juin 1995 - Août 1996',
      title: 'Ingénieur chargé de projets en informatique industrielle',
      company: 'Société Tunisienne d\'Electricité et de Régulation',
      companyLink: '#', // Lien à remplacer si disponible
      location: 'Tunis, Tunisie',
      type: 'Poste privé',
      achievements: [
        'Gestion Technique Centralisée (GTC) pour contrôle et commande d\'équipements de bâtiment',
        'Utilisation de matériel Staefa Control System (Suisse)',
        'Conception de programmes informatiques de commande et régulation',
        'Réalisation et chiffrage des armoires électriques selon les normes'
      ],
      technologies: ['Informatique industrielle', 'Gestion technique centralisée', 'Automatismes', 'Régulation'],
      color: 'from-emerald-600 to-yellow-600'
    },
    {
      period: 'Août 1994 - Mars 1995',
      title: 'Ingénieur stagiaire',
      company: 'Tunisie-Ukraine-Technologie',
      companyLink: 'https://tunis.mfa.gov.ua/fr/partnership/torgovelno-ekonomichne-spivrobitnictvo/562-torgovelyno-jekonomichne-spivrobitnictvo-mizh-ukrajinoju-i-tunisom', // Lien à remplacer si disponible
      location: 'Tunis, Tunisie',
      type: 'Stage',
      achievements: [
        'Maintenance d\'installations électromécaniques de traitement de surfaces sous-vide',
        'Interprétariat de réunions et traduction de documents scientifiques russes vers le français',
        'Stage d\'initiation à la vie professionnelle'
      ],
      technologies: ['Maintenance électromécanique', 'Traitement de surfaces', 'Traduction technique', 'Interprétariat'],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      period: 'Novembre 1993 - Mars 1994',
      title: 'Ingénieur stagiaire',
      company: 'Espace Bureautique',
      companyLink: '#', // Lien à remplacer si disponible
      location: 'Tunis, Tunisie',
      type: 'Stage',
      achievements: [
        'Maintenance de photocopieurs SELEX',
        'Stage pratique de 10 jours avec un inspecteur technique de SELEX-France',
        'Stage d\'initiation à la vie professionnelle'
      ],
      technologies: ['Maintenance équipements bureautiques', 'Photocopieurs', 'Support technique'],
      color: 'from-orange-600 to-red-600'
    }
  ];

  const experiencesEn = [
    {
      period: '2020 - Present',
      title: 'Director General of Inspection and Educational Audit',
      company: 'MFPE (Ministry of Professional Training and Employment)',
      companyLink: 'https://www.emploi.gov.tn/fr',
      location: 'Tunis, Tunisia',
      type: 'Government position',
      achievements: [
        'Led the General Directorate of Inspection and Educational Audit',
        'Managed the network of inspectors-auditors across Tunisia',
        'Trained national and international cadres in professional training audit',
        'Board member of the RNE (National Register of Enterprises) since 2019'
      ],
      technologies: ['Educational Audit', 'Ministry Leadership', 'Policy Development', 'International Training'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      period: 'April 2018 - 2020',
      title: 'Head of the Professional Training Program',
      company: 'MFPE (Ministry of Professional Training and Employment)',
      companyLink: 'https://www.emploi.gov.tn/fr',
      location: 'Tunis, Tunisia',
      type: 'Government position',
      achievements: [
        'Appointed by ministerial decision as "Head of the Professional Training Program"',
        "Head of the internal audit committee of MFPE central services (since May 2018)",
        'Promoted to the grade of General Educational Inspector (2019)',
        'Conducted educational inspections and evaluations of training institutions'
      ],
      technologies: ['Program management', 'Educational inspection', 'Audit systems', 'Statistical analysis'],
      color: 'from-purple-600 to-blue-600'
    },
    {
      period: 'January 1999 - 2018',
      title: 'Engineer and executive at MFPE',
      company: 'MFPE (Ministry of Professional Training and Employment)',
      companyLink: 'https://www.emploi.gov.tn/fr',
      location: 'Tunis, Tunisia',
      type: 'Government position',
      achievements: [
        'Started my career at the Ministry of Professional Training and Employment',
        'Progressively moved into positions with higher responsibilities',
        'Contributed to professional training reform projects',
        'Supported the development of training programs'
      ],
      technologies: ['Training engineering', 'Public management', 'Program development', 'Project management'],
      color: 'from-cyan-600 to-teal-600'
    },
    {
      period: 'June 1997 - September 1998',
      title: 'GTB/GTC Affairs Engineer',
      company: 'Tunisie-Energie-Services',
      companyLink: 'https://www.linkedin.com/company/tunisie-energie-services',
      location: 'Tunis, Tunisia',
      type: 'Private sector position',
      achievements: [
        'Building Technical Management (GTB/GTC) with electronic equipment from the French company Energie-Système',
        'Reduced buildings’ energy consumption',
        'Designed control and regulation computer programs',
        'Trained and supported client staff'
      ],
      technologies: ['Building technical management', 'Energy efficiency', 'Automation', 'Control/regulation systems'],
      color: 'from-teal-600 to-green-600'
    },
    {
      period: '1997-2000 (Teaching)',
      title: 'Adjunct Lecturer in Instrumentation and Measurements',
      company: 'INSAT (National Institute of Applied Sciences and Technology)',
      companyLink: 'https://insat.rnu.tn',
      location: 'Tunis, Tunisia',
      type: 'Teaching',
      achievements: [
        'Taught practical labs in Instrumentation and Measurements',
        'Mentored students in 1st and 2nd years',
        'Authorized by the Minister of Professional Training and Employment'
      ],
      technologies: ['Instrumentation', 'Physical measurements', 'University pedagogy', 'Student supervision'],
      color: 'from-green-600 to-emerald-600'
    },
    {
      period: 'June 1995 - August 1996',
      title: 'Project Engineer in Industrial Computing',
      company: 'Tunisian Company for Electricity and Regulation',
      companyLink: '#',
      location: 'Tunis, Tunisia',
      type: 'Private sector role',
      achievements: [
        'Centralized Building Management (GTC) for monitoring and controlling building equipment',
        'Used Staefa Control System equipment (Switzerland)',
        'Designed control and regulation computer programs',
        'Built and costed electrical panels according to standards'
      ],
      technologies: ['Industrial computing', 'Centralized building management', 'Automation', 'Regulation'],
      color: 'from-emerald-600 to-yellow-600'
    },
    {
      period: 'August 1994 - March 1995',
      title: 'Trainee Engineer',
      company: 'Tunisia-Ukraine-Technologie',
      companyLink:
        'https://tunis.mfa.gov.ua/fr/partnership/torgovelno-ekonomichne-spivrobitnictvo/562-torgovelyno-jekonomichne-spivrobitnictvo-mizh-ukrajinoju-i-tunisom',
      location: 'Tunis, Tunisia',
      type: 'Internship',
      achievements: [
        'Maintenance of electromechanical surface treatment installations under vacuum',
        'Interpreted meetings and translated Russian scientific documents into French',
        'Introductory internship to professional life'
      ],
      technologies: ['Electromechanical maintenance', 'Surface treatment', 'Technical translation', 'Interpretation'],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      period: 'November 1993 - March 1994',
      title: 'Trainee Engineer',
      company: 'Espace Bureautique',
      companyLink: '#',
      location: 'Tunis, Tunisia',
      type: 'Internship',
      achievements: [
        'Maintenance of SELEX photocopiers',
        '10-day practical internship with a SELEX-France technical inspector',
        'Introductory internship to professional life'
      ],
      technologies: ['Office equipment maintenance', 'Photocopiers', 'Technical support'],
      color: 'from-orange-600 to-red-600'
    }
  ];

  const experiences = isFr ? experiencesFr : experiencesEn;

  // Function to highlight specific words in green
  const highlightKeywords = (text: string) => {
    const highlightTerms = isFr
      ? ['Audit', 'Leadership', 'Politiques', 'Formation', 'Ministère', 'Pédagogique', 'Inspection', 'Programmes', 'Internationale']
      : ['Audit', 'Leadership', 'Policy', 'Training', 'Ministry', 'Educational', 'Inspection', 'Programs', 'International'];
    return text.split(' ').map((word, i) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      const normalized = cleanWord.toLowerCase();
      const shouldHighlight = highlightTerms.some((term) => term.toLowerCase() === normalized);
      return shouldHighlight ? (
        <span key={i} className="text-green-600 font-semibold">
          {word}{' '}
        </span>
      ) : (
        <span key={i}>{word} </span>
      );
    });
  };

  return (
    <section id="experience" className="py-12 sm:py-16 bg-white dark:bg-gray-900 relative overflow-hidden pt-16 sm:pt-32">
      {/* Enhanced blue effects with animation */}
      
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Current Position - Moved to top */}
        
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">
              {isFr ? 'Parcours Professionnel' : 'Professional Journey'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              {isFr ? 'Expérience Professionnelle' : 'Professional Experience'}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            {isFr
              ? '30+ années de leadership en ingénierie et éducation'
              : '30+ years of leadership in engineering and education'}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 dark:from-blue-900 dark:via-blue-500 dark:to-blue-900"></div>

            {/* Small decorative cap at the bottom of the line */}
            <div className="absolute left-4 md:left-6 bottom-0 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500 shadow-md shadow-blue-400/50"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-14 md:pl-20 group transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1.5 top-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-white dark:ring-gray-900 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    {/* Subtle colored corner glow — matches role color */}
                    <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${exp.color} opacity-10 dark:opacity-20 rounded-full blur-3xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>

                    <div className="relative z-10">
                      {/* Top row: Date + type chip */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-1.5 leading-snug">
                        {exp.title}
                      </h3>

                      {/* Company + location */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm">
                        <div className="flex items-center space-x-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                          <Building className="w-4 h-4" />
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center transition-all hover:text-blue-700 dark:hover:text-blue-300"
                          >
                            <span>{exp.company}</span>
                            {exp.companyLink !== '#' && <ExternalLink className="w-3 h-3 ml-1" />}
                          </a>
                        </div>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-slate-600 dark:text-slate-400">{exp.location}</span>
                      </div>

                      {/* Achievements — 2-col on lg+ */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center text-sm">
                          <Award className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400" />
                          {isFr ? 'Réalisations principales' : 'Main achievements'}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-1.5">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-slate-700 dark:text-slate-300">
                              <TrendingUp className="w-3 h-3 mt-1 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{highlightKeywords(achievement)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-xs font-medium
                              bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className={`mt-14 sm:mt-20 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4 border border-blue-200/60 dark:border-blue-800/60">
              <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide">
                {isFr ? 'Points forts de carrière' : 'Career highlights'}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {isFr ? 'Réalisations en chiffres' : 'Achievements in numbers'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {isFr
                ? "Un parcours marquant et des réalisations concrètes au service de l'éducation"
                : 'A remarkable career with concrete achievements in service of education'}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Years Experience — blue accent */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/15 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-blue-400/30 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">30</span>
                  <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {isFr ? "Années d'expérience" : 'Years of experience'}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {isFr ? 'Depuis 1993' : 'Since 1993'}
                </div>
              </div>
            </div>

            {/* Formations Delivered — green accent */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/20 dark:bg-green-500/15 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-green-400/30 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-green-100 dark:bg-green-900/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">100</span>
                  <span className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {isFr ? 'Formations dispensées' : 'Training delivered'}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {isFr ? 'Nationales & Internationales' : 'National & International'}
                </div>
              </div>
            </div>

            {/* MOOC Certifications — purple accent */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400/20 dark:bg-purple-500/15 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-purple-400/30 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">15</span>
                  <span className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {isFr ? 'Certifications MOOC' : 'MOOC Certifications'}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {isFr ? 'UNESCO, Google & Plus' : 'UNESCO, Google & more'}
                </div>
              </div>
            </div>

            {/* Leadership Positions — orange accent */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400/20 dark:bg-orange-500/15 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-orange-400/30 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-orange-100 dark:bg-orange-900/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">5</span>
                  <span className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {isFr ? 'Postes de direction' : 'Leadership positions'}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {isFr ? 'Directeur Général & Plus' : 'Director General & more'}
                </div>
              </div>
            </div>
          </div>

          {/* Current Position Banner — natural & attractive */}
          <div className="mt-10 max-w-6xl mx-auto">
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-blue-900/50">
              {/* Soft gradient backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-white dark:from-blue-900/20 dark:via-gray-800 dark:to-gray-800 pointer-events-none"></div>

              {/* Decorative blue glow — top-right + bottom-left */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-300/30 dark:bg-blue-500/15 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Left vertical accent stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700"></div>

              <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                {/* Trophy in gradient blue circle with soft glow */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                    <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-1.5 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full mb-3 border border-blue-200 dark:border-blue-800">
                    <Star className="w-3 h-3 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      {isFr ? 'Position actuelle' : 'Current position'}
                    </span>
                  </div>
                  {/* Title */}
                  <h4 className="text-lg md:text-2xl font-bold mb-2 leading-tight text-gray-900 dark:text-white">
                    {isFr ? 'Directeur Général — Inspection & Audit Pédagogique' : 'Director General — Inspection & Educational Audit'}
                  </h4>
                  {/* Subtitle */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                    {isFr
                      ? "Ministère de la Formation Professionnelle et de l'Emploi (MFPE) · Depuis 2020"
                      : 'Ministry of Professional Training and Employment (MFPE) · Since 2020'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Experience;