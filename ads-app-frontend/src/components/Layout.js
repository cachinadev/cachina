import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext"; // ✅ Import Auth Context
import {
  FaUserCircle,
  FaSignOutAlt,
  FaBriefcase,
  FaQuestionCircle,
  FaSortAlphaUp,
  FaBusAlt,
  FaBullhorn,
  FaHome,
  FaEye, // 👀 Import Eye Icon for views
} from "react-icons/fa";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user, setUser, logout } = useAuth(); // ✅ Get user state & logout function
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [siteViews, setSiteViews] = useState(0);
  const menuRef = useRef(null);

  const toggleNav = () => setNavOpen((prev) => !prev);

  // ✅ Fetch user details dynamically when localStorage changes
  const fetchUserDetails = useCallback(() => {
    try {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        setUser(JSON.parse(storedUser)); // ✅ Update UI immediately
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUser(null);
    }
  }, [setUser]);

  // ✅ Sync User Across Tabs & Handle Token Expiry
  useEffect(() => {
    fetchUserDetails();
    
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null); // ✅ Ensure UI updates when logged out
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [fetchUserDetails]);

  // ✅ Track Site Views (LocalStorage-based)
  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem("siteViews") || "0", 10);
    const newViews = currentViews + 1;
    localStorage.setItem("siteViews", newViews);
    setSiteViews(newViews);
  }, []);

  // ✅ Logout function (updates UI immediately)
  const handleLogout = useCallback(() => {
    logout(); // ✅ Clears token & user data
    setUser(null); // ✅ Ensures UI updates instantly
    setMenuOpen(false);
    router.push("/");
  }, [logout, router, setUser]);

  // ✅ Navigate to dashboard (Create Ad tab first)
  const navigateToDashboard = useCallback(() => {
    router.push("/dashboard");
    setMenuOpen(false);
  }, [router]);

  // ✅ Close dropdown when clicking outside
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
      {/* 🔵 Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md flex justify-between items-center px-6">
        
        {/* 🔹 Logo */}
        <div className="text-2xl font-bold cursor-pointer flex items-center gap-2" onClick={() => router.push("/")}>
          <FaHome /> Cachina.pe
        </div>

       {/* 🔹 Navigation Links */}
<nav className="hidden md:flex items-center gap-6 bg-blue-700 px-6 py-2 rounded-lg shadow-md">
  <button onClick={() => router.push("/negocios")} className="flex items-center gap-2 text-white text-md font-medium hover:text-green-300 transition-all duration-300">
    <FaBriefcase className="text-lg" />
    <span>Negocios</span>
  </button>

  <button onClick={() => router.push("/recursos")} className="flex items-center gap-2 text-white text-md font-medium hover:text-green-300 transition-all duration-300">
    <FaSortAlphaUp className="text-lg" />
    <span>Recursos</span>
  </button>

  <button onClick={() => router.push("/ayuda-contacto")} className="flex items-center gap-2 text-white text-md font-medium hover:text-green-300 transition-all duration-300">
    <FaQuestionCircle className="text-lg" />
    <span>Ayuda y Contacto</span>
  </button>

  <button onClick={() => router.push("/rutas")} className="flex items-center gap-2 text-white text-md font-medium hover:text-green-300 transition-all duration-300">
    <FaBusAlt className="text-lg" />
    <span>Rutas</span>
  </button>

  {/* 👀 Site Visits */}
  <div className="flex items-center gap-2 bg-gray-800 px-4 py-1.5 rounded-full shadow-lg text-white text-sm font-semibold">
    <FaEye className="text-green-300" />
    <span>Visitas: {siteViews}</span>
  </div>
</nav>

        {/* 🔹 User Menu */}
        <div className="relative" ref={menuRef}>
          {user ? (
            <div className="relative">
              {/* 👤 User Button */}
              <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <FaUserCircle className="text-xl" />
                {user.name || "Usuario"}
              </button>

              {/* 🔽 Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-md overflow-hidden z-50">
                  {/* 📌 Dashboard */}
                  <button
                    onClick={navigateToDashboard}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <FaBullhorn /> Anunciar
                  </button>

                  {/* 🚪 Logout */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition text-red-500"
                  >
                    <FaSignOutAlt /> Salir
                  </button>
                </div>
              )}
            </div>
          ) : (
            // ✅ Show "Anunciar" and "Registrarse" if user is not logged in
            <div className="flex gap-3">
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Anunciar
              </button>
              <button
                onClick={() => router.push("/register")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Registrarse
              </button>
            </div>
          )}
        </div>
      </header>

      {/* 🔹 Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      {/* 🔹 Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>CACHINA PE E.I.R.L. - RUC: 20613204106</p>
      </footer>
    </div>
  );
};

export default Layout;
