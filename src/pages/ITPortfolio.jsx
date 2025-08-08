import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Brain, 
  Cloud, 
  Shield, 
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ITPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'security', name: 'Cybersecurity', icon: Shield }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "TechStart Inc.",
      duration: "3 months",
      teamSize: "5 developers",
      rating: 4.8
    },
    {
      id: 2,
      title: "AI-Powered Chatbot",
      category: "ai",
      description: "Intelligent customer service chatbot using natural language processing. Handles customer queries, provides instant responses, and learns from interactions.",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "CustomerCare Solutions",
      duration: "2 months",
      teamSize: "3 developers",
      rating: 4.9
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Firebase"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "DigitalBank Ltd.",
      duration: "4 months",
      teamSize: "6 developers",
      rating: 4.7
    },
    {
      id: 4,
      title: "Cloud Migration Solution",
      category: "cloud",
      description: "Enterprise cloud migration strategy and implementation for legacy systems. Reduced infrastructure costs by 40% and improved performance.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "Enterprise Corp",
      duration: "6 months",
      teamSize: "8 developers",
      rating: 4.6
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      category: "database",
      description: "Real-time business intelligence dashboard with interactive charts, data visualization, and automated reporting capabilities.",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "Analytics Pro",
      duration: "3 months",
      teamSize: "4 developers",
      rating: 4.8
    },
    {
      id: 6,
      title: "Cybersecurity Platform",
      category: "security",
      description: "Comprehensive cybersecurity monitoring and threat detection system with real-time alerts and automated response mechanisms.",
      technologies: ["Python", "Elasticsearch", "Kafka", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "SecureNet",
      duration: "5 months",
      teamSize: "7 developers",
      rating: 4.9
    },
    {
      id: 7,
      title: "Learning Management System",
      category: "web",
      description: "Modern LMS platform with video streaming, interactive assessments, progress tracking, and collaborative learning features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "EduTech Solutions",
      duration: "4 months",
      teamSize: "5 developers",
      rating: 4.7
    },
    {
      id: 8,
      title: "IoT Smart Home System",
      category: "ai",
      description: "Intelligent home automation system with AI-powered energy optimization, security monitoring, and voice-controlled devices.",
      technologies: ["Python", "TensorFlow", "MQTT", "Raspberry Pi", "React Native"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      liveUrl: "#",
      githubUrl: "#",
      client: "SmartHome Tech",
      duration: "6 months",
      teamSize: "6 developers",
      rating: 4.8
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <Code className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our recent projects across various domains. Each project represents our commitment to innovation, 
              quality, and delivering exceptional value to our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Filter projects by technology domain</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.liveUrl} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a href={project.githubUrl} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{project.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Team: {project.teamSize}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    View Details
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Projects Found</h3>
              <p className="text-gray-600 mb-8">No projects available in this category at the moment.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/it-solutions" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ITPortfolio;
