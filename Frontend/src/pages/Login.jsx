import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import loginservice from '../services/operations/loginService';
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const token=useSelector((state)=>state.auth.token);
  const loading=useSelector((state)=>state.auth.authLoading);

  console.log(token);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const body=new FormData();
  body.append("email",formData.email);
  body.append("password",formData.password);

  const [showPassword,setShowPassword]=useState(false);
  const handleSubmit=async(event)=>{
    event.preventDefault();
    
    await loginservice(formData,navigate,dispatch);

    console.log(token);
    setFormData({
      email:"",
      password:"",
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { email, password } = formData;

  return (
    <div>
    <Navbar/>
        <div>
      {
      loading?
      <Loader text="Please Wait"/>
      :
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center pt-36 pb-5 lg:pt-16 sm:px-8 lg:px-8">
      <div className="mx-auto  w-[90%] max-w-[1000px]  flex lg:flex-row flex-col-reverse gap-8">
        <div className="bg-white py-8 shadow sm:rounded-lg sm:px-10 px-4 w-full rounded-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address:<sup className="text-red-500">*</sup>
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password<sup className="text-red-500">*</sup>
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-1 mt-3 mr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEyeInvisible className="h-6 w-6 text-gray-400" /> : <AiOutlineEye className="h-6 w-6 text-gray-400" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/passwordResetLink" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
            <div className='text-center'>New User?<Link to="/signUp" className='text-blue-700 font-bold'>Register</Link></div>
          </form>
        </div>
        <div className='h-[100%] flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/darjclpew/image/upload/v1710718922/Quiz/vjnnuszdwtbnybl5avj3.webp" className='rounded-md' loading='lazy'></img>
        </div>
      </div>
    </div>
    }
    </div>
    </div>
  );
};

export default LoginPage;
