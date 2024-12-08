import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md w-full">
        <div className="w-full flex items-center justify-between p-4">
          <div className="text-2xl font-bold text-white">TerrasoCompany</div>
          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
          {/* Links */}
          <ul
            className={`lg:flex lg:items-center lg:gap-6 lg:static absolute top-16 right-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-lg ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' },
            ].map((item, index) => (
              <li key={index} className="lg:ml-4">
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="block px-4 py-2 lg:py-0 text-gray-700 lg:text-white hover:text-yellow-300 transition lg:hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
        {/* Add dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;