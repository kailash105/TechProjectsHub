import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import apiService from '../utils/api';

const SendAnnouncement = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [announcementType, setAnnouncementType] = useState('course');
  const [loading, setLoading] = useState(false);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [studentsLoading, setStudentsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (announcementType === 'course' && selectedCourses.length > 0) {
      fetchStudentsForCourses();
    }
  }, [selectedCourses, announcementType]);

  const fetchCourses = async () => {
    try {
      setCoursesLoading(true);
      const response = await apiService.get('/trainer/courses');
      setCourses(response.data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to load courses');
    } finally {
      setCoursesLoading(false);
    }
  };

  const fetchStudentsForCourses = async () => {
    try {
      setStudentsLoading(true);
      const response = await apiService.get('/trainer/students');
      setStudents(response.data || []);
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error('Failed to load students');
    } finally {
      setStudentsLoading(false);
    }
  };

  const handleCourseToggle = (courseId) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleStudentToggle = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (announcementType === 'course' && selectedCourses.length === 0) {
      toast.error('Please select at least one course');
      return;
    }

    if (announcementType === 'individual' && selectedStudents.length === 0) {
      toast.error('Please select at least one student');
      return;
    }

    try {
      setLoading(true);
      
      const announcementData = {
        title,
        message,
        type: announcementType,
        ...(announcementType === 'course' && { courseIds: selectedCourses }),
        ...(announcementType === 'individual' && { studentIds: selectedStudents })
      };

      await apiService.notifyStudents(announcementData);

      toast.success('Announcement sent successfully!');
      
      // Reset form
      setTitle('');
      setMessage('');
      setSelectedCourses([]);
      setSelectedStudents([]);
      setAnnouncementType('course');
      
      // Navigate back
      navigate('/lms/trainer/dashboard');
      
    } catch (error) {
      console.error('Error sending announcement:', error);
      toast.error('Failed to send announcement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-2">Send Announcement</h2>
          <p className="text-gray-600">Send important announcements to your students</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Announcement Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Announcement Type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="course"
                  checked={announcementType === 'course'}
                  onChange={(e) => setAnnouncementType(e.target.value)}
                  className="mr-2"
                />
                <span>Course-wide Announcement</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="individual"
                  checked={announcementType === 'individual'}
                  onChange={(e) => setAnnouncementType(e.target.value)}
                  className="mr-2"
                />
                <span>Individual Students</span>
              </label>
            </div>
          </div>

          {/* Course Selection */}
          {announcementType === 'course' && (
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Courses <span className="text-red-500">*</span>
              </label>
              {coursesLoading ? (
                <div className="animate-pulse space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-4">
                  {courses.map((course) => (
                    <label key={course._id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course._id)}
                        onChange={() => handleCourseToggle(course._id)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{course.title}</div>
                        <div className="text-sm text-gray-500">{course.enrolledStudents?.length || 0} students</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Student Selection */}
          {announcementType === 'individual' && (
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Students <span className="text-red-500">*</span>
              </label>
              {studentsLoading ? (
                <div className="animate-pulse space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-4">
                  {students.map((student) => (
                    <label key={student._id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student._id)}
                        onChange={() => handleStudentToggle(student._id)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Announcement Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Announcement Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter announcement title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Announcement Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              placeholder="Enter your announcement message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Priority Level */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Priority Level
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option value="normal">Normal</option>
              <option value="important">Important</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Type: {announcementType === 'course' ? 'Course-wide' : 'Individual'}</div>
              {announcementType === 'course' && (
                <div>Courses: {selectedCourses.length} selected</div>
              )}
              {announcementType === 'individual' && (
                <div>Students: {selectedStudents.length} selected</div>
              )}
              <div>Title: {title || 'Not set'}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Announcement'
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/lms/trainer/dashboard')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendAnnouncement;