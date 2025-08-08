// API Service Utility for LMS Backend Integration
const API_BASE_URL = 'http://localhost:8000/api/lms';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get auth token from localStorage
  getAuthToken() {
    return localStorage.getItem('lmsToken');
  }

  // Get user data from localStorage
  getUser() {
    const userData = localStorage.getItem('lmsUser');
    return userData ? JSON.parse(userData) : null;
  }

  // Set auth token and user data
  setAuth(token, user) {
    localStorage.setItem('lmsToken', token);
    localStorage.setItem('lmsUser', JSON.stringify(user));
  }

  // Clear auth data
  clearAuth() {
    localStorage.removeItem('lmsToken');
    localStorage.removeItem('lmsUser');
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const token = this.getAuthToken();
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // Generic GET method
  async get(endpoint) {
    return this.request(endpoint);
  }

  // Authentication Methods
  async login(email, password, role = 'student') {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, role }),
    });
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Student Methods
  async getStudentDashboard() {
    return this.request('/student/dashboard');
  }

  async getStudentProfile() {
    return this.request('/student/profile');
  }

  async updateStudentProfile(profileData) {
    return this.request('/student/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  async getStudentProgress() {
    return this.request('/student/progress');
  }

  async getStudentCourse(courseId) {
    return this.request(`/student/course/${courseId}`);
  }

  async updateStudentProgress(courseId, progressData) {
    return this.request(`/student/course/${courseId}/progress`, {
      method: 'PUT',
      body: JSON.stringify(progressData),
    });
  }

  // Module and Lesson Management
  async createModule(courseId, moduleData) {
    return this.request(`/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(moduleData),
    });
  }

  async updateModule(courseId, moduleId, moduleData) {
    return this.request(`/courses/${courseId}/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(moduleData),
    });
  }

  async deleteModule(courseId, moduleId) {
    return this.request(`/courses/${courseId}/modules/${moduleId}`, {
      method: 'DELETE',
    });
  }

  async createLesson(courseId, moduleId, lessonData) {
    return this.request(`/courses/${courseId}/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify(lessonData),
    });
  }

  async updateLesson(courseId, moduleId, lessonId, lessonData) {
    return this.request(`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(lessonData),
    });
  }

  async deleteLesson(courseId, moduleId, lessonId) {
    return this.request(`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`, {
      method: 'DELETE',
    });
  }

  // Trainer Methods
  async getTrainerDashboard() {
    return this.request('/trainer/dashboard');
  }

  async getTrainerProfile() {
    return this.request('/trainer/profile');
  }

  async updateTrainerProfile(profileData) {
    return this.request('/trainer/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  async getTrainerAnalytics() {
    return this.request('/trainer/analytics');
  }

  async notifyStudents(notificationData) {
    return this.request('/trainer/notify-students', {
      method: 'POST',
      body: JSON.stringify(notificationData),
    });
  }

  // Admin Methods
  async getAdminDashboard() {
    return this.request('/admin/dashboard');
  }

  async getAdminUsers(page = 1, limit = 10, search = '', role = '') {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search }),
      ...(role && { role })
    });
    return this.request(`/admin/users?${params}`);
  }

  async getAdminStatistics() {
    return this.request('/admin/statistics');
  }

  async getAdminUsers(page = 1, limit = 10) {
    return this.request(`/admin/users?page=${page}&limit=${limit}`);
  }

  async getAdminCourses(page = 1, limit = 10) {
    return this.request(`/admin/courses?page=${page}&limit=${limit}`);
  }

  async getAdminEnrollments(page = 1, limit = 10) {
    return this.request(`/admin/enrollments?page=${page}&limit=${limit}`);
  }

  async bulkAction(action, items) {
    return this.request('/admin/bulk-action', {
      method: 'POST',
      body: JSON.stringify({ action, items }),
    });
  }

  // Analytics Methods
  async getAnalyticsOverview() {
    return this.request('/analytics/overview');
  }

  async getAnalyticsCourses() {
    return this.request('/analytics/courses');
  }

  // Notification Methods
  async getNotifications(page = 1, limit = 10) {
    return this.request(`/notifications?page=${page}&limit=${limit}`);
  }

  async getUnreadCount() {
    return this.request('/notifications/unread-count');
  }

  async markNotificationAsRead(notificationId) {
    return this.request(`/notifications/${notificationId}/read`, {
      method: 'PUT',
    });
  }

  async markAllNotificationsAsRead() {
    return this.request('/notifications/mark-all-read', {
      method: 'PUT',
    });
  }

  async archiveNotification(notificationId) {
    return this.request(`/notifications/${notificationId}/archive`, {
      method: 'PUT',
    });
  }

  async deleteNotification(notificationId) {
    return this.request(`/notifications/${notificationId}`, {
      method: 'DELETE',
    });
  }

  async createNotification(notificationData) {
    return this.request('/notifications', {
      method: 'POST',
      body: JSON.stringify(notificationData),
    });
  }

  async createBulkNotifications(notifications) {
    return this.request('/notifications/bulk', {
      method: 'POST',
      body: JSON.stringify({ notifications }),
    });
  }

  // Course Management Methods
  async getCourses(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/courses?${queryString}`);
  }

  async getCourse(id) {
    return this.request(`/courses/${id}`);
  }

  async createCourse(courseData) {
    return this.request('/courses', {
      method: 'POST',
      body: JSON.stringify(courseData),
    });
  }

  async updateCourse(id, courseData) {
    return this.request(`/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(courseData),
    });
  }

  async deleteCourse(id) {
    return this.request(`/courses/${id}`, {
      method: 'DELETE',
    });
  }

  async getCourseStats(id) {
    return this.request(`/courses/${id}/stats`);
  }

  async updateCourseStats(id) {
    return this.request(`/courses/${id}/stats`, {
      method: 'PUT',
    });
  }

  async bulkUpdateCourses(courseIds, updates) {
    return this.request('/courses/bulk/update', {
      method: 'PUT',
      body: JSON.stringify({ courseIds, updates }),
    });
  }

  async getCourseCategories() {
    return this.request('/courses/categories/list');
  }

  async getCourseLevels() {
    return this.request('/courses/levels/list');
  }

  async enrollInCourse(courseId) {
    return this.request(`/courses/${courseId}/enroll`, {
      method: 'POST',
    });
  }

  async uploadSyllabusPdf(id, formData) {
    return this.request(`/courses/${id}/syllabus`, {
      method: 'POST',
      body: formData,
      headers: {} // Let browser set content-type for FormData
    });
  }

  // Public API methods for training page
  async getPublicCourses(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/public/courses?${queryString}`);
  }

  async getPublicCourse(id) {
    return this.request(`/public/courses/${id}`);
  }

  async getPublicCategories() {
    return this.request('/public/categories');
  }

  async getPublicLevels() {
    return this.request('/public/levels');
  }

  async getFeaturedCourses() {
    return this.request('/public/featured');
  }

  // Health Check
  async healthCheck() {
    try {
      const response = await fetch('http://localhost:8000/health');
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = this.getAuthToken();
    if (!token) return false;
    
    try {
      // Basic JWT token validation (check if expired)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  }

  // Get user role
  getUserRole() {
    const user = this.getUser();
    return user?.role || null;
  }

  // Check if user has specific role
  hasRole(role) {
    const userRole = this.getUserRole();
    return userRole === role;
  }

  // Check if user has any of the specified roles
  hasAnyRole(roles) {
    const userRole = this.getUserRole();
    return roles.includes(userRole);
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService; 