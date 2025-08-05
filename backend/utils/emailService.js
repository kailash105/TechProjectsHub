const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs').promises;

class EmailService {
  constructor() {
    this.transporter = null;
    this.templates = {};
    this.init();
  }

  // Initialize email service
  async init() {
    try {
      // Create transporter
      this.transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      // Load email templates
      await this.loadTemplates();

      console.log('✅ Email service initialized successfully');
    } catch (error) {
      console.error('❌ Email service initialization failed:', error);
    }
  }

  // Load email templates
  async loadTemplates() {
    try {
      const templatesDir = path.join(__dirname, 'emailTemplates');
      
      // Create templates directory if it doesn't exist
      try {
        await fs.access(templatesDir);
      } catch {
        await fs.mkdir(templatesDir, { recursive: true });
      }

      // Load template files
      const templateFiles = [
        'welcome.html',
        'enrollment.html',
        'courseUpdate.html',
        'liveClass.html',
        'certificate.html',
        'assignment.html',
        'passwordReset.html',
        'systemNotification.html'
      ];

      for (const file of templateFiles) {
        const templatePath = path.join(templatesDir, file);
        try {
          const content = await fs.readFile(templatePath, 'utf8');
          this.templates[file.replace('.html', '')] = content;
        } catch {
          // Create default template if file doesn't exist
          await this.createDefaultTemplate(file);
        }
      }

      console.log('✅ Email templates loaded successfully');
    } catch (error) {
      console.error('❌ Error loading email templates:', error);
    }
  }

  // Create default template
  async createDefaultTemplate(filename) {
    const templateName = filename.replace('.html', '');
    const templatesDir = path.join(__dirname, 'emailTemplates');
    const templatePath = path.join(templatesDir, filename);

    let defaultTemplate = '';

    switch (templateName) {
      case 'welcome':
        defaultTemplate = this.getWelcomeTemplate();
        break;
      case 'enrollment':
        defaultTemplate = this.getEnrollmentTemplate();
        break;
      case 'courseUpdate':
        defaultTemplate = this.getCourseUpdateTemplate();
        break;
      case 'liveClass':
        defaultTemplate = this.getLiveClassTemplate();
        break;
      case 'certificate':
        defaultTemplate = this.getCertificateTemplate();
        break;
      case 'assignment':
        defaultTemplate = this.getAssignmentTemplate();
        break;
      case 'passwordReset':
        defaultTemplate = this.getPasswordResetTemplate();
        break;
      case 'systemNotification':
        defaultTemplate = this.getSystemNotificationTemplate();
        break;
      default:
        defaultTemplate = this.getDefaultTemplate();
    }

    await fs.writeFile(templatePath, defaultTemplate);
    this.templates[templateName] = defaultTemplate;
  }

  // Send email with template
  async sendEmail(to, subject, templateName, data = {}) {
    try {
      if (!this.transporter) {
        throw new Error('Email service not initialized');
      }

      const template = this.templates[templateName];
      if (!template) {
        throw new Error(`Template '${templateName}' not found`);
      }

      const html = this.replaceTemplateVariables(template, data);
      const text = this.htmlToText(html);

      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || 'TechProjectsHub LMS'}" <${process.env.SMTP_USER}>`,
        to: to,
        subject: subject,
        text: text,
        html: html
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`✅ Email sent successfully to ${to}: ${subject}`);
      return result;

    } catch (error) {
      console.error(`❌ Error sending email to ${to}:`, error);
      throw error;
    }
  }

  // Replace template variables
  replaceTemplateVariables(template, data) {
    let html = template;
    
    // Replace common variables
    const commonVars = {
      '{{userName}}': data.userName || 'User',
      '{{userEmail}}': data.userEmail || '',
      '{{courseTitle}}': data.courseTitle || 'Course',
      '{{courseId}}': data.courseId || '',
      '{{actionUrl}}': data.actionUrl || '#',
      '{{actionText}}': data.actionText || 'View',
      '{{message}}': data.message || '',
      '{{date}}': new Date().toLocaleDateString(),
      '{{time}}': new Date().toLocaleTimeString(),
      '{{siteName}}': process.env.SITE_NAME || 'TechProjectsHub LMS',
      '{{siteUrl}}': process.env.FRONTEND_URL || 'http://localhost:3000',
      '{{supportEmail}}': process.env.SUPPORT_EMAIL || 'support@techprojectshub.com'
    };

    Object.entries(commonVars).forEach(([key, value]) => {
      html = html.replace(new RegExp(key, 'g'), value);
    });

    // Replace custom variables
    Object.entries(data).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      html = html.replace(regex, value);
    });

    return html;
  }

  // Convert HTML to plain text
  htmlToText(html) {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
  }

  // Email sending methods for different notification types
  async sendWelcomeEmail(userEmail, userName) {
    return this.sendEmail(
      userEmail,
      'Welcome to TechProjectsHub LMS!',
      'welcome',
      { userName, userEmail }
    );
  }

  async sendEnrollmentEmail(userEmail, userName, courseTitle, courseId) {
    return this.sendEmail(
      userEmail,
      `Successfully Enrolled in ${courseTitle}`,
      'enrollment',
      { 
        userName, 
        userEmail, 
        courseTitle, 
        courseId,
        actionUrl: `${process.env.FRONTEND_URL}/lms/course/${courseId}`,
        actionText: 'Start Learning'
      }
    );
  }

  async sendCourseUpdateEmail(userEmail, userName, courseTitle, courseId) {
    return this.sendEmail(
      userEmail,
      `Course Updated: ${courseTitle}`,
      'courseUpdate',
      { 
        userName, 
        userEmail, 
        courseTitle, 
        courseId,
        actionUrl: `${process.env.FRONTEND_URL}/lms/course/${courseId}`,
        actionText: 'View Updates'
      }
    );
  }

  async sendLiveClassEmail(userEmail, userName, courseTitle, liveClass) {
    return this.sendEmail(
      userEmail,
      `Live Class Scheduled: ${liveClass.title}`,
      'liveClass',
      { 
        userName, 
        userEmail, 
        courseTitle,
        liveClassTitle: liveClass.title,
        liveClassDate: new Date(liveClass.date).toLocaleString(),
        liveClassDuration: liveClass.duration || '60 minutes',
        actionUrl: `${process.env.FRONTEND_URL}/lms/live-class/${liveClass._id}`,
        actionText: 'Join Class'
      }
    );
  }

  async sendCertificateEmail(userEmail, userName, courseTitle, courseId) {
    return this.sendEmail(
      userEmail,
      `Certificate Available: ${courseTitle}`,
      'certificate',
      { 
        userName, 
        userEmail, 
        courseTitle, 
        courseId,
        actionUrl: `${process.env.FRONTEND_URL}/lms/certificate/${courseId}`,
        actionText: 'Download Certificate'
      }
    );
  }

  async sendAssignmentEmail(userEmail, userName, courseTitle, assignmentTitle, courseId) {
    return this.sendEmail(
      userEmail,
      `New Assignment: ${assignmentTitle}`,
      'assignment',
      { 
        userName, 
        userEmail, 
        courseTitle, 
        assignmentTitle,
        courseId,
        actionUrl: `${process.env.FRONTEND_URL}/lms/course/${courseId}/assignments`,
        actionText: 'View Assignment'
      }
    );
  }

  async sendPasswordResetEmail(userEmail, userName, resetToken) {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    return this.sendEmail(
      userEmail,
      'Password Reset Request',
      'passwordReset',
      { 
        userName, 
        userEmail, 
        resetUrl,
        actionUrl: resetUrl,
        actionText: 'Reset Password'
      }
    );
  }

  async sendSystemNotificationEmail(userEmail, userName, title, message, actionUrl = null) {
    return this.sendEmail(
      userEmail,
      title,
      'systemNotification',
      { 
        userName, 
        userEmail, 
        title, 
        message,
        actionUrl: actionUrl || '#',
        actionText: actionUrl ? 'View Details' : null
      }
    );
  }

  // Template generators
  getWelcomeTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to {{siteName}}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to {{siteName}}!</h1>
            <p>Your learning journey starts here</p>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>Welcome to {{siteName}}! We're excited to have you join our learning community.</p>
            <p>Here's what you can do to get started:</p>
            <ul>
                <li>Browse our course catalog</li>
                <li>Enroll in your first course</li>
                <li>Connect with trainers and fellow students</li>
                <li>Track your learning progress</li>
            </ul>
            <a href="{{siteUrl}}" class="button">Start Learning</a>
            <p>If you have any questions, feel free to contact our support team at {{supportEmail}}.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getEnrollmentTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Enrollment Successful</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #28a745; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Enrollment Successful!</h1>
            <p>You're now enrolled in {{courseTitle}}</p>
        </div>
        <div class="content">
            <h2>Congratulations {{userName}}!</h2>
            <p>You have been successfully enrolled in <strong>{{courseTitle}}</strong>.</p>
            <p>Your learning journey begins now! Here's what you can do:</p>
            <ul>
                <li>Access course materials and videos</li>
                <li>Track your progress</li>
                <li>Participate in discussions</li>
                <li>Complete assignments and quizzes</li>
            </ul>
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            <p>If you have any questions about the course, please don't hesitate to reach out to your instructor or our support team.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getCourseUpdateTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Updated</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #007bff 0%, #0056b3 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📚 Course Updated</h1>
            <p>New content available in {{courseTitle}}</p>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>The course <strong>{{courseTitle}}</strong> has been updated with new content!</p>
            <p>New updates may include:</p>
            <ul>
                <li>Additional video lessons</li>
                <li>New course materials</li>
                <li>Updated assignments</li>
                <li>Enhanced resources</li>
            </ul>
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            <p>Stay updated and continue your learning journey!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getLiveClassTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Class Scheduled</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #dc3545; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .class-details { background: #e9ecef; padding: 20px; border-radius: 5px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎥 Live Class Scheduled</h1>
            <p>Join us for an interactive session</p>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>A live class has been scheduled for <strong>{{courseTitle}}</strong>.</p>
            <div class="class-details">
                <h3>Class Details:</h3>
                <p><strong>Title:</strong> {{liveClassTitle}}</p>
                <p><strong>Date & Time:</strong> {{liveClassDate}}</p>
                <p><strong>Duration:</strong> {{liveClassDuration}}</p>
            </div>
            <p>Make sure to:</p>
            <ul>
                <li>Test your audio and video before joining</li>
                <li>Have a stable internet connection</li>
                <li>Prepare any questions you might have</li>
                <li>Join 5 minutes before the scheduled time</li>
            </ul>
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getCertificateTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate Available</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #ffc107; color: #333; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏆 Certificate Available!</h1>
            <p>Congratulations on completing {{courseTitle}}</p>
        </div>
        <div class="content">
            <h2>Congratulations {{userName}}!</h2>
            <p>You have successfully completed <strong>{{courseTitle}}</strong> and your certificate is now available for download!</p>
            <p>This certificate represents your dedication and hard work in mastering the course content. You can:</p>
            <ul>
                <li>Download your certificate</li>
                <li>Share it on LinkedIn</li>
                <li>Add it to your portfolio</li>
                <li>Use it for professional development</li>
            </ul>
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            <p>Keep up the great work and continue your learning journey!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getAssignmentTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Assignment Available</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #6f42c1; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📝 New Assignment</h1>
            <p>{{assignmentTitle}} is now available</p>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>A new assignment <strong>{{assignmentTitle}}</strong> has been added to <strong>{{courseTitle}}</strong>.</p>
            <p>This assignment will help you:</p>
            <ul>
                <li>Apply what you've learned</li>
                <li>Practice your skills</li>
                <li>Get feedback from your instructor</li>
                <li>Track your progress</li>
            </ul>
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            <p>Make sure to submit your assignment before the deadline!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getPasswordResetTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #17a2b8 0%, #138496 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #17a2b8; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔐 Password Reset</h1>
            <p>Reset your account password</p>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>We received a request to reset your password for your {{siteName}} account.</p>
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            <div class="warning">
                <p><strong>Important:</strong></p>
                <ul>
                    <li>This link will expire in 1 hour</li>
                    <li>If you didn't request this reset, please ignore this email</li>
                    <li>For security, this link can only be used once</li>
                </ul>
            </div>
            <p>If the button doesn't work, copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #007bff;">{{resetUrl}}</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getSystemNotificationTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6c757d 0%, #495057 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #6c757d; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{{title}}</h1>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>{{message}}</p>
            {{#if actionUrl}}
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            {{/if}}
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  getDefaultTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #007bff 0%, #0056b3 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{{title}}</h1>
        </div>
        <div class="content">
            <h2>Hello {{userName}},</h2>
            <p>{{message}}</p>
            {{#if actionUrl}}
            <a href="{{actionUrl}}" class="button">{{actionText}}</a>
            {{/if}}
        </div>
        <div class="footer">
            <p>&copy; 2024 {{siteName}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }
}

// Create singleton instance
const emailService = new EmailService();

module.exports = emailService; 