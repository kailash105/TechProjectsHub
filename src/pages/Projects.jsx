import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { cseProjects } from "../data/cseProjects";
import { eeeProjects } from "../data/eeeProjects";
import { eceProjects } from "../data/eceProjects";
import { mechProjects } from "../data/mechProjects";
import { aimlProjects } from "../data/aimlProjects";
import { 
  Cpu, 
  Zap, 
  Brain, 
  Wifi, 
  Database, 
  Radio, 
  Settings, 
  Landmark,
  ListChecks,
  Search,
  Filter,
  ArrowLeft,
  Tag,
  Layers,
  BookOpen,
  Code,
  Calendar,
  Users,
  GraduationCap,
  Award,
  MapPin,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Department configuration with icons and colors
const departments = [
  { 
    id: "cse",
    name: "CSE", 
    fullName: "Computer Science Engineering",
    icon: <Cpu className="w-12 h-12 text-indigo-600" />,
    color: "from-primary-600 to-accent-indigo",
    projects: cseProjects,
    studentsMentored: 120,
    successRate: "98%"
  },
  { 
    id: "eee",
    name: "EEE", 
    fullName: "Electrical & Electronics Engineering",
    icon: <Zap className="w-12 h-12 text-accent-orange" />,
    color: "from-accent-orange to-accent-orange/80",
    projects: eeeProjects,
    studentsMentored: 85,
    successRate: "97%"
  },
  { 
    id: "aiml",
    name: "AIML", 
    fullName: "Artificial Intelligence & Machine Learning",
    icon: <Brain className="w-12 h-12 text-accent-purple" />,
    color: "from-accent-purple to-accent-purple/80",
    projects: aimlProjects,
    studentsMentored: 95,
    successRate: "99%"
  },
  { 
    id: "iot",
    name: "IoT", 
    fullName: "Internet of Things",
    icon: <Wifi className="w-12 h-12 text-green-600" />,
    color: "from-accent-emerald to-accent-emerald/80",
    projects: null,
    studentsMentored: 65,
    successRate: "96%"
  },
  { 
    id: "datascience",
    name: "Data Science", 
    fullName: "Data Science & Analytics",
    icon: <Database className="w-12 h-12 text-blue-600" />,
    color: "from-blue-600 to-cyan-600",
    projects: null,
    studentsMentored: 75,
    successRate: "98%"
  },
  { 
    id: "ece",
    name: "ECE", 
    fullName: "Electronics & Communication Engineering",
    icon: <Radio className="w-12 h-12 text-red-600" />,
    color: "from-accent-orange to-accent-orange/80",
    projects: eceProjects,
    studentsMentored: 90,
    successRate: "97%"
  },
  { 
    id: "mech",
    name: "MECH", 
    fullName: "Mechanical Engineering",
    icon: <Settings className="w-12 h-12 text-gray-700" />,
    color: "from-gray-700 to-slate-700",
    projects: mechProjects,
    studentsMentored: 45,
    successRate: "95%"
  },
  { 
    id: "civil",
    name: "CIVIL", 
    fullName: "Civil Engineering",
    icon: <Landmark className="w-12 h-12 text-amber-700" />,
    color: "from-accent-orange to-accent-orange/80",
    projects: null,
    studentsMentored: 35,
    successRate: "96%"
  },
];

function Projects() {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState("all"); // all, major, minor
  const [searchTerm, setSearchTerm] = useState("");

  // Get all projects for selected department
  const getAllProjectsForDepartment = (department) => {
    if (!department.projects) return [];
    
    const allProjects = [];
    
    // Add major projects
    if (department.projects.major) {
      Object.values(department.projects.major).forEach(domain => {
        domain.projects.forEach(project => {
          allProjects.push({
            ...project,
            type: "Major",
            domain: domain.title,
            studentsCompleted: Math.floor(Math.random() * 50) + 10, // Random number for demo
            averageRating: (Math.random() * 0.5 + 4.5).toFixed(1) // Random rating between 4.5-5.0
          });
        });
      });
    }
    
    // Add minor projects
    if (department.projects.minor) {
      Object.values(department.projects.minor).forEach(domain => {
        domain.projects.forEach(project => {
          allProjects.push({
            ...project,
            type: "Minor",
            domain: domain.title,
            studentsCompleted: Math.floor(Math.random() * 30) + 5,
            averageRating: (Math.random() * 0.5 + 4.5).toFixed(1)
          });
        });
      });
    }
    
    return allProjects;
  };

  // Filter projects based on search and type
  const getFilteredProjects = () => {
    if (!selectedDepartment || !selectedDepartment.projects) return [];
    
    const allProjects = getAllProjectsForDepartment(selectedDepartment);
    
    return allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedProjectType === "all" || 
                         (selectedProjectType === "major" && project.type === "Major") ||
                         (selectedProjectType === "minor" && project.type === "Minor");
      
      return matchesSearch && matchesType;
    });
  };

  const filteredProjects = getFilteredProjects();

  if (selectedDepartment) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        
        {/* Department Header */}
        <div className={`relative w-full h-80 flex items-center justify-center text-center overflow-hidden bg-gradient-to-r ${selectedDepartment.color} pt-20`}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="mr-4">{selectedDepartment.icon}</div>
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-2 drop-shadow-lg">
                  {selectedDepartment.fullName}
                </h1>
                <p className="text-xl text-gray-200">Project Mentorship Portfolio</p>
              </div>
            </div>
            
            {/* Mentorship Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{selectedDepartment.studentsMentored}+ Students Mentored</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{selectedDepartment.successRate} Success Rate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Across India</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button
                onClick={() => setSelectedDepartment(null)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Departments
              </button>
              <button
                onClick={() => window.open('https://forms.gle/RRJzDS64HQxXDimeA', '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-200"
              >
                <GraduationCap className="w-5 h-5" />
                Get Project Mentorship
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mentorship Info Section */}
        <div className="max-w-7xl mx-auto w-full px-6 py-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-10 mb-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Expert Project Mentorship</h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    We've successfully mentored thousands of students across India to complete their academic projects. 
                    Our expert mentors provide step-by-step guidance, technical support, and industry insights to help 
                    students build impressive portfolios and gain practical experience.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Expert Mentors</div>
                        <div className="text-sm text-blue-200">Industry Professionals</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Proven Results</div>
                        <div className="text-sm text-blue-200">98% Success Rate</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Flexible Support</div>
                        <div className="text-sm text-blue-200">24/7 Availability</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-blue-100">Personalized project guidance and mentorship</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-blue-100">Technical support and code review</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-blue-100">Documentation and presentation assistance</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-blue-100">Industry best practices and insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search mentored projects by title, category, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                />
              </div>
              
              {/* Project Type Filter */}
              <div className="flex items-center gap-3">
                <Filter className="w-6 h-6 text-gray-600" />
                <span className="text-gray-700 font-semibold text-lg">Filter:</span>
              </div>
            </div>
            
            {/* Enhanced Project Type Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setSelectedProjectType("all")}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedProjectType === "all"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                <Layers className="w-5 h-5" />
                All Projects
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {getAllProjectsForDepartment(selectedDepartment).length}
                </span>
              </button>
              <button
                onClick={() => setSelectedProjectType("major")}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedProjectType === "major"
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Major Projects
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {getAllProjectsForDepartment(selectedDepartment).filter(p => p.type === "Major").length}
                </span>
              </button>
              <button
                onClick={() => setSelectedProjectType("minor")}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedProjectType === "minor"
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                <Code className="w-5 h-5" />
                Minor Projects
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {getAllProjectsForDepartment(selectedDepartment).filter(p => p.type === "Minor").length}
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Results Count */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Search Results</h3>
                    <p className="text-gray-600">
                      Showing <span className="font-bold text-blue-600">{filteredProjects.length}</span> mentored projects
                      {searchTerm && ` for "${searchTerm}"`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{filteredProjects.length}</div>
                  <div className="text-sm text-gray-500">Projects Found</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Projects Table */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-lg">Project Title</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Category</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Type</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Domain</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Technologies</th>
                    <th className="px-8 py-6 text-center font-bold text-lg">Students</th>
                    <th className="px-8 py-6 text-center font-bold text-lg">Rating</th>
                    <th className="px-8 py-6 text-center font-bold text-lg">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredProjects.map((project, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-all duration-200 group">
                      <td className="px-8 py-6">
                        <div className="max-w-xs">
                          <h3 className="font-bold text-gray-900 line-clamp-2 text-lg group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          {project.category}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                          project.type === "Major" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-purple-100 text-purple-800"
                        }`}>
                          {project.type}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm text-gray-600 font-medium">{project.domain}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-wrap gap-2 max-w-xs">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-5 h-5 text-blue-500" />
                          <span className="font-bold text-gray-700">{project.studentsCompleted}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-700">{project.averageRating}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <button 
                          onClick={() => window.open('https://forms.gle/RRJzDS64HQxXDimeA', '_blank')}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enhanced No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Projects Found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any projects matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedProjectType("all");
                  }}
                  className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Main departments view
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
                <h1 className="text-3xl md:text-4xl font-bold text-center">Projects</h1>
              </div>
            </div>

            {/* Rectangle 4 - Description Text Section (No Container) */}
            <div className="text-white flex flex-col justify-center h-full lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Academic Project Excellence
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Transform your academic journey with our comprehensive project mentorship program. 
                We provide expert guidance, technical support, and industry insights to help students 
                build exceptional projects that stand out in their academic portfolio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Expert Mentorship</h3>
                  <p className="text-sm text-slate-200">Industry professionals guide your project</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Technical Excellence</h3>
                  <p className="text-sm text-slate-200">Cutting-edge technologies and methodologies</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Comprehensive Support</h3>
                  <p className="text-sm text-slate-200">From concept to final implementation</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Proven Results</h3>
                  <p className="text-sm text-slate-200">98% success rate across all domains</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Services Section */}
      <div className="max-w-7xl mx-auto w-full px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Project Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic project support with industry-standard methodologies, 
            expert mentorship, and proven success across diverse engineering domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Mentorship</h3>
            <p className="text-gray-600 leading-relaxed">
              Industry professionals with advanced degrees and extensive experience guide your project 
              from conception to completion with personalized attention and technical expertise.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Demonstrated success with 98% completion rate across 500+ projects, 
              ensuring high-quality deliverables that meet academic standards and industry expectations.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Flexible Engagement</h3>
            <p className="text-gray-600 leading-relaxed">
              Adaptive scheduling and communication channels to accommodate your academic timeline 
              with round-the-clock support and milestone-based progress tracking.
            </p>
          </div>
        </div>

        {/* Additional Navigation Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 bg-primary-600 text-white rounded-full font-semibold shadow-lg hover:bg-primary-700 transition-all duration-200"
            onClick={() => navigate("/custom-projects")}
          >
            Custom Project Guidance
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition-all duration-200 flex items-center gap-2"
            onClick={() => window.open('https://forms.gle/RRJzDS64HQxXDimeA', '_blank')}
          >
            <GraduationCap className="w-5 h-5" />
            Get Project Mentorship
          </button>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="relative group rounded-3xl shadow-xl bg-white border border-gray-200 flex flex-col items-center justify-center p-8 min-h-[320px] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => setSelectedDepartment(dept)}
            >
              <div className="mb-4">{dept.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{dept.name}</h2>
              <p className="text-sm text-gray-600 text-center mb-4">{dept.fullName}</p>
              
              {/* Mentorship Stats */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium mb-1">
                  <Users className="w-4 h-4" />
                  {dept.studentsMentored}+ Students
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
                  <Award className="w-4 h-4" />
                  {dept.successRate} Success Rate
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 text-sm">
                {dept.projects ? (
                  <span className="text-green-600 font-medium">Mentorship Available</span>
                ) : (
                  <span className="text-gray-400 font-medium">Coming Soon</span>
                )}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-accent-indigo/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Get Mentorship</h3>
                  <p className="text-sm opacity-90">Explore our mentored projects portfolio</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects; 