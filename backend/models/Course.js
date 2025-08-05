const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    maxlength: 200
  },
  category: {
    type: String,
    required: true,
    enum: ['web-development', 'data-science', 'ai-ml', 'mobile-development', 'cloud-computing', 'cybersecurity', 'blockchain', 'vlsi', 'programming', 'other']
  },
  level: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  requirements: [{
    type: String,
    trim: true
  }],
  learningOutcomes: [{
    type: String,
    trim: true
  }],
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  enrolledStudents: {
    type: Number,
    default: 0
  },
  completedStudents: {
    type: Number,
    default: 0
  },
  totalRevenue: {
    type: Number,
    default: 0
  },
  thumbnail: {
    type: String
  },
  syllabusPdf: {
    type: String // URL to uploaded PDF
  },
  pricing: {
    type: String
  },
  projects: [{
    title: String,
    description: String,
    technologies: [String]
  }],
  programOutcomes: [{
    type: String
  }],
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

// Index for better search performance
courseSchema.index({ title: 'text', description: 'text', category: 1, level: 1 });

// Virtual for discounted price
courseSchema.virtual('discountedPrice').get(function() {
  if (this.originalPrice && this.discount > 0) {
    return this.originalPrice - (this.originalPrice * this.discount / 100);
  }
  return this.price;
});

// Method to calculate completion rate
courseSchema.methods.getCompletionRate = function() {
  if (this.enrolledStudents === 0) return 0;
  return Math.round((this.completedStudents / this.enrolledStudents) * 100);
};

// Method to update course statistics
courseSchema.methods.updateStats = function() {
  return this.model('Enrollment').aggregate([
    { $match: { courseId: this._id } },
    {
      $group: {
        _id: null,
        enrolledCount: { $sum: 1 },
        completedCount: { $sum: { $cond: [{ $eq: ['$progress', 100] }, 1, 0] } },
        totalRevenue: { $sum: '$amount' },
        avgRating: { $avg: '$rating' },
        ratingCount: { $sum: { $cond: [{ $ne: ['$rating', null] }, 1, 0] } }
      }
    }
  ]).then(results => {
    if (results.length > 0) {
      const stats = results[0];
      this.enrolledStudents = stats.enrolledCount || 0;
      this.completedStudents = stats.completedCount || 0;
      this.totalRevenue = stats.totalRevenue || 0;
      if (stats.ratingCount > 0) {
        this.rating.average = Math.round(stats.avgRating * 10) / 10;
        this.rating.count = stats.ratingCount;
      }
    }
    return this.save();
  });
};

module.exports = mongoose.model('Course', courseSchema); 