import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import apiService from '../utils/api';
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  Star,
  CheckCircle,
  Clock,
  LogOut
} from 'lucide-react';

const AdminAnalytics = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState({
    overview: {},
    trends: [],
    topCourses: [],
    recentActivity: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('30days');

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/lms/login');
      return;
    }
    fetchAnalytics();
  }, [user, navigate, timeRange]);

  const fetchAnalytics = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // Fetch overview
      const period = timeRange === '7days' ? 7 : timeRange === '30days' ? 30 : timeRange === '90days' ? 90 : 365;
      const overview = await apiService.request(`/analytics/overview?period=${period}`);
      // Fetch top courses
      const coursesData = await apiService.request('/analytics/courses');
      // Compose analytics state
      setAnalytics({
        overview: {
          totalRevenue: overview.revenue?.total || 0,
          totalEnrollments: overview.enrollments?.total || 0,
          totalCourses: overview.courses?.total || 0,
          totalStudents: overview.users?.total || 0,
          totalTrainers: null, // Not provided in overview, can be added if backend supports
          avgCompletionRate: overview.enrollments?.completed && overview.enrollments?.total ? Math.round((overview.enrollments.completed / overview.enrollments.total) * 100) : 0,
          avgRating: null, // Not provided in overview, can be added if backend supports
          monthlyGrowth: null, // Not provided in overview, can be added if backend supports
          revenueGrowth: null // Not provided in overview, can be added if backend supports
        },
        trends: [], // Not provided by backend, can be added if backend supports
        topCourses: (coursesData.topCourses || []).map(c => ({
          title: c.title,
          enrollments: c.enrollmentCount,
          revenue: c.price ? c.price * c.enrollmentCount : 0,
          rating: c.rating || null
        })),
        recentActivity: [] // Not provided by backend, can be added if backend supports
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setError('Failed to load analytics');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/lms/login');
  };

  const getGrowthIcon = (growth) => {
    return growth >= 0 ? (
      <TrendingUp className="w-4 h-4 text-green-600" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-600" />
    );
  };

  const getActivityIcon = (type) => {
    const icons = {
      enrollment: <Users className="w-4 h-4 text-blue-600" />,
      completion: <CheckCircle className="w-4 h-4 text-green-600" />,
      payment: <DollarSign className="w-4 h-4 text-yellow-600" />
    };
    return icons[type] || <Clock className="w-4 h-4 text-gray-600" />;
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
          <BarChart3 className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Analytics</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchAnalytics}
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
            <div className="flex items-center space-x-4">
              <Link
                to="/lms/admin/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Analytics Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  View detailed insights and performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="1year">Last year</option>
              </select>
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
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{analytics.overview.totalRevenue?.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  {getGrowthIcon(analytics.overview.revenueGrowth)}
                  <span className="text-sm text-green-600 ml-1">{analytics.overview.revenueGrowth !== null && analytics.overview.revenueGrowth !== undefined ? `+${analytics.overview.revenueGrowth}%` : '-'}</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.overview.totalEnrollments}</p>
                <div className="flex items-center mt-2">
                  {getGrowthIcon(analytics.overview.monthlyGrowth)}
                  <span className="text-sm text-green-600 ml-1">{analytics.overview.monthlyGrowth !== null && analytics.overview.monthlyGrowth !== undefined ? `+${analytics.overview.monthlyGrowth}%` : '-'}</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.overview.avgCompletionRate}%</p>
                <p className="text-sm text-gray-500 mt-2">Course completion</p>
              </div>
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">{typeof analytics.overview.avgRating === 'object' ? analytics.overview.avgRating?.average ?? '-' : analytics.overview.avgRating ?? '-'}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-500 ml-1">out of 5</span>
                </div>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue & Enrollment Trends */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Enrollment Trends</h3>
            <div className="space-y-4">
              {analytics.trends.slice(-6).map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{trend.month}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Enrollments</p>
                      <p className="text-sm font-semibold text-gray-900">{trend.enrollments}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-sm font-semibold text-gray-900">₹{(trend.revenue / 1000).toFixed(0)}k</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Courses */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Courses</h3>
            <div className="space-y-4">
              {analytics.topCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{course.title}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-500 ml-1">{typeof course.rating === 'object' ? course.rating?.average ?? '-' : course.rating ?? '-'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{course.enrollments} enrollments</p>
                    <p className="text-xs text-gray-500">₹{course.revenue.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {analytics.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span>
                    {activity.type === 'enrollment' && ' enrolled in '}
                    {activity.type === 'completion' && ' completed '}
                    {activity.type === 'payment' && ' made payment for '}
                    <span className="font-medium">{activity.course}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/lms/admin/courses"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Manage Courses</span>
            </Link>
            <Link
              to="/lms/admin/users"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Manage Users</span>
            </Link>
            <Link
              to="/lms/admin/dashboard"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <BarChart3 className="w-5 h-5 text-purple-600 mr-3" />
              <span className="text-gray-700">View Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics; 