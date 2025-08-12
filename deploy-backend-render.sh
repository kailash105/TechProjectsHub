#!/bin/bash

echo "🚀 Deploying TechProjectsHub Backend to Render..."

# Check if we're in the right directory
if [ ! -f "backend/package.json" ]; then
    echo "❌ Error: backend/package.json not found. Make sure you're in the project root."
    exit 1
fi

echo "✅ Backend files found"

# Instructions for manual deployment
echo ""
echo "📋 Manual Deployment Steps for Render:"
echo ""
echo "1. Go to https://render.com and sign up/login"
echo "2. Click 'New +' and select 'Web Service'"
echo "3. Connect your GitHub repository"
echo "4. Configure the service:"
echo "   - Name: techprojectshub-backend"
echo "   - Root Directory: backend"
echo "   - Environment: Node"
echo "   - Build Command: npm install"
echo "   - Start Command: npm start"
echo ""
echo "5. Add Environment Variables:"
echo "   - NODE_ENV: production"
echo "   - PORT: 8000"
echo "   - MONGODB_URI: your_mongodb_connection_string"
echo "   - JWT_SECRET: your_jwt_secret_key"
echo "   - FRONTEND_URL: https://techprojectshub.onrender.com"
echo ""
echo "6. Click 'Create Web Service'"
echo ""
echo "7. After deployment, get your backend URL and update frontend environment variables"
echo ""

# Check if backend has all required files
echo "🔍 Checking backend files..."
if [ -f "backend/server.js" ]; then
    echo "✅ server.js found"
else
    echo "❌ server.js missing"
fi

if [ -f "backend/package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json missing"
fi

if [ -d "backend/routes" ]; then
    echo "✅ routes directory found"
else
    echo "❌ routes directory missing"
fi

if [ -d "backend/models" ]; then
    echo "✅ models directory found"
else
    echo "❌ models directory missing"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Deploy backend using the steps above"
echo "2. Get your backend URL (e.g., https://your-backend.onrender.com)"
echo "3. Update frontend environment variables"
echo "4. Test the connection"
echo ""
echo "📞 Need help? Check BACKEND_DEPLOYMENT_GUIDE.md for detailed instructions"
