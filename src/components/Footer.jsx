import React from "react";
import { Link } from "react-router-dom";
// If you use react-icons, uncomment the next line and install the package
// import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-100 pt-12 pb-4">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/training" className="hover:underline">Training</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      {/* Services */}
      <div>
        <h3 className="font-bold text-lg mb-3">Services</h3>
        <ul className="space-y-2">
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/research-paper" className="hover:underline">Research paper</Link></li>
          <li><Link to="/projects-research-paper" className="hover:underline">Projects + Research paper</Link></li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <h3 className="font-bold text-lg mb-3">Company</h3>
        <ul className="space-y-2">
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          {/* <li><Link to="/careers" className="hover:underline">Careers</Link></li> */}
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="font-bold text-lg mb-3">Contact</h3>
        <ul className="space-y-2 text-sm">
          <li>123 Alpha Street, City, Country</li>
          <li>+1 234 567 8901</li>
          <li>
            <a href="mailto:info@alphagroups.com" className="hover:underline">
              info@alphagroups.com
            </a>
          </li>
        </ul>
      </div>
      {/* Social */}
      <div>
        <h3 className="font-bold text-lg mb-3">Social</h3>
        <div className="flex space-x-4 mt-2">
          {/* If using react-icons, use these: */}
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a> */}
          {/* Or use SVGs: */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-6 h-6 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-6 h-6 hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.29.058-2.18.25-2.95.53-.8.29-1.48.68-2.15 1.35-.67.67-1.06 1.35-1.35 2.15-.28.77-.472 1.66-.53 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.29.25 2.18.53 2.95.29.8.68 1.48 1.35 2.15.67.67 1.35 1.06 2.15 1.35.77.28 1.66.472 2.95.53C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.29-.058 2.18-.25 2.95-.53.8-.29 1.48-.68 2.15-1.35.67-.67 1.06-1.35 1.35-2.15.28-.77.472-1.66.53-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.29-.25-2.18-.53-2.95-.29-.8-.68-1.48-1.35-2.15-.67-.67-1.35-1.06-2.15-1.35-.77-.28-1.66-.472-2.95-.53C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-6 h-6 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
        </div>
      </div>
    </div>
    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Alpha Groups. All rights reserved.
    </div>
  </footer>
);

export default Footer;