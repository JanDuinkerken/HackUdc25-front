import { Navigate } from "react-router";
import { useAuth } from "../../hooks/userAuth";

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};