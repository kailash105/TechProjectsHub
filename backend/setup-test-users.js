const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function setupTestUsers() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Test users to create
    const testUsers = [
      {
        firstName: 'Test',
        lastName: 'Student',
        email: 'student@test.com',
        password: 'password123',
        role: 'student',
        phone: '+1234567890',
        isActive: true,
        profile: {
          bio: 'Test student account for development',
          education: 'B.Tech Computer Science',
          yearOfStudy: '3rd Year'
        }
      },
      {
        firstName: 'Test',
        lastName: 'Trainer',
        email: 'trainer@test.com',
        password: 'password123',
        role: 'trainer',
        phone: '+1234567891',
        isActive: true,
        profile: {
          bio: 'Test trainer account for development',
          expertise: ['React', 'Node.js', 'Python', 'JavaScript'],
          experience: '3+ years',
          education: 'MSc Computer Science'
        }
      },
      {
        firstName: 'Test',
        lastName: 'Admin',
        email: 'admin@test.com',
        password: 'password123',
        role: 'admin',
        phone: '+1234567892',
        isActive: true,
        profile: {
          bio: 'Test admin account for development',
          department: 'IT Administration'
        }
      }
    ];

    console.log('🔧 Setting up test users...');

    for (const userData of testUsers) {
      // Check if user already exists
      const existingUser = await User.findOne({ email: userData.email });
      
      if (existingUser) {
        console.log(`⚠️  User ${userData.email} already exists, updating password...`);
        // Update password
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        existingUser.password = hashedPassword;
        await existingUser.save();
        console.log(`✅ Updated password for ${userData.email}`);
      } else {
        // Create new user
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        const user = new User({
          ...userData,
          password: hashedPassword
        });
        
        await user.save();
        console.log(`✅ Created ${userData.role} user: ${userData.email}`);
      }
    }

    console.log('\n🎉 Test users setup completed!');
    console.log('\n📋 Test Credentials:');
    console.log('Student: student@test.com / password123');
    console.log('Trainer: trainer@test.com / password123');
    console.log('Admin: admin@test.com / password123');

  } catch (error) {
    console.error('❌ Error setting up test users:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

setupTestUsers();
