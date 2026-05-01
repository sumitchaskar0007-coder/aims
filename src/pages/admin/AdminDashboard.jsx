import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("admin") || "{}");

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      navigate("/admin/login");
    }
  };

  const menuItems = [
    { name: "Gallery", path: "/admin/gallery", icon: "📸" },
    { name: "Announcements", path: "/admin/announcements", icon: "📢" },
    { name: "Notices", path: "/admin/notices", icon: "📋" },
    { name: "Careers", path: "/admin/careers", icon: "💼" },
    { name: "Blogs", path: "/admin/blogs", icon: "📝" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-28">

      {/* ===== TOP HEADER ===== */}
      <div className="bg-white shadow fixed top-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <div className="flex items-center gap-6">
            <span className="text-gray-600 font-medium">
              Welcome, {admin.username || "Admin"}
            </span>

            {/* LOGOUT BUTTON */}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Logout
            </button>
          </div>

        </div>
      </div>

      {/* ===== DASHBOARD CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-700 rounded-xl text-white p-6 mb-10 shadow">
          <h2 className="text-2xl font-semibold mb-2">
            Welcome Back 👋
          </h2>
          <p className="opacity-90">
            Manage your website content from here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-white rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="p-6">

                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.icon}</div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>

                <p className="mt-4 text-gray-600">
                  Manage {item.name.toLowerCase()} section
                </p>

                <div className="mt-6 text-blue-700 font-semibold">
                  Open →
                </div>

              </div>
            </Link>
          ))}

          {/* LOGOUT CARD */}
          <div
            onClick={handleLogout}
            className="cursor-pointer bg-red-50 border border-red-300 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="p-6">

              <div className="flex items-center gap-4">
                <div className="text-4xl">🚪</div>

                <h3 className="text-xl font-semibold text-red-700">
                  Logout
                </h3>
              </div>

              <p className="mt-4 text-red-600">
                Sign out from admin panel
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;