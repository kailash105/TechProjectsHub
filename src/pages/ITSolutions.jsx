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
  Target
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
      description: "Custom web applications, e-commerce platforms, and responsive websites built with modern technologies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions including predictive analytics, NLP, computer vision, and deep learning applications.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure on Azure, AWS, and GCP with containerization and DevOps practices.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions with intuitive interfaces, wireframing, and brand-focused visual design.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Solutions",
      description: "Data engineering, analytics, and business intelligence solutions to transform data into insights.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including penetration testing and security architecture design.",
      color: "from-red-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Agile development methodology ensures quick turnaround times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Built-in security measures and best practices"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business needs"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced developers with deep industry knowledge"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Cutting-edge technologies and innovative approaches"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a comprehensive project roadmap"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating detailed technical specifications and system architecture"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development process with continuous testing and quality assurance"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and technical support"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-white px-6 max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Code className="w-10 h-10 text-purple-300" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions tailored to meet diverse business and academic needs. 
            We deliver innovative, scalable, and future-ready solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive IT solutions that empower businesses to thrive in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechProjectsHub</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="flex justify-center mb-6">
            <Star className="w-12 h-12 text-yellow-300" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's discuss how our IT solutions can help you achieve your goals and stay ahead in the digital era.
          </p>
          
          {/* CTA Buttons */}
          <div className="mb-8">
            <CTAButtons 
              className="mb-6" 
              onConsultationClick={() => setShowConsultation(true)}
            />
          </div>
          
          <div className="text-sm text-purple-200">
            Get started, view portfolio, schedule consultation, and start your projects
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
