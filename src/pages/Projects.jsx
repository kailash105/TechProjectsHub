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
    color: "from-indigo-600 to-purple-600",
    projects: cseProjects,
    studentsMentored: 120,
    successRate: "98%"
  },
  { 
    id: "eee",
    name: "EEE", 
    fullName: "Electrical & Electronics Engineering",
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    color: "from-yellow-500 to-orange-500",
    projects: eeeProjects,
    studentsMentored: 85,
    successRate: "97%"
  },
  { 
    id: "aiml",
    name: "AIML", 
    fullName: "Artificial Intelligence & Machine Learning",
    icon: <Brain className="w-12 h-12 text-pink-600" />,
    color: "from-pink-600 to-rose-600",
    projects: aimlProjects,
    studentsMentored: 95,
    successRate: "99%"
  },
  { 
    id: "iot",
    name: "IoT", 
    fullName: "Internet of Things",
    icon: <Wifi className="w-12 h-12 text-green-600" />,
    color: "from-green-600 to-emerald-600",
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
    color: "from-red-600 to-pink-600",
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
    color: "from-amber-700 to-yellow-600",
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
        <div className={`relative w-full h-80 flex items-center justify-center text-center overflow-hidden bg-gradient-to-r ${selectedDepartment.color}`}>
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

        {/* Mentorship Info Section */}
        <div className="max-w-7xl mx-auto w-full px-6 py-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Expert Project Mentorship</h2>
                <p className="text-lg text-blue-100 mb-6">
                  We've successfully mentored thousands of students across India to complete their academic projects. 
                  Our expert mentors provide step-by-step guidance, technical support, and industry insights to help 
                  students build impressive portfolios and gain practical experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>Expert Mentors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    <span>Industry Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Flexible Scheduling</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized project guidance and mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Technical support and code review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documentation and presentation assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Industry best practices and insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search mentored projects by title, category, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Project Type Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
            </div>
            
            {/* Project Type Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => setSelectedProjectType("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedProjectType === "all"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Layers className="w-5 h-5" />
                All Projects
              </button>
              <button
                onClick={() => setSelectedProjectType("major")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedProjectType === "major"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Major Projects
              </button>
              <button
                onClick={() => setSelectedProjectType("minor")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedProjectType === "minor"
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Code className="w-5 h-5" />
                Minor Projects
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-blue-600">{filteredProjects.length}</span> mentored projects
            </p>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Project Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Domain</th>
                    <th className="px-6 py-4 text-left font-semibold">Technologies</th>
                    <th className="px-6 py-4 text-center font-semibold">Students Completed</th>
                    <th className="px-6 py-4 text-center font-semibold">Rating</th>
                    <th className="px-6 py-4 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProjects.map((project, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="max-w-xs">
                          <h3 className="font-semibold text-gray-900 line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {project.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          project.type === "Major" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-purple-100 text-purple-800"
                        }`}>
                          {project.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{project.domain}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="font-medium text-gray-700">{project.studentsCompleted}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium text-gray-700">{project.averageRating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => window.open('https://forms.gle/RRJzDS64HQxXDimeA', '_blank')}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No mentored projects found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters</p>
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
      <div className="relative w-full h-[420px] md:h-[520px] flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Projects/Projects.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative z-10 text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Project Mentorship Portfolio
        </h1>
        <p className="relative z-10 text-lg text-white max-w-2xl mx-auto mb-6">
          Expert guidance for students across India. We've mentored thousands of students to successfully complete their academic projects.
        </p>
        
        {/* Stats */}
        <div className="relative z-10 flex flex-wrap justify-center gap-6">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Students Mentored</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm">Success Rate</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Expert Mentors</div>
          </div>
        </div>
      </div>

      {/* Mentorship Info Section */}
      <div className="max-w-6xl mx-auto w-full px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Mentorship?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide personalized guidance, technical expertise, and industry insights to help students 
            build impressive projects and gain practical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
            <p className="text-gray-600">Industry professionals with years of experience in their respective domains.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Proven Success</h3>
            <p className="text-gray-600">98% success rate with 500+ students across India.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible Support</h3>
            <p className="text-gray-600">Round-the-clock support with flexible scheduling options.</p>
          </div>
        </div>

        {/* Additional Navigation Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-200"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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