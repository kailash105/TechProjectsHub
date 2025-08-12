# Backend Deployment Guide for TechProjectsHub

## 🎯 Overview

Your backend is a Node.js/Express server with MongoDB database. Here are the best deployment options:

## 🚀 Recommended Deployment Options

### Option 1: Railway (Recommended - Easy & Free)
**Best for**: Quick deployment, free tier, automatic HTTPS

#### Steps:
1. **Sign up** at [railway.app](https://railway.app)
2. **Connect GitHub** repository
3. **Create new project** from GitHub
4. **Set root directory** to `backend/`
5. **Add environment variables**:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   FRONTEND_URL=https://techprojectshub.in
   NODE_ENV=production
   PORT=8000
   ```

### Option 2: Render (Free Tier Available)
**Best for**: Free hosting, easy setup

#### Steps:
1. **Sign up** at [render.com](https://render.com)
2. **Create new Web Service**
3. **Connect GitHub** repository
4. **Set build command**: `cd backend && npm install`
5. **Set start command**: `cd backend && npm start`
6. **Add environment variables** (same as Railway)

### Option 3: Heroku (Paid but Reliable)
**Best for**: Production reliability, extensive features

#### Steps:
1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create app**: `heroku create your-app-name`
4. **Set config vars**:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set FRONTEND_URL=https://techprojectshub.in
   heroku config:set NODE_ENV=production
   ```
5. **Deploy**: `git push heroku main`

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)
1. **Sign up** at [mongodb.com/atlas](https://mongodb.com/atlas)
2. **Create cluster** (free tier available)
3. **Get connection string**:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/lms?retryWrites=true&w=majority
   ```
4. **Add to environment variables**

### Alternative: Railway MongoDB
- Railway provides MongoDB as a service
- Automatically connects to your app

## 🔧 Environment Variables Required

Create a `.env` file in your backend directory:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Frontend URL
FRONTEND_URL=https://techprojectshub.in

# Environment
NODE_ENV=production

# Port
PORT=8000

# Email (if using email features)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# Payment (if using Razorpay/Stripe)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

## 📁 Backend Structure

Your backend includes:
- ✅ **Authentication** (login, register, JWT)
- ✅ **User Management** (students, trainers, admins)
- ✅ **Course Management** (CRUD operations)
- ✅ **File Uploads** (syllabus, assignments)
- ✅ **Real-time Chat** (Socket.IO)
- ✅ **Notifications** (real-time)
- ✅ **Payment Integration** (Razorpay/Stripe)
- ✅ **Email Services** (notifications, certificates)

## 🚀 Quick Deploy with Railway

### Step 1: Prepare Backend
```bash
cd backend
npm install
```

### Step 2: Create Railway Project
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Set root directory to `backend/`

### Step 3: Add Environment Variables
In Railway dashboard:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms
JWT_SECRET=your_super_secret_key_here
FRONTEND_URL=https://techprojectshub.in
NODE_ENV=production
PORT=8000
```

### Step 4: Deploy
Railway will automatically deploy your backend!

## 🔗 Update Frontend Configuration

After backend deployment, update your frontend environment variables in Vercel:

```
VITE_API_BASE_URL=https://your-backend-url.railway.app/api/lms
VITE_SOCKET_URL=https://your-backend-url.railway.app
```

## 🧪 Testing Your Backend

### Health Check
Visit: `https://your-backend-url.railway.app/health`

Expected response:
```json
{
  "status": "OK",
  "message": "LMS Server is running",
  "timestamp": "2025-01-XX..."
}
```

### API Test
Test authentication: `POST https://your-backend-url.railway.app/api/lms/auth/login`

## 📊 Monitoring & Logs

### Railway
- **Logs**: Available in Railway dashboard
- **Metrics**: CPU, memory usage
- **Deployments**: Automatic on git push

### Render
- **Logs**: Available in Render dashboard
- **Health checks**: Automatic monitoring

## 🆘 Troubleshooting

### Common Issues:
1. **MongoDB Connection**: Check connection string
2. **CORS Errors**: Verify FRONTEND_URL is correct
3. **Port Issues**: Use PORT environment variable
4. **Build Failures**: Check package.json scripts

### Debug Commands:
```bash
# Check if backend is running
curl https://your-backend-url.railway.app/health

# Test API endpoint
curl -X POST https://your-backend-url.railway.app/api/lms/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

## 🎯 Next Steps

1. **Choose deployment platform** (Railway recommended)
2. **Set up MongoDB Atlas** database
3. **Deploy backend** with environment variables
4. **Update frontend** environment variables
5. **Test all features** (login, courses, chat, etc.)

## 💡 Pro Tips

- **Use Railway** for easiest deployment
- **Set up MongoDB Atlas** for reliable database
- **Use strong JWT secrets** for security
- **Monitor logs** for debugging
- **Set up automatic deployments** from GitHub
