import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-800 p-4 flex">
      <div className="flex space-x-6 ml-10">
        <Link to="/" className="text-white text-2xl font-semibold hover:text-gray-300 hover:underline">Home</Link>
        <Link to="/about" className="text-white text-2xl font-semibold hover:text-gray-300 hover:underline">About</Link>
        <Link to="/contact" className="text-white text-2xl font-semibold hover:text-gray-300 hover:underline">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
