const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
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
  },
  certificateId: {
    type: String,
    default: null
  },
  // Track individual module progress
  moduleProgress: [{
    moduleId: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    completedLessons: [{
      type: String
    }]
  }],
  // Track quiz scores
  quizScores: [{
    quizId: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    maxScore: {
      type: Number,
      required: true
    },
    completedAt: {
      type: Date,
      default: Date.now
    }
  }],
  // Track assignments
  assignments: [{
    assignmentId: {
      type: String,
      required: true
    },
    submittedAt: {
      type: Date,
      default: Date.now
    },
    score: {
      type: Number,
      default: null
    },
    feedback: {
      type: String,
      default: null
    },
    status: {
      type: String,
      enum: ['pending', 'submitted', 'graded'],
      default: 'pending'
    }
  }],
  // Payment information
  payment: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'INR'
    },
    paymentMethod: {
      type: String,
      default: null
    },
    transactionId: {
      type: String,
      default: null
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    paidAt: {
      type: Date,
      default: null
    }
  },
  // Access control
  isActive: {
    type: Boolean,
    default: true
  },
  expiresAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Indexes for better query performance
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });
enrollmentSchema.index({ student: 1 });
enrollmentSchema.index({ course: 1 });
enrollmentSchema.index({ 'payment.status': 1 });
enrollmentSchema.index({ enrolledAt: -1 });

// Virtual for completion status
enrollmentSchema.virtual('isCompleted').get(function() {
  return this.progress === 100;
});

// Virtual for certificate eligibility
enrollmentSchema.virtual('isCertificateEligible').get(function() {
  return this.progress >= 80 && this.quizScores.length > 0;
});

// Method to update progress
enrollmentSchema.methods.updateProgress = function(newProgress) {
  this.progress = Math.min(100, Math.max(0, newProgress));
  
  if (this.progress === 100 && !this.completedAt) {
    this.completedAt = new Date();
  }
  
  return this.save();
};

// Method to update module progress
enrollmentSchema.methods.updateModuleProgress = function(moduleId, progress, completedLessons = []) {
  let moduleProgress = this.moduleProgress.find(mp => mp.moduleId === moduleId);
  
  if (!moduleProgress) {
    moduleProgress = {
      moduleId,
      progress: 0,
      completedLessons: []
    };
    this.moduleProgress.push(moduleProgress);
  }
  
  moduleProgress.progress = Math.min(100, Math.max(0, progress));
  moduleProgress.completedLessons = completedLessons;
  
  // Calculate overall progress
  const totalModules = this.moduleProgress.length;
  const totalProgress = this.moduleProgress.reduce((sum, mp) => sum + mp.progress, 0);
  this.progress = Math.round(totalProgress / totalModules);
  
  if (this.progress === 100 && !this.completedAt) {
    this.completedAt = new Date();
  }
  
  return this.save();
};

// Method to add quiz score
enrollmentSchema.methods.addQuizScore = function(quizId, score, maxScore) {
  const existingQuiz = this.quizScores.find(qs => qs.quizId === quizId);
  
  if (existingQuiz) {
    existingQuiz.score = score;
    existingQuiz.maxScore = maxScore;
    existingQuiz.completedAt = new Date();
  } else {
    this.quizScores.push({
      quizId,
      score,
      maxScore,
      completedAt: new Date()
    });
  }
  
  return this.save();
};

// Method to submit assignment
enrollmentSchema.methods.submitAssignment = function(assignmentId) {
  const existingAssignment = this.assignments.find(a => a.assignmentId === assignmentId);
  
  if (existingAssignment) {
    existingAssignment.status = 'submitted';
    existingAssignment.submittedAt = new Date();
  } else {
    this.assignments.push({
      assignmentId,
      status: 'submitted',
      submittedAt: new Date()
    });
  }
  
  return this.save();
};

// Method to grade assignment
enrollmentSchema.methods.gradeAssignment = function(assignmentId, score, feedback) {
  const assignment = this.assignments.find(a => a.assignmentId === assignmentId);
  
  if (assignment) {
    assignment.score = score;
    assignment.feedback = feedback;
    assignment.status = 'graded';
  }
  
  return this.save();
};

// Method to issue certificate
enrollmentSchema.methods.issueCertificate = function() {
  if (!this.isCertificateEligible) {
    throw new Error('Student is not eligible for certificate');
  }
  
  if (this.certificateIssued) {
    throw new Error('Certificate already issued');
  }
  
  this.certificateIssued = true;
  this.certificateId = `${this.course}-${this.student}-${Date.now()}`;
  
  return this.save();
};

// Static method to find by student and course
enrollmentSchema.statics.findByStudentAndCourse = function(studentId, courseId) {
  return this.findOne({ student: studentId, course: courseId });
};

// Static method to find active enrollments
enrollmentSchema.statics.findActive = function() {
  return this.find({ isActive: true });
};

// Static method to find completed enrollments
enrollmentSchema.statics.findCompleted = function() {
  return this.find({ progress: 100 });
};

module.exports = mongoose.model('Enrollment', enrollmentSchema); 