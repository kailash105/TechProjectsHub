const mongoose = require('mongoose');
const Message = require('./models/Message');
const User = require('./models/User');
require('dotenv').config();

// Sample messages for testing
const sampleMessages = [
  {
    content: "Hello! Welcome to the course. How can I help you today?",
    type: 'text'
  },
  {
    content: "I have a question about the React assignment. Can you help me understand the component lifecycle?",
    type: 'text'
  },
  {
    content: "Of course! The React component lifecycle has several phases: mounting, updating, and unmounting. Let me explain each one...",
    type: 'text'
  },
  {
    content: "Thank you! That really helps. I was confused about when to use useEffect vs componentDidMount.",
    type: 'text'
  },
  {
    content: "Great question! useEffect is the modern way to handle side effects in functional components. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount.",
    type: 'text'
  },
  {
    content: "When is the next live coding session?",
    type: 'text'
  },
  {
    content: "The next live session is tomorrow at 2 PM. We'll be building a complete React application together!",
    type: 'text'
  },
  {
    content: "Perfect! I'll make sure to attend. Should I prepare anything beforehand?",
    type: 'text'
  },
  {
    content: "Yes, please review the React hooks documentation and have your development environment ready. We'll start with useState and useEffect.",
    type: 'text'
  },
  {
    content: "Got it! I'm excited to learn more about React hooks.",
    type: 'text'
  }
];

async function seedMessages() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Get existing users
    const students = await User.find({ role: 'student' }).limit(1);
    const trainers = await User.find({ role: 'trainer' }).limit(1);
    
    if (students.length === 0 || trainers.length === 0) {
      console.log('Need both student and trainer users to create messages');
      console.log(`Students: ${students.length}, Trainers: ${trainers.length}`);
      return;
    }

    const student = students[0];
    const trainer = trainers[0];

    // Clear existing messages
    await Message.deleteMany({});
    console.log('Cleared existing messages');

    // Create sample messages
    const messages = [];
    let currentSender = trainer;
    let currentReceiver = student;

    for (let i = 0; i < sampleMessages.length; i++) {
      const messageData = sampleMessages[i];
      
      // Alternate between sender and receiver
      if (i % 2 === 0) {
        currentSender = trainer;
        currentReceiver = student;
      } else {
        currentSender = student;
        currentReceiver = trainer;
      }

      const message = new Message({
        senderId: currentSender._id,
        receiverId: currentReceiver._id,
        content: messageData.content,
        type: messageData.type,
        read: i < sampleMessages.length - 2, // Mark last 2 messages as unread
        createdAt: new Date(Date.now() - (sampleMessages.length - i) * 60000) // Spread messages over time
      });

      messages.push(message);
    }

    await Message.insertMany(messages);
    console.log(`✅ Created ${messages.length} sample messages`);

    // Display conversation summary
    const conversation = await Message.find({
      $or: [
        { senderId: student._id, receiverId: trainer._id },
        { senderId: trainer._id, receiverId: student._id }
      ]
    }).populate('senderId', 'firstName lastName role').populate('receiverId', 'firstName lastName role').sort({ createdAt: 1 });

    console.log('\n📱 Sample Conversation:');
    console.log(`Between: ${student.firstName} ${student.lastName} (${student.role}) and ${trainer.firstName} ${trainer.lastName} (${trainer.role})`);
    console.log('\nMessages:');
    conversation.forEach((msg, index) => {
      const sender = msg.senderId.firstName;
      const time = msg.createdAt.toLocaleTimeString();
      const readStatus = msg.read ? '✓' : '○';
      console.log(`${index + 1}. [${time}] ${sender}: ${msg.content} ${readStatus}`);
    });

    console.log('\n🎯 Next steps:');
    console.log('1. Login to LMS as student or trainer');
    console.log('2. Navigate to /lms/chat');
    console.log('3. Start chatting in real-time!');

  } catch (error) {
    console.error('Error seeding messages:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeding
if (require.main === module) {
  seedMessages();
}

module.exports = seedMessages; 