import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Briefcase,
  Brain,
  MessageSquare,
  FileText,
  UserCheck,
  Globe,
  Zap,
  BarChart3,
  Clock,
  Shield,
  Lightbulb
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TrainingPage = () => {
  const [activeTab, setActiveTab] = useState('crt');

  const crtModules = [
    { icon: Brain, title: "Aptitude", desc: "Quantitative and logical reasoning skills" },
    { icon: MessageSquare, title: "Verbal Ability", desc: "Communication and language proficiency" },
    { icon: Target, title: "Technical Fundamentals", desc: "Core technical concepts and problem-solving" },
    { icon: FileText, title: "Resume Building", desc: "Professional resume crafting and optimization" },
    { icon: UserCheck, title: "Mock Interviews", desc: "Real-time interview practice sessions" },
    { icon: Users, title: "GD/PI Practice", desc: "Group discussions and personal interviews" }
  ];

  const corporatePrograms = [
    { icon: MessageSquare, title: "Soft Skills", desc: "Communication, teamwork, and interpersonal skills" },
    { icon: Briefcase, title: "Corporate Etiquette", desc: "Professional behavior and workplace conduct" },
    { icon: Globe, title: "Advanced Communication", desc: "Presentation skills and business communication" },
    { icon: Users, title: "Leadership", desc: "Team management and leadership development" },
    { icon: Zap, title: "Technical Upskilling", desc: "Cloud, ML, Web development, and emerging technologies" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Placement Officer, IIT Delhi",
      content: "TechProjectsHub's CRT program has significantly improved our students' placement rates. The comprehensive training and mock interviews are exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "HR Director, TechCorp",
      content: "The corporate training programs are perfectly tailored to our needs. Our employees' productivity has increased by 40% after the training.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Student, NIT Bangalore",
      content: "The CRT training helped me crack multiple interviews. The mock sessions and resume guidance were game-changers for my career.",
      rating: 5
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Trained", icon: GraduationCap },
    { number: "150+", label: "Colleges Partnered", icon: Building2 },
    { number: "200+", label: "Companies Served", icon: Briefcase },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Training Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block text-yellow-400">Learning Journey</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Empowering students and professionals with comprehensive training programs designed for success in today's competitive world.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('crt')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                activeTab === 'crt' 
                  ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Campus Recruitment Training
            </button>
            <button 
              onClick={() => setActiveTab('corporate')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                activeTab === 'corporate' 
                  ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Corporate Training
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Recruitment Training Section */}
      {activeTab === 'crt' && (
        <div className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Campus Recruitment Training</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Placement-Focused Training for Students
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive training programs designed to prepare students for successful campus placements and career opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Training Modules</h3>
                <div className="grid gap-4">
                  {crtModules.map((module, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <module.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                        <p className="text-gray-600 text-sm">{module.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Placement-Focused</h4>
                      <p className="text-gray-600 text-sm">Designed specifically for campus recruitment success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Experienced Trainers</h4>
                      <p className="text-gray-600 text-sm">Learn from industry experts and placement specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Reports</h4>
                      <p className="text-gray-600 text-sm">Detailed analytics and progress tracking for colleges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mock Interviews</h4>
                      <p className="text-gray-600 text-sm">Real-time practice with industry professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Partner with Us for CRT
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Training Section */}
      {activeTab === 'corporate' && (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Corporate Professional Training</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Development for Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Customized training solutions designed to enhance your workforce capabilities and drive organizational success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Training Programs</h3>
                <div className="space-y-4">
                  {corporatePrograms.map((program, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <program.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{program.title}</h4>
                        <p className="text-gray-600 text-sm">{program.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Customized Solutions</h4>
                      <p className="text-gray-600 text-sm">Tailored programs to meet specific company needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Delivery</h4>
                      <p className="text-gray-600 text-sm">Onsite and online training options available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Post-Training Evaluation</h4>
                      <p className="text-gray-600 text-sm">Comprehensive assessment and feedback system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry Experts</h4>
                      <p className="text-gray-600 text-sm">Learn from seasoned professionals and thought leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5" />
                Book Corporate Training
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients and students who have transformed their careers with our training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your training needs and get a customized solution.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-blue-100 text-sm">+91 9876543210</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-blue-100 text-sm">training@techprojectshub.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <MapPin className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Visit Us</div>
                <div className="text-blue-100 text-sm">Bangalore, India</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Send Enquiry
            </Link>
            <Link 
              to="/training" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View All Programs
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrainingPage;
