# 🌐 Frontend Environment Variables Setup for Render

## 📍 **Where to Set Environment Variables**

For your Vite React app deployed on Render, you **don't need a `.env` file**. Instead, you set environment variables directly in the Render dashboard.

## 🎯 **Step-by-Step Setup**

### **Step 1: Access Your Frontend Service**

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Find your frontend service** (the one at `https://techprojectshub.onrender.com`)
3. **Click on the service name** to open the service dashboard

### **Step 2: Add Environment Variables**

1. **Click on "Environment" tab** in the service dashboard
2. **Click "Add Environment Variable"**
3. **Add these variables one by one**:

```
Key: VITE_API_BASE_URL
Value: https://your-backend-url.onrender.com/api/lms
```

```
Key: VITE_SOCKET_URL
Value: https://your-backend-url.onrender.com
```

**Replace `your-backend-url.onrender.com` with your actual backend URL**

### **Step 3: Save and Redeploy**

1. **Click "Save Changes"**
2. **Click "Manual Deploy"** to apply the changes
3. **Wait for deployment to complete** (2-5 minutes)

## 🔍 **How to Find Your Backend URL**

1. **Go to your backend service** in Render dashboard
2. **Copy the URL** from the service overview
3. **It should look like**: `https://your-backend-name.onrender.com`

## 📋 **Environment Variables Checklist**

### **Required Variables:**
```
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/lms
VITE_SOCKET_URL=https://your-backend-url.onrender.com
```

### **Optional Variables (if needed):**
```
VITE_APP_NAME=TechProjectsHub
VITE_APP_VERSION=1.0.0
```

## 🧪 **Test the Setup**

After setting environment variables and redeploying:

1. **Visit**: https://techprojectshub.onrender.com/lms/login
2. **Open browser DevTools** (F12)
3. **Go to Console tab**
4. **Check if there are any errors**
5. **Try logging in** with test credentials

## 🔧 **Alternative: Create Local .env File (Development Only)**

If you want to test locally, create a `.env` file in your project root:

```bash
# Create .env file
touch .env
```

Add to `.env`:
```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/lms
VITE_SOCKET_URL=https://your-backend-url.onrender.com
```

**Note**: This `.env` file should be in `.gitignore` and only used for local development.

## 🚨 **Important Notes**

- **Vite requires `VITE_` prefix** for environment variables
- **Environment variables are public** in the browser (don't put secrets here)
- **Changes require redeployment** to take effect
- **Local `.env` files don't affect production** deployment

## 🔍 **Verify Environment Variables**

You can verify the environment variables are working by adding this to your React component:

```javascript
console.log('API URL:', import.meta.env.VITE_API_BASE_URL);
console.log('Socket URL:', import.meta.env.VITE_SOCKET_URL);
```

## 📞 **Troubleshooting**

### **If environment variables don't work:**
1. **Check the variable names** start with `VITE_`
2. **Verify the backend URL** is correct
3. **Wait for deployment** to complete
4. **Clear browser cache** and try again

### **If still connecting to localhost:**
1. **Check environment variables** are set correctly
2. **Verify deployment** completed successfully
3. **Check browser console** for any errors

## 🎯 **Expected Result**

After setting environment variables:
- ✅ Frontend connects to deployed backend
- ✅ No more "localhost:8000" errors
- ✅ Login functionality works
- ✅ Real-time features work (if implemented)

