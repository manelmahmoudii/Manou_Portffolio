import { Mail, Phone, MapPin, Linkedin, Download, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle decorative blue glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 py-10 sm:py-12 relative z-10">
        {/* Top — name + scroll to top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 border-b border-slate-700/60">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Mounir Mahmoudi</h2>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {isFr
                ? "Directeur Général de l'Inspection et de l'Audit Pédagogique au MFPE. 30+ années d'expertise en formation professionnelle et audit éducatif."
                : 'Director General of Inspection and Educational Audit at MFPE. 30+ years of expertise in professional training and educational audit.'}
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors duration-300 self-start md:self-auto"
            aria-label={isFr ? 'Retour en haut' : 'Back to top'}
          >
            <ArrowUp className="w-4 h-4" />
            <span>{isFr ? 'Retour en haut' : 'Back to top'}</span>
          </button>
        </div>

        {/* Middle — contact + links */}
        <div className="grid sm:grid-cols-2 gap-8 py-8 border-b border-slate-700/60">
          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
              {isFr ? 'Contact' : 'Contact'}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:mounir.mahmoudi@mfpe.state.tn"
                className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm break-all">mounir.mahmoudi@mfpe.state.tn</span>
              </a>
              <a
                href="tel:+21692791814"
                className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+216 92 791 814</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  17, rue de la miséricorde<br />
                  Cité des Oliviers, Elomrane-Tunis
                </span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
              {isFr ? 'Liens professionnels' : 'Professional Links'}
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/mounir-mahmoudi-6b992119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">{isFr ? 'Profil LinkedIn' : 'LinkedIn Profile'}</span>
              </a>
              <a
                href="/CV_FR_Mounir Mahmoudi_2024.pdf"
                download
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Download className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">{isFr ? 'Télécharger le CV' : 'Download CV'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom — copyright */}
        <div className="pt-6 text-center md:text-left">
          <p className="text-xs sm:text-sm text-slate-500">
            © {currentYear} Mounir Mahmoudi.{' '}
            {isFr ? 'Portfolio professionnel — Tous droits réservés.' : 'Professional Portfolio — All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
