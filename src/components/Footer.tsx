import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-slate-300 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">mounir.mahmoudi@email.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-slate-300 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+216 XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-slate-300 transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tunis, Tunisia</span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Links
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub Portfolio</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                <FileText className="w-4 h-4" />
                <span className="text-sm">Download CV/Resume</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0 text-sm">
              © 2024 Mounir Mahmoudi. Professional Portfolio - All rights reserved.
            </div>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;