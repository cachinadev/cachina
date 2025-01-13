import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Function to fetch user details from localStorage
  const fetchUserDetails = () => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  // Fetch user details on initial load
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/"); // Redirect to landing page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md flex justify-between items-center px-6">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Cachina.pe
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <div>
                {user.name} ({user.uniqueId})
              </div>
              {router.pathname !== "/dashboard" && ( // Hide "Dashboard" button on the dashboard page
                <button
                  onClick={() => router.push("/dashboard")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Dashboard
                </button>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/register")}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ml-2"
              >
                Register
              </button>
            </>
          )}
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © CACHINA PE 2024 All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
