import React, { useEffect, useState } from 'react';
import { Award, BookOpen, Globe, Users, Zap, Target } from 'lucide-react';

const Trainings = () => {
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

    const element = document.getElementById('trainings');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      year: '2012',
      icon: Target,
      color: 'from-blue-500 to-purple-600',
      description: 'Global standard for project management excellence'
    },
    {
      title: 'Certified Six Sigma Black Belt',
      issuer: 'American Society for Quality',
      year: '2016',
      icon: Award,
      color: 'from-green-500 to-teal-600',
      description: 'Process improvement and quality management expertise'
    },
    {
      title: 'Agile Certified Practitioner (PMI-ACP)',
      issuer: 'Project Management Institute',
      year: '2019',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      description: 'Advanced agile methodologies and practices'
    },
    {
      title: 'ISO 27001 Lead Auditor',
      issuer: 'British Standards Institution',
      year: '2018',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      description: 'Information security management systems auditing'
    }
  ];

  const internationalWorkshops = [
    {
      title: 'Advanced Leadership in Digital Era',
      organizer: 'Harvard Business School Executive Education',
      location: 'Boston, USA',
      year: '2021',
      duration: '5 days',
      category: 'Leadership'
    },
    {
      title: 'Industry 4.0 Implementation Strategy',
      organizer: 'Fraunhofer Institute',
      location: 'Munich, Germany',
      year: '2020',
      duration: '3 days',
      category: 'Technology'
    },
    {
      title: 'International Project Management Summit',
      organizer: 'PMI Global Congress',
      location: 'Singapore',
      year: '2019',
      duration: '4 days',
      category: 'Project Management'
    },
    {
      title: 'Advanced Pedagogy in Engineering Education',
      organizer: 'MIT Professional Education',
      location: 'Cambridge, USA',
      year: '2018',
      duration: '6 days',
      category: 'Education'
    }
  ];

  const moocs = [
    {
      title: 'Machine Learning for Engineers',
      platform: 'Stanford University (Coursera)',
      completion: '2022',
      certificate: 'With Distinction'
    },
    {
      title: 'Digital Transformation Strategy',
      platform: 'MIT xPRO',
      completion: '2021',
      certificate: 'Verified Certificate'
    },
    {
      title: 'Advanced Python Programming',
      platform: 'University of Michigan (Coursera)',
      completion: '2020',
      certificate: 'Specialization Certificate'
    },
    {
      title: 'Data Science and Analytics',
      platform: 'Harvard University (edX)',
      completion: '2019',
      certificate: 'Professional Certificate'
    }
  ];

  return (
    <section id="trainings" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Professional Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Advanced <span className="bg-gradient-to-r from-blue-600 to-slate-800 dark:from-blue-400 dark:to-slate-200 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">Specialized Training & Professional Certifications</p>
        </div>

        {/* Professional Certifications */}
        <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${cert.color} mb-4`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h4>
                <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-slate-600 text-sm mb-3">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                    {cert.year}
                  </span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Workshops */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">International Workshops & Conferences</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {internationalWorkshops.map((workshop, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'translate-x-0 opacity-100' : `${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'} opacity-0`}`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{workshop.title}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{workshop.organizer}</p>
                    <div className="flex items-center space-x-2 text-slate-600 text-sm">
                      <Globe className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-700 mb-2">
                      {workshop.year}
                    </div>
                    <div className="text-slate-500 text-xs">{workshop.duration}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    workshop.category === 'Leadership' ? 'bg-purple-100 text-purple-700' :
                    workshop.category === 'Technology' ? 'bg-blue-100 text-blue-700' :
                    workshop.category === 'Project Management' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {workshop.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOOCs */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Online Courses & MOOCs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moocs.map((course, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-slate-400 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-6 h-6 text-slate-400" />
                  <div className="text-xs text-slate-400">{course.completion}</div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{course.title}</h4>
                <p className="text-slate-300 text-sm mb-3">{course.platform}</p>
                <div className="bg-gradient-to-r from-slate-400 to-slate-500 px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">{course.certificate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;