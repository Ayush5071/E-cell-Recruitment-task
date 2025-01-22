import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="bg-[#DC3B7A] overflow-hidden text-white min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="bg-gradient-to-r mt-32 from-[#3C5183] via-[#7166A0] to-[#52468C] p-8 rounded-2xl h-auto w-full max-w-md md:h-auto shadow-lg flex flex-col md:flex-row items-center md:items-start md:space-x-8 md:w-full md:max-w-4xl">
        <img
          src="/Profile/ayush.webp"
          alt="Profile"
          className="w-48 h-64 md:w-64 md:h-80 rounded-lg border-4 border-white mb-4 md:mb-0"
        />
        <div className="flex flex-col items-center md:items-start">
        <div className="flex gap-2 mt-4 md:mt-0">
          <div className="w-16 h-16 border-4 border-white rounded-full mb-4"></div>
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 borde bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            <div className="absolute inset-1 mt-[3px] bg-[#6B649D]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          </div>
          <div className="w-16 h-16 border-4 border-white"></div>
        </div>
          <h1 className="md:text-3xl text-2xl font-bold mb-4">Ayush Tiwari</h1>
          <p className="md:text-xl text-md  mb-2">Registration Number: 20234046</p>
          <p className="md:text-xl text-md mb-2">Branch: ECE</p>
          <p className="md:text-xl text-md mb-2">Year: 2nd Year</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/ayush-tiwari-84a823281" target='_blank' className="text-white hover:text-gray-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Ayush5071" target='_blank' className="text-white hover:text-gray-300">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

      </div>
      <div className="absolute -bottom-3 -left-4 w-36 h-32 bg-black opacity-35 blur-3xl"></div>
      <div className="absolute -bottom-8 -right-7 w-60 h-32 bg-black opacity-35 blur-3xl"></div>
    </div>
  );
};

export default Profile;
