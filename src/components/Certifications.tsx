import { useEffect, useState } from 'react';
import { Award, BookOpen, Globe, Calendar, Star, Trophy, QrCode, X, ChevronLeft, ChevronRight, Building, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react'; // Import QRCodeSVG as named export

interface Certificate {
  title: string;
  provider: string;
  year: string;
  grade?: string;
  type: string;
  color: string;
  qrCode?: string; // Add QR code property
  certificateLink?: string; // Add certificate link property
  duration?: string;
  image?: string; // For the modal image
}

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
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

  const moocCertifications: Certificate[] = [
    {
      title: 'Education Statistics for Planning and Management',
      provider: 'UNESCO-IIEP',
      year: '2015',
      grade: '17.5/20',
      type: 'MOOC',
      color: 'from-blue-500 to-blue-600',
      qrCode: 'https://www.iiep.unesco.org/', 
      image: '/images/Certificat_IIPE_UNESCO.jpg'// Example QR code link
    },
    {
      title: 'Learning Assessments',
      provider: 'UNESCO-IIEP',
      year: '2016',
      grade: '18.5/20',
      type: 'MOOC',
      color: 'from-green-500 to-green-600',
      qrCode: 'https://www.iiep.unesco.org/',
      image: '/images/Certificat_IIPE_UNESCO_2.jpg'
    },
    {
      title: 'Project Management (GdP8 & GdP9)',
      provider: 'École Centrale Lille',
      year: '2016-2017',
      grade: '87-92/100',
      type: 'MOOC',
      color: 'from-purple-500 to-purple-600',
      qrCode: 'https://www.centralelille.fr/',
      image: '/images/Certificat_Centrale_Lille.jpg'
    },
    {
      title: 'Human Resources Management',
      provider: 'Brentwood Open Learning College',
      year: '2017',
      grade: 'Excellent (90%+)',
      type: 'MOOC',
      color: 'from-orange-500 to-orange-600',
      qrCode: 'https://www.bolc.co.uk/',
      image: '/images/Certificat_BOLC.jpg'
    },
    {
      title: 'Digital Marketing Fundamentals',
      provider: 'Google',
      year: '2017',
      grade: 'Certified',
      type: 'MOOC',
      color: 'from-red-500 to-red-600',
      qrCode: 'https://learndigital.withgoogle.com/atelier_numerique',
      image: '/images/Certificat_Google.jpg'
    },
    {
      title: 'Territorial Governance',
      provider: 'CNFPT (FUN Platform)',
      year: '2019',
      grade: '100%',
      type: 'MOOC',
      color: 'from-cyan-500 to-cyan-600',
      qrCode: 'https://www.fun-mooc.fr/fr/',
      image: '/images/Certificat_FUN_MOOC.jpg'
    }
  ];

  const professionalTraining: Certificate[] = [
    {
      title: 'Educational Audit in Professional Training',
      provider: 'AFPA France',
      year: '2006-2007',
      duration: '11 weeks',
      type: 'Certification',
      color: 'from-indigo-500 to-indigo-600',
      certificateLink: 'https://www.afpa.fr/',
      image: '/images/Certificat_AFPA.jpg'
    },
    {
      title: 'English Language Certification',
      provider: 'British Council Tunis',
      year: '2009',
      duration: '6 months',
      grade: 'Excellent 19/20',
      type: 'Language',
      color: 'from-teal-500 to-teal-600',
      certificateLink: 'https://www.britishcouncil.tn/',
      image: '/images/Certificat_British_Council.jpg'
    },
    {
      title: 'Pedagogical Coaching',
      provider: 'Professional Training Center',
      year: '2015',
      duration: '1 semester',
      type: 'Certification',
      color: 'from-pink-500 to-pink-600',
      certificateLink: '#',
      image: '/images/Certificat_Pedagogical.jpg'
    },
    {
      title: 'ISO-17024 Audit Standards',
      provider: 'UTICA with German Auditor',
      year: '2016',
      duration: '3 weeks',
      type: 'International',
      color: 'from-yellow-500 to-yellow-600',
      certificateLink: '#',
      image: '/images/Certificat_ISO.jpg'
    },
    {
      title: 'Public Policy Development',
      provider: 'ENA Tunis',
      year: '2022',
      duration: '7 months',
      type: 'Leadership',
      color: 'from-slate-500 to-slate-600',
      certificateLink: 'https://www.ena.tn/',
      image: '/images/Certificat_ENA.jpg'
    },
    {
      title: 'Early Warning Systems',
      provider: 'Government Training Program',
      year: '2022',
      duration: 'Intensive',
      type: 'Specialized',
      color: 'from-emerald-500 to-emerald-600',
      certificateLink: '#',
      image: '/images/Certificat_Early_Warning.jpg'
    }
  ];

  const allCertificates = [...moocCertifications, ...professionalTraining];

  const openModal = (certificate: Certificate, index: number) => {
    setSelectedCertificate(certificate);
    setCertificateIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const goToNextCertificate = () => {
    setCertificateIndex((prevIndex) => (prevIndex + 1) % allCertificates.length);
    setSelectedCertificate(allCertificates[(certificateIndex + 1) % allCertificates.length]);
  };

  const goToPreviousCertificate = () => {
    setCertificateIndex((prevIndex) => (prevIndex - 1 + allCertificates.length) % allCertificates.length);
    setSelectedCertificate(allCertificates[(certificateIndex - 1 + allCertificates.length) % allCertificates.length]);
  };

  return (
    <section id="certifications" className="py-16 bg-gradient-to-tr from-white via-blue-50/25 to-blue-100/40 dark:from-gray-900 dark:via-blue-950/15 dark:to-blue-950/25 relative overflow-hidden">
      {/* Enhanced blue effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-blue-100/40 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/8 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-50/30 dark:bg-blue-950/10 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:45px_45px] opacity-35"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide">Continuous Learning</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            <span className="relative">
              Certifications & Training
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">Professional development and continuous learning</p>
        </div>

        {/* Formations à distance / MOOC */}
        <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>Formations à distance / MOOC</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-8">
            Explorez mes certifications obtenues via des plateformes d'apprentissage en ligne de renom.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moocCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-100 dark:border-gray-700 professional-card"
              >
                {/* Subtle blue overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/25 dark:from-blue-900/0 dark:to-blue-900/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">{cert.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2 flex items-center">
                      <Globe className="w-3 h-3 mr-1 text-blue-500" /> {cert.provider}
                    </p>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" /> <span>{cert.year}</span>
                      </div>
                      {cert.grade && (
                        <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                          {cert.grade}
                        </span>
                      )}
                    </div>
                    {cert.qrCode && (
                      <div className="mt-4 text-center">
                        <button 
                          onClick={() => openModal(cert, moocCertifications.indexOf(cert))}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                        >
                          <QrCode className="w-4 h-4 mr-2" />
                          Voir QR Code
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificats interactifs */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center space-x-2">
            <Award className="w-6 h-6 text-blue-600" />
            <span>Certificats Professionnels</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-8">
            Découvrez mes certifications professionnelles obtenues auprès d'organismes de formation reconnus.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalTraining.map((training, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-100 dark:border-gray-700 professional-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-50/25 dark:from-indigo-900/0 dark:to-indigo-900/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${training.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-indigo-600 transition-colors duration-300">{training.title}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2 flex items-center">
                      <Building className="w-3 h-3 mr-1 text-indigo-500" /> {training.provider}
                    </p>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" /> <span>{training.year}</span>
                      </div>
                      <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-medium">{training.type}</span>
                    </div>
                    {training.duration && (
                      <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full mt-2 inline-block">
                        Durée: {training.duration}
                      </span>
                    )}
                    <div className="mt-4 text-center">
                      <button 
                        onClick={() => openModal(training, moocCertifications.length + index)}
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Voir certificat
                      </button>
                    </div>
                  </div>
                </div>
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

      {/* Certificate Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-zoom-in">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:w-2/3 flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 rounded-lg lg:mr-6 flex-shrink-0">
                {selectedCertificate.image ? (
                  selectedCertificate.image.endsWith('.pdf') ? (
                    <iframe src={selectedCertificate.image} className="w-full h-[60vh] rounded-lg" title="Certificate PDF"></iframe>
                  ) : (
                    <img src={selectedCertificate.image} alt={selectedCertificate.title} className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md" />
                  )
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">Image ou PDF non disponible</p>
                )}
              </div>
              
              <div className="lg:w-1/3 flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCertificate.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{selectedCertificate.provider}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Période: {selectedCertificate.year}</p>
                  {selectedCertificate.grade && (
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Note Finale: {selectedCertificate.grade}</p>
                  )}
                  {selectedCertificate.duration && (
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Durée: {selectedCertificate.duration}</p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Type: {selectedCertificate.type}</p>

                  {selectedCertificate.qrCode && (
                    <div className="mt-4 p-3 bg-white rounded-lg shadow-inner flex flex-col items-center">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">QR Code pour vérifier</p>
                      <QRCodeSVG value={selectedCertificate.qrCode} size={128} level="H" includeMargin={false} />
                    </div>
                  )}
                  {selectedCertificate.certificateLink && selectedCertificate.certificateLink !== '#' && (
                    <div className="mt-4">
                      <a
                        href={selectedCertificate.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le certificat en ligne
                      </a>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={goToPreviousCertificate}
                    disabled={allCertificates.length <= 1}
                    className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
                  </button>
                  <button
                    onClick={goToNextCertificate}
                    disabled={allCertificates.length <= 1}
                    className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Suivant <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

// Animations for modal
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes zoom-in {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
  .animate-zoom-in {
    animation: zoom-in 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);
