import { useState } from "react";
import {
  FiHelpCircle,
  FiSettings,
  FiChevronRight
} from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const mainMenu = [
  { name: "Dashboard", icon: <MdOutlineSpaceDashboard />, path: "/dashboard" },
  { name: "Call Logs", icon: <IoCallOutline />, path: "/call-logs" },
  { name: "Leads", icon: <SiGoogleads />, path: "/leads" },
  { name: "Support", icon: <FiHelpCircle />, path: "/" }
];

const Sidebar = ({ isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:relative z-40
          bg-[#434141] text-white
          h-[calc(100vh-64px)]
          flex flex-col
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Collapse Button */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <FiChevronRight
              className={`transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* MAIN MENU (fills space) */}
        <nav className="flex-1 px-2 space-y-1">
          {mainMenu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg
                transition-all
                ${
                  isActive
                    ? "bg-white/10 border border-white/20"
                    : "hover:bg-white/5"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* BOTTOM SETTINGS */}
        <div className="px-2 pb-2">
          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg
              transition-all
              ${
                isActive
                  ? "bg-white/10 border border-white/20"
                  : "hover:bg-white/5"
              }`
            }
          >
            <span className="text-xl">
              <FiSettings />
            </span>
            {!collapsed && (
              <span className="text-sm font-medium">Settings</span>
            )}
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
