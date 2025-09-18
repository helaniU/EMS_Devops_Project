import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    // Logged in but wrong role → redirect to correct dashboard
    return (
      <Navigate
        to={user.role === "admin" ? "/dashboard/admins" : "/dashboard/employees"}
        replace
      />
    );
  }

  return children;
}
