import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'; 

const MainMenu: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false); // State to manage drawer

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src="/images/Layer_1.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Hamburger Menu, Logo, and Search Icon for Small Screens */}
        <div className="md:hidden flex items-center space-x-4">
          <FiSearch className="text-[#FFBA00] text-2xl cursor-pointer" />
          <button onClick={toggleMenu} className="text-[#3C251F] text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Items Section for Larger Screens */}
        <div className="hidden md:flex items-center space-x-8 text-[#3C251F]">
          <Link
            to="/"
            className={`hover:text-[#FFBA00] ${currentPath === '/' ? 'text-[#FFBA00] border-b-2 border-[#FFBA00]' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#FFBA00] ${currentPath === '/about' ? 'text-[#FFBA00] border-b-2 border-[#FFBA00]' : ''}`}
          >
            About Bancassurance
          </Link>
          <Link
            to="/"
            className={`hover:text-[#FFBA00] ${currentPath === '/personal-solutions' ? 'text-[#FFBA00] border-b-2 border-[#FFBA00]' : ''}`}
          >
            Personal Solutions
          </Link>
          <Link
            to="/"
            className={`hover:text-[#FFBA00] ${currentPath === '/corporate-solutions' ? 'text-[#FFBA00] border-b-2 border-[#FFBA00]' : ''}`}
          >
            Corporate Solutions
          </Link>
          <FiSearch className="text-[#FFBA00] text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Drawer Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#FFBA00]">
          <div className="flex flex-col space-y-4 py-4 px-4 text-[#3C251F]">
            <Link
              to="/"
              className={`hover:text-[#FFBA00] ${currentPath === '/' ? 'text-[#FFBA00] ' : ''}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#FFBA00] ${currentPath === '/about' ? 'text-[#FFBA00]' : ''}`}
              onClick={toggleMenu}
            >
              About Bancassurance
            </Link>
            <Link
              to="/"
              className={`hover:text-[#FFBA00] ${currentPath === '/personal-solutions' ? 'text-[#FFBA00] ' : ''}`}
              onClick={toggleMenu}
            >
              Personal Solutions
            </Link>
            <Link
              to="/"
              className={`hover:text-[#FFBA00] ${currentPath === '/corporate-solutions' ? 'text-[#FFBA00] ' : ''}`}
              onClick={toggleMenu}
            >
              Corporate Solutions
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
