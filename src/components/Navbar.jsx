import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('.navbar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeMenu);
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={`navbar shadow-lg sticky top-0 z-50 flex items-center justify-between px-6 h-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="text-2xl font-bold text-green-600">
        <Link to='/'>PMLS</Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-green-600 transition-all">Home</Link>
        <Link to="/about" className="hover:text-green-600 transition-all">About</Link>
        <Link to="/faq" className="hover:text-green-600 transition-all">Blogs</Link>
        <Link to="/service" className="hover:text-green-600 transition-all">Services</Link>
      </div>
      
      <div className="flex items-center">
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg 
            className="w-6 h-6" 
            fill={theme === 'dark' ? 'white' : 'gray'} 
            stroke={theme === 'dark' ? 'dark' : 'currentColor'} 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="focus:outline-none ml-2 p-2 rounded bg-gray-300 dark:bg-gray-700">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      
      <div className={`md:hidden absolute top-16 left-0 w-full transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className={`flex flex-col space-y-4 p-4 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
          <Link to="/" className="hover:text-green-600 transition-all">Home</Link>
          <Link to="/about" className="hover:text-green-600 transition-all">About</Link>
          <Link to="/faq" className="hover:text-green-600 transition-all">Blogs</Link>
          <Link to="/service" className="hover:text-green-600 transition-all">Services</Link>
          <Link to="/our-client" className="text-center py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all">Let's Talk</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
