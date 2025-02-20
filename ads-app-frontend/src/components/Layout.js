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
  const [siteViews, setSiteViews] = useState(0); // 🔥 New State for Views
  const menuRef = useRef(null);

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

  // ✅ Fetch user details on mount & sync across tabs
  useEffect(() => {
    fetchUserDetails();
    window.addEventListener("storage", fetchUserDetails);
    return () => window.removeEventListener("storage", fetchUserDetails);
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
    logout(); // ✅ Use AuthContext logout function
    setMenuOpen(false);
    router.push("/");
  }, [logout, router]);

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
<nav className="hidden md:flex items-center gap-8 bg-blue-700 px-6 py-2 rounded-lg shadow-md">
  <button
    onClick={() => router.push("/negocios")}
    className="text-white text-lg font-medium hover:text-green-300 flex items-center gap-2 transition-all duration-300"
  >
    <FaBriefcase className="text-xl" /> Negocios
  </button>

  <button
    onClick={() => router.push("/recursos")}
    className="text-white text-lg font-medium hover:text-green-300 flex items-center gap-2 transition-all duration-300"
  >
    <FaSortAlphaUp className="text-xl" /> Recursos
  </button>

  <button
    onClick={() => router.push("/ayuda-contacto")}
    className="text-white text-lg font-medium hover:text-green-300 flex items-center gap-2 transition-all duration-300"
  >
    <FaQuestionCircle className="text-xl" /> Ayuda y Contacto
  </button>

  <button
    onClick={() => router.push("/rutas")}
    className="text-white text-lg font-medium hover:text-green-300 flex items-center gap-2 transition-all duration-300"
  >
    <FaBusAlt className="text-xl" /> Rutas
  </button>

  {/* 👀 Visitas al sitio (Styled as a badge) */}
  <div className="flex items-center bg-gray-800 px-4 py-1.5 rounded-full shadow-lg text-white text-sm font-semibold">
    <FaEye className="text-green-300 mr-2" /> Visitas: {siteViews}
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
                  {/* 📌 Dashboard (Redirects to Create Ad first) */}
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
            // Login & Register Buttons
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
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
          {/* 🌐 Navigation Links */}
          <div className="flex flex-col space-y-2 md:w-1/3">
            <a href="/nosotros" className="text-gray-400 hover:text-white">Nosotros</a>
            <a href="/politica-de-privacidad" className="text-gray-400 hover:text-white">Política de Privacidad</a>
            <a href="/ayuda-contacto" className="text-gray-400 hover:text-white">Ayuda y Contacto</a>
          </div>

          <div className="flex flex-col space-y-2 md:w-1/3">
            <a href="/terminos-condiciones" className="text-gray-400 hover:text-white">Términos y Condiciones</a>
            <a href="/trabaja-con-nosotros" className="text-gray-400 hover:text-white">Trabaja con Nosotros</a>
            <a href="/libro-reclamaciones" className="text-gray-400 hover:text-white">Libro de Reclamaciones 📜</a>
          </div>

          {/* 📞 Contact Details & Views */}
          <div className="text-gray-400 md:w-1/3">
            <p>📞 Teléfono: <a href="tel:+51986035075" className="hover:text-white">+51 986 035 075</a></p>
            <p>📧 Email: <a href="mailto:cachinapuntope@gmail.com" className="hover:text-white">cachinapuntope@gmail.com</a></p>
            <p className="mt-2">CACHINA PE E.I.R.L. <br /> RUC: 20613204106</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
