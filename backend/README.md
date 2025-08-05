# LMS Backend API

A comprehensive Learning Management System (LMS) backend built with Node.js, Express, and MongoDB.

## Features

- **User Management**: Student, Trainer, and Admin roles with authentication
- **Course Management**: Create, update, and manage courses with modules and lessons
- **Enrollment System**: Track student enrollments and progress
- **Live Classes**: Schedule and manage live classes
- **Notifications**: Real-time notification system
- **Analytics**: Comprehensive analytics for admin and trainers
- **File Upload**: Support for course materials, profiles, and assignments
- **Certificate System**: Issue and manage course completion certificates

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Express Validator

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/lms
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/lms/auth/register` - Register new user
- `POST /api/lms/auth/login` - User login
- `POST /api/lms/auth/logout` - User logout
- `POST /api/lms/auth/refresh` - Refresh access token
- `POST /api/lms/auth/forgot-password` - Forgot password
- `POST /api/lms/auth/reset-password` - Reset password

### Admin Routes
- `GET /api/lms/admin/dashboard` - Admin dashboard data
- `GET /api/lms/admin/users` - Get all users
- `GET /api/lms/admin/user/:userId` - Get specific user
- `PUT /api/lms/admin/user/:userId` - Update user
- `DELETE /api/lms/admin/user/:userId` - Delete user
- `POST /api/lms/admin/trainer` - Add new trainer
- `GET /api/lms/admin/courses` - Get all courses
- `GET /api/lms/admin/course/:courseId` - Get specific course
- `PUT /api/lms/admin/course/:courseId` - Update course
- `DELETE /api/lms/admin/course/:courseId` - Delete course
- `POST /api/lms/admin/assign-student` - Assign student to trainer
- `GET /api/lms/admin/enrollments` - Get all enrollments
- `GET /api/lms/admin/payments` - Get payment history
- `POST /api/lms/admin/certificate/:courseId/:studentId` - Issue certificate
- `GET /api/lms/admin/statistics` - Get detailed statistics
- `POST /api/lms/admin/bulk-action` - Perform bulk actions

### Student Routes
- `GET /api/lms/student/dashboard` - Student dashboard
- `GET /api/lms/student/courses` - Get enrolled courses
- `GET /api/lms/student/course/:courseId` - Get specific course
- `PUT /api/lms/student/course/:courseId/progress` - Update progress
- `GET /api/lms/student/schedule` - Get class schedule
- `GET /api/lms/student/certificates` - Get certificates
- `GET /api/lms/student/certificate/:courseId` - Download certificate
- `GET /api/lms/student/progress` - Get progress statistics
- `GET /api/lms/student/profile` - Get profile
- `PUT /api/lms/student/profile` - Update profile
- `GET /api/lms/student/notifications` - Get notifications
- `PUT /api/lms/student/notifications/:notificationId/read` - Mark notification as read

### Trainer Routes
- `GET /api/lms/trainer/dashboard` - Trainer dashboard
- `GET /api/lms/trainer/students` - Get assigned students
- `GET /api/lms/trainer/student/:studentId` - Get specific student
- `GET /api/lms/trainer/courses` - Get taught courses
- `GET /api/lms/trainer/course/:courseId` - Get specific course
- `POST /api/lms/trainer/course/:courseId/live-class` - Schedule live class
- `PUT /api/lms/trainer/course/:courseId/live-class/:classId` - Update live class
- `POST /api/lms/trainer/course/:courseId/material` - Add course material
- `GET /api/lms/trainer/schedule` - Get class schedule
- `GET /api/lms/trainer/student/:studentId/progress` - Get student progress
- `PUT /api/lms/trainer/student/:studentId/progress/:courseId` - Update student progress
- `GET /api/lms/trainer/profile` - Get profile
- `PUT /api/lms/trainer/profile` - Update profile
- `POST /api/lms/trainer/notify-students` - Send notifications to students
- `GET /api/lms/trainer/analytics` - Get trainer analytics

### Course Routes
- `GET /api/lms/courses` - Get all published courses
- `GET /api/lms/courses/:courseId` - Get specific course
- `POST /api/lms/courses` - Create new course (trainer/admin)
- `PUT /api/lms/courses/:courseId` - Update course (trainer/admin)
- `DELETE /api/lms/courses/:courseId` - Delete course (admin)

### Notification Routes
- `GET /api/lms/notifications` - Get user notifications
- `GET /api/lms/notifications/unread-count` - Get unread count
- `PUT /api/lms/notifications/:notificationId/read` - Mark as read
- `PUT /api/lms/notifications/mark-all-read` - Mark all as read
- `PUT /api/lms/notifications/:notificationId/archive` - Archive notification
- `DELETE /api/lms/notifications/:notificationId` - Delete notification
- `POST /api/lms/notifications` - Create notification (admin/trainer)
- `POST /api/lms/notifications/bulk` - Create bulk notifications (admin)

### Analytics Routes
- `GET /api/lms/analytics/overview` - Get overview analytics (admin)
- `GET /api/lms/analytics/courses` - Get course analytics (admin)

### Chat Routes
- `GET /api/lms/chat/conversations` - Get conversations
- `GET /api/lms/chat/conversation/:conversationId` - Get specific conversation
- `POST /api/lms/chat/conversation` - Create conversation
- `POST /api/lms/chat/message` - Send message

## Models

### User Model
- Basic info: firstName, lastName, email, password, phone, dateOfBirth, gender
- Role-based fields: enrolledCourses (student), assignedStudents (trainer)
- Profile fields: profilePicture, specialization, experience, bio
- System fields: isActive, lastLogin, resetPasswordToken

### Course Model
- Basic info: title, description, category, level, duration, price
- Content: modules, lessons, materials, liveClasses
- Settings: isPublished, isFeatured, certificate settings
- Analytics: enrolledStudents, completedStudents, rating

### Enrollment Model
- Student and course references
- Progress tracking: progress, moduleProgress, quizScores
- Completion: completedAt, certificateIssued, certificateId
- Payment: amount, status, transactionId

### Notification Model
- Recipient and sender references
- Content: title, message, type, priority
- Status: isRead, isArchived
- Actions: actionUrl, actionText

## Middleware

### Authentication
- `auth` - Verify JWT token
- `requireStudent` - Require student role
- `requireTrainer` - Require trainer role
- `requireAdmin` - Require admin role

### File Upload
- `uploadProfilePicture` - Upload profile pictures
- `uploadCourseMedia` - Upload course thumbnails and banners
- `uploadCourseMaterial` - Upload course materials
- `uploadAssignment` - Upload assignments

## Utilities

### NotificationService
- `createNotification()` - Create single notification
- `createBulkNotifications()` - Create multiple notifications
- `sendEnrollmentNotification()` - Send enrollment notification
- `sendCourseUpdateNotification()` - Send course update notification
- `sendLiveClassNotification()` - Send live class notification
- `sendCertificateNotification()` - Send certificate notification

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access Control**: Different permissions for different user types
- **Rate Limiting**: Prevent abuse with request rate limiting
- **Input Validation**: Validate all user inputs
- **File Upload Security**: Secure file upload with type and size restrictions
- **CORS Protection**: Configured CORS for frontend integration
- **Helmet Security**: Security headers with Helmet

## Error Handling

- Centralized error handling middleware
- Consistent error response format
- Detailed logging for debugging
- Graceful error recovery

## Database Indexes

- User: email, role, enrolledCourses.courseId
- Course: title, description (text), category, instructor, isPublished
- Enrollment: student+course (unique), student, course, payment.status
- Notification: recipient+isRead, recipient+createdAt, type, expiresAt

## Development

### Running Tests
```bash
npm test
```

### Code Linting
```bash
npm run lint
```

### Database Seeding
```bash
npm run seed
```

## Production Deployment

1. Set environment variables for production
2. Use PM2 or similar process manager
3. Configure MongoDB for production
4. Set up proper logging
5. Configure SSL/TLS certificates
6. Set up monitoring and alerts

## API Response Format

### Success Response
```json
{
  "message": "Operation successful",
  "data": { ... },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Error Response
```json
{
  "message": "Error description",
  "error": "Detailed error information",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see LICENSE file for details 