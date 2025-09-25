import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Cloud, 
  Brain, 
  Globe, 
  Palette, 
  Database, 
  Shield, 
  Zap,
  Users,
  Settings,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Target,
  TrendingUp,
  Lightbulb,
  Lock,
  BarChart3,
  MessageSquare,
  ThumbsUp,
  Briefcase,
  Headphones
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTAButtons from "../components/CTAButtons";
import ConsultationModal from "../components/ConsultationModal";

function ITSolutions() {
  const [showConsultation, setShowConsultation] = useState(false);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications, e-commerce platforms, and enterprise solutions built with React, Node.js, and modern frameworks.",
      features: ["Responsive Design", "Performance Optimization", "SEO Integration", "Cross-browser Compatibility"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation, predictive analytics, and AI-powered solutions including NLP, computer vision, and deep learning applications.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and DevOps solutions on Azure, AWS, and Google Cloud Platform.",
      features: ["Cloud Migration", "Auto-scaling", "DevOps Implementation", "Cost Optimization"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions with intuitive interfaces, wireframing, prototyping, and brand-focused visual design.",
      features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Solutions",
      description: "Data engineering, analytics, and business intelligence solutions to transform raw data into actionable business insights.",
      features: ["Data Pipeline", "Business Intelligence", "Real-time Analytics", "Data Visualization"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, and security architecture design.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      color: "from-red-500 to-red-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Expertise",
      description: "Certified professionals with 5+ years of experience in enterprise-grade solutions"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance with industry standards"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI-Focused",
      description: "Solutions designed to deliver measurable business value and competitive advantage"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 technical support with dedicated account managers for enterprise clients"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Leadership",
      description: "Early adoption of cutting-edge technologies and industry best practices"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business requirements"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Comprehensive business analysis, requirement gathering, and strategic roadmap development"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Technical architecture design, UI/UX planning, and system integration specifications"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, testing, and quality assurance"
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Seamless deployment, performance optimization, and ongoing maintenance support"
    }
  ];

  const clientSuccess = [
    {
      company: "TechCorp Solutions",
      industry: "Fintech",
      project: "AI-Powered Trading Platform",
      result: "40% increase in trading efficiency",
      testimonial: "TechProjectsHub delivered an exceptional AI solution that transformed our trading operations. Their expertise in machine learning and real-time data processing exceeded our expectations.",
      author: "Sarah Johnson, CTO"
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      project: "Cloud-Based Patient Management System",
      result: "60% reduction in administrative costs",
      testimonial: "The cloud solution provided by TechProjectsHub has revolutionized our patient management. The scalability and security features are outstanding.",
      author: "Dr. Michael Chen, CEO"
    },
    {
      company: "E-Commerce Plus",
      industry: "Retail",
      project: "Omnichannel E-commerce Platform",
      result: "150% increase in online sales",
      testimonial: "Their full-stack development expertise helped us create a seamless shopping experience. The platform handles high traffic effortlessly.",
      author: "Lisa Rodriguez, VP Technology"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 pt-20">
        {/* Glassy Professional Background */}
        <div className="absolute inset-0 bg-slate-700/80 backdrop-blur-sm"></div>
        
        {/* Main Container - Rectangle 1 */}
        <div className="w-full max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-full items-center">
            
            {/* Rectangle 3 - Page Title Section */}
            <div className="flex justify-start">
              <div className="w-64 h-64 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/40" style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)'
              }}>
                <h1 className="text-3xl md:text-4xl font-bold text-center">IT Solutions</h1>
              </div>
            </div>

            {/* Rectangle 4 - Description Text Section (No Container) */}
            <div className="text-white flex flex-col justify-center h-full lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Transform Your Business with Cutting-Edge Technology
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
                We deliver scalable, secure, and innovative IT services that drive growth and competitive advantage. 
                Our enterprise-grade solutions are designed to accelerate your digital transformation journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Web Development</h3>
                  <p className="text-sm text-slate-200">Full-stack applications & e-commerce platforms</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">AI & ML Solutions</h3>
                  <p className="text-sm text-slate-200">Intelligent automation & predictive analytics</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Cloud Solutions</h3>
                  <p className="text-sm text-slate-200">Scalable infrastructure & DevOps</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">UI/UX Design</h3>
                  <p className="text-sm text-slate-200">User-centered design solutions</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechProjectsHub</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive measurable results and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures quality, transparency, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Success Stories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses transform their operations and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientSuccess.map((success, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{success.company}</h4>
                    <p className="text-sm text-gray-600">{success.industry}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{success.project}</h3>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {success.result}
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "{success.testimonial}"
                </blockquote>
                <cite className="text-sm text-gray-500">— {success.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results and measurable impact across diverse industries and project types.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-gray-600 font-semibold">Enterprise Projects</div>
              <div className="text-sm text-gray-500 mt-1">Successfully Delivered</div>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-gray-600 font-semibold">Satisfied Clients</div>
              <div className="text-sm text-gray-500 mt-1">Across Industries</div>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-600 font-semibold">Uptime Guarantee</div>
              <div className="text-sm text-gray-500 mt-1">Enterprise SLA</div>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
              <div className="text-sm text-gray-500 mt-1">Average Team Member</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Accelerate Your Digital Transformation?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Partner with TechProjectsHub to unlock your business potential. Our enterprise-grade solutions 
            deliver measurable ROI, enhanced security, and competitive advantage in today's digital landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Briefcase className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Solutions</h3>
              <p className="text-blue-100 text-sm">Scalable, secure, and compliant</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MessageSquare className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-blue-100 text-sm">Strategic technology guidance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Headphones className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Round-the-clock assistance</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mb-8">
            <CTAButtons 
              className="mb-6" 
              onConsultationClick={() => setShowConsultation(true)}
            />
          </div>
          
          <div className="text-sm text-blue-200">
            Schedule a consultation • View our portfolio • Start your digital transformation journey
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)} 
      />
    </div>
  );
}

export default ITSolutions;
