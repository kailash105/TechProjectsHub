const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const emailService = require('../utils/emailService');

// Get all published courses for training page
router.get('/courses', async (req, res) => {
  try {
    const { category, level, search, page = 1, limit = 12 } = req.query;

    const query = { 
      isPublished: true
    };
    
    // Search filter
    if (search) {
      query.$text = { $search: search };
    }
    
    // Category filter
    if (category) {
      query.category = category;
    }
    
    // Level filter
    if (level) {
      query.level = level;
    }

    // Pagination
    const skip = (page - 1) * limit;
    
    const courses = await Course.find(query)
      .populate('instructor', 'firstName lastName')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Course.countDocuments(query);

    res.json({
      courses,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalCourses: total,
        hasNext: skip + courses.length < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Error fetching public courses:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
});

// Get course details by ID (public)
router.get('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findOne({
      _id: req.params.id,
      isPublished: true
    }).populate('instructor', 'firstName lastName email');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Failed to fetch course' });
  }
});

// Get course categories (public)
router.get('/categories', async (req, res) => {
  try {
    const categories = await Course.aggregate([
      { $match: { isPublished: true } },
      { $group: {
        _id: '$category',
        count: { $sum: 1 }
      }},
      { $sort: { count: -1 } }
    ]);

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Get course levels (public)
router.get('/levels', async (req, res) => {
  try {
    const levels = await Course.aggregate([
      { $match: { isPublished: true } },
      { $group: {
        _id: '$level',
        count: { $sum: 1 }
      }},
      { $sort: { count: -1 } }
    ]);

    res.json(levels);
  } catch (error) {
    console.error('Error fetching levels:', error);
    res.status(500).json({ message: 'Failed to fetch levels' });
  }
});

// Get featured courses
router.get('/featured', async (req, res) => {
  try {
    const courses = await Course.find({
      isPublished: true,
      isFeatured: true
    })
    .populate('instructor', 'firstName lastName')
    .sort({ createdAt: -1 })
    .limit(6);

    res.json(courses);
  } catch (error) {
    console.error('Error fetching featured courses:', error);
    res.status(500).json({ message: 'Failed to fetch featured courses' });
  }
});

// Test email functionality (development only)
router.post('/test-email', async (req, res) => {
  try {
    // Only allow in development
    if (process.env.NODE_ENV === 'production') {
      return res.status(403).json({ message: 'Test endpoint not available in production' });
    }

    const { email, type = 'welcome', userName = 'Test User' } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    let result;
    switch (type) {
      case 'welcome':
        result = await emailService.sendWelcomeEmail(email, userName);
        break;
      case 'enrollment':
        result = await emailService.sendEnrollmentEmail(email, userName, 'Test Course', 'test-course-id');
        break;
      case 'courseUpdate':
        result = await emailService.sendCourseUpdateEmail(email, userName, 'Test Course', 'test-course-id');
        break;
      case 'liveClass':
        result = await emailService.sendLiveClassEmail(email, userName, 'Test Course', {
          title: 'Test Live Class',
          date: new Date(),
          duration: '60 minutes',
          _id: 'test-class-id'
        });
        break;
      case 'certificate':
        result = await emailService.sendCertificateEmail(email, userName, 'Test Course', 'test-course-id');
        break;
      case 'assignment':
        result = await emailService.sendAssignmentEmail(email, userName, 'Test Course', 'Test Assignment', 'test-course-id');
        break;
      case 'passwordReset':
        result = await emailService.sendPasswordResetEmail(email, userName, 'test-reset-token');
        break;
      case 'systemNotification':
        result = await emailService.sendSystemNotificationEmail(email, userName, 'Test Notification', 'This is a test system notification');
        break;
      default:
        return res.status(400).json({ message: 'Invalid email type' });
    }

    res.json({
      message: 'Test email sent successfully',
      type,
      email,
      result
    });

  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({ 
      message: 'Failed to send test email',
      error: error.message 
    });
  }
});

module.exports = router; 