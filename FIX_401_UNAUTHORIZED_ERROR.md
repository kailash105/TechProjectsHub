# 🔧 Fix: 401 Unauthorized Error

## 🚨 **Current Issue**
You're getting a **401 Unauthorized** error when trying to login, which means:
- ✅ Backend is deployed and accessible
- ❌ Frontend is still connecting to `localhost:8000` instead of deployed backend
- ❌ Test users don't exist in the database

## ✅ **Solution Steps**

### **Step 1: Get Your Backend URL**
First, find your backend URL from Render dashboard. It should be something like:
`https://your-backend-name.onrender.com`

### **Step 2: Update Frontend Environment Variables**

In your **Render dashboard**:

1. **Go to your frontend service** (the one at `https://techprojectshub.onrender.com`)
2. **Click on the service** to open dashboard
3. **Go to "Environment" tab**
4. **Add/Update these environment variables**:

```
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/lms
VITE_SOCKET_URL=https://your-backend-url.onrender.com
```

**Replace `your-backend-url.onrender.com` with your actual backend URL**

### **Step 3: Set Up Test Users in Database**

You need to create test users in your backend database. Run this script:

```bash
# In your backend directory
cd backend
node setup-test-users.js
```

This will create:
- **Student**: `student@test.com` / `password123`
- **Trainer**: `trainer@test.com` / `password123`
- **Admin**: `admin@test.com` / `password123`

### **Step 4: Test the Connection**

Use the test script to verify everything works:

```bash
# Edit the test script with your backend URL
node test-backend-connection.js
```

### **Step 5: Redeploy Frontend**

After updating environment variables:
1. **Go to your frontend service in Render**
2. **Click "Manual Deploy"**
3. **Wait for deployment to complete**

## 🧪 **Test the Fix**

1. **Wait for deployment** (2-5 minutes)
2. **Visit**: https://techprojectshub.onrender.com/lms/login
3. **Try logging in** with:
   - Email: `student@test.com`
   - Password: `password123`
   - Role: Student

## 🔍 **Troubleshooting**

### **If still getting 401 error:**
1. **Check backend URL** is correct in environment variables
2. **Verify test users** were created successfully
3. **Check backend logs** in Render dashboard
4. **Clear browser cache** and try again

### **If backend deployment failed:**
1. **Check MongoDB connection** string
2. **Verify all environment variables** are set
3. **Check Render logs** for specific errors

### **If frontend still connects to localhost:**
1. **Verify environment variables** are set correctly
2. **Wait for deployment** to complete
3. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)

## 📋 **Environment Variables Checklist**

### **Backend Environment Variables:**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=https://techprojectshub.onrender.com
NODE_ENV=production
PORT=8000
```

### **Frontend Environment Variables:**
```
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/lms
VITE_SOCKET_URL=https://your-backend-url.onrender.com
```

## 🎯 **Expected Result**

After completing all steps:
- ✅ Login page loads without errors
- ✅ Login with test credentials works
- ✅ User is redirected to dashboard
- ✅ No more "Failed to fetch" or "401 Unauthorized" errors

## ⏱️ **Timeline**
- Environment variable update: 2-3 minutes
- Test user setup: 1-2 minutes
- Frontend redeployment: 3-5 minutes
- **Total fix time: 6-10 minutes**

## 📞 **Need Help?**

- Check `BACKEND_DEPLOYMENT_GUIDE.md` for detailed backend setup
- Run `./deploy-backend-render.sh` for backend deployment guide
- Check Render logs for specific error messages


