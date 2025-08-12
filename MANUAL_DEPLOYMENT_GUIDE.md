# Manual Deployment Guide for CSE Projects

## 🎯 **Step-by-Step Manual Deployment**

### **Step 1: Build is Complete ✅**
- Your project has been successfully built
- All CSE projects data is included
- Build files are in the `dist/` folder

### **Step 2: Manual Vercel Deployment**

#### **Option A: Vercel CLI (Recommended)**
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from the dist folder
cd dist
vercel --prod

# Or deploy from project root
vercel --prod
```

#### **Option B: Vercel Dashboard**
1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: techprojectshub.in
3. **Go to Deployments tab**
4. **Click "Redeploy"** on the latest deployment
5. **Wait for build to complete**

#### **Option C: Drag & Drop to Vercel**
1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Go to Settings → General**
4. **Find "Build & Development Settings"**
5. **Upload the dist folder contents**

### **Step 3: Alternative - Manual File Upload**

#### **If you have FTP/File Manager Access:**
1. **Connect to your hosting** (if not using Vercel)
2. **Upload the contents** of the `dist/` folder
3. **Replace existing files** with new ones
4. **Clear any caches** if available

### **Step 4: Verify Deployment**

#### **Test URLs:**
1. **Main Site**: https://techprojectshub.in
2. **Projects Page**: https://techprojectshub.in/projects
3. **CSE Major**: https://techprojectshub.in/cse-major
4. **CSE Minor**: https://techprojectshub.in/cse-minor

#### **What to Look For:**
- ✅ **CSE Major Projects**: 82 projects with search/filter
- ✅ **CSE Minor Projects**: 3 projects with search/filter
- ✅ **Search functionality** working
- ✅ **Domain filters** working
- ✅ **Project cards** showing real data

### **Step 5: Troubleshooting**

#### **If Changes Don't Appear:**
1. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
2. **Try incognito mode**
3. **Check browser console** for errors
4. **Verify file uploads** were successful

#### **If Build Fails:**
1. **Check Vercel logs** for errors
2. **Verify all files** are committed
3. **Check for syntax errors** in code
4. **Try rebuilding** locally first

## 🚀 **Quick Manual Deploy Commands**

### **Using Vercel CLI:**
```bash
# From project root
vercel --prod

# Or from dist folder
cd dist && vercel --prod
```

### **Using Git (if Vercel is connected):**
```bash
# Force push to trigger deployment
git push origin main --force

# Or create a new commit
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

## 📁 **Files to Verify**

### **Key Files in dist/:**
- ✅ `index.html` - Main entry point
- ✅ `assets/` - All JavaScript and CSS
- ✅ `TrainingPDFS/` - PDF files
- ✅ `Projects/` - Project videos
- ✅ `Home/` - Home page videos

### **CSE Projects Data:**
- ✅ `src/data/cseProjects.js` - Project data structure
- ✅ `src/pages/CseMajor.jsx` - Major projects page
- ✅ `src/pages/CseMinor.jsx` - Minor projects page

## 🎯 **Expected Result**

After manual deployment, you should see:
- **Professional CSE projects pages**
- **Search and filter functionality**
- **82 major projects** organized by domain
- **3 minor projects** for intermediate level
- **Responsive design** on all devices

## 📞 **Need Help?**

### **If Manual Deployment Fails:**
1. **Check Vercel dashboard** for error logs
2. **Verify all dependencies** are installed
3. **Check for syntax errors** in the code
4. **Try building locally** first

### **Alternative Deployment Methods:**
- **Netlify**: Similar to Vercel
- **GitHub Pages**: Free hosting option
- **Firebase Hosting**: Google's hosting service
- **Traditional hosting**: Upload files manually

The manual deployment should give you full control over the process!
