const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = uploadsDir;
    
    // Create subdirectories based on file type
    if (file.fieldname === 'profilePicture') {
      uploadPath = path.join(uploadsDir, 'profiles');
    } else if (file.fieldname === 'courseThumbnail' || file.fieldname === 'courseBanner') {
      uploadPath = path.join(uploadsDir, 'courses');
    } else if (file.fieldname === 'syllabusPdf') {
      uploadPath = path.join(uploadsDir, 'syllabus');
    } else if (file.fieldname === 'courseMaterial') {
      uploadPath = path.join(uploadsDir, 'materials');
    } else if (file.fieldname === 'assignment') {
      uploadPath = path.join(uploadsDir, 'assignments');
    }
    
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  // Allow images
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  }
  // Allow PDFs
  else if (file.mimetype === 'application/pdf') {
    cb(null, true);
  }
  // Allow documents
  else if (file.mimetype === 'application/msword' ||
           file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
           file.mimetype === 'application/vnd.ms-excel' ||
           file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    cb(null, true);
  }
  // Allow videos
  else if (file.mimetype.startsWith('video/')) {
    cb(null, true);
  }
  // Allow archives
  else if (file.mimetype === 'application/zip' || 
           file.mimetype === 'application/x-rar-compressed') {
    cb(null, true);
  }
  else {
    cb(new Error('Invalid file type. Only images, PDFs, documents, videos, and archives are allowed.'), false);
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
    files: 10 // Maximum 10 files
  }
});

// Specific upload configurations
const uploadProfilePicture = upload.single('profilePicture');
const uploadCourseMedia = upload.fields([
  { name: 'courseThumbnail', maxCount: 1 },
  { name: 'courseBanner', maxCount: 1 }
]);
const uploadCourseMaterial = upload.array('courseMaterial', 10);
const uploadAssignment = upload.single('assignment');

// Middleware to handle upload errors
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ 
        message: 'File too large. Maximum size is 50MB.' 
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ 
        message: 'Too many files. Maximum is 10 files.' 
      });
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ 
        message: 'Unexpected file field.' 
      });
    }
  }
  
  if (err.message.includes('Invalid file type')) {
    return res.status(400).json({ 
      message: err.message 
    });
  }
  
  next(err);
};

// Helper function to delete file
const deleteFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
  } catch (error) {
    console.error('Error deleting file:', error);
  }
  return false;
};

// Helper function to get file URL
const getFileUrl = (filePath) => {
  if (!filePath) return null;
  return `/uploads/${filePath.replace(uploadsDir, '').replace(/\\/g, '/').replace(/^\//, '')}`;
};

module.exports = {
  upload,
  uploadProfilePicture,
  uploadCourseMedia,
  uploadCourseMaterial,
  uploadAssignment,
  handleUploadError,
  deleteFile,
  getFileUrl
}; 