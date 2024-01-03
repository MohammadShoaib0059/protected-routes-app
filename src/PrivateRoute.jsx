import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ auth ,...props}) => {
  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;