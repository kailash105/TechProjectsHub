#!/bin/bash

echo "🚀 TechProjectsHub Backend Deployment Script for Render"
echo "========================================================"

# Check if we're in the right directory
if [ ! -f "backend/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "✅ Project structure verified"

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
else
    echo "✅ Backend dependencies already installed"
fi

# Check if .env file exists
if [ ! -f "backend/.env" ]; then
    echo "📝 Creating .env file from template..."
    cp backend/deployment-config.env backend/.env
    echo "⚠️  Please update backend/.env with your actual credentials before deployment"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "🎯 Render Deployment Steps:"
echo "=========================="
echo ""
echo "1. 🗄️  Set up MongoDB Atlas:"
echo "   - Go to https://mongodb.com/atlas"
echo "   - Create free cluster"
echo "   - Get connection string"
echo "   - Update MONGODB_URI in backend/.env"
echo ""
echo "2. 🚀 Deploy to Render:"
echo "   - Go to https://render.com"
echo "   - Sign up with GitHub"
echo "   - Create new Web Service"
echo "   - Connect your repository"
echo "   - Set root directory to 'backend'"
echo "   - Build Command: npm install"
echo "   - Start Command: npm start"
echo ""
echo "3. 🔧 Add Environment Variables in Render:"
echo "   - Copy variables from backend/.env"
echo "   - Add them in Render dashboard"
echo "   - Ensure FRONTEND_URL=https://techprojectshub.in"
echo ""
echo "4. 🔗 Update Frontend:"
echo "   - Get your Render URL (https://your-app.onrender.com)"
echo "   - Update Vercel environment variables:"
echo "     VITE_API_BASE_URL=https://your-app.onrender.com/api/lms"
echo "     VITE_SOCKET_URL=https://your-app.onrender.com"
echo ""
echo "5. 🧪 Test:"
echo "   - Test backend: curl https://your-app.onrender.com/health"
echo "   - Visit https://techprojectshub.in"
echo "   - Check LMS features"
echo ""
echo "📚 See RENDER_DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
echo "🧪 Test your backend locally first:"
echo "   cd backend && npm start"
echo "   curl http://localhost:8000/health"
