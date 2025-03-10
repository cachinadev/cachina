import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext"; // ✅ Import Auth Context
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image component

import {
  FaUserCircle,
  FaSignOutAlt,
  FaBriefcase,
  FaQuestionCircle,
  FaBullhorn,
  FaEye, // 👀 Import Eye Icon for views
} from "react-icons/fa";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user, setUser, logout } = useAuth(); // ✅ Get user state & logout function
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteViews, setSiteViews] = useState(0);
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
  }, [fetchUserDetails, setUser]);

  // ✅ Track Site Views (LocalStorage-based)
  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem("siteViews") || "0", 10);
    const newViews = currentViews + 1;
    localStorage.setItem("siteViews", newViews);
    setSiteViews(newViews);
  }, []);

  // ✅ Logout function (updates UI immediately)
  const handleLogout = useCallback(() => {
    logout();
    setUser(null);
    setMenuOpen(false);
    router.push("/");
  }, [logout, router, setUser]);

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
      <header className="bg-gray-900 text-white py-4 shadow-md flex justify-between items-center px-6">
        {/* 🔹 Logo */}
        <div
          className="text-2xl font-bold cursor-pointer flex items-center gap-2 text-white text-md font-medium hover:text-red-500 transition-all duration-300"
          onClick={() => router.push("/")}
        >
          <Image src="/images/cachina_logo.png" alt="Cachina Logo" width={50} height={50} />
          Cachina.pe
        </div>

        {/* 🔹 Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 bg-gray-900 px-6 py-2 rounded-lg shadow-md">
          <button
            onClick={() => router.push("/ayuda-contacto")}
            className="flex items-center gap-2 text-white text-md font-medium hover:text-red-400 transition-all duration-300"
          >
            <FaQuestionCircle className="text-lg" />
            <span>Ayuda y Contacto</span>
          </button>

          <button
            onClick={() => router.push("/Empresas")}
            className="flex items-center gap-2 text-white text-md font-medium hover:text-red-400 transition-all duration-300"
          >
            <FaBriefcase className="text-lg" />
            <span>Empresas</span>
          </button>

          {/* 👀 Site Visits */}
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-1.5 rounded-full shadow-lg text-white text-sm font-semibold">
            <FaEye className="text-red-500" />
            <span>Visitas: {siteViews}</span>
          </div>
        </nav>

        {/* 🔹 User Menu */}
        <div className="relative" ref={menuRef}>
          {user ? (
            <div className="relative">
              {/* 👤 User Button */}
              <button
                className="flex items-center gap-2 bg-gray-450 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <FaUserCircle className="text-xl" />
                {user.name || "Usuario"}
              </button>

              {/* 🔽 Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-md overflow-hidden z-50">
                  {/* 📌 Dashboard */}
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
                  >
                    <FaBullhorn /> Anunciar
                  </button>

                  {/* 🚪 Logout */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition text-red-500"
                  >
                    <FaSignOutAlt /> Salir
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              {/* 🌟 Publicitar Button */}
              <button
                onClick={() => router.push("/publicitar")}
                className="bg-white-500 text-white-900 px-5 py-2 rounded-md font-bold hover:bg-red-600 transition-all shadow-md flex items-center gap-2"
              >
                📢 Publicitar
              </button>
            </div>
          )}
        </div>
      </header>

      {/* 🔹 Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      {/* 🔹 Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 items-center space-y-6 md:space-y-0">
          {/* 🌐 Navigation Links */}
          <div className="flex flex-col space-y-2 md:w-1/3 text-center md:text-left">
            <Link href="/nosotros" className="text-gray-400 hover:text-white">
              Nosotros
            </Link>
            <Link href="/politica-de-privacidad" className="text-gray-400 hover:text-white">
              Política de Privacidad
            </Link>
            <Link href="/ayuda-contacto" className="text-gray-400 hover:text-white">
              Ayuda y Contacto
            </Link>
            <Link href="/terminos-condiciones" className="text-gray-400 hover:text-white">
              Términos y Condiciones
            </Link>
            <Link href="/trabaja-con-nosotros" className="text-gray-400 hover:text-white">
              Trabaja con Nosotros
            </Link>
          </div>

  {/* 📞 Contact Details */}
  <div className="text-gray-400 md:w-1/3 text-center md:text-left">
      <p>📞 Teléfono: <a href="tel:+51986035075" className="hover:text-white">+51 985 979 119</a></p>
      <p>📧 Email: <a href="mailto:cachinapuntope@gmail.com" className="hover:text-white">cachinapuntope@gmail.com</a></p>
      <p className="mt-2">CACHINA PE E.I.R.L. <br /> RUC: 20613204106</p>
    </div>

           {/* 📕 Libro de Reclamaciones - Positioned to Right */}
           <Link href="/libro-reclamaciones" className="text-gray-400 hover:text-white flex flex-col items-center md:items-end">
  <span className="mb-2">Libro de Reclamaciones</span>
  <Image 
    src="/images/libro-de-reclamaciones.jpg"
    alt="Libro de Reclamaciones"
    width={140}
    height={140}
    className="rounded-lg shadow-lg cursor-pointer"
  />
</Link>
  </div>
        

        <p className="text-gray-500 text-sm text-center mt-4">
          © {new Date().getFullYear()} CACHINA PE - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
