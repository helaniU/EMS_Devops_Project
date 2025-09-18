import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, role }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // If no user, redirect to login
  if (!currentUser) return <Navigate to="/login" replace />;

  // If role is specified, and it doesn't match, redirect to login
  if (role && currentUser.role !== role) return <Navigate to="/login" replace />;

  return children;
}
