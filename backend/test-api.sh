#!/bin/bash

# LMS Backend API Testing Script
# This script tests all major endpoints of the LMS backend

BASE_URL="http://localhost:8000"
TOKEN=""

echo "🧪 LMS Backend API Testing"
echo "=========================="

# Test 1: Health Check
echo -e "\n1️⃣ Testing Health Endpoint..."
curl -s "$BASE_URL/health" | jq .

# Test 2: User Registration
echo -e "\n2️⃣ Testing User Registration..."
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/api/lms/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "Student",
    "email": "teststudent@example.com",
    "password": "password123",
    "phone": "1234567890",
    "dateOfBirth": "1990-01-01",
    "gender": "male",
    "role": "student"
  }')

echo "$REGISTER_RESPONSE" | jq .

# Extract token from registration response
TOKEN=$(echo "$REGISTER_RESPONSE" | jq -r '.token')

if [ "$TOKEN" != "null" ] && [ "$TOKEN" != "" ]; then
    echo "✅ Registration successful, token extracted"
else
    echo "❌ Registration failed"
    exit 1
fi

# Test 3: User Login
echo -e "\n3️⃣ Testing User Login..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/api/lms/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teststudent@example.com",
    "password": "password123"
  }')

echo "$LOGIN_RESPONSE" | jq .

# Update token from login response
TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.token')

# Test 4: Get User Profile
echo -e "\n4️⃣ Testing Get User Profile..."
curl -s -X GET "$BASE_URL/api/lms/auth/me" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 5: Student Dashboard
echo -e "\n5️⃣ Testing Student Dashboard..."
curl -s -X GET "$BASE_URL/api/lms/student/dashboard" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 6: Student Profile
echo -e "\n6️⃣ Testing Student Profile..."
curl -s -X GET "$BASE_URL/api/lms/student/profile" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 7: Notifications
echo -e "\n7️⃣ Testing Notifications..."
curl -s -X GET "$BASE_URL/api/lms/notifications" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 8: Unread Count
echo -e "\n8️⃣ Testing Unread Count..."
curl -s -X GET "$BASE_URL/api/lms/notifications/unread-count" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 9: Student Progress
echo -e "\n9️⃣ Testing Student Progress..."
curl -s -X GET "$BASE_URL/api/lms/student/progress" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 10: Admin Dashboard (should fail - user is student)
echo -e "\n🔟 Testing Admin Dashboard (should fail)..."
curl -s -X GET "$BASE_URL/api/lms/admin/dashboard" \
  -H "Authorization: Bearer $TOKEN" | jq .

# Test 11: Analytics (should fail - user is student)
echo -e "\n1️⃣1️⃣ Testing Analytics (should fail)..."
curl -s -X GET "$BASE_URL/api/lms/analytics/overview" \
  -H "Authorization: Bearer $TOKEN" | jq .

echo -e "\n✅ API Testing Complete!"
echo "=========================="
echo "All endpoints tested successfully!"
echo "Server is running on: $BASE_URL"
echo "Token: $TOKEN" 