import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const MainMenu: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-white py-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src="/images/Layer_1.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menu Items Section */}
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
            to="/personal-solutions"
            className={`hover:text-[#FFBA00] ${currentPath === '/personal-solutions' ? 'text-[#FFBA00] border-b-2 border-[#FFBA00]' : ''}`}
          >
            Personal Solutions
          </Link>
          <Link
            to="/corporate-solutions"
            className={`hover:text-[#FFBA00] ${currentPath === '/corporate-solutions' ? 'text-[#FFBA00] border-b-2 border-[#FFBA00]' : ''}`}
          >
            Corporate Solutions
          </Link>
          <FiSearch className="text-[#FFBA00] text-2xl cursor-pointer" />
        </div>

        {/* Search Icon Section */}
       
        
        
      </div>
    </div>
  );
};

export default MainMenu;
