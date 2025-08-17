import React, { useEffect, useState } from 'react';
import { User, Calendar, MapPin, Phone, Mail, CreditCard, Hash, Heart } from 'lucide-react';

const PersonalInfo = () => {
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

    const element = document.getElementById('personal-info');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const personalDetails = [
    { icon: User, label: 'Full Name', value: 'Mounir Mahmoudi' },
    { icon: Calendar, label: 'Date of Birth', value: 'January 27, 1965' },
    { icon: MapPin, label: 'Place of Birth', value: 'La Marsa, Tunis' },
    { icon: Heart, label: 'Marital Status', value: 'Married, Father of 3 (1G+2F)' },
    { icon: CreditCard, label: 'Passport', value: 'P-TUN-V397111' },
    { icon: Hash, label: 'National ID', value: '00314528' },
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '17, rue de la miséricorde, cité des oliviers-1005, Elomrane-Tunis' },
    { icon: Phone, label: 'Phone', value: '+216 92 791 814' },
    { icon: Mail, label: 'Professional Email', value: 'mounir.mahmoudi@mfpe.state.tn' },
    { icon: Mail, label: 'Personal Email', value: 'mounirtrabelsi65@gmail.com' },
  ];



  return (
    <section id="personal-info" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,197,253,0.06),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Personal Information</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-slate-800 dark:from-blue-400 dark:to-slate-200 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">Professional Background & Personal Details</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced Professional Summary */}
          <div className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl mb-12 transform transition-all duration-1000 delay-200 hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center text-lg">
                Experienced engineering leader with <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg">30+ years</span> of expertise in professional training,
                educational audit, and ministry leadership. Master's degree in Electronic Machines and Computers from Kiev Institute of Civil Aviation Engineers (1990).
                Currently serving as Director General of Inspection and Educational Audit at MFPE since 2020, with extensive experience in MOOC certifications,
                international training programs, and educational policy development.
              </p>
            </div>
          </div>

          {/* Enhanced Quick Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalDetails.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-slate-600 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm text-slate-900 dark:text-white font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {contactInfo.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-slate-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm text-slate-900 dark:text-white font-bold break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;