const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');
const Enrollment = require('../models/Enrollment');
const { auth } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

// Get all courses (with filters)
router.get('/', auth, async (req, res) => {
  try {
    const { 
      search, 
      category, 
      level, 
      status, 
      page = 1, 
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const query = {};
    
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
    
    // Status filter
    if (status) {
      if (status === 'published') {
        query.isPublished = true;
      } else if (status === 'draft') {
        query.isPublished = false;
      }
    }

    // Pagination
    const skip = (page - 1) * limit;
    
    // Sorting
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const courses = await Course.find(query)
      .populate('instructor', 'firstName lastName email')
      .sort(sort)
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
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
});

// Get course by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'firstName lastName email');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Failed to fetch course' });
  }
});

// Create new course
router.post('/', auth, async (req, res) => {
  try {
    const {
      title,
      description,
      shortDescription,
      category,
      level,
      duration,
      price,
      originalPrice,
      discount,
      requirements,
      learningOutcomes,
      pricing,
      projects,
      programOutcomes,
      isPublished,
      isFeatured,
      tags
    } = req.body;

    // Validate required fields
    if (!title || !description || !category || !level || !duration || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const course = new Course({
      title,
      description,
      shortDescription,
      category,
      level,
      duration,
      price: parseFloat(price),
      originalPrice: originalPrice ? parseFloat(originalPrice) : undefined,
      discount: discount ? parseFloat(discount) : 0,
      requirements: requirements || [],
      learningOutcomes: learningOutcomes || [],
      pricing,
      projects: projects || [],
      programOutcomes: programOutcomes || [],
      instructor: req.user.id,
      isPublished: isPublished || false,
      isFeatured: isFeatured || false,
      tags: tags || []
    });

    await course.save();

    res.status(201).json({
      message: 'Course created successfully',
      course
    });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Failed to create course' });
  }
});

// Update course
router.put('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user is instructor or admin
    if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this course' });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('instructor', 'firstName lastName email');

    res.json({
      message: 'Course updated successfully',
      course: updatedCourse
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ message: 'Failed to update course' });
  }
});

// Delete course
router.delete('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user is instructor or admin
    if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this course' });
    }

    // Check if course has enrollments
    const enrollmentCount = await Enrollment.countDocuments({ courseId: req.params.id });
    if (enrollmentCount > 0) {
      return res.status(400).json({ 
        message: 'Cannot delete course with existing enrollments' 
      });
    }

    await Course.findByIdAndDelete(req.params.id);

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ message: 'Failed to delete course' });
  }
});

// Update course statistics
router.put('/:id/stats', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await course.updateStats();

    res.json({
      message: 'Course statistics updated successfully',
      course
    });
  } catch (error) {
    console.error('Error updating course stats:', error);
    res.status(500).json({ message: 'Failed to update course statistics' });
  }
});

// Bulk update courses
router.put('/bulk/update', auth, async (req, res) => {
  try {
    const { courseIds, updates } = req.body;

    if (!courseIds || !Array.isArray(courseIds) || courseIds.length === 0) {
      return res.status(400).json({ message: 'Course IDs are required' });
    }

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'Updates are required' });
    }

    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can perform bulk updates' });
    }

    const result = await Course.updateMany(
      { _id: { $in: courseIds } },
      updates
    );

    res.json({
      message: 'Courses updated successfully',
      updatedCount: result.modifiedCount
    });
  } catch (error) {
    console.error('Error bulk updating courses:', error);
    res.status(500).json({ message: 'Failed to update courses' });
  }
});

// Get course statistics
router.get('/:id/stats', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Get enrollment statistics
    const enrollmentStats = await Enrollment.aggregate([
      { $match: { courseId: course._id } },
      {
        $group: {
          _id: null,
          totalEnrollments: { $sum: 1 },
          completedEnrollments: { $sum: { $cond: [{ $eq: ['$progress', 100] }, 1, 0] } },
          totalRevenue: { $sum: '$amount' },
          avgProgress: { $avg: '$progress' },
          avgRating: { $avg: '$rating' }
        }
      }
    ]);

    // Get recent enrollments
    const recentEnrollments = await Enrollment.find({ courseId: course._id })
      .populate('studentId', 'firstName lastName email')
      .sort({ enrolledAt: -1 })
      .limit(5);

    const stats = enrollmentStats[0] || {
      totalEnrollments: 0,
      completedEnrollments: 0,
      totalRevenue: 0,
      avgProgress: 0,
      avgRating: 0
    };

    res.json({
      course,
      stats: {
        ...stats,
        completionRate: stats.totalEnrollments > 0 
          ? Math.round((stats.completedEnrollments / stats.totalEnrollments) * 100) 
          : 0
      },
      recentEnrollments
    });
  } catch (error) {
    console.error('Error fetching course stats:', error);
    res.status(500).json({ message: 'Failed to fetch course statistics' });
  }
});

// Upload course thumbnail
router.post('/:id/thumbnail', auth, upload.single('thumbnail'), async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    course.thumbnail = req.file.path;
    await course.save();

    res.json({
      message: 'Thumbnail uploaded successfully',
      thumbnail: req.file.path
    });
  } catch (error) {
    console.error('Error uploading thumbnail:', error);
    res.status(500).json({ message: 'Failed to upload thumbnail' });
  }
});

// Upload syllabus PDF
router.post('/:id/syllabus', auth, upload.single('syllabusPdf'), async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No PDF uploaded' });
    }

    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: 'Only PDF files are allowed' });
    }

    course.syllabusPdf = req.file.path;
    await course.save();

    res.json({
      message: 'Syllabus PDF uploaded successfully',
      syllabusPdf: req.file.path
    });
  } catch (error) {
    console.error('Error uploading syllabus PDF:', error);
    res.status(500).json({ message: 'Failed to upload syllabus PDF' });
  }
});

// Get course categories
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Course.distinct('category');
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Get course levels
router.get('/levels/list', async (req, res) => {
  try {
    const levels = await Course.distinct('level');
    res.json(levels);
  } catch (error) {
    console.error('Error fetching levels:', error);
    res.status(500).json({ message: 'Failed to fetch levels' });
  }
});

// Enroll in course
router.post('/:id/enroll', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId = req.user.id;

    // Check if course exists and is published
    const course = await Course.findOne({ 
      _id: courseId, 
      isPublished: true 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found or not published' });
    }

    // Check if user is a student
    if (req.user.role !== 'student') {
      return res.status(403).json({ message: 'Only students can enroll in courses' });
    }

    const user = await User.findById(userId);
    
    // Check if already enrolled
    const existingEnrollment = user.enrolledCourses.find(
      e => e.courseId.toString() === courseId
    );

    if (existingEnrollment) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    // Enroll student in course
    await user.enrollInCourse(courseId);

    // Update course enrollment count
    course.enrolledStudents = (course.enrolledStudents || 0) + 1;
    await course.save();

    // Send notification
    try {
      const notificationService = require('../utils/notificationService');
      await notificationService.sendEnrollmentNotification(userId, courseId, course.title);
    } catch (notificationError) {
      console.error('Failed to send enrollment notification:', notificationError);
    }

    res.json({
      message: 'Successfully enrolled in course',
      course: {
        id: course._id,
        title: course.title,
        instructor: course.instructor
      }
    });

  } catch (error) {
    console.error('Enrollment error:', error);
    if (error.message === 'Already enrolled in this course') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Failed to enroll in course' });
  }
});

module.exports = router; 