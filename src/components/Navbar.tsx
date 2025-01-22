import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 z-50 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Ecell
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavLinks navigate={navigate} />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavLinks navigate={navigate} />
        </div>
      )}
    </nav>
  );
};

const NavLinks: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => (
  <ul className="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
    <li className="text-white">
      <button onClick={() => navigate('/grid')} className="block py-2 px-4 hover:bg-gray-700 rounded">Grid</button>
    </li>
    <li className="text-white">
      <button onClick={() => navigate('/profile')} className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</button>
    </li>
    <li className="text-white">
      <a href="https://www.linkedin.com/ayush-tiwari-84a823281" className="block py-2 px-4 hover:bg-gray-700 rounded">LinkedIn</a>
    </li>
  </ul>
);

export default Navbar;
