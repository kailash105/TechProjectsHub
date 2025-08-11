#!/bin/bash

echo "🧪 LMS Testing Suite"
echo "===================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install test dependencies
echo "📦 Installing test dependencies..."
npm install axios socket.io-client

# Check if backend is running
echo "🔍 Checking if backend server is running..."
if curl -s http://localhost:8000/health > /dev/null; then
    echo "✅ Backend server is running on port 8000"
else
    echo "❌ Backend server is not running on port 8000"
    echo "Please start the backend server first:"
    echo "  cd backend && npm start"
    exit 1
fi

# Check if frontend is running
echo "🔍 Checking if frontend is running..."
if curl -s http://localhost:5173 > /dev/null; then
    echo "✅ Frontend is running on port 5173"
else
    echo "ℹ️ Frontend is not running on port 5173 (optional for API tests)"
fi

echo ""
echo "🚀 Running LMS tests..."
echo "========================"

# Run the tests
node test-lms-system.js

echo ""
echo "🧪 Testing completed!"
echo "Check the output above for test results."
