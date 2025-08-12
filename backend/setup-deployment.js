#!/usr/bin/env node

/**
 * Backend Deployment Setup Script
 * Run this script to prepare your backend for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 TechProjectsHub Backend Deployment Setup\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('📝 Creating .env file...');
  
  const envContent = `# TechProjectsHub Backend Environment Variables
# Copy this file and update with your actual values

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random

# Frontend URL
FRONTEND_URL=https://techprojectshub.in

# Environment
NODE_ENV=production

# Port (will be set by deployment platform)
PORT=8000

# Email Configuration (Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Payment Configuration (Optional)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('⚠️  Please update the .env file with your actual values before deployment.\n');
} else {
  console.log('✅ .env file already exists\n');
}

// Check package.json
const packagePath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

console.log('📦 Package.json configuration:');
console.log(`   Name: ${packageJson.name}`);
console.log(`   Version: ${packageJson.version}`);
console.log(`   Main: ${packageJson.main}`);
console.log(`   Start script: ${packageJson.scripts.start}\n`);

// Check if all required dependencies are installed
console.log('🔍 Checking dependencies...');
const requiredDeps = [
  'express', 'mongoose', 'cors', 'helmet', 'compression',
  'jsonwebtoken', 'bcryptjs', 'dotenv', 'socket.io'
];

const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);

if (missingDeps.length > 0) {
  console.log('❌ Missing dependencies:', missingDeps.join(', '));
  console.log('💡 Run: npm install\n');
} else {
  console.log('✅ All required dependencies are installed\n');
}

// Deployment instructions
console.log('🎯 Next Steps for Deployment:\n');

console.log('1. 🗄️  Set up MongoDB Atlas:');
console.log('   - Go to https://mongodb.com/atlas');
console.log('   - Create a free cluster');
console.log('   - Get your connection string');
console.log('   - Update MONGODB_URI in .env file\n');

console.log('2. 🚀 Deploy to Railway (Recommended):');
console.log('   - Go to https://railway.app');
console.log('   - Connect your GitHub repository');
console.log('   - Set root directory to "backend"');
console.log('   - Add environment variables from .env file\n');

console.log('3. 🔗 Update Frontend:');
console.log('   - Get your backend URL from Railway');
console.log('   - Update Vercel environment variables:');
console.log('     VITE_API_BASE_URL=https://your-backend-url.railway.app/api/lms');
console.log('     VITE_SOCKET_URL=https://your-backend-url.railway.app\n');

console.log('4. 🧪 Test Your Backend:');
console.log('   - Visit: https://your-backend-url.railway.app/health');
console.log('   - Should return: {"status":"OK","message":"LMS Server is running"}\n');

console.log('📚 For detailed instructions, see: BACKEND_DEPLOYMENT_GUIDE.md\n');

console.log('🎉 Setup complete! Ready for deployment.');
