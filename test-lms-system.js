const axios = require('axios');
const io = require('socket.io-client');

// Test Configuration
const BASE_URL = 'http://localhost:8000/api/lms';
const FRONTEND_URL = 'http://localhost:5173';

// Test Data
const testUsers = {
  student: {
    name: 'Test Student',
    email: 'student@test.com',
    password: 'test123',
    role: 'student'
  },
  trainer: {
    name: 'Test Trainer',
    email: 'trainer@test.com',
    password: 'test123',
    role: 'trainer'
  },
  admin: {
    name: 'Test Admin',
    email: 'admin@test.com',
    password: 'test123',
    role: 'admin'
  }
};

const testCourse = {
  title: 'Complete Web Development',
  description: 'Learn HTML, CSS, JavaScript, React, Node.js',
  category: 'Web Development',
  level: 'Beginner',
  duration: '3 months',
  price: 99.99,
  requirements: 'Basic computer knowledge',
  learningOutcomes: ['Build responsive websites', 'Create web applications', 'Understand full-stack development']
};

class LMSTester {
  constructor() {
    this.tokens = {};
    this.userIds = {};
    this.courseId = null;
    this.socket = null;
  }

  async runAllTests() {
    console.log('🚀 Starting LMS System Tests...\n');
    
    try {
      await this.testAuthentication();
      await this.testCourseManagement();
      await this.testEnrollment();
      await this.testRealTimeFeatures();
      await this.testProgressTracking();
      
      console.log('\n✅ All tests completed successfully!');
    } catch (error) {
      console.error('\n❌ Test failed:', error.message);
    }
  }

  async testAuthentication() {
    console.log('🔐 Testing Authentication...');
    
    // Test user registration
    for (const [role, userData] of Object.entries(testUsers)) {
      try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        console.log(`✅ ${role} registration:`, response.data.message);
        this.userIds[role] = response.data.user._id;
      } catch (error) {
        if (error.response?.status === 409) {
          console.log(`ℹ️ ${role} already exists, proceeding with login`);
        } else {
          throw new Error(`${role} registration failed: ${error.response?.data?.message || error.message}`);
        }
      }
    }

    // Test user login
    for (const [role, userData] of Object.entries(testUsers)) {
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
          email: userData.email,
          password: userData.password
        });
        this.tokens[role] = response.data.token;
        console.log(`✅ ${role} login:`, response.data.message);
      } catch (error) {
        throw new Error(`${role} login failed: ${error.response?.data?.message || error.message}`);
      }
    }
  }

  async testCourseManagement() {
    console.log('\n📚 Testing Course Management...');
    
    // Admin creates course
    try {
      const response = await axios.post(`${BASE_URL}/admin/courses`, testCourse, {
        headers: { Authorization: `Bearer ${this.tokens.admin}` }
      });
      this.courseId = response.data.course._id;
      console.log('✅ Course created:', response.data.course.title);
    } catch (error) {
      throw new Error(`Course creation failed: ${error.response?.data?.message || error.message}`);
    }

    // Admin publishes course
    try {
      await axios.put(`${BASE_URL}/admin/courses/${this.courseId}/publish`, {}, {
        headers: { Authorization: `Bearer ${this.tokens.admin}` }
      });
      console.log('✅ Course published successfully');
    } catch (error) {
      throw new Error(`Course publishing failed: ${error.response?.data?.message || error.message}`);
    }

    // Verify course is public
    try {
      const response = await axios.get(`http://localhost:8000/api/public/courses`);
      const courseExists = response.data.courses.some(course => course._id === this.courseId);
      if (courseExists) {
        console.log('✅ Course appears in public course list');
      } else {
        throw new Error('Course not found in public list');
      }
    } catch (error) {
      throw new Error(`Public course verification failed: ${error.message}`);
    }
  }

  async testEnrollment() {
    console.log('\n🎓 Testing Course Enrollment...');
    
    // Student enrolls in course
    try {
      const response = await axios.post(`${BASE_URL}/courses/${this.courseId}/enroll`, {}, {
        headers: { Authorization: `Bearer ${this.tokens.student}` }
      });
      console.log('✅ Student enrolled:', response.data.message);
    } catch (error) {
      throw new Error(`Enrollment failed: ${error.response?.data?.message || error.message}`);
    }

    // Verify enrollment
    try {
      const response = await axios.get(`${BASE_URL}/student/courses`, {
        headers: { Authorization: `Bearer ${this.tokens.student}` }
      });
      const enrolledCourse = response.data.courses.find(course => course._id === this.courseId);
      if (enrolledCourse) {
        console.log('✅ Course appears in student\'s enrolled courses');
      } else {
        throw new Error('Course not found in enrolled courses');
      }
    } catch (error) {
      throw new Error(`Enrollment verification failed: ${error.message}`);
    }
  }

  async testRealTimeFeatures() {
    console.log('\n💬 Testing Real-time Features...');
    
    // Test Socket.IO connection
    try {
      this.socket = io('http://localhost:8000');
      
      this.socket.on('connect', () => {
        console.log('✅ Socket.IO connected');
      });

      this.socket.on('connect_error', (error) => {
        throw new Error(`Socket connection failed: ${error.message}`);
      });

      // Wait for connection
      await new Promise((resolve) => {
        this.socket.on('connect', resolve);
        setTimeout(() => resolve(), 1000);
      });

      // Test joining room
      this.socket.emit('join-room', {
        id: this.userIds.student,
        role: 'student'
      });
      console.log('✅ Student joined chat room');

    } catch (error) {
      throw new Error(`Real-time testing failed: ${error.message}`);
    }
  }

  async testProgressTracking() {
    console.log('\n📊 Testing Progress Tracking...');
    
    // Update student progress
    try {
      const progressData = {
        progress: 25,
        moduleProgress: [100, 50, 0, 0]
      };
      
      const response = await axios.put(`${BASE_URL}/student/course/${this.courseId}/progress`, progressData, {
        headers: { Authorization: `Bearer ${this.tokens.student}` }
      });
      console.log('✅ Progress updated:', response.data.message);
    } catch (error) {
      throw new Error(`Progress update failed: ${error.response?.data?.message || error.message}`);
    }

    // Verify progress
    try {
      const response = await axios.get(`${BASE_URL}/student/course/${this.courseId}`, {
        headers: { Authorization: `Bearer ${this.tokens.student}` }
      });
      console.log('✅ Progress verified:', response.data.progress);
    } catch (error) {
      throw new Error(`Progress verification failed: ${error.message}`);
    }
  }

  async cleanup() {
    if (this.socket) {
      this.socket.disconnect();
    }
    console.log('\n🧹 Test cleanup completed');
  }
}

// Run tests
async function runTests() {
  const tester = new LMSTester();
  
  try {
    await tester.runAllTests();
  } finally {
    await tester.cleanup();
  }
}

// Check if running directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = LMSTester;
