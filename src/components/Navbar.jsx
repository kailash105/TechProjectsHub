import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, LayoutDashboard, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/Logo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

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
    { to: "/training", label: "Training", icon: LayoutDashboard },
    { to: "/contact", label: "Contact", icon: Phone },
  ];

  const servicesLinks = [
    { to: "/projects", label: "Projects" },
    { to: "/research-paper", label: "Research paper" },
    { to: "/projects-research-paper", label: "Projects + Research paper" },
    { to: "/custom-projects", label: "Customized Projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/30 border-b border-white/30"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Tech Projects Hub Logo"
            className="w-14 h-14 rounded-full object-cover transition-all duration-300 group-hover:scale-105"
          />
          <h1
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            } transition-all duration-300`}
          >
            TechProjectsHub
          </h1>
        </Link>

        <div className="flex gap-8 font-semibold text-lg items-center">
          {navLinks.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to;
            if (label === "Services") {
              return (
                <div
                  key={to}
                  className={`relative px-4 py-2 rounded-full focus:outline-none transition-colors duration-200 ${
                    servicesOpen || isActive ? "hover:bg-green-200/60 bg-green-200/60" : "hover:bg-green-200/60"
                  }`}
                  style={{ minWidth: 80 }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={to}
                    className="flex items-center gap-1 select-none w-full h-full"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span
                      className={`relative flex items-center gap-1 z-10 transition-colors duration-200 ${
                        isActive
                          ? "text-green-900"
                          : scrolled
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" /> {label}
                      <ChevronDown className="w-4 h-4 mt-1" />
                    </span>
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 w-56 bg-red-100 border border-red-200 rounded-xl shadow-lg z-50 overflow-hidden"
                      >
                        {servicesLinks.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block px-6 py-3 text-red-900 hover:bg-red-200 transition-colors text-base font-medium"
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
                className="relative px-4 py-2 rounded-full focus:outline-none"
                style={{ minWidth: 80 }}
              >
                <AnimatePresence>
                  {(isActive) && (
                    <motion.div
                      layoutId="nav-capsule"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-green-200/60 rounded-full z-0 shadow-md"
                    />
                  )}
                </AnimatePresence>
                <span
                  className={`relative flex items-center gap-1 z-10 transition-colors duration-200 ${
                    isActive
                      ? "text-green-900"
                      : scrolled
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" /> {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
