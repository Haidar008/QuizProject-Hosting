import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-auto min-h-[150px] flex lg:flex-col lg:justify-center w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white">© 2024 QuizApp. All rights reserved.</p>
            <div className="flex space-x-4 mt-4">
              <Link to={"/privacy-policy"} className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link to={"/terms-of-service"} className="text-gray-300 hover:text-white">
                Terms of Service
              </Link>
              <Link to={"/contactus"} className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <p className='text-white font-bold'>Follow us on:</p>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook className='text-[30px] text-blue-400 hover:text-blue-600 transition-all'/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter className='text-[30px] text-blue-500 hover:text-blue-700 transition-all'/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram className='text-[30px] text-pink-500 hover:text-pink-700 transition-all'/>
            </a>
            <p className="text-gray-300 hover:text-white">Made with <span className="text-red-500">❤️</span> by Md Haidar Parwez</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
