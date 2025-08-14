import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, requiredRoles = [], redirectTo = '/' }) => {
  const { isAuthenticated, user, loading, hasAnyRole } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Check role requirements if specified (LMS temporarily disabled)
  if (requiredRoles.length > 0 && !hasAnyRole(requiredRoles)) {
    // Redirect to home since LMS is disabled
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 