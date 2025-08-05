const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phone: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'trainer', 'admin'],
    default: 'student'
  },
  profilePicture: {
    type: String,
    default: null
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  // Student specific fields
  enrolledCourses: [{
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    enrolledAt: {
      type: Date,
      default: Date.now
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    completedAt: {
      type: Date,
      default: null
    },
    certificateIssued: {
      type: Boolean,
      default: false
    }
  }],
  // Trainer specific fields
  assignedStudents: [{
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    assignedAt: {
      type: Date,
      default: Date.now
    }
  }],
  specialization: {
    type: String,
    default: null
  },
  experience: {
    type: Number,
    default: 0
  },
  bio: {
    type: String,
    default: null
  },
  // Common fields
  lastLogin: {
    type: Date,
    default: null
  },
  resetPasswordToken: {
    type: String,
    default: null
  },
  resetPasswordExpires: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ 'enrolledCourses.courseId': 1 });

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for student progress
userSchema.virtual('totalProgress').get(function() {
  if (this.role !== 'student' || !this.enrolledCourses.length) return 0;
  const totalProgress = this.enrolledCourses.reduce((sum, course) => sum + course.progress, 0);
  return Math.round(totalProgress / this.enrolledCourses.length);
});

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Method to get public profile (without sensitive data)
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.resetPasswordToken;
  delete userObject.resetPasswordExpires;
  return userObject;
};

// Static method to find by email
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Method to update last login
userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save();
};

// Method to enroll in course (for students)
userSchema.methods.enrollInCourse = function(courseId) {
  const existingEnrollment = this.enrolledCourses.find(
    enrollment => enrollment.courseId.toString() === courseId.toString()
  );
  
  if (existingEnrollment) {
    throw new Error('Already enrolled in this course');
  }
  
  this.enrolledCourses.push({
    courseId: courseId,
    enrolledAt: new Date(),
    progress: 0
  });
  
  return this.save();
};

// Method to update course progress (for students)
userSchema.methods.updateCourseProgress = function(courseId, progress) {
  const enrollment = this.enrolledCourses.find(
    enrollment => enrollment.courseId.toString() === courseId.toString()
  );
  
  if (!enrollment) {
    throw new Error('Not enrolled in this course');
  }
  
  enrollment.progress = Math.min(100, Math.max(0, progress));
  
  if (enrollment.progress === 100 && !enrollment.completedAt) {
    enrollment.completedAt = new Date();
  }
  
  return this.save();
};

// Method to assign student (for trainers)
userSchema.methods.assignStudent = function(studentId) {
  if (this.role !== 'trainer') {
    throw new Error('Only trainers can assign students');
  }
  
  const existingAssignment = this.assignedStudents.find(
    assignment => assignment.studentId.toString() === studentId.toString()
  );
  
  if (existingAssignment) {
    throw new Error('Student already assigned');
  }
  
  this.assignedStudents.push({
    studentId: studentId,
    assignedAt: new Date()
  });
  
  return this.save();
};

module.exports = mongoose.model('User', userSchema); 