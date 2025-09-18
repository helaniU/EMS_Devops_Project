import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ role }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const links =
    role === "admin"
      ? [
          { name: "Dashboard", path: "/dashboard/admins" },
          { name: "Employees", path: "/employees" },
          { name: "Departments", path: "/departments" },
          { name: "Salary", path: "/salary" },
          { name: "Leave", path: "/leave" },
        ]
      : [
          { name: "Dashboard", path: "/dashboard/employees" },
          { name: "My Profile", path: "/profile" },
          { name: "My Salary", path: "/salary" },
          { name: "Leave Requests", path: "/leave" },
        ];

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <NavLink
          to={role === "admin" ? "/dashboard/admins" : "/dashboard/employees"}
          className="text-xl font-bold"
          style={{ color: "white", fontSize: 40 }}
        >
          EMS
        </NavLink>

        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-500 flex flex-col space-y-2 p-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="mt-2 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
