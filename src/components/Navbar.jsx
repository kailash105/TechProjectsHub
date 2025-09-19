import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, LayoutDashboard, Phone, ChevronDown, Menu, X, BookOpen, Code, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/Logo.png';
import textLogo from '../assets/TechProjectsHub_TextLogo.png';
import { useAuth } from '../utils/AuthContext';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: Info },
    { to: "/services", label: "Services", icon: LayoutDashboard },
    { to: "/training", label: "Training", icon: BookOpen },
    { to: "/contact", label: "Contact", icon: Phone },
  ];

  const quickActions = [
    { to: "/it-solutions", label: "IT Solutions", icon: Code },
    { to: "/projects", label: "Projects", icon: LayoutDashboard },
    { to: "/research", label: "Research", icon: Globe },
  ];

  const servicesLinks = [
    { to: "/it-solutions", label: "IT Solutions" },
    { to: "/projects", label: "Project Mentorship" },
    { to: "/research", label: "Research Assistance" },
    { to: "/custom-projects", label: "Customized Projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-primary-500/10 border-b border-primary-200/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-300 ${
              scrolled ? 'bg-transparent' : 'bg-transparent'
            }`}>
              <img
                src={logo}
                alt="TechProjectsHub Logo"
                className="w-20 h-20 rounded-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <img
                src={textLogo}
                alt="TechProjectsHub"
                className="h-12 object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 font-semibold text-lg items-center">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const isActive = location.pathname === to;
              if (label === "Services") {
                return (
                  <div
                    key={to}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                        servicesOpen || isActive 
                          ? "bg-primary-100 text-primary-700" 
                          : scrolled 
                            ? "text-secondary-800 hover:bg-primary-50" 
                            : "text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-56 bg-white border border-primary-200 rounded-xl shadow-xl z-50 overflow-hidden"
                        >
                          {servicesLinks.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block px-6 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors text-base font-medium border-b border-primary-100 last:border-b-0"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-primary-100 text-primary-700"
                      : scrolled
                        ? "text-secondary-800 hover:bg-primary-50"
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="nav-capsule"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute inset-0 bg-primary-100 rounded-full z-0"
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative flex items-center gap-2 z-10">
                    <Icon className="w-5 h-5" />
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>

                  {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
        </div>



        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-lg rounded-xl mt-2 mb-4 overflow-hidden border border-white/20"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Navigation Links */}
                {navLinks.map(({ to, label, icon: Icon }) => {
                  const isActive = location.pathname === to;
                  if (label === "Services") {
                    return (
                      <div key={to} className="space-y-2">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-semibold text-gray-700">{label}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {servicesLinks.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={to}
                      to={to}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </Link>
                  );
                })}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
