import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <div className="relative max-w-xl mx-4 md:mx-auto md:py-8 py-6 md:my-6 my-6">
      <input
        type="text"
        placeholder="I am looking for..."
        className="w-full py-4 pl-10 pr-16 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none"
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#30120B] p-2 rounded-md md:right-3 md:p-3">
        <FaSearch className="text-yellow-500" size={18} />
      </div>
    </div>
  );
};

export default SearchInput;
