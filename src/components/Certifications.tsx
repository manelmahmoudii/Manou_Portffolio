import { useEffect, useState } from 'react';
import { Award, Calendar, Star, Trophy, X, ChevronLeft, ChevronRight, Building, ExternalLink, Download, Eye, BookOpen, LucideIcon, Code, Globe } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface CertificationItem {
  title: string;
  provider: string;
  year: string;
  score: string;
  type: string;
  color: string;
  description: string;
  qrCode?: string;
  certificateLink?: string;
  image?: string;
  icon?: LucideIcon;
}

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [certificateIndex, setCertificateIndex] = useState(0);

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

  const getTypeHexColor = (type: string) => {
    switch (type) {
      case 'Bureautique': return '#8b5cf6'; // purple-500
      case 'Gestion de Projet': return '#f97316'; // orange-500
      case 'Éducation': return '#3b82f6'; // blue-500
      case 'Marketing': return '#10b981'; // green-500
      case 'Management': return '#ec4899'; // pink-500
      case 'Finance': return '#14b8a6'; // teal-500
      case 'Programmation': return '#2563eb'; // blue-600
      case 'Informatique': return '#16a34a'; // green-600
      case 'Gouvernance': return '#8b5cf6'; // purple-600
      case 'Santé': return '#ef4444'; // red-500
      case 'Pédagogie': return '#6366f1'; // indigo-500
      case 'Audit': return '#eab308'; // yellow-600
      case 'Qualité': return '#dc2626'; // red-600
      case 'International': return '#f97316'; // orange-600
      case 'Langue': return '#06b6d4'; // cyan-600
      case 'Coaching': return '#e879f9'; // fuchsia-600
      case 'Formation Animée': return '#65a30d'; // lime-600
      default: return '#6b7280'; // gray-500
    }
  };

  const certificationsData: CertificationItem[] = [
    {
      icon: Code,
      title: 'Microsoft Office Specialist - Excel Associate',
      provider: 'Microsoft',
      year: '2025',
      score: 'N/A',
      type: 'Bureautique',
      color: 'purple',
      qrCode: 'https://www.microsoft.com/certifications',
      image: '/images/excel.jpg',
      certificateLink: 'https://www.microsoft.com/certifications',
      description: 'Maîtrise avancée de Microsoft Excel.'
    },
    {
      icon: Code,
      title: 'Microsoft Office Specialist - Word Associate',
      provider: 'Microsoft',
      year: '2025',
      score: 'N/A',
      type: 'Bureautique',
      color: 'purple',
      qrCode: 'https://www.microsoft.com/certifications',
      image: '/images/word.jpg',
      certificateLink: 'https://www.microsoft.com/certifications',
      description: 'Maîtrise avancée de Microsoft Word.'
    },
    {
      icon: Code,
      title: 'Microsoft Office Specialist - PowerPoint Associate',
      provider: 'Microsoft',
      year: '2025',
      score: 'N/A',
      type: 'Bureautique',
      color: 'purple',
      qrCode: 'https://www.microsoft.com/certifications',
      image: '/images/powerpoint.jpg',
      certificateLink: 'https://www.microsoft.com/certifications',
      description: 'Maîtrise avancée de Microsoft PowerPoint.'
    },
    {
      icon: Award,
      title: 'Certification en formation Agile Scrum / PMP',
      provider: 'Master of Project Academy',
      year: '2019',
      score: 'N/A',
      type: 'Gestion de Projet',
      color: 'orange',
      certificateLink: 'https://masterofproject.com/',
      description: 'Formation et certification en méthodes Agiles Scrum et PMP.'
    },
    {
      icon: BookOpen,
      title: 'Initiation aux statistiques pour la planification et la gestion de l\'éducation',
      provider: 'l\'Institut International de Planification de l\'Éducation (l\'IIPE-UNESCO)',
      year: '2015',
      score: '17.5/20',
      type: 'Éducation',
      color: 'blue',
      description: 'MOOC certifiant en français, note finale : 17.5/20',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Learning Assessments',
      provider: 'IIPE-UNESCO',
      year: '2016',
      score: '18.5/20',
      type: 'Éducation',
      color: 'green',
      description: 'MOOC certifiant en anglais, note finale : 18.5/20',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Les Évaluations des Apprentissages',
      provider: 'IIPE-UNESCO',
      year: '2017',
      score: '19.5/20',
      type: 'Éducation',
      color: 'purple',
      description: 'MOOC certifiant en français, note finale : 19.5/20',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'IIEP e-Seminar 2017: Transforming Teacher Education to Improve Learning Outcomes',
      provider: 'IIPE-UNESCO',
      year: '2017',
      score: 'Certifié',
      type: 'Éducation',
      color: 'yellow',
      description: 'Séminaire en ligne sur la transformation de la formation des enseignants pour améliorer les résultats d\'apprentissage',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Gestion de Projets – GdP8',
      provider: 'Ecole centrale de Lille & UNOW',
      year: '2016',
      score: '87/100',
      type: 'Gestion de Projet',
      color: 'orange',
      description: 'MOOC certifiant, 4 modules classiques et 2 de spécialisation validés. Note finale: 87/100',
      certificateLink: 'https://www.unow-mooc.org/'
    },
    {
      icon: BookOpen,
      title: 'Gestion de Projets – GdP9',
      provider: 'UNOW',
      year: '2017',
      score: '92/100',
      type: 'Gestion de Projet',
      color: 'red',
      description: 'MOOC en gestion de projets, note finale : 92/100',
      certificateLink: 'https://www.unow-mooc.org/'
    },
    {
      icon: BookOpen,
      title: 'Human Resources Management Course',
      provider: 'Brentwood Open Learning College',
      year: '2017',
      score: 'Excellent',
      type: 'Management',
      color: 'pink',
      description: 'Cours en ligne de gestion des ressources humaines, mention Excellent (90+ %)',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Formation Digital Active',
      provider: 'Google',
      year: '2017',
      score: 'Certifié',
      type: 'Marketing',
      color: 'indigo',
      description: 'MOOC certifiant de Google sur les fondamentaux du marketing digital (26 thèmes)',
      certificateLink: 'https://learndigital.withgoogle.com'
    },
    {
      icon: BookOpen,
      title: 'Fondamentaux de la Finance',
      provider: 'HP Life via Edcastcloud',
      year: '2018',
      score: 'Certifié',
      type: 'Finance',
      color: 'teal',
      description: 'MOOC certifiant sur les bases de la finance',
      certificateLink: 'hplife.edcastcloud.com/verify/FBKrMtkg'
    },
    {
      icon: Code,
      title: 'Compétences de Base en Informatique',
      provider: 'Code.org',
      year: '2019',
      score: 'Certifié',
      type: 'Programmation',
      color: 'blue',
      description: 'Certificats de réussite pour des heures de codage démontrant une compréhension des concepts fondamentaux de l\'informatique',
      certificateLink: 'www.code.org'
    },
    {
      icon: Globe,
      title: 'Compétences Digitales et Informatiques (multiples)',
      provider: 'SOLOLEARN, Khan Academy, Codecademy',
      year: '2017-2019',
      score: 'Plusieurs badges',
      type: 'Informatique',
      color: 'green',
      description: 'Maîtrise de compétences en informatique et digital (Trello, Python, JavaScript, Anglais, Tableaux de bord Excel, Excel Avancé, HTML, Sketch Tutorial)',
      certificateLink: 'https://fr.khanacademy.org/badges https://www.codecademy.com/fr'
    },
    {
      icon: BookOpen,
      title: 'Gouvernance Territoriale',
      provider: 'CNFPT via FUN-MOOC',
      year: '2019',
      score: '100%',
      type: 'Gouvernance',
      color: 'purple',
      description: 'Certificat de suivi avec succès (100%) du MOOC sur la gouvernance territoriale',
      certificateLink: 'https://www.fun-mooc.fr/'
    },
    {
      icon: BookOpen,
      title: 'Webinaires de Gestion de Projet et UNESCO',
      provider: 'Project Management Institute, UNESCO',
      year: '2018-2025',
      score: 'Certifié',
      type: 'Gestion de Projet',
      color: 'orange',
      description: 'Certificats de participation à divers webinaires sur des thèmes de gestion de projet (PMXPO) et UNESCO',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Coronavirus - What you need to know',
      provider: 'Alison',
      year: '2025',
      score: 'Certifié',
      type: 'Santé',
      color: 'red',
      description: 'Certificat sur les informations essentielles concernant le Coronavirus',
      certificateLink: 'https://alison.com/course/coronavirus-what-you-need-to-know'
    }
  ];

  const allCertifications: CertificationItem[] = certificationsData.concat([
    {
      icon: BookOpen,
      title: 'Stage pédagogique (2 mois)',
      provider: 'CENAFFIF',
      year: '1999',
      score: 'Certifié',
      type: 'Pédagogie',
      color: 'blue',
      description: 'Stage pédagogique obligatoire pour les nouvelles recrues des formateurs, organisé par le CENAFFIF.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Audit dans la formation professionnelle',
      provider: 'AFPA (France)',
      year: '1999',
      score: 'Certifié',
      type: 'Audit',
      color: 'green',
      description: 'Formation d’une semaine assurée par un expert français de l’AFPA sur l’audit de la formation professionnelle.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Cycle d’ingénierie de formation',
      provider: 'CENAFFIF',
      year: '1999-2000',
      score: 'Certifié',
      type: 'Qualité',
      color: 'orange',
      description: 'Cycle d’un an sur la qualité, la gestion des centres de formation, les enquêtes statistiques et l’audit.',
      certificateLink: '#'
    },
    {
      icon: Award,
      title: 'Mission qualité France',
      provider: 'Ministère & partenaires français',
      year: '2002',
      score: 'Certifié',
      type: 'Qualité',
      color: 'red',
      description: 'Mission en France sur l’implantation d’une démarche qualité dans la formation professionnelle.',
      certificateLink: '#'
    },
    {
      icon: Award,
      title: 'Mission Audit France',
      provider: 'Ministère & partenaires français',
      year: '2007',
      score: 'Certifié',
      type: 'Audit',
      color: 'purple',
      description: 'Mission de 2 semaines en France sur l’appropriation des techniques d’audit appliquées à la formation professionnelle.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Cycle certifiant Audit de la formation professionnelle',
      provider: 'AFPA (France)',
      year: '2006-2007',
      score: 'Certifié',
      type: 'Audit',
      color: 'yellow',
      description: 'Cycle de 11 semaines, phases pratiques : familiarisation, diagnostic et mise en place d’une démarche qualité pour l’audit de formation.',
      certificateLink: '#'
    },
    {
      icon: Globe,
      title: 'Perfectionnement en anglais',
      provider: 'British Council, Tunis',
      year: '2009',
      score: '19/20',
      type: 'Langue',
      color: 'blue',
      description: 'Cycle certifiant de 6 mois couronné par un certificat de langue (niveau intermédiaire, mention excellent).',
      certificateLink: '#'
    },
    {
      icon: Trophy,
      title: 'Conférence BTLH & UK Skills Show',
      provider: 'British Council, Birmingham',
      year: '2015',
      score: 'Participation officielle',
      type: 'International',
      color: 'indigo',
      description: 'Mission officielle en Angleterre sur invitation du British Council pour la conférence Bringing The Learning Home et la foire UK Skills Show.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Coaching pédagogique',
      provider: 'Formation nationale',
      year: '2015',
      score: 'Certifié',
      type: 'Coaching',
      color: 'pink',
      description: 'Formation certifiante d’une semaine en coaching pédagogique.',
      certificateLink: '#'
    },
    {
      icon: Award,
      title: 'Mise en place d’un système de certification ISO-17024',
      provider: 'UTICA & expert allemand',
      year: '2016',
      score: 'Certifié',
      type: 'Qualité',
      color: 'teal',
      description: 'Cycle d’ateliers de 3 semaines sur l’appropriation des exigences de la norme ISO-17024 appliquée à la formation professionnelle.',
      certificateLink: '#'
    },
    {
      icon: Globe,
      title: 'Reconnaissance diplômes professionnels',
      provider: 'Hambourg, Allemagne',
      year: '2022',
      score: 'Participation officielle',
      type: 'International',
      color: 'orange',
      description: 'Mission officielle sur le système allemand de reconnaissance des diplômes de formation professionnelle.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Politiques publiques inclusives',
      provider: 'ENA Tunis – Institut de Leadership',
      year: '2022',
      score: 'Certifié',
      type: 'Gouvernance',
      color: 'blue',
      description: 'Session de formation certifiante (7 mois) pour hauts cadres, désigné rapporteur adjoint du comité de rédaction du rapport final.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Systèmes d’alerte précoce',
      provider: 'ENA Tunis',
      year: '2022',
      score: 'Certifié',
      type: 'Gouvernance',
      color: 'red',
      description: 'Formation certifiante au profit de hauts cadres tunisiens sur les outils de mise en place de systèmes d’alerte précoce.',
      certificateLink: '#'
    },
    {
      icon: BookOpen,
      title: 'Animation Pédagogique (Inspection & Audit Formation)',
      provider: 'Ministère MFPE, Instituts Nationaux et Étrangers',
      year: 'Diverses Années',
      score: 'N/A',
      type: 'Formation Animée',
      color: 'indigo',
      description: 'Animation de formations pour hauts cadres (tunisiens et étrangers) sur l\'inspection et l\'audit pédagogique, incluant la méthodologie d\'audit et l\'élaboration de logigrammes. Chaque session est suivie d\'un rapport d\'évaluation.',
      certificateLink: '#'
    }
  ]);

  const openModal = (certificate: CertificationItem, index: number) => {
    setSelectedCertificate(certificate);
    setCertificateIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const goToNextCertificate = () => {
    const nextIndex = (certificateIndex + 1) % allCertifications.length;
    setCertificateIndex(nextIndex);
    setSelectedCertificate(allCertifications[nextIndex]);
  };

  const goToPreviousCertificate = () => {
    const prevIndex = (certificateIndex - 1 + allCertifications.length) % allCertifications.length;
    setCertificateIndex(prevIndex);
    setSelectedCertificate(allCertifications[prevIndex]);
  };


  return (
    <>
      <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-base font-medium uppercase tracking-wide">Apprentissage Continu
            </span>
          </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
              <span className="relative">
                Certifications & Formations
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
              </span>
            </h2>
          </div>

         

          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-8">
            Découvrez mes certifications professionnelles et formations en ligne (MOOCs) obtenues auprès d'organismes de formation reconnus.
          </p>

          <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {allCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                style={{
                  borderLeft: `3px solid ${getTypeHexColor(cert.type)}` // Finer, more sky blue, and translucent dynamic colors
                }}
              >
                {/* Circular element in top right */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 ${
                  cert.color === 'blue' ? 'bg-blue-500' :
                  cert.color === 'green' ? 'bg-green-500' :
                  cert.color === 'purple' ? 'bg-purple-500' :
                  cert.color === 'yellow' ? 'bg-yellow-500' :
                  cert.color === 'orange' ? 'bg-orange-500' :
                  cert.color === 'red' ? 'bg-red-500' :
                  cert.color === 'pink' ? 'bg-pink-500' :
                  cert.color === 'indigo' ? 'bg-indigo-500' :
                  cert.color === 'teal' ? 'bg-teal-500' :
                  'bg-blue-500'
                }`}></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-base mb-2 leading-tight">{cert.title}</h4>
                    <div className="flex items-center text-blue-600 text-sm mb-2">
                      {cert.icon && <cert.icon className="w-4 h-4 mr-1" />} {/* Display icon for MOOCs */}
                      <Building className="w-4 h-4 mr-1" />
                      <span>{cert.provider}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white`} style={{ backgroundColor: getTypeHexColor(cert.type) }}>
                    {cert.type}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <p>{cert.description}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                  <div className="flex items-center text-black font-bold">
                    <Star className="w-4 h-4 mr-1 fill-yellow-500 text-yellow-500" />
                    <span>{cert.score}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => openModal(cert, index)}
                  className="w-full py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium text-xs transition-colors duration-300 flex items-center justify-center border"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Voir Certificat
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {isModalOpen && selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-zoom-in flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Détails du Certificat</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/2 flex flex-col">
                    <div className="bg-gray-100 dark:bg-slate-900 rounded-xl p-4 flex items-center justify-center min-h-[350px]">
                      {selectedCertificate.image ? (
                        selectedCertificate.image.endsWith('.pdf') ? (
                          <iframe src={selectedCertificate.image} className="w-full h-72 rounded-lg" title="Certificat PDF"></iframe>
                        ) : (
                          <img 
                            src={selectedCertificate.image} 
                            alt={selectedCertificate.title} 
                            className="max-w-full max-h-72 object-contain rounded-lg shadow-md" 
                          />
                        )
                      ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <Award className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p>Image du certificat non disponible</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex gap-3">
                      {selectedCertificate.image || selectedCertificate.certificateLink ? (
                        <a
                          href={selectedCertificate.image && !selectedCertificate.image.endsWith('.pdf') ? selectedCertificate.image : selectedCertificate.certificateLink || '#'}
                          download={selectedCertificate.image && !selectedCertificate.image.endsWith('.pdf') ? selectedCertificate.title + '.jpg' : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger
                        </a>
                      ) : null}
                      
                      {selectedCertificate.certificateLink && selectedCertificate.certificateLink !== '#' && (
                        <a
                          href={selectedCertificate.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Vérifier en ligne
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCertificate.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 flex items-center">
                      {selectedCertificate.icon && <selectedCertificate.icon className="w-4 h-4 mr-2" />} {/* Display icon for MOOCs in modal */}
                      <Building className="w-4 h-4 mr-2" />
                      {selectedCertificate.provider}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-slate-700">
                        <span className="text-gray-500 dark:text-gray-400">Année</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedCertificate.year}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-slate-700">
                        <span className="text-gray-500 dark:text-gray-400">Score</span>
                        <span className="font-medium text-emerald-600 dark:text-emerald-400">{selectedCertificate.score}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-slate-700">
                        <span className="text-gray-500 dark:text-gray-400">Type</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedCertificate.type}</span>
                      </div>
                    </div>
                    
                    {selectedCertificate.qrCode && (
                      <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-900 rounded-xl flex flex-col items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Scanner pour vérifier ce certificat</p>
                        <QRCodeSVG 
                          value={selectedCertificate.qrCode} 
                          size={140} 
                          level="H"
                          className="p-2 bg-white rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              {allCertifications.length > 1 && (
                <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-slate-700">
                  <button
                    onClick={goToPreviousCertificate}
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Précédent
                  </button>
                  
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {certificateIndex + 1} de {allCertifications.length}
                  </span>
                  
                  <button
                    onClick={goToNextCertificate}
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Certifications;