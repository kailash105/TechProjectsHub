import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import apiService from "../utils/api";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Download,
  Eye,
  Calendar,
  DollarSign
} from 'lucide-react';

const DynamicTraining = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCourses();
  }, [currentPage, searchTerm, categoryFilter, levelFilter]);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const params = {
        page: currentPage,
        limit: 12,
        ...(searchTerm && { search: searchTerm }),
        ...(categoryFilter && { category: categoryFilter }),
        ...(levelFilter && { level: levelFilter })
      };

      const response = await apiService.getPublicCourses(params);
      
      setCourses(response.courses || []);
      setTotalPages(response.pagination?.totalPages || 1);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to load courses');
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryBadge = (category) => {
    const categories = {
      'web-development': { color: 'bg-blue-100 text-blue-800', label: 'Web Development' },
      'data-science': { color: 'bg-green-100 text-green-800', label: 'Data Science' },
      'ai-ml': { color: 'bg-purple-100 text-purple-800', label: 'AI/ML' },
      'mobile-development': { color: 'bg-orange-100 text-orange-800', label: 'Mobile Dev' },
      'cloud-computing': { color: 'bg-indigo-100 text-indigo-800', label: 'Cloud Computing' },
      'blockchain': { color: 'bg-yellow-100 text-yellow-800', label: 'Blockchain' },
      'vlsi': { color: 'bg-red-100 text-red-800', label: 'VLSI Design' },
      'programming': { color: 'bg-gray-100 text-gray-800', label: 'Programming' }
    };
    
    const cat = categories[category] || { color: 'bg-gray-100 text-gray-800', label: category };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cat.color}`}>
        {cat.label}
      </span>
    );
  };

  const getLevelBadge = (level) => {
    const levels = {
      'beginner': { color: 'bg-green-100 text-green-800', label: 'Beginner' },
      'intermediate': { color: 'bg-yellow-100 text-yellow-800', label: 'Intermediate' },
      'advanced': { color: 'bg-red-100 text-red-800', label: 'Advanced' }
    };
    
    const levelInfo = levels[level] || { color: 'bg-gray-100 text-gray-800', label: level };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${levelInfo.color}`}>
        {levelInfo.label}
      </span>
    );
  };

  const getDefaultImage = (category) => {
    const images = {
      'web-development': '/src/assets/ImagesforTraining/full-stack-web-developer.png',
      'data-science': '/src/assets/ImagesforTraining/DataScience.webp',
      'ai-ml': '/src/assets/ImagesforTraining/AIML.png',
      'mobile-development': '/src/assets/ImagesforTraining/full-stack-web-developer.png',
      'cloud-computing': '/src/assets/ImagesforTraining/Azure.png',
      'blockchain': '/src/assets/ImagesforTraining/Blockchain.png',
      'vlsi': '/src/assets/ImagesforTraining/VLSI.png',
      'programming': '/src/assets/ImagesforTraining/Python.png'
    };
    return images[category] || '/src/assets/ImagesforTraining/full-stack-web-developer.png';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Courses</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchCourses}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Training/Trainingvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-green-200 drop-shadow-lg">Training & Workshops</h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Enhance your skills with our hands-on training sessions and workshops, tailored for students and professionals in all technical domains.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="ai-ml">AI/ML</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="vlsi">VLSI Design</option>
                  <option value="programming">Programming</option>
                </select>
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setCategoryFilter('');
                    setLevelFilter('');
                    setCurrentPage(1);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Training Cards Grid */}
      <div className="relative py-16 px-2 sm:px-4 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {courses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {courses.map((course) => (
                  <div
                    key={course._id}
                    className="group rounded-3xl shadow-2xl bg-white/80 border border-transparent hover:border-green-400 hover:shadow-green-200/60 backdrop-blur-lg flex flex-col items-center justify-between p-8 min-h-[320px] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden relative"
                    style={{ boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10), 0 1.5px 8px 0 rgba(59,130,246,0.08)' }}
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-green-300 via-blue-200 to-white blur-2xl opacity-40 z-0" />
                    <div className="relative z-10 w-24 h-24 mb-4 rounded-2xl bg-white/80 border-2 border-green-200 group-hover:border-green-400 shadow-lg flex items-center justify-center overflow-hidden transition-transform group-hover:-translate-y-2">
                      <img 
                        src={getDefaultImage(course.category)} 
                        alt={course.title} 
                        className="object-contain w-20 h-20 drop-shadow-lg" 
                      />
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-1 text-center drop-shadow group-hover:scale-105 transition-transform">
                        {course.title}
                      </h2>
                      <div className="flex gap-2 mb-2">
                        {getCategoryBadge(course.category)}
                        {getLevelBadge(course.level)}
                      </div>
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 shadow-sm">
                        {course.duration}
                      </span>
                      <p className="text-gray-700 text-sm text-center mb-4 min-h-[40px]">
                        {course.shortDescription || course.description.substring(0, 80)}...
                      </p>
                      
                      {/* Course Stats */}
                      <div className="flex items-center justify-between w-full text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {course.enrolledStudents} students
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                          {course.rating?.average || 0}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-3 h-3 mr-1" />
                          ₹{course.price?.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      {course.syllabusPdf && (
                        <a
                          href={course.syllabusPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Syllabus
                        </a>
                      )}
                      <Link
                        to={`/training/course/${course._id}`}
                        className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl shadow hover:scale-105 transition flex items-center"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Know More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <span className="px-3 py-2 text-sm text-gray-700">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Benefits of taking training in TechProjectsHub :</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">LOR</h3>
              <p className="text-sm text-gray-600">Letter of Recommendation</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Offer Letter</h3>
              <p className="text-sm text-gray-600">Job placement assistance</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Certification of Completion</h3>
              <p className="text-sm text-gray-600">Official course completion certificate</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Project Certification</h3>
              <p className="text-sm text-gray-600">Portfolio-ready project certificates</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Experience Letter</h3>
              <p className="text-sm text-gray-600">Professional experience documentation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full flex flex-col items-center justify-center py-8 bg-green-50">
        <h3 className="text-2xl font-bold mb-2 text-green-700">Ready to boost your skills?</h3>
        <a href="/contact" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">Contact Us to Enroll</a>
      </div>
      
      <Footer />
    </div>
  );
};

export default DynamicTraining; 