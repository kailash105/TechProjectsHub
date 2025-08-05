const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function createTrainer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Check if trainer already exists
    const existingTrainer = await User.findOne({ role: 'trainer' });
    if (existingTrainer) {
      console.log('Trainer already exists:', existingTrainer.email);
      return;
    }

    // Create trainer user
    const hashedPassword = await bcrypt.hash('trainer123', 12);
    
    const trainer = new User({
      firstName: 'John',
      lastName: 'Trainer',
      email: 'trainer@lms.com',
      password: hashedPassword,
      role: 'trainer',
      phone: '+1234567890',
      isActive: true,
      profile: {
        bio: 'Experienced software development trainer with 5+ years of teaching experience.',
        expertise: ['React', 'Node.js', 'Python', 'JavaScript'],
        experience: '5+ years',
        education: 'MSc Computer Science'
      }
    });

    await trainer.save();
    console.log('✅ Created trainer user:', trainer.email);
    console.log('Password: trainer123');

  } catch (error) {
    console.error('Error creating trainer:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

createTrainer(); 