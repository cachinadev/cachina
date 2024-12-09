import React from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login');
  };

  const navigateToRegister = () => {
    router.push('/register');
  };

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={navigateToHome}
          >
            Cachina.pe
          </div>
          <div className="flex gap-4">
            <button
              onClick={navigateToLogin}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
            >
              Login
            </button>
            <button
              onClick={navigateToRegister}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
            >
              Register
            </button>
          </div>
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
