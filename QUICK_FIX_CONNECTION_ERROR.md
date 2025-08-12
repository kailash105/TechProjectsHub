# 🔧 Quick Fix: Connection Error (Failed to Fetch)

## 🚨 **Current Issue**
Your frontend at `https://techprojectshub.onrender.com` is trying to connect to `localhost:8000` but the backend is not deployed yet.

## ✅ **Solution Steps**

### **Step 1: Deploy Backend to Render**

1. **Go to Render**: https://render.com
2. **Sign up/Login** with your GitHub account
3. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Set **Root Directory**: `backend`
   - Set **Environment**: Node
   - Set **Build Command**: `npm install`
   - Set **Start Command**: `npm start`

4. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   FRONTEND_URL=https://techprojectshub.onrender.com
   ```

5. **Click "Create Web Service"**

### **Step 2: Get Your Backend URL**
After deployment, you'll get a URL like:
`https://your-backend-name.onrender.com`

### **Step 3: Update Frontend Environment Variables**

In your Render dashboard for the frontend service:

1. **Go to Environment Variables**
2. **Add/Update**:
   ```
   VITE_API_BASE_URL=https://your-backend-name.onrender.com/api/lms
   VITE_SOCKET_URL=https://your-backend-name.onrender.com
   ```

### **Step 4: Test the Fix**

1. **Wait for deployment** (2-5 minutes)
2. **Visit**: https://techprojectshub.onrender.com/lms/login
3. **Try logging in** with test credentials:
   - Email: `student@test.com`
   - Password: `password123`

## 🗄️ **Database Setup (Required)**

### **Option 1: MongoDB Atlas (Free)**
1. Go to https://mongodb.com/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Add to MONGODB_URI environment variable

### **Option 2: Railway MongoDB**
1. Go to https://railway.app
2. Create new project
3. Add MongoDB service
4. Get connection string

## 🧪 **Test Credentials**

After deployment, you can test with:
- **Student**: `student@test.com` / `password123`
- **Trainer**: `trainer@test.com` / `password123`
- **Admin**: `admin@test.com` / `password123`

## 🔍 **Troubleshooting**

### **If still getting "Failed to fetch":**
1. Check backend URL is correct
2. Verify environment variables are set
3. Wait for deployment to complete
4. Clear browser cache

### **If backend deployment fails:**
1. Check MongoDB connection string
2. Verify all environment variables
3. Check Render logs for errors

## 📞 **Need Help?**

- Check `BACKEND_DEPLOYMENT_GUIDE.md` for detailed instructions
- Run `./deploy-backend-render.sh` for step-by-step guide
- Check Render logs for specific error messages

## ⏱️ **Expected Timeline**
- Backend deployment: 5-10 minutes
- Environment variable update: 2-3 minutes
- Total fix time: 10-15 minutes
