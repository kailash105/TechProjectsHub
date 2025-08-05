const express = require('express');
const { auth, requireStudent } = require('../middleware/auth');
const User = require('../models/User');
const Course = require('../models/Course');
const Notification = require('../models/Notification');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);
router.use(requireStudent);

// @route   GET /api/lms/student/dashboard
// @desc    Get student dashboard data
// @access  Private (Student only)
router.get('/dashboard', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title description duration instructor thumbnail',
        populate: {
          path: 'instructor',
          select: 'firstName lastName'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get recent activities (simplified for now)
    const recentActivities = [
      {
        type: 'video',
        description: 'Watched Introduction to React',
        time: '2 hours ago'
      },
      {
        type: 'document',
        description: 'Downloaded Course Syllabus',
        time: '1 day ago'
      },
      {
        type: 'quiz',
        description: 'Completed Module 1 Quiz',
        time: '3 days ago'
      }
    ];

    res.json({
      enrolledCourses: user.enrolledCourses,
      recentActivities
    });

  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/courses
// @desc    Get enrolled courses
// @access  Private (Student only)
router.get('/courses', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title description duration instructor thumbnail modules',
        populate: {
          path: 'instructor',
          select: 'firstName lastName'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.enrolledCourses);

  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/course/:courseId
// @desc    Get specific course details
// @access  Private (Student only)
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;

    const user = await User.findById(req.user.id);
    const enrollment = user.enrolledCourses.find(
      e => e.courseId.toString() === courseId
    );

    if (!enrollment) {
      return res.status(404).json({ message: 'Course not found in enrollments' });
    }

    const course = await Course.findById(courseId)
      .populate('instructor', 'firstName lastName bio')
      .populate('liveClasses');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json({
      course,
      enrollment
    });

  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/student/course/:courseId/progress
// @desc    Update course progress
// @access  Private (Student only)
router.put('/course/:courseId/progress', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { progress } = req.body;

    if (progress < 0 || progress > 100) {
      return res.status(400).json({ message: 'Progress must be between 0 and 100' });
    }

    const user = await User.findById(req.user.id);
    await user.updateCourseProgress(courseId, progress);

    res.json({ 
      message: 'Progress updated successfully',
      progress 
    });

  } catch (error) {
    console.error('Update progress error:', error);
    if (error.message === 'Not enrolled in this course') {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/schedule
// @desc    Get student's class schedule
// @access  Private (Student only)
router.get('/schedule', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title liveClasses',
        populate: {
          path: 'liveClasses'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Collect all live classes from enrolled courses
    const schedule = [];
    user.enrolledCourses.forEach(enrollment => {
      if (enrollment.courseId && enrollment.courseId.liveClasses) {
        enrollment.courseId.liveClasses.forEach(liveClass => {
          schedule.push({
            ...liveClass.toObject(),
            courseTitle: enrollment.courseId.title,
            courseId: enrollment.courseId._id
          });
        });
      }
    });

    // Sort by date
    schedule.sort((a, b) => new Date(a.date) - new Date(b.date));

    res.json(schedule);

  } catch (error) {
    console.error('Get schedule error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/certificates
// @desc    Get student's certificates
// @access  Private (Student only)
router.get('/certificates', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title instructor',
        populate: {
          path: 'instructor',
          select: 'firstName lastName'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const certificates = user.enrolledCourses
      .filter(enrollment => enrollment.certificateIssued)
      .map(enrollment => ({
        courseId: enrollment.courseId._id,
        courseTitle: enrollment.courseId.title,
        instructor: enrollment.courseId.instructor,
        completedAt: enrollment.completedAt,
        certificateId: `${enrollment.courseId._id}-${user._id}`
      }));

    res.json(certificates);

  } catch (error) {
    console.error('Get certificates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/certificate/:courseId
// @desc    Download certificate for a course
// @access  Private (Student only)
router.get('/certificate/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;

    const user = await User.findById(req.user.id);
    const enrollment = user.enrolledCourses.find(
      e => e.courseId.toString() === courseId
    );

    if (!enrollment) {
      return res.status(404).json({ message: 'Course not found in enrollments' });
    }

    if (!enrollment.certificateIssued) {
      return res.status(400).json({ message: 'Certificate not yet issued' });
    }

    const course = await Course.findById(courseId)
      .populate('instructor', 'firstName lastName');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // TODO: Generate and return certificate PDF
    // For now, return certificate data
    const certificateData = {
      studentName: `${user.firstName} ${user.lastName}`,
      courseTitle: course.title,
      instructorName: `${course.instructor.firstName} ${course.instructor.lastName}`,
      completedAt: enrollment.completedAt,
      certificateId: `${courseId}-${user._id}`
    };

    res.json({
      message: 'Certificate generated successfully',
      certificate: certificateData
    });

  } catch (error) {
    console.error('Download certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/progress
// @desc    Get overall progress statistics
// @access  Private (Student only)
router.get('/progress', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const totalCourses = user.enrolledCourses.length;
    const completedCourses = user.enrolledCourses.filter(e => e.progress === 100).length;
    const averageProgress = totalCourses > 0 
      ? user.enrolledCourses.reduce((sum, e) => sum + e.progress, 0) / totalCourses 
      : 0;

    const progressStats = {
      totalCourses,
      completedCourses,
      inProgressCourses: totalCourses - completedCourses,
      averageProgress: Math.round(averageProgress),
      certificatesEarned: user.enrolledCourses.filter(e => e.certificateIssued).length
    };

    res.json(progressStats);

  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/profile
// @desc    Get student profile
// @access  Private (Student only)
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title description instructor',
        populate: {
          path: 'instructor',
          select: 'firstName lastName'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/student/profile
// @desc    Update student profile
// @access  Private (Student only)
router.put('/profile', async (req, res) => {
  try {
    const { firstName, lastName, phone, profilePicture } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phone) user.phone = phone;
    if (profilePicture) user.profilePicture = profilePicture;

    await user.save();

    res.json({
      message: 'Profile updated successfully',
      user: user.getPublicProfile()
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/student/notifications
// @desc    Get student notifications
// @access  Private (Student only)
router.get('/notifications', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const notifications = await Notification.find({ 
      recipient: req.user.id,
      isArchived: false 
    })
    .populate('sender', 'firstName lastName')
    .sort({ createdAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit);

    const total = await Notification.countDocuments({ 
      recipient: req.user.id,
      isArchived: false 
    });

    res.json({
      notifications,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });

  } catch (error) {
    console.error('Get notifications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/student/notifications/:notificationId/read
// @desc    Mark notification as read
// @access  Private (Student only)
router.put('/notifications/:notificationId/read', async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findOne({
      _id: notificationId,
      recipient: req.user.id
    });

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    await notification.markAsRead();

    res.json({ message: 'Notification marked as read' });

  } catch (error) {
    console.error('Mark notification as read error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 