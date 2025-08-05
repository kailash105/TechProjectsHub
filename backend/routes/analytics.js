const express = require('express');
const { auth, requireAdmin } = require('../middleware/auth');
const User = require('../models/User');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);
router.use(requireAdmin);

// @route   GET /api/lms/analytics/overview
// @desc    Get overview analytics
// @access  Private (Admin only)
router.get('/overview', async (req, res) => {
  try {
    const { period = '30' } = req.query;
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - parseInt(period));

    // User statistics
    const totalUsers = await User.countDocuments();
    const newUsers = await User.countDocuments({ createdAt: { $gte: daysAgo } });
    const activeUsers = await User.countDocuments({ lastLogin: { $gte: daysAgo } });

    // Course statistics
    const totalCourses = await Course.countDocuments();
    const publishedCourses = await Course.countDocuments({ isPublished: true });
    const newCourses = await Course.countDocuments({ createdAt: { $gte: daysAgo } });

    // Enrollment statistics
    const totalEnrollments = await Enrollment.countDocuments();
    const newEnrollments = await Enrollment.countDocuments({ enrolledAt: { $gte: daysAgo } });
    const completedEnrollments = await Enrollment.countDocuments({ progress: 100 });

    // Revenue calculation
    const totalRevenue = await Enrollment.aggregate([
      { $match: { 'payment.status': 'completed' } },
      { $group: { _id: null, total: { $sum: '$payment.amount' } } }
    ]);

    const revenue = totalRevenue.length > 0 ? totalRevenue[0].total : 0;

    res.json({
      users: {
        total: totalUsers,
        new: newUsers,
        active: activeUsers
      },
      courses: {
        total: totalCourses,
        published: publishedCourses,
        new: newCourses
      },
      enrollments: {
        total: totalEnrollments,
        new: newEnrollments,
        completed: completedEnrollments
      },
      revenue: {
        total: revenue
      }
    });

  } catch (error) {
    console.error('Analytics overview error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/analytics/courses
// @desc    Get course analytics
// @access  Private (Admin only)
router.get('/courses', async (req, res) => {
  try {
    // Top performing courses
    const topCourses = await Course.aggregate([
      { $match: { isPublished: true } },
      {
        $lookup: {
          from: 'enrollments',
          localField: '_id',
          foreignField: 'course',
          as: 'enrollments'
        }
      },
      {
        $addFields: {
          enrollmentCount: { $size: '$enrollments' }
        }
      },
      { $sort: { enrollmentCount: -1 } },
      { $limit: 10 }
    ]);

    // Course category distribution
    const categoryDistribution = await Course.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({
      topCourses,
      categoryDistribution
    });

  } catch (error) {
    console.error('Course analytics error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 