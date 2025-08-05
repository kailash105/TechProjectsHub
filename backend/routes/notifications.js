const express = require('express');
const { auth } = require('../middleware/auth');
const Notification = require('../models/Notification');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// @route   GET /api/lms/notifications
// @desc    Get user's notifications
// @access  Private
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20, unreadOnly = false } = req.query;
    
    const query = { recipient: req.user.id };
    if (unreadOnly === 'true') {
      query.isRead = false;
    }
    query.isArchived = false;

    const notifications = await Notification.find(query)
      .populate('sender', 'firstName lastName')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Notification.countDocuments(query);

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

// @route   GET /api/lms/notifications/unread-count
// @desc    Get unread notification count
// @access  Private
router.get('/unread-count', async (req, res) => {
  try {
    const count = await Notification.getUnreadCount(req.user.id);
    res.json({ count });

  } catch (error) {
    console.error('Get unread count error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/notifications/:notificationId/read
// @desc    Mark notification as read
// @access  Private
router.put('/:notificationId/read', async (req, res) => {
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

// @route   PUT /api/lms/notifications/mark-all-read
// @desc    Mark all notifications as read
// @access  Private
router.put('/mark-all-read', async (req, res) => {
  try {
    await Notification.markAllAsRead(req.user.id);

    res.json({ message: 'All notifications marked as read' });

  } catch (error) {
    console.error('Mark all as read error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/lms/notifications/:notificationId/archive
// @desc    Archive notification
// @access  Private
router.put('/:notificationId/archive', async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findOne({
      _id: notificationId,
      recipient: req.user.id
    });

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    await notification.archive();

    res.json({ message: 'Notification archived' });

  } catch (error) {
    console.error('Archive notification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/lms/notifications/:notificationId
// @desc    Delete notification
// @access  Private
router.delete('/:notificationId', async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findOne({
      _id: notificationId,
      recipient: req.user.id
    });

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    await Notification.findByIdAndDelete(notificationId);

    res.json({ message: 'Notification deleted' });

  } catch (error) {
    console.error('Delete notification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/notifications
// @desc    Create notification (admin/trainer only)
// @access  Private
router.post('/', async (req, res) => {
  try {
    const { recipientId, type, title, message, data, priority, actionUrl, actionText } = req.body;

    // Check if user has permission to create notifications
    if (!['admin', 'trainer'].includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const notification = await Notification.createNotification({
      recipient: recipientId,
      sender: req.user.id,
      type,
      title,
      message,
      data: data || {},
      priority: priority || 'medium',
      actionUrl,
      actionText
    });

    res.status(201).json({
      message: 'Notification created successfully',
      notification
    });

  } catch (error) {
    console.error('Create notification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/notifications/bulk
// @desc    Create bulk notifications (admin only)
// @access  Private
router.post('/bulk', async (req, res) => {
  try {
    const { recipientIds, type, title, message, data, priority } = req.body;

    // Only admin can create bulk notifications
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const notifications = [];
    for (const recipientId of recipientIds) {
      notifications.push({
        recipient: recipientId,
        sender: req.user.id,
        type,
        title,
        message,
        data: data || {},
        priority: priority || 'medium'
      });
    }

    const createdNotifications = await Notification.insertMany(notifications);

    res.status(201).json({
      message: `${createdNotifications.length} notifications created successfully`,
      count: createdNotifications.length
    });

  } catch (error) {
    console.error('Create bulk notifications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 