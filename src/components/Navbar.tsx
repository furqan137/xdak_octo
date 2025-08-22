import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'; // <-- Import the logo

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'Playground', path: '/playground' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-6 relative z-50 bg-background">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo} // <-- Use the imported logo
          alt="Logo"
          className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-sm font-medium transition-colors duration-200 hover:text-accent-light ${
              location.pathname === item.path
                ? 'text-text-primary'
                : 'text-text-secondary'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <Link
        to="/contact"
        className="bg-secondary border border-gray-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:border-accent transition-all duration-200"
      >
        LET'S TALK
      </Link>
    </nav>
  );
};

export default Navbar;
