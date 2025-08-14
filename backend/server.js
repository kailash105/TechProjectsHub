const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174'],
    credentials: true
  }
});

const PORT = process.env.PORT || 8000;

// Import routes
// LMS routes temporarily disabled
// const authRoutes = require('./routes/auth');
// const studentRoutes = require('./routes/student');
// const trainerRoutes = require('./routes/trainer');
// const adminRoutes = require('./routes/admin');
// const courseRoutes = require('./routes/courses');
// const paymentRoutes = require('./routes/payments');
// const chatRoutes = require('./routes/chat');
// const notificationRoutes = require('./routes/notifications');
// const analyticsRoutes = require('./routes/analytics');
// const publicRoutes = require('./routes/public');

// Security middleware
app.use(helmet());
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// CORS configuration
app.use(cors());

// Logging middleware
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static('uploads'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Tech Projects Hub Server is running (LMS temporarily disabled)',
    timestamp: new Date().toISOString()
  });
});

// API routes - LMS temporarily disabled
// app.use('/api/lms/auth', authRoutes);
// app.use('/api/lms/student', studentRoutes);
// app.use('/api/lms/trainer', trainerRoutes);
// app.use('/api/lms/admin', adminRoutes);
// app.use('/api/lms/courses', courseRoutes);
// app.use('/api/lms/payments', paymentRoutes);
// app.use('/api/lms/chat', chatRoutes);
// app.use('/api/lms/notifications', notificationRoutes);
// app.use('/api/lms/analytics', analyticsRoutes);
// app.use('/api/lms/public', publicRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Socket.IO connection handling - LMS temporarily disabled
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // LMS functionality temporarily disabled
  // socket.on('join-room', (userData) => {
  //   const room = `${userData.role}-${userData.id}`;
  //   socket.join(room);
  //   console.log(`User ${userData.id} joined room: ${room}`);
  // });

  // socket.on('send-message', (messageData) => {
  //   const receiverRoom = `${messageData.receiverRole}-${messageData.receiverId}`;
  //   socket.to(receiverRoom).emit('new-message', messageData);
  // });

  // socket.on('notification-sent', (notificationData) => {
  //   socket.to(`role-${notificationData.targetRole}`).emit('new-notification', notificationData);
  // });

  // socket.on('course-updated', (courseData) => {
  //   io.emit('course-changed', courseData);
  // });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Make io available to routes
app.set('io', io);

// Database connection - LMS temporarily disabled
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
//   server.listen(PORT, () => {
//     console.log(`LMS Server running on port ${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error('MongoDB connection error:', err);
//   process.exit(1);
// });

// Temporary server startup without MongoDB
server.listen(PORT, () => {
  console.log(`Tech Projects Hub Server running on port ${PORT} (LMS temporarily disabled)`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  // mongoose.connection.close(() => {
  //   console.log('MongoDB connection closed');
  //   process.exit(0);
  // });
  process.exit(0);
});

module.exports = app; 