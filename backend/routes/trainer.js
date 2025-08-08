const express = require('express');
const { auth, requireTrainer } = require('../middleware/auth');
const { uploadCourseMaterial, handleUploadError } = require('../middleware/upload');
const User = require('../models/User');
const Course = require('../models/Course');
const Notification = require('../models/Notification');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);
router.use(requireTrainer);

// @route   GET /api/lms/trainer/dashboard
// @desc    Get trainer dashboard data
// @access  Private (Trainer only)
router.get('/dashboard', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'assignedStudents.studentId',
        select: 'firstName lastName email enrolledCourses',
        populate: {
          path: 'enrolledCourses.courseId',
          select: 'title'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get courses taught by this trainer
    const courses = await Course.find({ instructor: req.user.id })
      .select('title description enrolledStudents completedStudents');

    // Get upcoming live classes
    const upcomingClasses = await Course.aggregate([
      { $match: { instructor: req.user._id } },
      { $unwind: '$liveClasses' },
      { $match: { 'liveClasses.date': { $gte: new Date() } } },
      { $project: {
        courseTitle: '$title',
        liveClass: '$liveClasses'
      }},
      { $sort: { 'liveClass.date': 1 } }
    ]);

    res.json({
      assignedStudents: user.assignedStudents,
      courses,
      upcomingClasses
    });

  } catch (error) {
    console.error('Trainer dashboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/students
// @desc    Get assigned students
// @access  Private (Trainer only)
router.get('/students', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'assignedStudents.studentId',
        select: 'firstName lastName email phone enrolledCourses',
        populate: {
          path: 'enrolledCourses.courseId',
          select: 'title progress'
        }
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.assignedStudents);

  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/student/:studentId
// @desc    Get specific student details
// @access  Private (Trainer only)
router.get('/student/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;

    const user = await User.findById(req.user.id);
    const assignment = user.assignedStudents.find(
      a => a.studentId.toString() === studentId
    );

    if (!assignment) {
      return res.status(404).json({ message: 'Student not assigned to you' });
    }

    const student = await User.findById(studentId)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title description progress',
        match: { instructor: req.user.id }
      });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);

  } catch (error) {
    console.error('Get student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/trainer/assignments
// @desc    Create a new assignment
// @access  Private (Trainer only)
router.post('/assignments', async (req, res) => {
  try {
    const { title, description, dueDate, courseId, points, submissionType } = req.body;
    
    // Validate required fields
    if (!title || !description || !dueDate || !courseId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if course exists and trainer is the instructor
    const course = await Course.findOne({ 
      _id: courseId, 
      instructor: req.user.id 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found or you are not the instructor' });
    }

    // Create assignment object
    const assignment = {
      title,
      description,
      dueDate: new Date(dueDate),
      points: points || 100,
      submissionType: submissionType || 'file',
      createdBy: req.user.id,
      createdAt: new Date()
    };

    // Add assignment to course
    course.assignments = course.assignments || [];
    course.assignments.push(assignment);
    await course.save();

    // Notify enrolled students
    const enrolledStudents = course.enrolledStudents || [];
    for (const enrollment of enrolledStudents) {
      await Notification.create({
        userId: enrollment.studentId,
        title: 'New Assignment Available',
        message: `A new assignment "${title}" has been added to ${course.title}`,
        type: 'assignment',
        relatedId: course._id,
        priority: 'normal'
      });
    }

    res.status(201).json({
      message: 'Assignment created successfully',
      assignment
    });

  } catch (error) {
    console.error('Create assignment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/trainer/course/:courseId/material
// @desc    Upload course material
// @access  Private (Trainer only)
router.post('/course/:courseId/material', uploadCourseMaterial, handleUploadError, async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, contentType, module, tags } = req.body;
    
    // Validate required fields
    if (!title || !description || !contentType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if course exists and trainer is the instructor
    const course = await Course.findOne({ 
      _id: courseId, 
      instructor: req.user.id 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found or you are not the instructor' });
    }

    // Handle file uploads (if any)
    const uploadedFiles = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        uploadedFiles.push({
          originalName: file.originalname,
          filename: file.filename,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype,
          url: `/uploads/materials/${file.filename}`
        });
      }
    }

    // Create material object
    const material = {
      title,
      description,
      contentType,
      files: uploadedFiles,
      module: module || null,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      uploadedBy: req.user.id,
      uploadedAt: new Date()
    };

    // Add material to course
    course.materials = course.materials || [];
    course.materials.push(material);
    await course.save();

    // Notify enrolled students
    const enrolledStudents = course.enrolledStudents || [];
    for (const enrollment of enrolledStudents) {
      await Notification.create({
        userId: enrollment.studentId,
        title: 'New Course Material Available',
        message: `New material "${title}" has been added to ${course.title}`,
        type: 'material',
        relatedId: course._id,
        priority: 'normal'
      });
    }

    res.status(201).json({
      message: 'Material uploaded successfully',
      material
    });

  } catch (error) {
    console.error('Upload material error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/courses
// @desc    Get courses taught by trainer
// @access  Private (Trainer only)
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.user.id })
      .select('title description status enrolledStudents materials assignments')
      .populate('enrolledStudents.studentId', 'firstName lastName email');

    // Calculate completion rates
    const coursesWithStats = courses.map(course => {
      const totalStudents = course.enrolledStudents.length;
      const completedStudents = course.enrolledStudents.filter(
        enrollment => enrollment.progress >= 100
      ).length;
      const completionRate = totalStudents > 0 ? Math.round((completedStudents / totalStudents) * 100) : 0;

      return {
        ...course.toObject(),
        completionRate,
        totalStudents,
        completedStudents
      };
    });

    res.json(coursesWithStats);

  } catch (error) {
    console.error('Get trainer courses error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/course/:courseId
// @desc    Get specific course details
// @access  Private (Trainer only)
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findOne({ 
      _id: courseId, 
      instructor: req.user.id 
    }).populate('instructor', 'firstName lastName');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);

  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/trainer/course/:courseId/live-class
// @desc    Schedule a live class
// @access  Private (Trainer only)
router.post('/course/:courseId/live-class', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, date, duration, meetLink } = req.body;

    const course = await Course.findOne({ 
      _id: courseId, 
      instructor: req.user.id 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await course.scheduleLiveClass({
      title,
      description,
      date: new Date(date),
      duration,
      meetLink
    });

    res.json({ 
      message: 'Live class scheduled successfully',
      course 
    });

  } catch (error) {
    console.error('Schedule live class error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/trainer/course/:courseId/live-class/:classId
// @desc    Update live class
// @access  Private (Trainer only)
router.put('/course/:courseId/live-class/:classId', async (req, res) => {
  try {
    const { courseId, classId } = req.params;
    const { title, description, date, duration, meetLink, recordingUrl, isCompleted } = req.body;

    const course = await Course.findOne({ 
      _id: courseId, 
      instructor: req.user.id 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const liveClass = course.liveClasses.id(classId);
    if (!liveClass) {
      return res.status(404).json({ message: 'Live class not found' });
    }

    // Update fields
    if (title) liveClass.title = title;
    if (description) liveClass.description = description;
    if (date) liveClass.date = new Date(date);
    if (duration) liveClass.duration = duration;
    if (meetLink) liveClass.meetLink = meetLink;
    if (recordingUrl) liveClass.recordingUrl = recordingUrl;
    if (isCompleted !== undefined) liveClass.isCompleted = isCompleted;

    await course.save();

    res.json({ 
      message: 'Live class updated successfully',
      liveClass 
    });

  } catch (error) {
    console.error('Update live class error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/schedule
// @desc    Get trainer's class schedule
// @access  Private (Trainer only)
router.get('/schedule', async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.user.id })
      .select('title liveClasses');

    const schedule = [];
    courses.forEach(course => {
      course.liveClasses.forEach(liveClass => {
        schedule.push({
          ...liveClass.toObject(),
          courseTitle: course.title,
          courseId: course._id
        });
      });
    });

    // Sort by date
    schedule.sort((a, b) => new Date(a.date) - new Date(b.date));

    res.json(schedule);

  } catch (error) {
    console.error('Get schedule error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/student/:studentId/progress
// @desc    Get student progress for trainer's courses
// @access  Private (Trainer only)
router.get('/student/:studentId/progress', async (req, res) => {
  try {
    const { studentId } = req.params;

    const user = await User.findById(req.user.id);
    const assignment = user.assignedStudents.find(
      a => a.studentId.toString() === studentId
    );

    if (!assignment) {
      return res.status(404).json({ message: 'Student not assigned to you' });
    }

    const student = await User.findById(studentId)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title description progress',
        match: { instructor: req.user.id }
      });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const progressData = student.enrolledCourses.map(enrollment => ({
      courseId: enrollment.courseId._id,
      courseTitle: enrollment.courseId.title,
      progress: enrollment.progress,
      enrolledAt: enrollment.enrolledAt,
      completedAt: enrollment.completedAt
    }));

    res.json(progressData);

  } catch (error) {
    console.error('Get student progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/trainer/student/:studentId/progress/:courseId
// @desc    Update student progress for a course
// @access  Private (Trainer only)
router.put('/student/:studentId/progress/:courseId', async (req, res) => {
  try {
    const { studentId, courseId } = req.params;
    const { progress } = req.body;

    if (progress < 0 || progress > 100) {
      return res.status(400).json({ message: 'Progress must be between 0 and 100' });
    }

    const user = await User.findById(req.user.id);
    const assignment = user.assignedStudents.find(
      a => a.studentId.toString() === studentId
    );

    if (!assignment) {
      return res.status(404).json({ message: 'Student not assigned to you' });
    }

    const student = await User.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.updateCourseProgress(courseId, progress);

    res.json({ 
      message: 'Student progress updated successfully',
      progress 
    });

  } catch (error) {
    console.error('Update student progress error:', error);
    if (error.message === 'Not enrolled in this course') {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/profile
// @desc    Get trainer profile
// @access  Private (Trainer only)
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate({
        path: 'assignedStudents.studentId',
        select: 'firstName lastName email'
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

// @route   PUT /api/lms/trainer/profile
// @desc    Update trainer profile
// @access  Private (Trainer only)
router.put('/profile', async (req, res) => {
  try {
    const { firstName, lastName, phone, specialization, experience, bio, profilePicture } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phone) user.phone = phone;
    if (specialization) user.specialization = specialization;
    if (experience) user.experience = experience;
    if (bio) user.bio = bio;
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

// @route   POST /api/lms/trainer/notify-students
// @desc    Send notifications to students
// @access  Private (Trainer only)
router.post('/notify-students', async (req, res) => {
  try {
    const { title, message, type, courseIds, studentIds, priority = 'normal' } = req.body;

    if (!title || !message) {
      return res.status(400).json({ message: 'Title and message are required' });
    }

    let targetStudents = [];

    if (type === 'course' && courseIds && courseIds.length > 0) {
      // Get students enrolled in specified courses
      const courses = await Course.find({ 
        _id: { $in: courseIds },
        instructor: req.user.id 
      }).populate('enrolledStudents.studentId');

      for (const course of courses) {
        targetStudents.push(...course.enrolledStudents.map(e => e.studentId._id));
      }
    } else if (type === 'individual' && studentIds && studentIds.length > 0) {
      // Verify these students are assigned to this trainer
      const user = await User.findById(req.user.id);
      const assignedStudentIds = user.assignedStudents.map(a => a.studentId.toString());
      
      const validStudentIds = studentIds.filter(id => 
        assignedStudentIds.includes(id.toString())
      );
      
      targetStudents = validStudentIds;
    }

    if (targetStudents.length === 0) {
      return res.status(400).json({ message: 'No valid students found to notify' });
    }

    // Create notifications
    const notifications = targetStudents.map(studentId => ({
      userId: studentId,
      title,
      message,
      type: 'announcement',
      priority,
      createdBy: req.user.id
    }));

    await Notification.insertMany(notifications);

    res.json({
      message: `Notification sent to ${targetStudents.length} students`,
      count: targetStudents.length
    });

  } catch (error) {
    console.error('Notify students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/analytics
// @desc    Get trainer analytics
// @access  Private (Trainer only)
router.get('/analytics', async (req, res) => {
  try {
    const { period = '30' } = req.query;
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - parseInt(period));

    // Course statistics
    const courses = await Course.find({ instructor: req.user.id });
    const totalCourses = courses.length;
    const publishedCourses = courses.filter(c => c.isPublished).length;

    // Student statistics
    const assignedStudents = req.user.assignedStudents.length;
    const activeStudents = await User.countDocuments({
      _id: { $in: req.user.assignedStudents.map(a => a.studentId) },
      lastLogin: { $gte: daysAgo }
    });

    // Enrollment statistics for trainer's courses
    const enrollments = await User.aggregate([
      { $match: { role: 'student' } },
      { $unwind: '$enrolledCourses' },
      {
        $lookup: {
          from: 'courses',
          localField: 'enrolledCourses.courseId',
          foreignField: '_id',
          as: 'course'
        }
      },
      { $unwind: '$course' },
      { $match: { 'course.instructor': req.user._id } },
      {
        $group: {
          _id: null,
          totalEnrollments: { $sum: 1 },
          totalRevenue: { $sum: '$course.price' },
          averageProgress: { $avg: '$enrolledCourses.progress' }
        }
      }
    ]);

    const enrollmentStats = enrollments.length > 0 ? enrollments[0] : {
      totalEnrollments: 0,
      totalRevenue: 0,
      averageProgress: 0
    };

    res.json({
      courses: {
        total: totalCourses,
        published: publishedCourses
      },
      students: {
        assigned: assignedStudents,
        active: activeStudents
      },
      enrollments: {
        total: enrollmentStats.totalEnrollments,
        revenue: enrollmentStats.totalRevenue,
        averageProgress: Math.round(enrollmentStats.averageProgress || 0)
      }
    });

  } catch (error) {
    console.error('Trainer analytics error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/trainer/activity
// @desc    Get recent activity for the trainer (uploads, assignments, scheduled classes)
// @access  Private (Trainer only)
router.get('/activity', async (req, res) => {
  try {
    // TODO: Replace with real activity aggregation from DB
    const mockActivity = [
      {
        type: 'upload',
        description: 'Uploaded new video content',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        details: { fileName: 'React_Basics.mp4' }
      },
      {
        type: 'assignment',
        description: 'Added new assignment',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        details: { title: 'JS Fundamentals Quiz' }
      },
      {
        type: 'class',
        description: 'Scheduled live class',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        details: { classTitle: 'Live Q&A', date: '2024-07-01' }
      }
    ];
    res.json(mockActivity);
  } catch (error) {
    console.error('Trainer activity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 