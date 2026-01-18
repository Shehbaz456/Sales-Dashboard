import { FiMenu } from "react-icons/fi";
import { TENANTS } from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";

const Header = ({ onToggleSidebar }) => {
  const {user,logout,switchTenant} = useAuth();

  const handleTenantSwitch = (e)=>{
    switchTenant(e.target.value)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm h-16">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <h1 className="text-lg md:text-xl font-bold text-gray-800">
            Sales Dashboard
          </h1>

          <select
          value={user?.tenant || ''} 
          onChange={handleTenantSwitch}
           className="hidden md:block px-3 py-1 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
            <option value={TENANTS.ORG_A}>{TENANTS.ORG_A}</option>
            <option value={TENANTS.ORG_B}>{TENANTS.ORG_B}</option>
          </select>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium">{user?.name} </p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>

          <button onClick={logout}
           className="hidden sm:block px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600">
            Logout
          </button>

         
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
