const express = require('express');
const { auth, requireStudent, requireTrainer } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// @route   GET /api/lms/chat/conversations
// @desc    Get user's chat conversations
// @access  Private
router.get('/conversations', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (user.role === 'student') {
      // Get conversations with assigned trainers
      const conversations = await User.find({
        _id: { $in: user.assignedStudents?.map(s => s.studentId) || [] },
        role: 'trainer'
      }).select('firstName lastName email');

      res.json(conversations);
    } else if (user.role === 'trainer') {
      // Get conversations with assigned students
      const conversations = await User.find({
        _id: { $in: user.assignedStudents?.map(s => s.studentId) || [] },
        role: 'student'
      }).select('firstName lastName email');

      res.json(conversations);
    } else {
      res.json([]);
    }

  } catch (error) {
    console.error('Get conversations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/chat/conversation/:userId
// @desc    Get chat messages with a specific user
// @access  Private
router.get('/conversation/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUser = await User.findById(req.user.id);

    // Check if users can chat (student-trainer relationship)
    let canChat = false;
    
    if (currentUser.role === 'student') {
      // Check if the other user is an assigned trainer
      canChat = currentUser.assignedStudents?.some(s => s.studentId.toString() === userId);
    } else if (currentUser.role === 'trainer') {
      // Check if the other user is an assigned student
      canChat = currentUser.assignedStudents?.some(s => s.studentId.toString() === userId);
    }

    if (!canChat) {
      return res.status(403).json({ message: 'Cannot chat with this user' });
    }

    // TODO: Get messages from database
    // For now, return mock messages
    const messages = [
      {
        id: '1',
        senderId: req.user.id,
        receiverId: userId,
        content: 'Hello! How can I help you with the course?',
        timestamp: new Date(Date.now() - 3600000),
        type: 'text'
      },
      {
        id: '2',
        senderId: userId,
        receiverId: req.user.id,
        content: 'I have a question about the React assignment.',
        timestamp: new Date(Date.now() - 1800000),
        type: 'text'
      }
    ];

    res.json(messages);

  } catch (error) {
    console.error('Get conversation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/chat/message
// @desc    Send a message
// @access  Private
router.post('/message', async (req, res) => {
  try {
    const { receiverId, content, type = 'text' } = req.body;
    const currentUser = await User.findById(req.user.id);

    // Check if users can chat
    let canChat = false;
    
    if (currentUser.role === 'student') {
      canChat = currentUser.assignedStudents?.some(s => s.studentId.toString() === receiverId);
    } else if (currentUser.role === 'trainer') {
      canChat = currentUser.assignedStudents?.some(s => s.studentId.toString() === receiverId);
    }

    if (!canChat) {
      return res.status(403).json({ message: 'Cannot send message to this user' });
    }

    // TODO: Save message to database
    const message = {
      id: Date.now().toString(),
      senderId: req.user.id,
      receiverId,
      content,
      type,
      timestamp: new Date()
    };

    // TODO: Emit to Socket.IO for real-time delivery
    // io.to(receiverId).emit('new_message', message);

    res.json({
      message: 'Message sent successfully',
      data: message
    });

  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/chat/unread-count
// @desc    Get unread message count
// @access  Private
router.get('/unread-count', async (req, res) => {
  try {
    // TODO: Get actual unread count from database
    const unreadCount = 0; // Mock data

    res.json({ unreadCount });

  } catch (error) {
    console.error('Get unread count error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/chat/mark-read/:senderId
// @desc    Mark messages as read
// @access  Private
router.put('/mark-read/:senderId', async (req, res) => {
  try {
    const { senderId } = req.params;

    // TODO: Mark messages as read in database
    // await Message.updateMany(
    //   { senderId, receiverId: req.user.id, read: false },
    //   { read: true }
    // );

    res.json({ message: 'Messages marked as read' });

  } catch (error) {
    console.error('Mark read error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/chat/trainers
// @desc    Get available trainers (for students)
// @access  Private (Student only)
router.get('/trainers', requireStudent, async (req, res) => {
  try {
    const trainers = await User.find({ 
      role: 'trainer',
      isActive: true 
    }).select('firstName lastName email specialization experience');

    res.json(trainers);

  } catch (error) {
    console.error('Get trainers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/lms/chat/students
// @desc    Get assigned students (for trainers)
// @access  Private (Trainer only)
router.get('/students', requireTrainer, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'assignedStudents.studentId',
        select: 'firstName lastName email enrolledCourses',
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

module.exports = router; 