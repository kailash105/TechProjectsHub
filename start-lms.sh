#!/bin/bash

echo "🚀 Starting LMS System..."

# Check if MongoDB is running
echo "📊 Checking MongoDB..."
if ! brew services list | grep -q "mongodb-community.*started"; then
    echo "🔄 Starting MongoDB..."
    brew services start mongodb-community
    sleep 3
else
    echo "✅ MongoDB is already running"
fi

# Check if backend dependencies are installed
echo "📦 Checking backend dependencies..."
if [ ! -d "backend/node_modules" ]; then
    echo "📥 Installing backend dependencies..."
    cd backend
    npm install
    cd ..
else
    echo "✅ Backend dependencies are installed"
fi

# Check if frontend dependencies are installed
echo "📦 Checking frontend dependencies..."
if [ ! -d "node_modules" ]; then
    echo "📥 Installing frontend dependencies..."
    npm install
else
    echo "✅ Frontend dependencies are installed"
fi

# Start backend server in background
echo "🔧 Starting backend server..."
cd backend
node server.js &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Check if backend is running
if curl -s http://localhost:8000/health > /dev/null; then
    echo "✅ Backend server is running on http://localhost:8000"
else
    echo "❌ Backend server failed to start"
    exit 1
fi

# Start frontend server
echo "🌐 Starting frontend server..."
npm run dev &
FRONTEND_PID=$!

# Wait a moment for frontend to start
sleep 5

echo ""
echo "🎉 LMS System is now running!"
echo ""
echo "📱 Access your application:"
echo "   • Main Site: http://localhost:5173"
echo "   • LMS Login: http://localhost:5173/lms/login"
echo "   • LMS Register: http://localhost:5173/lms/register"
echo ""
echo "🔐 Test Credentials:"
echo "   • Admin: admin@test.com / admin123"
echo "   • Trainer: trainer@test.com / trainer123"
echo "   • Student: student@test.com / student123"
echo ""
echo "🛑 To stop the servers, press Ctrl+C"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Trap Ctrl+C and cleanup
trap cleanup SIGINT

# Keep script running
wait 