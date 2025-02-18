import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaBriefcase,
  FaQuestionCircle,
  FaSortAlphaUp,
  FaBusAlt,
  FaBullhorn,
} from "react-icons/fa";

const Layout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fetch user details from localStorage only when needed
  const fetchUserDetails = useCallback(() => {
    try {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      setUser(token && storedUser ? JSON.parse(storedUser) : null);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUser(null);
    }
  }, []);

  // Fetch user details on initial load
  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  // Listen for login/logout updates across tabs
  useEffect(() => {
    const handleStorageChange = () => fetchUserDetails();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [fetchUserDetails]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    router.push("/");
  };

  // Redirect to Dashboard's Create Ad tab
  const navigateToDashboard = () => {
    router.push("/dashboard");
    setMenuOpen(false);
  };

  // Close dropdown menu when clicking outside
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
        <div className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>
          Cachina.pe
        </div>

        {/* 🔹 Navigation Links */}
        <nav className="flex gap-6">
          <button onClick={() => router.push("/negocios")} className="text-white text-base font-medium hover:underline flex items-center gap-2">
            <FaBriefcase /> Negocios
          </button>
          <button onClick={() => router.push("/recursos")} className="text-white text-base font-medium hover:underline flex items-center gap-2">
            <FaSortAlphaUp /> Recursos
          </button>
          <button onClick={() => router.push("/ayuda-contacto")} className="text-white text-base font-medium hover:underline flex items-center gap-2">
            <FaQuestionCircle /> Ayuda y Contacto
          </button>
          <button onClick={() => router.push("/rutas")} className="text-white text-base font-medium hover:underline flex items-center gap-2">
            <FaBusAlt /> Rutas
          </button>
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
                {user.name}
              </button> 

              {/* 🔽 Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-md overflow-hidden z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.uniqueId}</p>
                  </div>

                  {/* 📌 Dashboard (Redirects to Create Ad first) */}
                  <button onClick={navigateToDashboard} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition">
                    <FaBullhorn /> Anunciar
                  </button>

                  {/* 🚪 Logout */}
                  <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition text-red-500">
                    <FaSignOutAlt /> Salir
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Login & Register Buttons
            <div className="flex gap-3">
              <button onClick={() => router.push("/login")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Anunciar
              </button>
              <button onClick={() => router.push("/register")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
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

          {/* 📞 Contact Details */}
          <div className="text-gray-400 md:w-1/3">
            <p>📞 Teléfono: <a href="tel:+51986035075" className="hover:text-white">+51 986 035 075</a></p>
            <p>📧 Email: <a href="mailto:cachinapuntope@gmail.com" className="hover:text-white">cachinapuntope@gmail.com</a></p>
            <p className="mt-2">CACHINA PE E.I.R.L. <br /> RUC: 20613204106</p>
          </div>
        </div>

        {/* 🔹 Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} CACHINA PE - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
