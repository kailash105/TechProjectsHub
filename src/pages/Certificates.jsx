import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import apiService from '../utils/api';
import { 
  ArrowLeft, 
  Award, 
  Download, 
  Calendar,
  BookOpen,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { toast } from 'react-toastify';

const Certificates = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch student dashboard to get enrolled courses
      const response = await apiService.getStudentDashboard();
      const enrolledCourses = response.enrolledCourses || [];
      
      // Filter courses that are completed (100% progress)
      const completedCourses = enrolledCourses.filter(course => course.progress === 100);
      
      // Create certificate objects for completed courses
      const certificateList = completedCourses.map(course => ({
        id: `cert-${course._id || course.id}`,
        courseId: course._id || course.id,
        courseName: course.title,
        completionDate: new Date().toLocaleDateString(),
        certificateNumber: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        instructor: course.instructor,
        category: course.category,
        level: course.level,
        duration: course.duration
      }));
      
      setCertificates(certificateList);
      
    } catch (error) {
      console.error('Error fetching certificates:', error);
      setError(error.message || 'Failed to load certificates');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (certificateId) => {
    // In a real implementation, this would generate and download a PDF
    toast.info('Certificate download feature coming soon!');
  };

  if (!user) {
    navigate('/lms/login');
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="animate-spin w-16 h-16 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Certificates</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link
            to="/lms/student/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/lms/student/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  My Certificates
                </h1>
                <p className="text-gray-600 mt-1">
                  Download your course completion certificates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {certificates.length === 0 ? (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h3>
            <p className="text-gray-600 mb-6">
              Complete your courses to earn certificates
            </p>
            <Link
              to="/lms/courses"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <button
                    onClick={() => handleDownload(certificate.id)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {certificate.courseName}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Completed: {certificate.completionDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{certificate.category} • {certificate.level}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  Certificate #: {certificate.certificateNumber}
                </div>
                
                <Link
                  to={`/lms/certificate/${certificate.courseId}`}
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  View Certificate
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
