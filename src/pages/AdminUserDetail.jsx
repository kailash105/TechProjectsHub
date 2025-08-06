import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from '../utils/api';
import { AlertCircle, Edit, Trash2, ArrowLeft, Loader2 } from 'lucide-react';

const AdminUserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, [userId]);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.get(`/admin/user/${userId}`);
      setUser(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch user');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
    setDeleting(true);
    try {
      await apiService.request(`/admin/user/${userId}`, { method: 'DELETE' });
      navigate('/lms/admin/users');
    } catch (err) {
      setError(err.message || 'Failed to delete user');
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
          <button onClick={fetchUser} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Retry</button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">User Not Found</h2>
          <Link to="/lms/admin/users" className="text-red-600 hover:underline">Back to Users</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/lms/admin/users" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={`/lms/admin/user/${user._id}/edit`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
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
              <p><span className="font-medium">Name:</span> {user.firstName} {user.lastName}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              {user.phone && <p><span className="font-medium">Phone:</span> {user.phone}</p>}
              <p><span className="font-medium">Role:</span> {user.role}</p>
              <p><span className="font-medium">Status:</span> {user.isActive ? 'Active' : 'Inactive'}</p>
              <p><span className="font-medium">Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Other Info</h2>
              {user.specialization && <p><span className="font-medium">Specialization:</span> {user.specialization}</p>}
              {user.experience && <p><span className="font-medium">Experience:</span> {user.experience}</p>}
              {user.bio && <p><span className="font-medium">Bio:</span> {user.bio}</p>}
              {user.enrolledCourses && user.enrolledCourses.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium">Enrolled Courses:</h3>
                  <ul className="list-disc list-inside">
                    {user.enrolledCourses.map((ec, idx) => (
                      <li key={idx}>{ec.courseId?.title || 'Course'} ({ec.courseId?.description?.substring(0, 40)})</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserDetail;