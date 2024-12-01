import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 text-xl font-bold">Ads App</div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 Ads App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

