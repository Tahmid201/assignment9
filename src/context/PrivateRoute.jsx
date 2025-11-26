import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) return <div className="text-center p-8">Loading...</div>;

  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default PrivateRoute;
