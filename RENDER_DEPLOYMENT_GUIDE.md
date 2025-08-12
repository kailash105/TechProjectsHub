# 🚀 Render Deployment Guide for TechProjectsHub Backend

## 🎯 Overview
This guide will help you deploy your backend to Render and connect it to your frontend at https://techprojectshub.in

## 📋 Prerequisites
- ✅ GitHub repository with your code
- ✅ MongoDB Atlas account (free)
- ✅ Render account (free tier available)

## 🚀 Step 1: Set up MongoDB Atlas

### 1.1 Create MongoDB Cluster
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Sign up for free account
3. Create a new cluster (free tier)
4. Set up database access (username/password)
5. Set up network access (allow from anywhere: 0.0.0.0/0)
6. Get your connection string

### 1.2 Get Connection String
Your connection string will look like:
```
mongodb+srv://username:password@cluster.mongodb.net/lms?retryWrites=true&w=majority
```

## 🚀 Step 2: Deploy to Render

### 2.1 Create Render Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Verify your email

### 2.2 Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure the service:

**Basic Settings:**
- **Name**: `techprojectshub-backend` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 2.3 Environment Variables
Add these environment variables in Render:

```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/lms?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random_at_least_32_characters
FRONTEND_URL=https://techprojectshub.in
NODE_ENV=production
PORT=8000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 2.4 Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your app
3. Wait for deployment to complete (usually 2-5 minutes)

## 🔗 Step 3: Connect Frontend

### 3.1 Get Your Backend URL
After deployment, Render will provide a URL like:
```
https://your-app-name.onrender.com
```

### 3.2 Update Vercel Environment Variables
1. Go to your [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:

```
VITE_API_BASE_URL=https://your-app-name.onrender.com/api/lms
VITE_SOCKET_URL=https://your-app-name.onrender.com
```

### 3.3 Redeploy Frontend
1. In Vercel, go to Deployments
2. Click "Redeploy" on the latest deployment
3. Or push a small change to trigger automatic deployment

## 🧪 Step 4: Test Your Deployment

### 4.1 Test Backend Health
```bash
curl https://your-app-name.onrender.com/health
```
Should return: `{"status":"OK","message":"LMS Server is running"}`

### 4.2 Test Frontend
1. Visit https://techprojectshub.in
2. Try to access LMS features
3. Check browser console for any errors
4. Test real-time chat functionality

## 🔧 Render-Specific Configuration

### Auto-Deploy Settings
- **Auto-Deploy**: Enabled (recommended)
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Environment Variables in Render
Render provides a clean interface for environment variables:
1. Go to your service dashboard
2. Click "Environment" tab
3. Add each variable one by one
4. Click "Save Changes"

### Custom Domain (Optional)
If you want a custom domain:
1. Go to your service dashboard
2. Click "Settings" → "Custom Domains"
3. Add your domain
4. Update DNS records as instructed

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check build logs in Render
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Database Connection Fails**
   - Verify MongoDB URI format
   - Check network access in MongoDB Atlas
   - Ensure username/password are correct

3. **CORS Errors**
   - Verify `FRONTEND_URL` is set correctly
   - Check that frontend domain is allowed

4. **Environment Variables Not Working**
   - Ensure variables are set in Render dashboard
   - Redeploy after adding variables
   - Check variable names match exactly

### Debug Commands:
```bash
# Test backend locally first
cd backend
npm install
npm start

# Test API endpoints
curl http://localhost:8000/health
```

## 📊 Render Free Tier Limits

- **Bandwidth**: 750 hours/month
- **Build Time**: 500 minutes/month
- **Sleep**: Services sleep after 15 minutes of inactivity
- **Custom Domains**: Supported
- **SSL**: Automatic HTTPS

## 🎉 Success Checklist

- [ ] MongoDB Atlas cluster created and connected
- [ ] Backend deployed to Render successfully
- [ ] Health endpoint responds correctly
- [ ] Environment variables set in Render
- [ ] Frontend environment variables updated in Vercel
- [ ] Frontend redeployed successfully
- [ ] LMS features working on live site
- [ ] Real-time chat functionality working
- [ ] File uploads working
- [ ] User authentication working

## 🔗 Useful Links

- [Render Dashboard](https://dashboard.render.com)
- [MongoDB Atlas](https://cloud.mongodb.com)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Your Frontend](https://techprojectshub.in)

## ⏱️ Estimated Time
- **Total**: 30-45 minutes
- **MongoDB Setup**: 10-15 minutes
- **Render Deployment**: 15-20 minutes
- **Frontend Connection**: 10 minutes

---

**Ready to deploy?** Follow these steps and your backend will be live on Render! 🚀
