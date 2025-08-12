// Test script to verify backend connection and credentials
const testBackendConnection = async (backendUrl) => {
  console.log(`🔍 Testing backend connection to: ${backendUrl}`);
  
  try {
    // Test 1: Health check
    console.log('\n1️⃣ Testing health check...');
    const healthResponse = await fetch(`${backendUrl}/health`);
    if (healthResponse.ok) {
      const healthData = await healthResponse.json();
      console.log('✅ Health check passed:', healthData);
    } else {
      console.log('❌ Health check failed:', healthResponse.status);
    }
    
    // Test 2: Test login with sample credentials
    console.log('\n2️⃣ Testing login with sample credentials...');
    const loginResponse = await fetch(`${backendUrl}/api/lms/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'student@test.com',
        password: 'password123',
        role: 'student'
      })
    });
    
    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      console.log('✅ Login successful:', { token: loginData.token ? 'Present' : 'Missing', user: loginData.user?.email });
    } else {
      const errorData = await loginResponse.json().catch(() => ({}));
      console.log('❌ Login failed:', errorData.message || `Status: ${loginResponse.status}`);
    }
    
    // Test 3: Test with different credentials
    console.log('\n3️⃣ Testing with admin credentials...');
    const adminResponse = await fetch(`${backendUrl}/api/lms/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@test.com',
        password: 'password123',
        role: 'admin'
      })
    });
    
    if (adminResponse.ok) {
      const adminData = await adminResponse.json();
      console.log('✅ Admin login successful:', { token: adminData.token ? 'Present' : 'Missing', user: adminData.user?.email });
    } else {
      const errorData = await adminResponse.json().catch(() => ({}));
      console.log('❌ Admin login failed:', errorData.message || `Status: ${adminResponse.status}`);
    }
    
  } catch (error) {
    console.error('❌ Connection error:', error.message);
  }
};

// Usage instructions
console.log('🚀 Backend Connection Test Script');
console.log('=====================================');
console.log('');
console.log('To use this script:');
console.log('1. Replace YOUR_BACKEND_URL with your actual backend URL');
console.log('2. Run: node test-backend-connection.js');
console.log('');
console.log('Example:');
console.log('testBackendConnection("https://your-backend.onrender.com");');
console.log('');

// Uncomment and replace with your actual backend URL
// testBackendConnection('https://your-backend-url.onrender.com');

module.exports = { testBackendConnection };
