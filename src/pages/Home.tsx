import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold">Welcome to Terraso Construction</h1>
          <p className="mt-4 text-lg lg:text-2xl">
            Building dreams with quality, innovation, and sustainability.
          </p>
          <Link
            to="/services"
            className="inline-block mt-6 px-6 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </header>

      {/* Additional Content */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Quality Construction</h3>
            <p className="mt-2 text-gray-600">
              We use only the best materials and techniques to ensure every project stands the test of time.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Expert Team</h3>
            <p className="mt-2 text-gray-600">
              Our team consists of highly skilled professionals dedicated to delivering excellence.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Sustainable Solutions</h3>
            <p className="mt-2 text-gray-600">
              We prioritize environmentally friendly practices in all our projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;