const mongoose = require('mongoose');
const Course = require('./models/Course');
const User = require('./models/User');
require('dotenv').config();

const trainingCourses = [
  {
    title: 'Python Full Stack Development',
    description: 'Master end-to-end web development with Python. Learn Django, Flask, frontend technologies, and database management to build complete web applications from scratch.',
    shortDescription: 'End-to-end web development with Python',
    category: 'web-development',
    level: 'beginner',
    duration: '3 months',
    price: 25000,
    originalPrice: 35000,
    discount: 29,
    requirements: [
      'Basic computer knowledge',
      'No prior programming experience required',
      'Willingness to learn and practice',
      'Access to a computer with internet'
    ],
    learningOutcomes: [
      'Build complete web applications with Python',
      'Master Django and Flask frameworks',
      'Create responsive frontend interfaces',
      'Implement database design and management',
      'Deploy applications to cloud platforms',
      'Understand RESTful API development',
      'Work with version control (Git)',
      'Develop real-world projects for portfolio'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.7, count: 15 },
    enrolledStudents: 28,
    completedStudents: 18,
    totalRevenue: 700000,
    tags: ['python', 'django', 'flask', 'full-stack', 'web-development']
  },
  {
    title: 'Java Full Stack Development',
    description: 'Comprehensive Java web development covering Spring Boot, Hibernate, frontend technologies, and enterprise-level application development.',
    shortDescription: 'Comprehensive Java web development',
    category: 'web-development',
    level: 'intermediate',
    duration: '3 months',
    price: 30000,
    originalPrice: 40000,
    discount: 25,
    requirements: [
      'Basic understanding of programming concepts',
      'Familiarity with object-oriented programming',
      'Knowledge of basic data structures',
      'Access to development environment'
    ],
    learningOutcomes: [
      'Master Spring Boot framework',
      'Implement RESTful APIs with Java',
      'Work with Hibernate ORM',
      'Build enterprise-level applications',
      'Integrate with databases (MySQL, PostgreSQL)',
      'Deploy applications using Docker',
      'Implement security and authentication',
      'Create scalable microservices architecture'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.8, count: 12 },
    enrolledStudents: 22,
    completedStudents: 15,
    totalRevenue: 660000,
    tags: ['java', 'spring-boot', 'hibernate', 'microservices', 'enterprise']
  },
  {
    title: 'MERN Stack Development',
    description: 'Master MongoDB, Express.js, React.js, and Node.js to build modern, scalable web applications with JavaScript throughout the stack.',
    shortDescription: 'MongoDB, Express, React, Node.js mastery',
    category: 'web-development',
    level: 'intermediate',
    duration: '3 months',
    price: 28000,
    originalPrice: 38000,
    discount: 26,
    requirements: [
      'Basic JavaScript knowledge',
      'Understanding of HTML and CSS',
      'Familiarity with web development concepts',
      'Access to code editor and terminal'
    ],
    learningOutcomes: [
      'Build full-stack applications with JavaScript',
      'Master React.js for frontend development',
      'Create RESTful APIs with Express.js',
      'Work with MongoDB database',
      'Implement user authentication and authorization',
      'Deploy applications to cloud platforms',
      'Use modern development tools and practices',
      'Build real-time applications with Socket.io'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.9, count: 20 },
    enrolledStudents: 35,
    completedStudents: 25,
    totalRevenue: 980000,
    tags: ['mern', 'react', 'node.js', 'mongodb', 'express', 'javascript']
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Comprehensive AI/ML course covering machine learning algorithms, deep learning, neural networks, and practical applications in real-world scenarios.',
    shortDescription: 'Artificial Intelligence & Machine Learning hands-on',
    category: 'ai-ml',
    level: 'intermediate',
    duration: '4 months',
    price: 35000,
    originalPrice: 45000,
    discount: 22,
    requirements: [
      'Strong mathematical foundation',
      'Python programming knowledge',
      'Understanding of statistics and probability',
      'Familiarity with linear algebra'
    ],
    learningOutcomes: [
      'Master machine learning algorithms',
      'Implement deep learning with TensorFlow/PyTorch',
      'Build neural networks and CNN/RNN models',
      'Work with natural language processing',
      'Create computer vision applications',
      'Deploy ML models to production',
      'Understand AI ethics and bias',
      'Build end-to-end AI applications'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.6, count: 18 },
    enrolledStudents: 30,
    completedStudents: 20,
    totalRevenue: 1050000,
    tags: ['ai', 'machine-learning', 'deep-learning', 'python', 'tensorflow', 'pytorch']
  },
  {
    title: 'Web Full Stack Development',
    description: 'Modern web stack for scalable applications covering frontend frameworks, backend development, and cloud deployment strategies.',
    shortDescription: 'Modern web stack for scalable apps',
    category: 'web-development',
    level: 'intermediate',
    duration: '3 months',
    price: 26000,
    originalPrice: 36000,
    discount: 28,
    requirements: [
      'Basic programming knowledge',
      'Understanding of web technologies',
      'Familiarity with HTML, CSS, JavaScript',
      'Access to development tools'
    ],
    learningOutcomes: [
      'Master modern frontend frameworks',
      'Build scalable backend architectures',
      'Implement responsive web design',
      'Work with cloud platforms (AWS/Azure)',
      'Deploy applications using CI/CD',
      'Implement security best practices',
      'Create progressive web applications',
      'Optimize application performance'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.5, count: 14 },
    enrolledStudents: 25,
    completedStudents: 17,
    totalRevenue: 650000,
    tags: ['web-development', 'frontend', 'backend', 'cloud', 'deployment']
  },
  {
    title: 'Frontend Development',
    description: 'Comprehensive frontend development covering modern frameworks, UI/UX design principles, and responsive web development techniques.',
    shortDescription: 'UI/UX and front-end frameworks',
    category: 'web-development',
    level: 'beginner',
    duration: '2 months',
    price: 18000,
    originalPrice: 25000,
    discount: 28,
    requirements: [
      'Basic HTML and CSS knowledge',
      'Understanding of web design concepts',
      'Familiarity with JavaScript basics',
      'Access to design tools'
    ],
    learningOutcomes: [
      'Master modern CSS frameworks',
      'Build responsive web interfaces',
      'Work with JavaScript frameworks',
      'Implement UI/UX best practices',
      'Create interactive web applications',
      'Optimize frontend performance',
      'Use modern development tools',
      'Build accessible web applications'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.4, count: 16 },
    enrolledStudents: 32,
    completedStudents: 24,
    totalRevenue: 576000,
    tags: ['frontend', 'ui-ux', 'javascript', 'css', 'responsive-design']
  },
  {
    title: 'Backend Development',
    description: 'Server-side programming and API development covering database design, server architecture, and backend frameworks.',
    shortDescription: 'Server-side programming and APIs',
    category: 'web-development',
    level: 'intermediate',
    duration: '3 months',
    price: 22000,
    originalPrice: 30000,
    discount: 27,
    requirements: [
      'Basic programming knowledge',
      'Understanding of databases',
      'Familiarity with server concepts',
      'Knowledge of API design principles'
    ],
    learningOutcomes: [
      'Master backend frameworks',
      'Design and implement APIs',
      'Work with databases and ORMs',
      'Implement authentication and authorization',
      'Build scalable server architectures',
      'Deploy backend services',
      'Implement security measures',
      'Create microservices architecture'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.7, count: 13 },
    enrolledStudents: 20,
    completedStudents: 14,
    totalRevenue: 440000,
    tags: ['backend', 'api', 'database', 'server', 'microservices']
  },
  {
    title: 'Data Science',
    description: 'Comprehensive data science course covering data analysis, visualization, statistical modeling, and machine learning applications.',
    shortDescription: 'Data analysis, visualization, and ML',
    category: 'data-science',
    level: 'intermediate',
    duration: '4 months',
    price: 32000,
    originalPrice: 42000,
    discount: 24,
    requirements: [
      'Strong mathematical foundation',
      'Python programming knowledge',
      'Understanding of statistics',
      'Familiarity with data concepts'
    ],
    learningOutcomes: [
      'Master data analysis techniques',
      'Create compelling data visualizations',
      'Implement statistical modeling',
      'Work with big data technologies',
      'Build predictive models',
      'Perform exploratory data analysis',
      'Communicate insights effectively',
      'Deploy data science solutions'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.8, count: 19 },
    enrolledStudents: 28,
    completedStudents: 20,
    totalRevenue: 896000,
    tags: ['data-science', 'python', 'statistics', 'visualization', 'machine-learning']
  },
  {
    title: 'VLSI Design',
    description: 'Very Large Scale Integration design and implementation covering digital design, layout, and semiconductor manufacturing processes.',
    shortDescription: 'Very Large Scale Integration design and implementation',
    category: 'vlsi',
    level: 'advanced',
    duration: '4 months',
    price: 40000,
    originalPrice: 50000,
    discount: 20,
    requirements: [
      'Strong electronics background',
      'Understanding of digital logic',
      'Knowledge of semiconductor physics',
      'Familiarity with CAD tools'
    ],
    learningOutcomes: [
      'Master VLSI design methodologies',
      'Work with EDA tools and software',
      'Design digital circuits and systems',
      'Implement layout and routing',
      'Understand semiconductor processes',
      'Perform design verification',
      'Work with advanced fabrication technologies',
      'Create custom integrated circuits'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.5, count: 8 },
    enrolledStudents: 15,
    completedStudents: 10,
    totalRevenue: 600000,
    tags: ['vlsi', 'semiconductor', 'digital-design', 'layout', 'fabrication']
  },
  {
    title: 'Cloud Computing with Azure',
    description: 'Microsoft Azure cloud services and deployment covering infrastructure, platform services, and cloud-native application development.',
    shortDescription: 'Azure cloud services and deployment',
    category: 'cloud-computing',
    level: 'intermediate',
    duration: '3 months',
    price: 28000,
    originalPrice: 38000,
    discount: 26,
    requirements: [
      'Basic understanding of networking',
      'Familiarity with virtualization concepts',
      'Knowledge of web technologies',
      'Understanding of cloud concepts'
    ],
    learningOutcomes: [
      'Master Azure cloud services',
      'Deploy applications to Azure',
      'Manage cloud infrastructure',
      'Implement DevOps practices',
      'Work with Azure databases',
      'Create serverless applications',
      'Implement security and compliance',
      'Optimize cloud costs'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.6, count: 12 },
    enrolledStudents: 25,
    completedStudents: 18,
    totalRevenue: 700000,
    tags: ['azure', 'cloud-computing', 'devops', 'serverless', 'infrastructure']
  },
  {
    title: 'Blockchain Development',
    description: 'Blockchain fundamentals and smart contract development covering distributed systems, cryptography, and decentralized applications.',
    shortDescription: 'Blockchain fundamentals and smart contracts',
    category: 'blockchain',
    level: 'intermediate',
    duration: '3 months',
    price: 35000,
    originalPrice: 45000,
    discount: 22,
    requirements: [
      'Strong programming fundamentals',
      'Understanding of cryptography',
      'Knowledge of distributed systems',
      'Familiarity with web3 concepts'
    ],
    learningOutcomes: [
      'Master blockchain fundamentals',
      'Develop smart contracts',
      'Build decentralized applications',
      'Work with different blockchain platforms',
      'Implement cryptographic solutions',
      'Create DeFi applications',
      'Understand consensus mechanisms',
      'Deploy blockchain solutions'
    ],
    isPublished: true,
    isFeatured: true,
    rating: { average: 4.7, count: 10 },
    enrolledStudents: 18,
    completedStudents: 12,
    totalRevenue: 630000,
    tags: ['blockchain', 'smart-contracts', 'defi', 'web3', 'cryptography']
  },
  {
    title: 'Python with Data Structures & Algorithms',
    description: 'Comprehensive Python programming with data structures and algorithms, perfect for coding interviews and competitive programming.',
    shortDescription: 'Python with Data Structures for coding interviews',
    category: 'programming',
    level: 'intermediate',
    duration: '3 months',
    price: 20000,
    originalPrice: 28000,
    discount: 29,
    requirements: [
      'Basic programming knowledge',
      'Understanding of Python syntax',
      'Familiarity with basic algorithms',
      'Strong problem-solving skills'
    ],
    learningOutcomes: [
      'Master Python programming',
      'Implement data structures',
      'Solve algorithmic problems',
      'Prepare for coding interviews',
      'Work with advanced algorithms',
      'Optimize code performance',
      'Participate in competitive programming',
      'Build efficient solutions'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.8, count: 22 },
    enrolledStudents: 40,
    completedStudents: 30,
    totalRevenue: 800000,
    tags: ['python', 'data-structures', 'algorithms', 'competitive-programming', 'interview-prep']
  },
  {
    title: 'Java with Data Structures & Algorithms',
    description: 'Java programming with comprehensive data structures and algorithms, designed for software engineering interviews and system design.',
    shortDescription: 'Java with Data Structures & Algorithms',
    category: 'programming',
    level: 'intermediate',
    duration: '3 months',
    price: 22000,
    originalPrice: 30000,
    discount: 27,
    requirements: [
      'Basic Java programming knowledge',
      'Understanding of object-oriented programming',
      'Familiarity with basic algorithms',
      'Strong analytical thinking'
    ],
    learningOutcomes: [
      'Master Java programming',
      'Implement complex data structures',
      'Solve algorithmic challenges',
      'Prepare for technical interviews',
      'Work with advanced algorithms',
      'Optimize Java code performance',
      'Understand system design principles',
      'Build scalable solutions'
    ],
    isPublished: true,
    isFeatured: false,
    rating: { average: 4.7, count: 18 },
    enrolledStudents: 35,
    completedStudents: 25,
    totalRevenue: 770000,
    tags: ['java', 'data-structures', 'algorithms', 'system-design', 'interview-prep']
  }
];

async function seedTrainingCourses() {
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

    // Create training courses
    const createdCourses = [];
    for (const courseData of trainingCourses) {
      const course = new Course({
        ...courseData,
        instructor: adminUser._id
      });
      await course.save();
      createdCourses.push(course);
      console.log(`Created course: ${course.title}`);
    }

    console.log(`\n✅ Successfully created ${createdCourses.length} training courses`);
    console.log('\nTraining courses created:');
    createdCourses.forEach(course => {
      console.log(`- ${course.title} (${course.category}, ${course.level}, ₹${course.price})`);
    });

    // Summary statistics
    const totalRevenue = createdCourses.reduce((sum, course) => sum + course.totalRevenue, 0);
    const totalEnrollments = createdCourses.reduce((sum, course) => sum + course.enrolledStudents, 0);
    const avgRating = createdCourses.reduce((sum, course) => sum + course.rating.average, 0) / createdCourses.length;

    console.log('\n📊 Course Statistics:');
    console.log(`Total Revenue: ₹${totalRevenue.toLocaleString()}`);
    console.log(`Total Enrollments: ${totalEnrollments}`);
    console.log(`Average Rating: ${avgRating.toFixed(1)}/5.0`);
    console.log(`Featured Courses: ${createdCourses.filter(c => c.isFeatured).length}`);

  } catch (error) {
    console.error('Error seeding training courses:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedTrainingCourses(); 