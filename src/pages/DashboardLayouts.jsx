import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkLightMode from "../components/DarkLightMode/DarkLightMode";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar for Desktop */}
      <aside className="hidden md:flex md:flex-col w-64 border-r px-6 py-8 shadow-sm fixed top-0 left-0 h-screen z-10">
        <SidebarContent />
      </aside>

      {/* Mobile Topbar with toggle button */}
      <div
        className="
    md:hidden fixed top-0 left-0 right-0 z-50 border-b shadow-sm px-4 py-3 flex justify-between items-center
    bg-[#046c3e] 
    text-white
  "
      >
        <h2 className="text-lg font-bold">Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Drawer for Mobile */}
      {sidebarOpen && (
        <div
          className="
      fixed top-0 left-0 w-64 h-full z-40 border-r p-6 md:hidden
      bg-[#046c3e] 
      text-white
      shadow-md
    "
        >
          <SidebarContent onClose={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 pt-20 md:pt-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

// Sidebar content reusable
const SidebarContent = ({ onClose }) => {
  const handleClick = () => onClose && onClose();

  return (
    <>
      <h2 className="hidden lg:block text-3xl font-semibold">Dashboard</h2>
      <div className="mt-10 lg:mt-3 my-6 ">
        <DarkLightMode />
      </div>

      <nav className="flex flex-col gap-2 text-sm">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-gray-900 lg:text-gray-600  font-semibold" : ""
          }
          onClick={handleClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "text-gray-900 lg:text-gray-600 font-semibold" : ""
          }
          onClick={handleClick}
        >
          Overview
        </NavLink>
        <NavLink
          to="/BrowseTasks"
          className={({ isActive }) =>
            isActive ? "text-gray-900 lg:text-gray-600  font-semibold" : ""
          }
          onClick={handleClick}
        >
          Browse Task
        </NavLink>
        <NavLink
          to="/dashboard/addTask"
          className={({ isActive }) =>
            isActive ? "text-gray-900 lg:text-gray-600  font-semibold" : ""
          }
          onClick={handleClick}
        >
          Add Task
        </NavLink>
        <NavLink
          to="/dashboard/myPostedTasks"
          className={({ isActive }) =>
            isActive ? "text-gray-900 lg:text-gray-600  font-semibold" : ""
          }
          onClick={handleClick}
        >
          My Posted Tasks
        </NavLink>
      </nav>
    </>
  );
};
