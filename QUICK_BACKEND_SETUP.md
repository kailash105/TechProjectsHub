# Quick Backend Setup for TechProjectsHub

## 🎯 Current Status
- ✅ Backend code is ready
- ✅ Dependencies are installed
- ✅ Environment file exists
- ✅ Ready for deployment

## 🚀 Quick Deployment Steps

### Step 1: Set up MongoDB Atlas (5 minutes)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up for free account
3. Create a new cluster (free tier)
4. Get your connection string
5. Update `backend/.env` file with your MongoDB URI

### Step 2: Deploy to Railway (10 minutes)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Set root directory to `backend/`
7. Add environment variables from your `.env` file

### Step 3: Update Frontend (2 minutes)
1. Get your Railway backend URL
2. Go to Vercel dashboard
3. Add environment variables:
   ```
   VITE_API_BASE_URL=https://your-backend-url.railway.app/api/lms
   VITE_SOCKET_URL=https://your-backend-url.railway.app
   ```

### Step 4: Test Everything (5 minutes)
1. Visit your backend health check: `https://your-backend-url.railway.app/health`
2. Test your frontend: https://techprojectshub.in
3. Try logging in/registering
4. Test course features

## 🔧 Required Environment Variables

Make sure these are set in Railway:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms
JWT_SECRET=your_super_secret_key_here
FRONTEND_URL=https://techprojectshub.in
NODE_ENV=production
PORT=8000
```

## 🧪 Testing Checklist

After deployment:
- [ ] Backend health check works
- [ ] Frontend can connect to backend
- [ ] User registration works
- [ ] User login works
- [ ] Course browsing works
- [ ] Real-time features work (if applicable)

## 🆘 Need Help?

1. **MongoDB Issues**: Check connection string format
2. **Railway Issues**: Check build logs in Railway dashboard
3. **CORS Issues**: Verify FRONTEND_URL is correct
4. **Environment Variables**: Make sure all are set in Railway

## 💡 Pro Tips

- **Use Railway** - easiest deployment option
- **MongoDB Atlas** - reliable free database
- **Strong JWT secrets** - for security
- **Monitor logs** - for debugging

## 🎉 Expected Result

After completing these steps:
- ✅ Backend running on Railway
- ✅ Frontend connected to backend
- ✅ Full LMS functionality working
- ✅ Real-time features operational
- ✅ Database storing user data

Your TechProjectsHub website will be fully functional with both frontend and backend working together!
