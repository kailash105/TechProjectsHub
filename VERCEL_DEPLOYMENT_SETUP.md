# Vercel Deployment Setup for techprojectshub.in

## Environment Variables Setup

You need to configure these environment variables in your Vercel dashboard:

### 1. Go to Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Select your `techprojectshub.in` project
3. Go to **Settings** → **Environment Variables**

### 2. Add These Environment Variables

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `VITE_API_BASE_URL` | `https://your-backend-domain.com/api/lms` | Your backend API URL |
| `VITE_SOCKET_URL` | `https://your-backend-domain.com` | Your backend Socket.IO URL |

### 3. Backend Domain Configuration

**Option A: If you have a separate backend server**
- Replace `your-backend-domain.com` with your actual backend domain
- Example: `https://api.techprojectshub.in/api/lms`

**Option B: If you're using Vercel for backend too**
- Use your Vercel backend URL
- Example: `https://your-backend-project.vercel.app/api/lms`

**Option C: For development/testing**
- Use a service like Railway, Render, or Heroku for backend
- Set the environment variables to point to that service

## Backend Deployment Requirements

Your backend needs to be deployed and accessible. Update your backend's CORS configuration:

```javascript
// In backend/server.js
const io = new Server(server, {
  cors: {
    origin: [
      'https://techprojectshub.in',
      'http://techprojectshub.in',
      'http://localhost:3000',
      'http://localhost:5173'
    ],
    credentials: true
  }
});
```

## Quick Fix for Immediate Testing

If you want to test the frontend without backend for now, you can temporarily disable API calls:

1. Set environment variables to dummy values:
   ```
   VITE_API_BASE_URL=https://dummy-api.com/api/lms
   VITE_SOCKET_URL=https://dummy-socket.com
   ```

2. This will allow the frontend to load without API errors

## SSL Certificate Issue

I noticed an SSL certificate issue. This might be because:
1. SSL certificate is still being provisioned
2. Domain configuration needs time to propagate
3. Certificate configuration issue

**Temporary workaround**: Use HTTP for now while SSL is being set up.

## Testing Checklist

After setting environment variables:

- [ ] Visit https://techprojectshub.in
- [ ] Check browser console for errors
- [ ] Verify video background loads
- [ ] Test navigation between pages
- [ ] Check if API calls work (if backend is deployed)

## Common Vercel Issues

1. **Build Failures**: Check Vercel build logs
2. **Environment Variables Not Working**: Ensure they're set for Production environment
3. **404 Errors**: Check if all routes are properly configured
4. **CORS Errors**: Backend needs to allow your domain

## Next Steps

1. Set the environment variables in Vercel dashboard
2. Deploy your backend server (if not already done)
3. Update backend CORS settings
4. Test the website functionality
5. Check browser console for any remaining errors

## Support

If you continue to have issues:
1. Check Vercel deployment logs
2. Check browser console for specific error messages
3. Verify backend server is running and accessible
