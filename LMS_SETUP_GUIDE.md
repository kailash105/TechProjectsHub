# 🎓 LMS System Setup & Run Guide

## 📋 **Prerequisites**
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## 🚀 **Quick Start (All-in-One)**

### **1. Start MongoDB**
```bash
brew services start mongodb-community
```

### **2. Start Backend Server**
```bash
cd backend
npm install
node server.js
```
**Backend will run on:** `http://localhost:8000`

### **3. Start Frontend (New Terminal)**
```bash
cd ..  # Go back to project root
npm install
npm run dev
```
**Frontend will run on:** `http://localhost:5173` or `http://localhost:5174`

### **4. Access the Application**
- **Main Site:** `http://localhost:5173`
- **LMS Login:** `http://localhost:5173/lms/login`
- **LMS Register:** `http://localhost:5173/lms/register`

## 🔐 **Test Credentials**

### **Admin User**
- **Email:** `admin@test.com`
- **Password:** `admin123`
- **Dashboard:** `/lms/admin/dashboard`

### **Trainer User**
- **Email:** `trainer@test.com`
- **Password:** `trainer123`
- **Dashboard:** `/lms/trainer/dashboard`

### **Student User**
- **Email:** `student@test.com`
- **Password:** `student123`
- **Dashboard:** `/lms/student/dashboard`

## 📁 **Project Structure**
```
techprojectshub/
├── backend/                 # Backend server (Node.js + Express)
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication & validation
│   ├── server.js          # Main server file
│   └── .env               # Environment variables
├── src/                   # Frontend (React)
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── utils/            # Utilities (API, Auth)
│   └── App.jsx           # Main app component
└── package.json          # Frontend dependencies
```

## 🔧 **Detailed Setup**

### **Backend Setup**
```bash
cd backend

# Install dependencies
npm install

# Check environment variables
cat .env

# Start server
node server.js
```

### **Frontend Setup**
```bash
# From project root
npm install

# Start development server
npm run dev
```

## 🌐 **API Endpoints**

### **Authentication**
- `POST /api/lms/auth/register` - Register new user
- `POST /api/lms/auth/login` - User login
- `GET /api/lms/auth/me` - Get current user

### **Student Routes**
- `GET /api/lms/student/dashboard` - Student dashboard
- `GET /api/lms/student/profile` - Get profile
- `PUT /api/lms/student/profile` - Update profile
- `GET /api/lms/student/progress` - Course progress

### **Trainer Routes**
- `GET /api/lms/trainer/dashboard` - Trainer dashboard
- `GET /api/lms/trainer/profile` - Get profile
- `PUT /api/lms/trainer/profile` - Update profile
- `POST /api/lms/trainer/notify-students` - Send notifications

### **Admin Routes**
- `GET /api/lms/admin/dashboard` - Admin dashboard
- `GET /api/lms/admin/statistics` - System statistics
- `GET /api/lms/admin/users` - Manage users
- `GET /api/lms/admin/courses` - Manage courses

## 🛠️ **Troubleshooting**

### **Port Issues**
- **Backend port 8000 in use:** Change PORT in `backend/.env`
- **Frontend port 5173 in use:** Vite will automatically use next available port

### **MongoDB Issues**
```bash
# Check MongoDB status
brew services list | grep mongodb

# Restart MongoDB
brew services restart mongodb-community

# Check MongoDB connection
mongo --eval "db.runCommand('ping')"
```

### **CORS Issues**
- Backend is configured to allow: `http://localhost:5173`, `http://localhost:5174`
- Check `backend/.env` for `FRONTEND_URL` setting

### **Common Commands**

#### **Check Server Status**
```bash
# Backend health check
curl http://localhost:8000/health

# Check if ports are in use
lsof -i :8000
lsof -i :5173
```

#### **Restart Services**
```bash
# Restart backend
pkill -f "node server.js"
cd backend && node server.js

# Restart frontend
# Stop with Ctrl+C, then:
npm run dev
```

## 📊 **Features Available**

### **✅ Completed Features**
- ✅ User authentication (login/register)
- ✅ Role-based access control (Admin/Trainer/Student)
- ✅ Protected routes
- ✅ Dashboard for each role
- ✅ Profile management
- ✅ Notifications system
- ✅ Analytics and statistics
- ✅ Course management (basic)
- ✅ Student progress tracking

### **🔄 In Progress**
- 🔄 Payment integration (Razorpay/Stripe)
- 🔄 File upload system
- 🔄 Real-time chat
- 🔄 Email notifications

## 🎯 **Testing Checklist**

- [ ] **MongoDB is running**
- [ ] **Backend server starts without errors**
- [ ] **Frontend development server starts**
- [ ] **Can access login page**
- [ ] **Can register new user**
- [ ] **Can login with test credentials**
- [ ] **Role-based routing works**
- [ ] **Dashboard loads for each role**
- [ ] **Logout functionality works**

## 🚨 **Important Notes**

1. **Environment Variables:** Make sure `backend/.env` has correct settings
2. **CORS:** Backend allows frontend origins automatically
3. **Database:** MongoDB must be running before starting backend
4. **Ports:** Backend (8000), Frontend (5173/5174)
5. **Test Users:** Use provided test credentials for quick testing

## 📞 **Support**

If you encounter issues:
1. Check MongoDB is running
2. Verify ports are not in use
3. Check console for error messages
4. Ensure all dependencies are installed

---

**🎉 Your LMS system is ready to use!** 