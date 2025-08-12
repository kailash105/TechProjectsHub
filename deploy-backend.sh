#!/bin/bash

echo "🚀 TechProjectsHub Backend Deployment Script"
echo "=============================================="

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
echo "🎯 Next Steps:"
echo "1. Update backend/.env with your MongoDB URI and other credentials"
echo "2. Deploy to Railway: https://railway.app"
echo "3. Set root directory to 'backend/' in Railway"
echo "4. Add environment variables from backend/.env"
echo "5. Get your backend URL and update Vercel environment variables"
echo ""
echo "📚 See BACKEND_DEPLOYMENT_STEPS.md for detailed instructions"
echo ""
echo "🧪 Test your backend locally:"
echo "   cd backend && npm start"
echo "   curl http://localhost:8000/health"
