// PageNotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-900 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 font-semibold">Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
