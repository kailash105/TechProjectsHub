const express = require('express');
const { auth, requireStudent, requireTrainer, requireAdmin } = require('../middleware/auth');
const User = require('../models/User');
const Message = require('../models/Message');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// @route   GET /api/lms/chat/conversations
// @desc    Get user's chat conversations
// @access  Private
router.get('/conversations', async (req, res) => {
  try {
    // Get all users of the opposite role for now (simplified)
    const currentUser = await User.findById(req.user.id);
    const oppositeRole = currentUser.role === 'student' ? 'trainer' : 'student';
    
    const conversations = await User.find({ role: oppositeRole })
      .select('firstName lastName email role')
      .limit(10);

    // Transform to match expected format
    const transformedConversations = conversations.map(user => ({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      lastMessage: null,
      lastMessageTime: null,
      unreadCount: 0
    }));

    res.json(transformedConversations);
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
    const { page = 1, limit = 50 } = req.query;
    const skip = (page - 1) * limit;

    // Get messages from database
    const messages = await Message.getConversation(req.user.id, userId, parseInt(limit), skip);
    
    // Mark messages as read
    await Message.markConversationAsRead(req.user.id, userId);

    // Transform messages to match expected format
    const transformedMessages = messages.map(msg => ({
      id: msg._id,
      senderId: msg.senderId._id,
      receiverId: msg.receiverId._id,
      content: msg.content,
      type: msg.type,
      timestamp: msg.createdAt,
      read: msg.read
    }));

    res.json(transformedMessages);

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
    
    // Get Socket.IO instance
    const io = req.app.get('io');
    const currentUser = await User.findById(req.user.id);
    const receiver = await User.findById(receiverId);

    // Check if receiver exists
    if (!receiver) {
      return res.status(404).json({ message: 'Receiver not found' });
    }

    // Check if users can chat (simplified - allow chat between different roles)
    let canChat = false;
    
    if (currentUser.role === 'student' && receiver.role === 'trainer') {
      canChat = true;
    } else if (currentUser.role === 'trainer' && receiver.role === 'student') {
      canChat = true;
    }

    if (!canChat) {
      return res.status(403).json({ message: 'Cannot send message to this user' });
    }

    // Check if sender is banned from chat
    if (currentUser.chatBanned) {
      return res.status(403).json({ message: 'You are banned from chat by admin.' });
    }

    // Save message to database
    const message = new Message({
      senderId: req.user.id,
      receiverId,
      content,
      type
    });

    await message.save();

    // Emit to Socket.IO for real-time delivery
    const receiverRoom = `${currentUser.role === 'student' ? 'trainer' : 'student'}-${receiverId}`;
    io.to(receiverRoom).emit('new-message', {
      ...message,
      senderName: `${currentUser.firstName} ${currentUser.lastName}`,
      senderRole: currentUser.role
    });

    res.json({
      message: 'Message sent successfully',
      data: {
        id: message._id,
        senderId: message.senderId,
        receiverId: message.receiverId,
        content: message.content,
        type: message.type,
        timestamp: message.createdAt,
        read: message.read
      }
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
    const unreadCount = await Message.getUnreadCount(req.user.id);
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

    await Message.markConversationAsRead(req.user.id, senderId);

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

// ADMIN: View all conversations between any users
router.get('/admin/all-conversations', requireAdmin, async (req, res) => {
  try {
    // Get all unique user pairs who have exchanged messages
    const conversations = await Message.aggregate([
      {
        $match: { deleted: false }
      },
      {
        $group: {
          _id: {
            users: {
              $cond: [
                { $lt: ["$senderId", "$receiverId"] },
                ["$senderId", "$receiverId"],
                ["$receiverId", "$senderId"]
              ]
            }
          },
          lastMessage: { $last: "$content" },
          lastMessageTime: { $last: "$createdAt" }
        }
      }
    ]);
    res.json(conversations);
  } catch (error) {
    console.error('Admin get all conversations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ADMIN: View all messages between any two users
router.get('/admin/messages/:userId1/:userId2', requireAdmin, async (req, res) => {
  try {
    const { userId1, userId2 } = req.params;
    const messages = await Message.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 }
      ]
    }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    console.error('Admin get messages error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ADMIN: Delete any message (soft delete)
router.delete('/admin/message/:messageId', requireAdmin, async (req, res) => {
  try {
    const { messageId } = req.params;
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    message.deleted = true;
    message.deletedAt = new Date();
    await message.save();
    res.json({ message: 'Message deleted (soft delete)' });
  } catch (error) {
    console.error('Admin delete message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ADMIN: Ban/unban user from chat
router.put('/admin/ban-user/:userId', requireAdmin, async (req, res) => {
  try {
    const { userId } = req.params;
    const { ban } = req.body; // { ban: true } or { ban: false }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.chatBanned = !!ban;
    await user.save();
    res.json({ message: `User chat ban set to ${!!ban}` });
  } catch (error) {
    console.error('Admin ban/unban user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 