import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from '../utils/api';
import { AlertCircle, Edit, Trash2, ArrowLeft, Loader2 } from 'lucide-react';

const AdminCourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchCourse();
    // eslint-disable-next-line
  }, [courseId]);

  const fetchCourse = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getCourse(courseId);
      setCourse(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch course');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this course? This action cannot be undone.')) return;
    setDeleting(true);
    try {
      await apiService.deleteCourse(courseId);
      navigate('/lms/admin/courses');
    } catch (err) {
      setError(err.message || 'Failed to delete course');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin w-16 h-16 text-red-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button onClick={fetchCourse} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Retry</button>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Course Not Found</h2>
          <Link to="/lms/admin/courses" className="text-red-600 hover:underline">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/lms/admin/courses" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Course Details</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={`/lms/admin/course/${course._id}/edit`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Edit className="w-4 h-4 mr-2" /> Edit
            </Link>
            <button onClick={handleDelete} disabled={deleting} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center disabled:opacity-50">
              {deleting ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Trash2 className="w-4 h-4 mr-2" />}
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Info</h2>
              <p><span className="font-medium">Title:</span> {course.title}</p>
              <p><span className="font-medium">Category:</span> {course.category}</p>
              <p><span className="font-medium">Level:</span> {course.level}</p>
              <p><span className="font-medium">Duration:</span> {course.duration}</p>
              <p><span className="font-medium">Price:</span> ₹{course.price?.toLocaleString()}</p>
              <p><span className="font-medium">Status:</span> {course.isPublished ? 'Published' : 'Draft'}</p>
              <p><span className="font-medium">Featured:</span> {course.isFeatured ? 'Yes' : 'No'}</p>
              <p><span className="font-medium">Created:</span> {new Date(course.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
              <p>{course.description}</p>
              {course.shortDescription && <p className="mt-2 text-gray-600">{course.shortDescription}</p>}
              {course.instructor && (
                <p className="mt-2"><span className="font-medium">Instructor:</span> {course.instructor.firstName} {course.instructor.lastName}</p>
              )}
              {course.enrolledStudents !== undefined && (
                <p className="mt-2"><span className="font-medium">Enrolled Students:</span> {course.enrolledStudents}</p>
              )}
            </div>
          </div>
          {course.requirements && course.requirements.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium">Requirements:</h3>
              <ul className="list-disc list-inside">
                {course.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium">Learning Outcomes:</h3>
              <ul className="list-disc list-inside">
                {course.learningOutcomes.map((out, idx) => (
                  <li key={idx}>{out}</li>
                ))}
              </ul>
            </div>
          )}
          {course.projects && course.projects.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium">Projects:</h3>
              <ul className="list-disc list-inside">
                {course.projects.map((proj, idx) => (
                  <li key={idx}><span className="font-semibold">{proj.title}:</span> {proj.description}</li>
                ))}
              </ul>
            </div>
          )}
          {course.programOutcomes && course.programOutcomes.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium">Program Outcomes:</h3>
              <ul className="list-disc list-inside">
                {course.programOutcomes.map((out, idx) => (
                  <li key={idx}>{out}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseDetail;