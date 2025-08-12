import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { cseProjects } from "../data/cseProjects";
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield, 
  Globe, 
  Zap,
  Search,
  Filter,
  ArrowRight,
  Tag,
  Layers
} from "lucide-react";

function CseMajor() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Get all major projects
  const allMajorProjects = Object.values(cseProjects.major).flatMap(domain => domain.projects);

  // Filter projects based on search and domain
  const filteredProjects = allMajorProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDomain = selectedDomain === "all" || 
                         (selectedDomain === "ai" && (project.technologies.includes("Python") || project.technologies.includes("Machine Learning") || project.technologies.includes("Deep Learning"))) ||
                         (selectedDomain === "web" && (project.technologies.includes("Web Development") || project.technologies.includes("React") || project.technologies.includes("Node.js"))) ||
                         (selectedDomain === "mobile" && project.technologies.includes("Android")) ||
                         (selectedDomain === "cloud" && project.technologies.includes("Cloud Computing")) ||
                         (selectedDomain === "blockchain" && project.technologies.includes("Blockchain")) ||
                         (selectedDomain === "quantum" && project.technologies.includes("Quantum Computing"));

    return matchesSearch && matchesDomain;
  });

  const domains = [
    { id: "all", name: "All Domains", icon: <Layers className="w-5 h-5" />, color: "bg-gray-500" },
    { id: "ai", name: "AI/ML", icon: <Brain className="w-5 h-5" />, color: "bg-purple-500" },
    { id: "web", name: "Web Development", icon: <Globe className="w-5 h-5" />, color: "bg-blue-500" },
    { id: "mobile", name: "Mobile Apps", icon: <Smartphone className="w-5 h-5" />, color: "bg-green-500" },
    { id: "cloud", name: "Cloud Computing", icon: <Cloud className="w-5 h-5" />, color: "bg-indigo-500" },
    { id: "blockchain", name: "Blockchain", icon: <Shield className="w-5 h-5" />, color: "bg-yellow-500" },
    { id: "quantum", name: "Quantum Computing", icon: <Zap className="w-5 h-5" />, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-80 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            CSE Major Projects
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore {allMajorProjects.length}+ comprehensive Computer Science Major Projects across AI/ML, 
            Web Development, Mobile Apps, Cloud Computing, Blockchain, and Quantum Computing.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto w-full px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects by title, category, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Domain Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter:</span>
            </div>
          </div>
          
          {/* Domain Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedDomain === domain.id
                    ? `${domain.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {domain.icon}
                {domain.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-green-600">{filteredProjects.length}</span> of {allMajorProjects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors group">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CseMajor; 