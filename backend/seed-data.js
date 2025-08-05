const mongoose = require('mongoose');
const User = require('./models/User');
const Course = require('./models/Course');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleCourses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack web developer",
    shortDescription: "Master web development from scratch to advanced concepts",
    category: "web-development",
    level: "beginner",
    duration: "3 months",
    price: 15000,
    originalPrice: 20000,
    discount: 25,
    isPublished: true,
    isFeatured: true,
    rating: {
      average: 4.5,
      count: 12
    },
    modules: [
      {
        title: "HTML & CSS Fundamentals",
        description: "Learn the basics of HTML and CSS",
        order: 1,
        lessons: [
          {
            title: "Introduction to HTML",
            description: "Basic HTML structure and elements",
            type: "video",
            content: "https://example.com/video1.mp4",
            duration: 45,
            order: 1,
            isFree: true
          },
          {
            title: "CSS Styling",
            description: "Learn CSS properties and styling",
            type: "video",
            content: "https://example.com/video2.mp4",
            duration: 60,
            order: 2,
            isFree: false
          }
        ]
      },
      {
        title: "JavaScript Programming",
        description: "Master JavaScript fundamentals",
        order: 2,
        lessons: [
          {
            title: "JavaScript Basics",
            description: "Variables, functions, and control structures",
            type: "video",
            content: "https://example.com/video3.mp4",
            duration: 90,
            order: 1,
            isFree: false
          }
        ]
      }
    ],
    requirements: [
      "Basic computer knowledge",
      "No programming experience required"
    ],
    learningOutcomes: [
      "Build responsive websites",
      "Create dynamic web applications",
      "Deploy websites to production"
    ]
  },
  {
    title: "Data Science with Python",
    description: "Master data analysis, machine learning, and statistical modeling with Python",
    shortDescription: "Comprehensive data science course with Python",
    category: "data-science",
    level: "intermediate",
    duration: "4 months",
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    isPublished: true,
    isFeatured: true,
    rating: {
      average: 4.8,
      count: 8
    },
    modules: [
      {
        title: "Python Fundamentals",
        description: "Learn Python programming basics",
        order: 1,
        lessons: [
          {
            title: "Python Introduction",
            description: "Setting up Python environment",
            type: "video",
            content: "https://example.com/python1.mp4",
            duration: 60,
            order: 1,
            isFree: true
          }
        ]
      }
    ],
    requirements: [
      "Basic mathematics",
      "No programming experience required"
    ],
    learningOutcomes: [
      "Analyze data with Python",
      "Build machine learning models",
      "Create data visualizations"
    ]
  },
  {
    title: "React.js Masterclass",
    description: "Build modern web applications with React.js and advanced concepts",
    shortDescription: "Advanced React.js development course",
    category: "web-development",
    level: "advanced",
    duration: "2 months",
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    isPublished: true,
    isFeatured: false,
    rating: {
      average: 4.6,
      count: 15
    },
    modules: [
      {
        title: "React Fundamentals",
        description: "Core React concepts and components",
        order: 1,
        lessons: [
          {
            title: "React Components",
            description: "Understanding React components",
            type: "video",
            content: "https://example.com/react1.mp4",
            duration: 75,
            order: 1,
            isFree: false
          }
        ]
      }
    ],
    requirements: [
      "JavaScript knowledge",
      "Basic HTML/CSS understanding"
    ],
    learningOutcomes: [
      "Build React applications",
      "Master React hooks",
      "Deploy React apps"
    ]
  }
];

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Get existing users
    const students = await User.find({ role: 'student' });
    const trainers = await User.find({ role: 'trainer' });

    if (students.length === 0 || trainers.length === 0) {
      console.log('❌ No students or trainers found. Please create users first.');
      return;
    }

    // Create courses
    console.log('📚 Creating sample courses...');
    const createdCourses = [];
    
    for (const courseData of sampleCourses) {
      // Assign random trainer to each course
      const randomTrainer = trainers[Math.floor(Math.random() * trainers.length)];
      
      const course = new Course({
        ...courseData,
        instructor: randomTrainer._id
      });
      
      await course.save();
      createdCourses.push(course);
      console.log(`✅ Created course: ${course.title}`);
    }

    // Create enrollments
    console.log('👥 Creating sample enrollments...');
    
    for (const student of students) {
      // Enroll each student in 1-2 random courses
      const numEnrollments = Math.floor(Math.random() * 2) + 1;
      const selectedCourses = createdCourses
        .sort(() => 0.5 - Math.random())
        .slice(0, numEnrollments);
      
      for (const course of selectedCourses) {
        const progress = Math.floor(Math.random() * 100);
        const enrollmentDate = new Date();
        enrollmentDate.setDate(enrollmentDate.getDate() - Math.floor(Math.random() * 30));
        
        student.enrolledCourses.push({
          courseId: course._id,
          enrolledAt: enrollmentDate,
          progress: progress,
          completedAt: progress === 100 ? new Date() : null
        });
      }
      
      await student.save();
      console.log(`✅ Enrolled student ${student.firstName} in ${selectedCourses.length} courses`);
    }

    // Update course enrollment counts
    console.log('📊 Updating course statistics...');
    for (const course of createdCourses) {
      await course.updateEnrollmentCount();
      await course.updateCompletionCount();
    }

    console.log('🎉 Database seeding completed successfully!');
    console.log(`📈 Created ${createdCourses.length} courses`);
    console.log(`👥 Enrolled ${students.length} students in courses`);

  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seeding
seedData(); 