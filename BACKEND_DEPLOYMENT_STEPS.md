# Backend Deployment Steps for TechProjectsHub

## 🎯 Current Status
- ✅ Frontend deployed at: https://techprojectshub.in
- 🔄 Backend needs deployment
- 🔗 Need to connect frontend to backend

## 🚀 Step 1: Deploy Backend to Railway

### 1.1 Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Replace `username:password@cluster.mongodb.net` with your actual credentials

### 1.2 Deploy to Railway
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project from GitHub repository
4. Set root directory to `backend/`
5. Add environment variables (copy from `backend/deployment-config.env`):

```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/lms?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random_at_least_32_characters
FRONTEND_URL=https://techprojectshub.in
NODE_ENV=production
PORT=8000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### 1.3 Get Backend URL
- Railway will provide a URL like: `https://your-app-name.railway.app`
- Test it: `https://your-app-name.railway.app/health`

## 🔗 Step 2: Update Frontend Configuration

### 2.1 Update Vercel Environment Variables
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:

```
VITE_API_BASE_URL=https://your-app-name.railway.app/api/lms
VITE_SOCKET_URL=https://your-app-name.railway.app
```

### 2.2 Redeploy Frontend
1. In Vercel, go to Deployments
2. Click "Redeploy" on the latest deployment
3. Or push a small change to trigger automatic deployment

## 🧪 Step 3: Test the Connection

### 3.1 Test Backend Health
```bash
curl https://your-app-name.railway.app/health
```
Should return: `{"status":"OK","message":"LMS Server is running"}`

### 3.2 Test Frontend-Backend Connection
1. Visit https://techprojectshub.in
2. Try to access LMS features
3. Check browser console for API calls
4. Verify real-time chat functionality

## 🔧 Step 4: Update CORS Configuration

If you encounter CORS issues, update `backend/server.js`:

```javascript
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || ['https://techprojectshub.in', 'http://localhost:3000', 'http://localhost:5173'],
    credentials: true
  }
});
```

## 📋 Step 5: Final Checklist

- [ ] Backend deployed to Railway
- [ ] MongoDB Atlas connected
- [ ] Environment variables set in Railway
- [ ] Frontend environment variables updated in Vercel
- [ ] Frontend redeployed
- [ ] Health endpoint working
- [ ] LMS features functional
- [ ] Real-time chat working

## 🚨 Troubleshooting

### Common Issues:
1. **CORS Errors**: Check FRONTEND_URL in backend environment
2. **Database Connection**: Verify MONGODB_URI format
3. **JWT Errors**: Ensure JWT_SECRET is set
4. **Socket Connection**: Check VITE_SOCKET_URL in frontend

### Debug Commands:
```bash
# Test backend locally
cd backend
npm install
npm start

# Test API endpoints
curl http://localhost:8000/health
```

## 📞 Support
If you encounter issues:
1. Check Railway logs
2. Check Vercel deployment logs
3. Verify environment variables
4. Test endpoints individually

## 🎉 Success Indicators
- ✅ Backend health endpoint responds
- ✅ Frontend loads without console errors
- ✅ LMS login/register works
- ✅ Real-time features function
- ✅ File uploads work
- ✅ Payment integration works (if configured)
