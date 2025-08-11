import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import apiService from '../utils/api';
import { 
  ArrowLeft, 
  Download, 
  Award, 
  Calendar,
  User,
  BookOpen,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { toast } from 'react-toastify';

const Certificate = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [certificate, setCertificate] = useState(null);
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCertificate();
  }, [courseId]);

  const fetchCertificate = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch course details and certificate info
      const response = await apiService.getStudentCourse(courseId);
      setCourse(response.course);
      
      // For now, we'll create a mock certificate
      // In a real implementation, this would come from the backend
      setCertificate({
        id: `cert-${courseId}`,
        courseId: courseId,
        studentName: user?.firstName + ' ' + user?.lastName,
        courseName: response.course?.title,
        completionDate: new Date().toLocaleDateString(),
        certificateNumber: `CERT-${Date.now()}`,
        instructor: response.course?.instructor?.firstName + ' ' + response.course?.instructor?.lastName
      });
      
    } catch (error) {
      console.error('Error fetching certificate:', error);
      setError(error.message || 'Failed to load certificate');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
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
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Certificate</h2>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
                  Course Certificate
                </h1>
                <p className="text-gray-600 mt-1">
                  Your completion certificate for {course?.title}
                </p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Certificate Display */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
          <div className="text-center mb-8">
            <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Certificate of Completion</h2>
            <p className="text-gray-600">This is to certify that</p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {certificate?.studentName}
            </h3>
            <p className="text-gray-600 mb-4">has successfully completed the course</p>
            <h4 className="text-xl font-medium text-blue-600 mb-2">
              {certificate?.courseName}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Completion Date</p>
              <p className="font-semibold text-gray-900">{certificate?.completionDate}</p>
            </div>
            <div className="text-center">
              <User className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Instructor</p>
              <p className="font-semibold text-gray-900">{certificate?.instructor}</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2">Certificate Number</p>
            <p className="font-mono text-lg text-gray-900">{certificate?.certificateNumber}</p>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>This certificate is issued by TechProjectsHub</p>
            <p>For verification, please contact our support team</p>
          </div>
        </div>

        {/* Course Details */}
        {course && (
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{course.category}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">{course.level}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-gray-700">{course.duration}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
