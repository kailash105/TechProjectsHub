const mongoose = require('mongoose');
const Course = require('./models/Course');
const User = require('./models/User');
require('dotenv').config();

const sampleCourses = [
  {
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack web developer. This comprehensive course covers everything from basic HTML to advanced React concepts.',
    shortDescription: 'Master full-stack web development with modern technologies',
    category: 'web-development',
    level: 'beginner',
    duration: '3 months',
    price: 15000,
    originalPrice: 20000,
    discount: 25,
    requirements: [
      'Basic computer knowledge',
      'Willingness to learn',
      'No prior programming experience required'
    ],
    learningOutcomes: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create dynamic web applications with React',
      'Develop backend APIs with Node.js and Express',
      'Deploy applications to the cloud',
      'Work with databases and authentication'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.5, count: 12 },
    enrolledStudents: 45,
    completedStudents: 23,
    totalRevenue: 675000,
    tags: ['web development', 'react', 'node.js', 'javascript']
  },
  {
    title: 'Data Science with Python',
    description: 'Master data analysis, machine learning, and statistical modeling with Python. Learn to work with real-world datasets and build predictive models.',
    shortDescription: 'Learn data science and machine learning with Python',
    category: 'data-science',
    level: 'intermediate',
    duration: '4 months',
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    requirements: [
      'Basic Python knowledge',
      'Understanding of mathematics and statistics',
      'Familiarity with basic programming concepts'
    ],
    learningOutcomes: [
      'Analyze and visualize data with pandas and matplotlib',
      'Build machine learning models with scikit-learn',
      'Perform statistical analysis and hypothesis testing',
      'Create predictive models for real-world problems',
      'Deploy machine learning models to production'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.8, count: 8 },
    enrolledStudents: 32,
    completedStudents: 18,
    totalRevenue: 800000,
    tags: ['data science', 'python', 'machine learning', 'statistics']
  },
  {
    title: 'React.js Masterclass',
    description: 'Build modern web applications with React.js and advanced concepts. Learn hooks, context, state management, and best practices.',
    shortDescription: 'Advanced React.js development and best practices',
    category: 'web-development',
    level: 'advanced',
    duration: '2 months',
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    requirements: [
      'Strong JavaScript fundamentals',
      'Basic understanding of HTML and CSS',
      'Familiarity with ES6+ features'
    ],
    learningOutcomes: [
      'Master React hooks and functional components',
      'Implement advanced state management patterns',
      'Build reusable component libraries',
      'Optimize React applications for performance',
      'Integrate with backend APIs and authentication'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.6, count: 15 },
    enrolledStudents: 28,
    completedStudents: 12,
    totalRevenue: 504000,
    tags: ['react', 'javascript', 'frontend', 'hooks']
  },
  {
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile applications using React Native. Learn to build apps for both iOS and Android with a single codebase.',
    shortDescription: 'Build mobile apps with React Native',
    category: 'mobile-development',
    level: 'intermediate',
    duration: '3 months',
    price: 22000,
    originalPrice: 28000,
    discount: 21,
    requirements: [
      'JavaScript fundamentals',
      'Basic React knowledge',
      'Understanding of mobile app concepts'
    ],
    learningOutcomes: [
      'Build native mobile apps with React Native',
      'Implement navigation and state management',
      'Integrate with device APIs and third-party services',
      'Deploy apps to App Store and Google Play',
      'Optimize app performance and user experience'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.7, count: 10 },
    enrolledStudents: 35,
    completedStudents: 20,
    totalRevenue: 770000,
    tags: ['react native', 'mobile development', 'ios', 'android']
  },
  {
    title: 'Cloud Computing with AWS',
    description: 'Learn cloud computing fundamentals and AWS services. Deploy applications, manage infrastructure, and scale your applications in the cloud.',
    shortDescription: 'Master cloud computing with Amazon Web Services',
    category: 'cloud-computing',
    level: 'intermediate',
    duration: '3 months',
    price: 20000,
    originalPrice: 25000,
    discount: 20,
    requirements: [
      'Basic understanding of networking',
      'Familiarity with Linux command line',
      'Knowledge of web technologies'
    ],
    learningOutcomes: [
      'Deploy applications on AWS EC2 and Lambda',
      'Manage databases with RDS and DynamoDB',
      'Implement auto-scaling and load balancing',
      'Set up CI/CD pipelines with AWS services',
      'Monitor and troubleshoot cloud infrastructure'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.4, count: 6 },
    enrolledStudents: 22,
    completedStudents: 15,
    totalRevenue: 440000,
    tags: ['aws', 'cloud computing', 'devops', 'infrastructure']
  }
];

async function seedCourses() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get admin user as instructor
    const adminUser = await User.findOne({ role: 'admin' });
    if (!adminUser) {
      console.log('No admin user found. Please create an admin user first.');
      return;
    }

    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Create sample courses
    const createdCourses = [];
    for (const courseData of sampleCourses) {
      const course = new Course({
        ...courseData,
        instructor: adminUser._id
      });
      await course.save();
      createdCourses.push(course);
      console.log(`Created course: ${course.title}`);
    }

    console.log(`\n✅ Successfully created ${createdCourses.length} sample courses`);
    console.log('\nSample courses created:');
    createdCourses.forEach(course => {
      console.log(`- ${course.title} (${course.category}, ${course.level})`);
    });

  } catch (error) {
    console.error('Error seeding courses:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedCourses(); 