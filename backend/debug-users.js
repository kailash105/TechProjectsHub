const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

async function debugUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const users = await User.find({});
    console.log(`Total users: ${users.length}`);
    
    users.forEach(user => {
      console.log(`- ${user.firstName} ${user.lastName} (${user.email}) - Role: ${user.role}`);
    });

    const students = await User.find({ role: 'student' });
    const trainers = await User.find({ role: 'trainer' });
    
    console.log(`\nStudents: ${students.length}`);
    console.log(`Trainers: ${trainers.length}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

debugUsers(); 