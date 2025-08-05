import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  Upload, 
  Video, 
  FileText, 
  Clock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';

const TrainerDashboard = () => {
  const [user, setUser] = useState(null);
  const [assignedStudents, setAssignedStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('lmsUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Fetch dashboard data
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('lmsToken');
      const response = await fetch('/api/lms/trainer/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setAssignedStudents(data.assignedStudents || []);
        setCourses(data.courses || []);
        setUpcomingClasses(data.upcomingClasses || []);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.firstName || 'Trainer'}!
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your students and courses
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/lms/trainer/schedule-class"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Schedule Class
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Assigned Students</p>
                <p className="text-2xl font-bold text-gray-900">{assignedStudents.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming Classes</p>
                <p className="text-2xl font-bold text-gray-900">{upcomingClasses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
                <p className="text-2xl font-bold text-gray-900">78%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Assigned Students */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">My Students</h2>
                <Link
                  to="/lms/trainer/students"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  View All
                </Link>
              </div>

              {assignedStudents.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No students assigned yet</h3>
                  <p className="text-gray-600">Students will appear here once they're assigned to your courses</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {assignedStudents.map((student) => (
                    <div key={student.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-semibold">
                              {student.firstName.charAt(0)}{student.lastName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {student.firstName} {student.lastName}
                            </h3>
                            <p className="text-sm text-gray-600">{student.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {student.progress}% Complete
                          </div>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Link
                          to={`/lms/trainer/student/${student.id}`}
                          className="flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Link>
                        <Link
                          to={`/lms/trainer/student/${student.id}/progress`}
                          className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          <TrendingUp className="w-4 h-4 mr-1" />
                          View Progress
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions & Upcoming Classes */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/lms/trainer/schedule-class"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Schedule Live Class</span>
                </Link>
                <Link
                  to="/lms/trainer/upload-content"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Upload Content</span>
                </Link>
                <Link
                  to="/lms/trainer/students"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Manage Students</span>
                </Link>
                <Link
                  to="/lms/trainer/courses"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-yellow-600 mr-3" />
                  <span className="text-gray-700">My Courses</span>
                </Link>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Classes</h3>
                <Link
                  to="/lms/trainer/schedule"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              {upcomingClasses.length === 0 ? (
                <p className="text-gray-500 text-sm">No upcoming classes</p>
              ) : (
                <div className="space-y-3">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{classItem.title}</h4>
                        <span className="text-xs text-gray-500">{classItem.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{classItem.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {classItem.time}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Users className="w-3 h-3 mr-1" />
                          {classItem.studentsCount} students
                        </span>
                      </div>
                      <div className="mt-2">
                        <Link
                          to={`/lms/trainer/class/${classItem.id}`}
                          className="text-purple-600 hover:text-purple-700 text-xs font-medium"
                        >
                          Join Class
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Video className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">Uploaded new video content</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">Added new assignment</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Calendar className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">Scheduled live class</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard; 