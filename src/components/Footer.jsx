import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowUp, Download, Share2, Heart } from "lucide-react";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TechProjectsHub',
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">TechProjectsHub</h3>
                  <p className="text-sm text-gray-400">Innovation Hub</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Leading provider of technical projects, training, and research assistance. 
                Empowering students and professionals with cutting-edge technology solutions.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/techprojectshub/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                   className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/techprojectshub?igsh=MXdwdHRyaHNnMnMw" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.29.058-2.18.25-2.95.53-.8.29-1.48.68-2.15 1.35-.67.67-1.06 1.35-1.35 2.15-.28.77-.472 1.66-.53 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.29.25 2.18.53 2.95.29.8.68 1.48 1.35 2.15.67.67 1.35 1.06 2.15 1.35.77.28 1.66.472 2.95.53C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.29-.058 2.18-.25 2.95-.53.8-.29 1.48-.68 2.15-1.35.67-.67 1.06-1.35 1.35-2.15.28-.77.472-1.66.53-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.29-.25-2.18-.53-2.95-.29-.8-.68-1.48-1.35-2.15-.67-.67-1.35-1.06-2.15-1.35-.77-.28-1.66-.472-2.95-.53C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-4 text-white flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Home
                </Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  About
                </Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Services
                </Link></li>
                <li><Link to="/training" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Training
                </Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Contact
                </Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-base mb-4 text-white flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                Services
              </h3>
              <ul className="space-y-2">
                <li><Link to="/it-solutions" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  IT Solutions
                </Link></li>
                <li><Link to="/projects" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Project Mentorship
                </Link></li>
                <li><Link to="/research" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Research Assistance
                </Link></li>
                <li><Link to="/custom-projects" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Customized Projects
                </Link></li>
                <li><Link to="/training" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Training Programs
                </Link></li>
              </ul>
            </div>

            {/* Research Services */}
            <div>
              <h3 className="font-bold text-base mb-4 text-white flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                Research Assistance
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-300">Paper Writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-300">Literature Review</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-300">Data Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-300">Research Consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-300">Paper Editing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Address
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Hig-16, duplex <br />
                  balaji nagar, Kukatpally-500072 India
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-green-400" />
                  Contact
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Primary Phone: +91 81210 99912<br />
                  Alternative Phone: +91 83090 32802 <br />
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-purple-400" />
                  Email
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  <a href="mailto:info@techprojectshub.com" className="hover:text-blue-400 transition-colors">
                    info@techprojectshub.com
                  </a><br />
                  <a href="mailto:support@techprojectshub.com" className="hover:text-blue-400 transition-colors">
                    support@techprojectshub.com
                  </a>
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-400" />
                  Business Hours
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  © {currentYear} TechProjectsHub. All rights reserved.
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  title="Share this page"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <a
                  href="/brochure.pdf"
                  download
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                  title="Download brochure"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Brochure</span>
                </a>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                  title="Back to top"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;