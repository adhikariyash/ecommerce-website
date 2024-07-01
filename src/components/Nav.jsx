import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg" ref={menuRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center">
          <div className="flex justify-between gap-10">
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center py-4 px-2 gap-2">
               <img className='h-20 backdrop-opacity-55 rounded-full border-2 border-yellow-400 bg-yellow-400 shadow-lg' src="/Untitled.png" alt="Logo" />
               <span className='font-bold text-2xl'>Buybay</span>
              </Link>
             
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 hover:text-red-500 transition duration-300" onClick={closeMenu}>Home</Link>
              <Link to="/product" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 hover:text-red-500 transition duration-300" onClick={closeMenu}>Products</Link>
              <Link to="/about" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 hover:text-red-500 transition duration-300" onClick={closeMenu}>About</Link>
              <Link to="/contact" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 hover:text-red-500 transition duration-300" onClick={closeMenu}>Contact</Link>
              <Link to="/cart" className="py-2 px-2 text-gray-500 border-2 border-transparent hover:border-red-500 hover:text-red-500 transition duration-300 bg-gray-200 rounded-full"  onClick={closeMenu}>🛒</Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? '' : 'hidden'}`}>
        <ul>
          <li className="active"><Link to="/" className="block text-sm px-2 py-4 text-white bg-red-500" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/product" className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300" onClick={closeMenu}>About</Link></li>

          <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/cart" className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300" onClick={closeMenu}>🛒</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
