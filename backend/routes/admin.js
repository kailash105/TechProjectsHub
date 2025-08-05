const express = require('express');
const { auth, requireAdmin } = require('../middleware/auth');
const User = require('../models/User');
const Course = require('../models/Course');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);
router.use(requireAdmin);

// @route   GET /api/lms/admin/dashboard
// @desc    Get admin dashboard data
// @access  Private (Admin only)
router.get('/dashboard', async (req, res) => {
  try {
    // Get statistics
    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalTrainers = await User.countDocuments({ role: 'trainer' });
    const totalCourses = await Course.countDocuments();
    const activeCourses = await Course.countDocuments({ isPublished: true });

    // Get recent enrollments with better data
    const recentEnrollments = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $sort: { 'enrolledCourses.enrolledAt': -1 } },
      { $limit: 10 },
      { $lookup: {
        from: 'courses',
        localField: 'enrolledCourses.courseId',
        foreignField: '_id',
        as: 'course'
      }},
      { $unwind: '$course' },
      { $project: {
        id: { $concat: [{ $toString: '$_id' }, '-', { $toString: '$enrolledCourses.courseId' }] },
        studentName: { $concat: ['$firstName', ' ', '$lastName'] },
        studentEmail: '$email',
        courseName: '$course.title',
        courseId: '$course._id',
        amount: '$course.price',
        progress: '$enrolledCourses.progress',
        status: { $cond: { if: { $eq: ['$enrolledCourses.progress', 100] }, then: 'completed', else: 'in-progress' } },
        date: '$enrolledCourses.enrolledAt'
      }}
    ]);

    // Get recent payments from enrollments
    const recentPayments = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $sort: { 'enrolledCourses.enrolledAt': -1 } },
      { $limit: 10 },
      { $lookup: {
        from: 'courses',
        localField: 'enrolledCourses.courseId',
        foreignField: '_id',
        as: 'course'
      }},
      { $unwind: '$course' },
      { $project: {
        id: { $concat: [{ $toString: '$_id' }, '-', { $toString: '$enrolledCourses.courseId' }] },
        studentName: { $concat: ['$firstName', ' ', '$lastName'] },
        courseName: '$course.title',
        amount: '$course.price',
        status: 'completed',
        date: '$enrolledCourses.enrolledAt'
      }}
    ]);

    // Calculate total revenue
    const revenueResult = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $lookup: {
        from: 'courses',
        localField: 'enrolledCourses.courseId',
        foreignField: '_id',
        as: 'course'
      }},
      { $unwind: '$course' },
      { $group: { _id: null, total: { $sum: '$course.price' } } }
    ]);

    const totalRevenue = revenueResult.length > 0 ? revenueResult[0].total : 0;

    const stats = {
      totalStudents,
      totalTrainers,
      totalCourses,
      activeCourses,
      totalRevenue
    };

    res.json({
      stats,
      recentEnrollments,
      recentPayments
    });

  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/users
// @desc    Get all users
// @access  Private (Admin only)
router.get('/users', async (req, res) => {
  try {
    const { role, page = 1, limit = 10, search } = req.query;

    const query = {};
    if (role) query.role = role;
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const users = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments(query);

    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });

  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/user/:userId
// @desc    Get specific user details
// @access  Private (Admin only)
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select('-password')
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title description'
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);

  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/admin/user/:userId
// @desc    Update user
// @access  Private (Admin only)
router.put('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, email, phone, role, isActive } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (role) user.role = role;
    if (isActive !== undefined) user.isActive = isActive;

    await user.save();

    res.json({
      message: 'User updated successfully',
      user: user.getPublicProfile()
    });

  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/lms/admin/user/:userId
// @desc    Delete user
// @access  Private (Admin only)
router.delete('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.findByIdAndDelete(userId);

    res.json({ message: 'User deleted successfully' });

  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/admin/trainer
// @desc    Add new trainer
// @access  Private (Admin only)
router.post('/trainer', async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, specialization, experience, bio } = req.body;

    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create new trainer
    const trainer = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      role: 'trainer',
      specialization,
      experience,
      bio,
      dateOfBirth: new Date(), // Required field, set to current date
      gender: 'other' // Required field, set default
    });

    await trainer.save();

    res.status(201).json({
      message: 'Trainer added successfully',
      trainer: trainer.getPublicProfile()
    });

  } catch (error) {
    console.error('Add trainer error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/courses
// @desc    Get all courses
// @access  Private (Admin only)
router.get('/courses', async (req, res) => {
  try {
    const { page = 1, limit = 10, search, category, instructor } = req.query;

    const query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if (category) query.category = category;
    if (instructor) query.instructor = instructor;

    const courses = await Course.find(query)
      .populate('instructor', 'firstName lastName')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Course.countDocuments(query);

    res.json({
      courses,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });

  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/course/:courseId
// @desc    Get specific course details
// @access  Private (Admin only)
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId)
      .populate('instructor', 'firstName lastName');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);

  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/admin/course/:courseId
// @desc    Update course
// @access  Private (Admin only)
router.put('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, price, isPublished, isFeatured, instructor } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Update fields
    if (title) course.title = title;
    if (description) course.description = description;
    if (price) course.price = price;
    if (isPublished !== undefined) course.isPublished = isPublished;
    if (isFeatured !== undefined) course.isFeatured = isFeatured;
    if (instructor) course.instructor = instructor;

    await course.save();

    res.json({
      message: 'Course updated successfully',
      course
    });

  } catch (error) {
    console.error('Update course error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/lms/admin/course/:courseId
// @desc    Delete course
// @access  Private (Admin only)
router.delete('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await Course.findByIdAndDelete(courseId);

    res.json({ message: 'Course deleted successfully' });

  } catch (error) {
    console.error('Delete course error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/admin/assign-student
// @desc    Assign student to trainer
// @access  Private (Admin only)
router.post('/assign-student', async (req, res) => {
  try {
    const { studentId, trainerId } = req.body;

    const student = await User.findById(studentId);
    const trainer = await User.findById(trainerId);

    if (!student || student.role !== 'student') {
      return res.status(404).json({ message: 'Student not found' });
    }

    if (!trainer || trainer.role !== 'trainer') {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    await trainer.assignStudent(studentId);

    res.json({
      message: 'Student assigned to trainer successfully',
      student: student.getPublicProfile(),
      trainer: trainer.getPublicProfile()
    });

  } catch (error) {
    console.error('Assign student error:', error);
    if (error.message.includes('already assigned')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/enrollments
// @desc    Get all enrollments
// @access  Private (Admin only)
router.get('/enrollments', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const enrollments = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $lookup: {
        from: 'courses',
        localField: 'enrolledCourses.courseId',
        foreignField: '_id',
        as: 'course'
      }},
      { $unwind: '$course' },
      { $lookup: {
        from: 'users',
        localField: 'course.instructor',
        foreignField: '_id',
        as: 'instructor'
      }},
      { $unwind: '$instructor' },
      { $project: {
        studentName: { $concat: ['$firstName', ' ', '$lastName'] },
        studentEmail: '$email',
        courseName: '$course.title',
        courseId: '$course._id',
        instructorName: { $concat: ['$instructor.firstName', ' ', '$instructor.lastName'] },
        enrolledAt: '$enrolledCourses.enrolledAt',
        progress: '$enrolledCourses.progress',
        amount: '$course.price',
        status: 'completed'
      }},
      { $sort: { enrolledAt: -1 } },
      { $skip: (page - 1) * limit },
      { $limit: limit * 1 }
    ]);

    const total = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $count: 'total' }
    ]);

    res.json({
      enrollments,
      totalPages: Math.ceil((total[0]?.total || 0) / limit),
      currentPage: page,
      total: total[0]?.total || 0
    });

  } catch (error) {
    console.error('Get enrollments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/payments
// @desc    Get payment history
// @access  Private (Admin only)
router.get('/payments', async (req, res) => {
  try {
    // This would integrate with actual payment gateway
    // For now, return mock data
    const payments = [
      {
        id: '1',
        studentName: 'John Doe',
        courseName: 'React Development',
        amount: 2999,
        status: 'completed',
        date: new Date(),
        paymentMethod: 'Razorpay'
      },
      {
        id: '2',
        studentName: 'Jane Smith',
        courseName: 'Python Full Stack',
        amount: 3999,
        status: 'completed',
        date: new Date(Date.now() - 86400000),
        paymentMethod: 'Stripe'
      }
    ];

    res.json(payments);

  } catch (error) {
    console.error('Get payments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/admin/certificate/:courseId/:studentId
// @desc    Issue certificate to student
// @access  Private (Admin only)
router.post('/certificate/:courseId/:studentId', async (req, res) => {
  try {
    const { courseId, studentId } = req.params;

    const student = await User.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const enrollment = student.enrolledCourses.find(
      e => e.courseId.toString() === courseId
    );

    if (!enrollment) {
      return res.status(404).json({ message: 'Student not enrolled in this course' });
    }

    if (enrollment.progress < 100) {
      return res.status(400).json({ message: 'Student has not completed the course' });
    }

    if (enrollment.certificateIssued) {
      return res.status(400).json({ message: 'Certificate already issued' });
    }

    enrollment.certificateIssued = true;
    await student.save();

    res.json({
      message: 'Certificate issued successfully',
      certificateId: `${courseId}-${studentId}`
    });

  } catch (error) {
    console.error('Issue certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/admin/statistics
// @desc    Get detailed statistics
// @access  Private (Admin only)
router.get('/statistics', async (req, res) => {
  try {
    const { period = '30' } = req.query;
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - parseInt(period));

    // User statistics
    const totalUsers = await User.countDocuments();
    const newUsers = await User.countDocuments({ createdAt: { $gte: daysAgo } });
    const activeUsers = await User.countDocuments({ lastLogin: { $gte: daysAgo } });

    // Role distribution
    const roleDistribution = await User.aggregate([
      { $group: { _id: '$role', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // Course statistics
    const totalCourses = await Course.countDocuments();
    const publishedCourses = await Course.countDocuments({ isPublished: true });
    const newCourses = await Course.countDocuments({ createdAt: { $gte: daysAgo } });

    // Category distribution
    const categoryDistribution = await Course.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // Enrollment statistics
    const totalEnrollments = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $count: 'total' }
    ]);

    const newEnrollments = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $match: { 'enrolledCourses.enrolledAt': { $gte: daysAgo } } },
      { $count: 'total' }
    ]);

    // Revenue calculation
    const revenueResult = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      { $lookup: {
        from: 'courses',
        localField: 'enrolledCourses.courseId',
        foreignField: '_id',
        as: 'course'
      }},
      { $unwind: '$course' },
      { $group: { _id: null, total: { $sum: '$course.price' } } }
    ]);

    const totalRevenue = revenueResult.length > 0 ? revenueResult[0].total : 0;

    res.json({
      users: {
        total: totalUsers,
        new: newUsers,
        active: activeUsers,
        roleDistribution
      },
      courses: {
        total: totalCourses,
        published: publishedCourses,
        new: newCourses,
        categoryDistribution
      },
      enrollments: {
        total: totalEnrollments.length > 0 ? totalEnrollments[0].total : 0,
        new: newEnrollments.length > 0 ? newEnrollments[0].total : 0
      },
      revenue: {
        total: totalRevenue
      }
    });

  } catch (error) {
    console.error('Statistics error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/admin/bulk-action
// @desc    Perform bulk actions on users or courses
// @access  Private (Admin only)
router.post('/bulk-action', async (req, res) => {
  try {
    const { action, ids, data } = req.body;

    let result;
    switch (action) {
      case 'activate_users':
        result = await User.updateMany(
          { _id: { $in: ids } },
          { isActive: true }
        );
        break;
      case 'deactivate_users':
        result = await User.updateMany(
          { _id: { $in: ids } },
          { isActive: false }
        );
        break;
      case 'publish_courses':
        result = await Course.updateMany(
          { _id: { $in: ids } },
          { isPublished: true }
        );
        break;
      case 'unpublish_courses':
        result = await Course.updateMany(
          { _id: { $in: ids } },
          { isPublished: false }
        );
        break;
      case 'delete_users':
        result = await User.deleteMany({ _id: { $in: ids } });
        break;
      case 'delete_courses':
        result = await Course.deleteMany({ _id: { $in: ids } });
        break;
      default:
        return res.status(400).json({ message: 'Invalid action' });
    }

    res.json({
      message: `Bulk action '${action}' completed successfully`,
      modifiedCount: result.modifiedCount || result.deletedCount
    });

  } catch (error) {
    console.error('Bulk action error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 