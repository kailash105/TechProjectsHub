# Deployment Configuration Guide

## Critical Issues Found and Fixed

### 1. Video Path Issue ✅ FIXED
- **Problem**: Video source was using `public/Home/VIDEO-2025-07-31-08-55-35.mp4`
- **Solution**: Changed to `/Home/VIDEO-2025-07-31-08-55-35.mp4` (removed `public/` prefix)

### 2. API URL Configuration ✅ FIXED
- **Problem**: API base URL was hardcoded to `localhost:8000`
- **Solution**: Made it configurable via environment variable `VITE_API_BASE_URL`

### 3. Socket URL Configuration ✅ FIXED
- **Problem**: Socket URL was hardcoded to `localhost:8000`
- **Solution**: Made it configurable via environment variable `VITE_SOCKET_URL`

## Required Environment Variables

Create a `.env` file in your project root with these variables:

```env
# API Configuration
VITE_API_BASE_URL=https://your-backend-domain.com/api/lms
VITE_SOCKET_URL=https://your-backend-domain.com
```

## Backend Configuration

Make sure your backend server is configured with:

1. **CORS**: Update `backend/server.js` to allow your frontend domain
2. **Environment Variables**: Set `FRONTEND_URL` to your deployed frontend URL
3. **Database**: Ensure MongoDB connection string is set correctly

## Deployment Checklist

- [ ] Set environment variables for API and Socket URLs
- [ ] Ensure backend server is running and accessible
- [ ] Verify all static assets (videos, images) are properly served
- [ ] Test API connectivity from frontend
- [ ] Check browser console for any remaining errors

## Common Issues

1. **CORS Errors**: Backend needs to allow your frontend domain
2. **404 on API calls**: Check if API base URL is correct
3. **Video not loading**: Ensure video files are in the correct public directory
4. **Socket connection failed**: Verify socket URL and backend socket server

## Testing

After deployment, test these features:
- [ ] Home page loads with video background
- [ ] Navigation works correctly
- [ ] API calls succeed (check browser network tab)
- [ ] Real-time features work (if applicable)
