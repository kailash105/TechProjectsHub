import React from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  BookOpen, 
  Layers, 
  Code, 
  Cloud, 
  Brain, 
  Globe, 
  Palette,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Target
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const serviceFeatures = [
    { icon: Shield, text: "100% Original Content" },
    { icon: CheckCircle, text: "Expert Quality Assurance" },
    { icon: Users, text: "24/7 Support" },
    { icon: Award, text: "Academic Excellence" }
  ];

  const departments = [
    "Computer Science Engineering (CSE)",
    "Electrical & Electronics Engineering (EEE)", 
    "Artificial Intelligence & Machine Learning (AIML)",
    "Internet of Things (IoT)",
    "Data Science",
    "Electronics & Communication Engineering (ECE)",
    "Mechanical Engineering (MECH)",
    "Civil Engineering"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 text-white px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 animate-float">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Empowering students and professionals with high-quality projects, research support, 
              and cutting-edge IT solutions across all engineering departments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <feature.icon className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                Explore Services
              </h3>
              <div className="animate-bounce">
                <svg 
                  className="w-8 h-8 text-white drop-shadow-lg" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Tech Projects Hub, we provide a comprehensive suite of academic and technical services 
              for all engineering branches. Choose from mini or major projects, research papers, 
              IT solutions, or training programs to suit your academic and business needs.
            </p>
          </div>

          {/* Departments Covered */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-3">
              <Target className="w-8 h-8 text-purple-600" />
              Departments We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{dept}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {/* IT SOLUTIONS */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">IT Solutions</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At TechProjectsHub, we deliver cutting-edge IT Solutions tailored to meet diverse business 
                  and academic needs. Our expertise spans from custom web development and full-stack application 
                  design to advanced AI and machine learning solutions that empower data-driven decision-making.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Cloud className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-700">Cloud Solutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-700">AI & ML Applications</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-700">Web Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Palette className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-700">UI/UX Design</span>
                  </div>
                </div>
                <Link 
                  to="/it-solutions" 
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                  onClick={() => window.scrollTo(0,0)}
                >
                  Explore IT Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl transform rotate-6 scale-105"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <Code className="w-24 h-24 text-purple-500 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-center text-gray-900 mb-4">Custom Solutions</h4>
                    <p className="text-gray-600 text-center">
                      Tailored IT solutions for your specific business and academic requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Academic Projects</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get expertly crafted mini and major projects for all engineering departments. 
                  Our projects are tailored to your curriculum and requirements, ensuring originality, 
                  technical depth, and academic excellence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Mini & Major Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">All Engineering Branches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Documentation & Reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Source Code & Implementation</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
                    onClick={() => window.scrollTo(0,0)}
                  >
                    Explore Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/custom-projects" 
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
                    onClick={() => window.scrollTo(0,0)}
                  >
                    Customized Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl transform -rotate-6 scale-105"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <FileText className="w-24 h-24 text-indigo-500 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-center text-gray-900 mb-4">Academic Excellence</h4>
                    <p className="text-gray-600 text-center">
                      High-quality projects that meet academic standards and industry requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RESEARCH PAPER */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Research Papers</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We assist in writing, editing, and publishing research papers for all engineering 
                  and technology domains. Our experts help you meet academic standards and achieve 
                  publication in reputed journals and conferences.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Original Research Content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Journal Publication Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Conference Paper Preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Plagiarism-Free Content</span>
                  </div>
                </div>
                <Link 
                  to="/research" 
                  className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-800 transition-colors group"
                  onClick={() => window.scrollTo(0,0)}
                >
                  Explore Research Papers
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl transform rotate-6 scale-105"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <BookOpen className="w-24 h-24 text-pink-500 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-center text-gray-900 mb-4">Research Excellence</h4>
                    <p className="text-gray-600 text-center">
                      High-quality research papers for academic and professional advancement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRAINING */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Training Programs</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Master the latest technologies with our comprehensive training programs. 
                  From web development and data science to AI/ML and cloud computing, 
                  our expert-led courses prepare you for industry success.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-3">Training Features:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-700">Live Interactive Sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-700">Hands-on Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-700">Industry-Relevant Curriculum</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-700">Certificate of Completion</span>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/training" 
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-800 transition-colors group"
                  onClick={() => window.scrollTo(0,0)}
                >
                  Explore Training Programs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform -rotate-6 scale-105"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <BookOpen className="w-24 h-24 text-orange-500 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-center text-gray-900 mb-4">Skill Development</h4>
                    <p className="text-gray-600 text-center">
                      Comprehensive training programs to enhance your technical skills and career prospects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
