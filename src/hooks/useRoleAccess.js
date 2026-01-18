import { canEditLead } from "../utils/permissions";
import { useAuth } from "./useAuth";

export const UserRoleAccess = () =>{
    const {user} = useAuth();
    return {
        canEdit : user ? canEditLead(user.role) : false,
        isAdmin: user?.role === 'Admin',
        isAgent: user?.role === 'Agent'
    }
}