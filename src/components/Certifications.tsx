import { useEffect, useState } from 'react';
import { Award, Calendar, Star, Trophy, X, ChevronLeft, ChevronRight, Building, ExternalLink, Download, Eye } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface Certificate {
  title: string;
  provider: string;
  year: string;
  score: string;
  type: string;
  color: string;
  qrCode?: string;
  certificateLink?: string;
  image?: string;
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

  const certificates: Certificate[] = [
    {
      title: 'Planification de l\'éducation',
      provider: 'IIPE-UNESCO',
      year: '2023',
      score: '95%',
      type: 'Education',
      color: 'blue',
      qrCode: 'https://www.iiep.unesco.org/', 
      image: '/images/Certificat_IIPE_UNESCO.jpg'
    },
    {
      title: 'Digital Marketing Fundamentals',
      provider: 'Google Digital Active',
      year: '2022',
      score: '92%',
      type: 'Marketing',
      color: 'green',
      qrCode: 'https://learndigital.withgoogle.com/atelierdigital',
      image: '/images/Certificat_Google.jpg'
    },
    {
      title: 'Microsoft Office Specialist',
      provider: 'Microsoft',
      year: '2022',
      score: '88%',
      type: 'Bureautique',
      color: 'purple',
      qrCode: 'https://www.microsoft.com/certifications',
      image: '/images/Certificat_Microsoft.jpg'
    },
    {
      title: 'Python Programming',
      provider: 'SOLOLEARN',
      year: '2021',
      score: '90%',
      type: 'Programmation',
      color: 'orange',
      qrCode: 'https://www.sololearn.com/',
      image: '/images/Certificat_Python.jpg'
    },
    {
      title: 'English Professional Development',
      provider: 'British Council',
      year: '2020',
      score: '91%',
      type: 'Langues',
      color: 'red',
      qrCode: 'https://www.britishcouncil.org/',
      image: '/images/Certificat_British_Council.jpg'
    },
    {
      title: 'Gestion de Projet',
      provider: 'FUN-MOOC',
      year: '2021',
      score: '87%',
      type: 'Management',
      color: 'pink',
      qrCode: 'https://www.fun-mooc.fr/',
      image: '/images/Certificat_FUN_MOOC.jpg'
    },
    {
      title: 'Data Analysis with Excel',
      provider: 'UNOW',
      year: '2020',
      score: '89%',
      type: 'Analyse',
      color: 'indigo',
      qrCode: 'https://www.unow.fr/',
      image: '/images/Certificat_Excel.jpg'
    },
    {
      title: 'Intelligence Artificielle',
      provider: 'FUN-MOOC',
      year: '2019',
      score: '93%',
      type: 'IA',
      color: 'purple',
      qrCode: 'https://www.fun-mooc.fr/',
      image: '/images/Certificat_IA.jpg'
    }
  ];

  const allCertificates = certificates;

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
    const nextIndex = (certificateIndex + 1) % allCertificates.length;
    setCertificateIndex(nextIndex);
    setSelectedCertificate(allCertificates[nextIndex]);
  };

  const goToPreviousCertificate = () => {
    const prevIndex = (certificateIndex - 1 + allCertificates.length) % allCertificates.length;
    setCertificateIndex(prevIndex);
    setSelectedCertificate(allCertificates[prevIndex]);
  };


  return (
    <section id="certifications" className="py-20 bg-white dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-blue-600" />
            Certificats Interactifs 
            <Star className="w-8 h-8 text-yellow-500" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Certifications et diplômes obtenus avec excellence
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{
                borderLeft: `6px solid ${
                  cert.color === 'blue' ? '#3b82f6' :
                  cert.color === 'green' ? '#10b981' :
                  cert.color === 'purple' ? '#8b5cf6' :
                  cert.color === 'orange' ? '#f97316' :
                  cert.color === 'red' ? '#ef4444' :
                  cert.color === 'pink' ? '#ec4899' :
                  cert.color === 'indigo' ? '#6366f1' :
                  '#3b82f6'
                }`
              }}
            >
              {/* Circular element in top right */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 ${
                cert.color === 'blue' ? 'bg-blue-500' :
                cert.color === 'green' ? 'bg-green-500' :
                cert.color === 'purple' ? 'bg-purple-500' :
                cert.color === 'orange' ? 'bg-orange-500' :
                cert.color === 'red' ? 'bg-red-500' :
                cert.color === 'pink' ? 'bg-pink-500' :
                cert.color === 'indigo' ? 'bg-indigo-500' :
                'bg-blue-500'
              }`}></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 leading-tight">{cert.title}</h4>
                  <div className="flex items-center text-blue-600 text-sm mb-2">
                    <Building className="w-4 h-4 mr-1" />
                    <span>{cert.provider}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                  cert.type === 'Education' ? 'bg-blue-500' :
                  cert.type === 'Marketing' ? 'bg-green-500' :
                  cert.type === 'Bureautique' ? 'bg-purple-500' :
                  cert.type === 'Programmation' ? 'bg-orange-500' :
                  cert.type === 'Langues' ? 'bg-red-500' :
                  cert.type === 'Management' ? 'bg-pink-500' :
                  cert.type === 'Analyse' ? 'bg-indigo-500' :
                  cert.type === 'IA' ? 'bg-purple-600' :
                  'bg-blue-500'
                }`}>
                  Certification {cert.type}
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                {cert.type === 'Education' && 'Formation avancée en planification et gestion des systèmes éducatifs au niveau international'}
                {cert.type === 'Marketing' && 'Certification complète en marketing digital et stratégies de communication en ligne'}
                {cert.type === 'Bureautique' && 'Maîtrise avancée de la suite Microsoft Office et outils de productivité'}
                {cert.type === 'Programmation' && 'Compétences avancées en programmation Python et développement d\'applications'}
                {cert.type === 'Langues' && 'Anglais professionnel et communication internationale certifiée'}
                {cert.type === 'Management' && 'Méthodologies de gestion de projet et leadership d\'équipe'}
                {cert.type === 'Analyse' && 'Analyse de données avancée avec Excel et VBA'}
                {cert.type === 'IA' && 'Introduction à l\'IA et applications pédagogiques'}
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
                className="w-full py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium text-sm transition-colors duration-300 flex items-center justify-center border"
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certificate Details</h3>
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
                  <div className="bg-gray-100 dark:bg-slate-900 rounded-xl p-4 flex items-center justify-center min-h-[300px]">
                    {selectedCertificate.image ? (
                      selectedCertificate.image.endsWith('.pdf') ? (
                        <iframe src={selectedCertificate.image} className="w-full h-64 rounded-lg" title="Certificate PDF"></iframe>
                      ) : (
                        <img 
                          src={selectedCertificate.image} 
                          alt={selectedCertificate.title} 
                          className="max-w-full max-h-64 object-contain rounded-lg shadow-md" 
                        />
                      )
                    ) : (
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <Award className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Certificate image not available</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    {selectedCertificate.certificateLink && selectedCertificate.certificateLink !== '#' && (
                      <a
                        href={selectedCertificate.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Online
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCertificate.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    {selectedCertificate.provider}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-slate-700">
                      <span className="text-gray-500 dark:text-gray-400">Year</span>
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
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Scan to verify this certificate</p>
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
            {allCertificates.length > 1 && (
              <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={goToPreviousCertificate}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>
                
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {certificateIndex + 1} of {allCertificates.length}
                </span>
                
                <button
                  onClick={goToNextCertificate}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;