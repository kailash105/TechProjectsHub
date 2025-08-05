# 🚀 Quick Start Guide

## **Option 1: One-Command Start (Recommended)**
```bash
./start-lms.sh
```

## **Option 2: Manual Start**

### **1. Start MongoDB**
```bash
brew services start mongodb-community
```

### **2. Start Backend**
```bash
cd backend
node server.js
```

### **3. Start Frontend (New Terminal)**
```bash
npm run dev
```

## **🔐 Test Credentials**

| Role | Email | Password | Dashboard |
|------|-------|----------|-----------|
| **Admin** | `admin@test.com` | `admin123` | `/lms/admin/dashboard` |
| **Trainer** | `trainer@test.com` | `trainer123` | `/lms/trainer/dashboard` |
| **Student** | `student@test.com` | `student123` | `/lms/student/dashboard` |

## **🌐 Access URLs**

- **Main Site:** http://localhost:5173
- **LMS Login:** http://localhost:5173/lms/login
- **LMS Register:** http://localhost:5173/lms/register

## **🛠️ Troubleshooting**

### **Port Issues**
```bash
# Check what's using the ports
lsof -i :8000
lsof -i :5173
```

### **MongoDB Issues**
```bash
# Check MongoDB status
brew services list | grep mongodb

# Restart MongoDB
brew services restart mongodb-community
```

### **Backend Health Check**
```bash
curl http://localhost:8000/health
```

## **📚 Full Documentation**
See `LMS_SETUP_GUIDE.md` for detailed setup instructions. 