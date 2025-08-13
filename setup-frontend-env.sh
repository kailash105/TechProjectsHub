#!/bin/bash

echo "🌐 Frontend Environment Variables Setup"
echo "======================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root."
    exit 1
fi

echo "✅ Project root found"
echo ""

echo "📋 Environment Variables Setup Guide:"
echo ""
echo "1️⃣ For Production (Render Dashboard):"
echo "   - Go to https://dashboard.render.com"
echo "   - Find your frontend service"
echo "   - Click 'Environment' tab"
echo "   - Add these variables:"
echo ""
echo "   VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/lms"
echo "   VITE_SOCKET_URL=https://your-backend-url.onrender.com"
echo ""
echo "2️⃣ For Local Development:"
echo "   - Copy env.example to .env"
echo "   - Update with your backend URL"
echo ""

# Check if .env exists
if [ -f ".env" ]; then
    echo "✅ .env file exists"
    echo "📝 Current .env contents:"
    echo "------------------------"
    cat .env
    echo "------------------------"
else
    echo "⚠️  No .env file found"
    echo "💡 To create one for local development:"
    echo "   cp env.example .env"
    echo "   # Then edit .env with your backend URL"
fi

echo ""
echo "🔍 To find your backend URL:"
echo "   - Go to your backend service in Render dashboard"
echo "   - Copy the URL (e.g., https://your-backend.onrender.com)"
echo ""

echo "🧪 After setting environment variables:"
echo "   - Redeploy your frontend service"
echo "   - Test login at: https://techprojectshub.onrender.com/lms/login"
echo ""

echo "📞 Need help? Check FRONTEND_ENV_SETUP.md for detailed instructions"

