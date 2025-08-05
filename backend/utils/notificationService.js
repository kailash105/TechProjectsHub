const Notification = require('../models/Notification');
const emailService = require('./emailService');
const User = require('../models/User');

class NotificationService {
  // Create a notification
  static async createNotification(data) {
    try {
      const notification = await Notification.createNotification(data);
      
      // Send email notification if recipient has email
      await this.sendEmailNotification(notification);
      
      return notification;
    } catch (error) {
      console.error('Create notification error:', error);
      throw error;
    }
  }

  // Create bulk notifications
  static async createBulkNotifications(notifications) {
    try {
      const createdNotifications = await Notification.insertMany(notifications);
      
      // Send email notifications for all created notifications
      for (const notification of createdNotifications) {
        await this.sendEmailNotification(notification);
      }
      
      return createdNotifications;
    } catch (error) {
      console.error('Create bulk notifications error:', error);
      throw error;
    }
  }

  // Send email notification
  static async sendEmailNotification(notification) {
    try {
      // Get recipient user details
      const recipient = await User.findById(notification.recipient).select('firstName lastName email');
      if (!recipient || !recipient.email) {
        console.log(`No email found for user ${notification.recipient}`);
        return;
      }

      const userName = `${recipient.firstName} ${recipient.lastName}`;
      const userEmail = recipient.email;

      // Send email based on notification type
      switch (notification.type) {
        case 'enrollment':
          await emailService.sendEnrollmentEmail(
            userEmail, 
            userName, 
            notification.data.courseTitle, 
            notification.data.courseId
          );
          break;

        case 'course_update':
          await emailService.sendCourseUpdateEmail(
            userEmail, 
            userName, 
            notification.data.courseTitle, 
            notification.data.courseId
          );
          break;

        case 'live_class':
          await emailService.sendLiveClassEmail(
            userEmail, 
            userName, 
            notification.data.courseTitle, 
            notification.data.liveClass
          );
          break;

        case 'certificate':
          await emailService.sendCertificateEmail(
            userEmail, 
            userName, 
            notification.data.courseTitle, 
            notification.data.courseId
          );
          break;

        case 'assignment':
          await emailService.sendAssignmentEmail(
            userEmail, 
            userName, 
            notification.data.courseTitle, 
            notification.data.assignmentTitle, 
            notification.data.courseId
          );
          break;

        case 'system':
          await emailService.sendSystemNotificationEmail(
            userEmail, 
            userName, 
            notification.title, 
            notification.message, 
            notification.actionUrl
          );
          break;

        default:
          console.log(`No email template for notification type: ${notification.type}`);
      }

    } catch (error) {
      console.error('Send email notification error:', error);
      // Don't throw error to avoid breaking notification creation
    }
  }

  // Send enrollment notification
  static async sendEnrollmentNotification(studentId, courseId, courseTitle) {
    try {
      return await this.createNotification({
        recipient: studentId,
        type: 'enrollment',
        title: 'Course Enrollment Successful',
        message: `You have been successfully enrolled in "${courseTitle}". Start your learning journey now!`,
        data: { courseId, courseTitle },
        actionUrl: `/lms/course/${courseId}`,
        actionText: 'Start Learning'
      });
    } catch (error) {
      console.error('Send enrollment notification error:', error);
      throw error;
    }
  }

  // Send course update notification
  static async sendCourseUpdateNotification(courseId, courseTitle, enrolledStudents) {
    try {
      const notifications = enrolledStudents.map(studentId => ({
        recipient: studentId,
        type: 'course_update',
        title: 'Course Updated',
        message: `The course "${courseTitle}" has been updated with new content.`,
        data: { courseId, courseTitle },
        actionUrl: `/lms/course/${courseId}`,
        actionText: 'View Updates'
      }));

      return await this.createBulkNotifications(notifications);
    } catch (error) {
      console.error('Send course update notification error:', error);
      throw error;
    }
  }

  // Send live class notification
  static async sendLiveClassNotification(courseId, courseTitle, liveClass, enrolledStudents) {
    try {
      const notifications = enrolledStudents.map(studentId => ({
        recipient: studentId,
        type: 'live_class',
        title: 'Live Class Scheduled',
        message: `A live class "${liveClass.title}" has been scheduled for ${courseTitle}.`,
        data: { courseId, courseTitle, liveClass },
        actionUrl: `/lms/course/${courseId}/live-class/${liveClass._id}`,
        actionText: 'Join Class',
        priority: 'high'
      }));

      return await this.createBulkNotifications(notifications);
    } catch (error) {
      console.error('Send live class notification error:', error);
      throw error;
    }
  }

  // Send certificate notification
  static async sendCertificateNotification(studentId, courseId, courseTitle) {
    try {
      return await this.createNotification({
        recipient: studentId,
        type: 'certificate',
        title: 'Certificate Available',
        message: `Congratulations! Your certificate for "${courseTitle}" is now available for download.`,
        data: { courseId, courseTitle },
        actionUrl: `/lms/certificate/${courseId}`,
        actionText: 'Download Certificate',
        priority: 'high'
      });
    } catch (error) {
      console.error('Send certificate notification error:', error);
      throw error;
    }
  }

  // Send assignment notification
  static async sendAssignmentNotification(courseId, courseTitle, assignmentTitle, enrolledStudents) {
    try {
      const notifications = enrolledStudents.map(studentId => ({
        recipient: studentId,
        type: 'assignment',
        title: 'New Assignment Available',
        message: `A new assignment "${assignmentTitle}" has been added to "${courseTitle}".`,
        data: { courseId, courseTitle, assignmentTitle },
        actionUrl: `/lms/course/${courseId}/assignments`,
        actionText: 'View Assignment'
      }));

      return await this.createBulkNotifications(notifications);
    } catch (error) {
      console.error('Send assignment notification error:', error);
      throw error;
    }
  }

  // Send system notification
  static async sendSystemNotification(recipientIds, title, message, data = {}) {
    try {
      const notifications = recipientIds.map(recipientId => ({
        recipient: recipientId,
        type: 'system',
        title,
        message,
        data,
        priority: 'medium'
      }));

      return await this.createBulkNotifications(notifications);
    } catch (error) {
      console.error('Send system notification error:', error);
      throw error;
    }
  }

  // Send welcome email to new users
  static async sendWelcomeEmail(userId) {
    try {
      const user = await User.findById(userId).select('firstName lastName email');
      if (!user || !user.email) {
        console.log(`No email found for user ${userId}`);
        return;
      }

      const userName = `${user.firstName} ${user.lastName}`;
      await emailService.sendWelcomeEmail(user.email, userName);
      
      console.log(`Welcome email sent to ${user.email}`);
    } catch (error) {
      console.error('Send welcome email error:', error);
    }
  }

  // Send password reset email
  static async sendPasswordResetEmail(userId, resetToken) {
    try {
      const user = await User.findById(userId).select('firstName lastName email');
      if (!user || !user.email) {
        throw new Error('User not found or no email available');
      }

      const userName = `${user.firstName} ${user.lastName}`;
      await emailService.sendPasswordResetEmail(user.email, userName, resetToken);
      
      console.log(`Password reset email sent to ${user.email}`);
    } catch (error) {
      console.error('Send password reset email error:', error);
      throw error;
    }
  }

  // Get unread count for user
  static async getUnreadCount(userId) {
    try {
      return await Notification.getUnreadCount(userId);
    } catch (error) {
      console.error('Get unread count error:', error);
      throw error;
    }
  }

  // Mark all notifications as read for user
  static async markAllAsRead(userId) {
    try {
      return await Notification.markAllAsRead(userId);
    } catch (error) {
      console.error('Mark all as read error:', error);
      throw error;
    }
  }

  // Delete expired notifications
  static async deleteExpired() {
    try {
      return await Notification.deleteExpired();
    } catch (error) {
      console.error('Delete expired notifications error:', error);
      throw error;
    }
  }
}

module.exports = NotificationService; 