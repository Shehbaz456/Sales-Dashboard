import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"
import { UserRoleAccess } from "../../hooks/useRoleAccess";
import LoadingSpinner from "./LoadingSpinner";


const ProtectedRoute = ({children,requireAdmin=false})=>{
    const {user,loading} = useAuth();
    const { isAdmin } = UserRoleAccess()
    if (loading) {
        return <LoadingSpinner/>
    }
    
    if (!user) {
    return <Navigate to="/login" replace />;
    }

    if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
    }
  return children;
}   
export default ProtectedRoute;