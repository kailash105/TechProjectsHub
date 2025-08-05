import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import apiService from '../utils/api';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  UserPlus, 
  Settings, 
  Award,
  Calendar,
  MessageCircle,
  FileText,
  Video,
  AlertCircle,
  CheckCircle,
  Clock,
  LogOut,
  Eye,
  Plus,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTrainers: 0,
    totalCourses: 0,
    totalRevenue: 0,
    pendingEnrollments: 0,
    activeCourses: 0
  });
  const [recentEnrollments, setRecentEnrollments] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/lms/login');
      return;
    }
    fetchDashboardData();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const data = await apiService.get('/admin/dashboard');
      setStats(data.stats || {});
      setRecentEnrollments(data.recentEnrollments || []);
      setRecentPayments(data.recentPayments || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/lms/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchDashboardData}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.firstName} {user?.lastName}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/lms/admin/users"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Link>
              <Link
                to="/lms/admin/courses"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Manage Courses
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <UserPlus className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Trainers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalTrainers}</p>
                <p className="text-xs text-green-600 mt-1">+5% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeCourses}</p>
                <p className="text-xs text-green-600 mt-1">+8% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue?.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">+15% from last month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Enrollments */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Enrollments</h2>
                <Link
                  to="/lms/admin/enrollments"
                  className="text-red-600 hover:text-red-700 font-medium flex items-center"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View All
                </Link>
              </div>

              {recentEnrollments.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No recent enrollments</h3>
                  <p className="text-gray-600">New student enrollments will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentEnrollments.map((enrollment, index) => (
                    <div key={`${enrollment.id}-${index}`} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">
                              {enrollment.studentName?.charAt(0) || 'S'}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{enrollment.studentName}</h3>
                            <p className="text-sm text-gray-600">{enrollment.courseName}</p>
                            <p className="text-xs text-gray-500">{enrollment.studentEmail}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            ₹{enrollment.amount?.toLocaleString()}
                          </div>
                          <div className="flex items-center space-x-1">
                            {enrollment.status === 'completed' && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                            {enrollment.status === 'in-progress' && (
                              <Clock className="w-4 h-4 text-yellow-600" />
                            )}
                            <span className={`text-xs font-medium ${
                              enrollment.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                            }`}>
                              {enrollment.status}
                            </span>
                          </div>
                          {enrollment.progress && (
                            <div className="text-xs text-gray-500 mt-1">
                              Progress: {enrollment.progress}%
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <span className="text-xs text-gray-500">
                          {new Date(enrollment.date).toLocaleDateString()}
                        </span>
                        <Link
                          to={`/lms/admin/enrollment/${enrollment.id}`}
                          className="text-red-600 hover:text-red-700 text-xs font-medium"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions & Recent Payments */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/lms/admin/users"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Manage Users</span>
                </Link>
                <Link
                  to="/lms/admin/courses"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Manage Courses</span>
                </Link>
                <Link
                  to="/lms/admin/analytics"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <BarChart3 className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">View Analytics</span>
                </Link>
                <Link
                  to="/lms/admin/payments"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <DollarSign className="w-5 h-5 text-yellow-600 mr-3" />
                  <span className="text-gray-700">Payment History</span>
                </Link>
                <Link
                  to="/lms/admin/certificates"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Award className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Manage Certificates</span>
                </Link>
                <Link
                  to="/lms/admin/settings"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">System Settings</span>
                </Link>
              </div>
            </div>

            {/* Recent Payments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Payments</h3>
                <Link
                  to="/lms/admin/payments"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              {recentPayments.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent payments</p>
              ) : (
                <div className="space-y-3">
                  {recentPayments.map((payment, index) => (
                    <div key={`${payment.id}-${index}`} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{payment.studentName}</h4>
                        <span className="text-sm font-semibold text-green-600">₹{payment.amount?.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{payment.courseName}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(payment.date).toLocaleDateString()}
                        </span>
                        <span className={`text-xs font-medium ${
                          payment.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* System Alerts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">5 pending certificate approvals</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">System backup completed</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">Storage space running low</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
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

export default AdminDashboard; 