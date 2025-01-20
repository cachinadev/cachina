import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { FaUserCircle, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

const Layout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to fetch user details from localStorage
  const fetchUserDetails = () => {
    try {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user details", error);
      setUser(null);
    }
  };

  // Fetch user details on initial load
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Listen for changes in localStorage to detect login/logout from other tabs or pages
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "token" || event.key === "user") {
        fetchUserDetails();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/"); // Redirect to landing page
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md flex justify-between items-center px-6">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Cachina.pe
        </div>
        <div className="relative" ref={menuRef}>
          {user ? (
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <FaUserCircle className="text-xl" />
                {user.name}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-md overflow-hidden z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.uniqueId}</p>
                  </div>
                  {router.pathname !== "/dashboard" && (
                    <button
                      onClick={() => router.push("/dashboard")}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                    >
                      <FaTachometerAlt />
                      Dashboard
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition text-red-500"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/register")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        © CACHINA PE {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
