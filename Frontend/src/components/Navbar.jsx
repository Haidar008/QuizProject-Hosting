import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";



const Navbar = () => {
  const token=useSelector((state)=>state.auth.token);
  const userData=useSelector((state)=>state.auth.userData);
  console.log(userData);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link to={"/"}><img className="h-8" src="https://res.cloudinary.com/darjclpew/image/upload/v1710719532/Quiz/pueuts3hywmiiezepvpm.jpg" alt="Logo" /></Link>
          </div>
          <div className="flex flex-row -ml-10">
            <div className="flex items-center gap-2">
              {/* About */}
              <Link to={"/about"}><p  className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</p></Link>
              {/* Contact Us */}
              <Link to={"/contactUs"}><p className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</p></Link>

              
              {
                !token&&
                <Link to={"/login"}><p className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-400">Login</p></Link>
              }
              {
                !token&&
                <Link to={"/signUp"}><p className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-400">Sign Up</p></Link>
              }
              
              {
                token&&
                <Link to="/DashBoard/myProfile" className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-400"><p>DashBoard</p></Link>
              }
              
              {
                token&&
                <div className='cursor-pointer'>
                    <img src={userData.profilePicture} width={35} className='rounded-full aspect-square'></img>
                </div>
              }
            </div>
          </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
