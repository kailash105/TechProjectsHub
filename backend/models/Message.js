const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['text', 'image', 'file', 'audio'],
    default: 'text'
  },
  read: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date
  },
  attachments: [{
    filename: String,
    originalName: String,
    mimeType: String,
    size: Number,
    url: String
  }],
  replyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  edited: {
    type: Boolean,
    default: false
  },
  editedAt: {
    type: Date
  },
  deleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for better query performance
messageSchema.index({ senderId: 1, receiverId: 1, createdAt: -1 });
messageSchema.index({ receiverId: 1, read: 1 });
messageSchema.index({ createdAt: -1 });

// Virtual for conversation ID (unique identifier for a pair of users)
messageSchema.virtual('conversationId').get(function() {
  const ids = [this.senderId.toString(), this.receiverId.toString()].sort();
  return `${ids[0]}-${ids[1]}`;
});

// Method to mark message as read
messageSchema.methods.markAsRead = function() {
  this.read = true;
  this.readAt = new Date();
  return this.save();
};

// Static method to get conversation between two users
messageSchema.statics.getConversation = function(userId1, userId2, limit = 50, skip = 0) {
  return this.find({
    $or: [
      { senderId: userId1, receiverId: userId2 },
      { senderId: userId2, receiverId: userId1 }
    ],
    deleted: false
  })
  .populate('senderId', 'firstName lastName email role')
  .populate('receiverId', 'firstName lastName email role')
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limit)
  .lean();
};

// Static method to get unread count for a user
messageSchema.statics.getUnreadCount = function(userId) {
  return this.countDocuments({
    receiverId: userId,
    read: false,
    deleted: false
  });
};

// Static method to mark all messages as read in a conversation
messageSchema.statics.markConversationAsRead = function(userId1, userId2) {
  return this.updateMany(
    {
      senderId: userId2,
      receiverId: userId1,
      read: false,
      deleted: false
    },
    {
      read: true,
      readAt: new Date()
    }
  );
};

// Static method to get recent conversations for a user
messageSchema.statics.getRecentConversations = function(userId) {
  return this.aggregate([
    {
      $match: {
        $or: [
          { senderId: mongoose.Types.ObjectId(userId) },
          { receiverId: mongoose.Types.ObjectId(userId) }
        ],
        deleted: false
      }
    },
    {
      $addFields: {
        otherUser: {
          $cond: {
            if: { $eq: ['$senderId', mongoose.Types.ObjectId(userId)] },
            then: '$receiverId',
            else: '$senderId'
          }
        }
      }
    },
    {
      $group: {
        _id: '$otherUser',
        lastMessage: { $first: '$$ROOT' },
        unreadCount: {
          $sum: {
            $cond: [
              {
                $and: [
                  { $eq: ['$receiverId', mongoose.Types.ObjectId(userId)] },
                  { $eq: ['$read', false] }
                ]
              },
              1,
              0
            ]
          }
        }
      }
    },
    {
      $sort: { 'lastMessage.createdAt': -1 }
    },
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project: {
        _id: 1,
        user: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          role: 1
        },
        lastMessage: {
          content: 1,
          type: 1,
          createdAt: 1
        },
        unreadCount: 1
      }
    }
  ]);
};

module.exports = mongoose.model('Message', messageSchema); 