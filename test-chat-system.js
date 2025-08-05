import axios from 'axios';

const API_BASE = 'http://localhost:8000/api/lms';

async function testChatSystem() {
  console.log('🧪 Testing Chat System...\n');

  try {
    // 1. Test backend health
    console.log('1. Testing backend health...');
    const healthResponse = await axios.get('http://localhost:8000/health');
    console.log('✅ Backend is running:', healthResponse.data.message);

    // 2. Test student login
    console.log('\n2. Testing student login...');
    const studentLoginResponse = await axios.post(`${API_BASE}/auth/login`, {
      email: 'test@example.com',
      password: 'password123',
      role: 'student'
    });
    const studentToken = studentLoginResponse.data.token;
    console.log('✅ Student login successful');

    // 3. Test trainer login
    console.log('\n3. Testing trainer login...');
    const trainerLoginResponse = await axios.post(`${API_BASE}/auth/login`, {
      email: 'trainer@lms.com',
      password: 'trainer123',
      role: 'trainer'
    });
    const trainerToken = trainerLoginResponse.data.token;
    console.log('✅ Trainer login successful');

    // 4. Test getting conversations
    console.log('\n4. Testing conversations...');
    const conversationsResponse = await axios.get(`${API_BASE}/chat/conversations`, {
      headers: { Authorization: `Bearer ${studentToken}` }
    });
    console.log('✅ Conversations retrieved:', conversationsResponse.data.length, 'conversations');

    // 5. Test getting messages
    if (conversationsResponse.data.length > 0) {
      const firstConversation = conversationsResponse.data[0];
      console.log('\n5. Testing messages...');
      const messagesResponse = await axios.get(`${API_BASE}/chat/conversation/${firstConversation._id}`, {
        headers: { Authorization: `Bearer ${studentToken}` }
      });
      console.log('✅ Messages retrieved:', messagesResponse.data.length, 'messages');
    }

    // 6. Test sending a message
    console.log('\n6. Testing message sending...');
    const messageResponse = await axios.post(`${API_BASE}/chat/message`, {
      receiverId: trainerLoginResponse.data.user._id,
      content: 'Test message from automated testing',
      type: 'text'
    }, {
      headers: { Authorization: `Bearer ${studentToken}` }
    });
    console.log('✅ Message sent successfully');

    console.log('\n🎉 All tests passed! Chat system is working correctly.');
    console.log('\n📱 Next steps:');
    console.log('1. Open http://localhost:5174/');
    console.log('2. Navigate to footer → Learning Management → LMS Portal');
    console.log('3. Login with test@example.com / password123 (student)');
    console.log('4. Click "Chat with Trainers" button');
    console.log('5. Test real-time messaging!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Tip: Make sure you have users in the database. Run:');
      console.log('cd backend && node seed-data.js');
    }
  }
}

testChatSystem(); 