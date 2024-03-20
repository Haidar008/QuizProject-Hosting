import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from  "react-redux";
import {setSignupData} from "../slices/authSlice";
import {toast} from 'react-hot-toast';
import sendOTP from '../services/operations/sendOtp';
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';



const SignUpPage = () => {

  const loading=useSelector((state)=>state.auth.authLoading);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });


  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setshowConfirmPassword]=useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    dispatch(setSignupData(formData));

    if(password.length < 8){
      toast.error("Password cannot be less than 8 character");
      return;
    }

    if(password !== confirmPassword){
      toast.error("Password and ConfirmPassword must be same");
      return;
    }

    await sendOTP(email,navigate,dispatch);


    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;

  return (
    <div>
    <Navbar/>
        <div>
      {
        loading?
        <Loader text="Sending OTP"/>
        :
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center pt-16 pb-12 sm:px-6 lg:px-8 ">
      <div className="mt-8 mx-auto w-[90%] max-w-[1000px]   rounded-md flex lg:flex-row flex-col-reverse gap-8">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10 w-full rounded-md">
            <h2 className="text-center text-3xl font-extrabold text-black mb-3 mt-4">Sign up</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First Name <sup className="text-red-500">*</sup>
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last Name <sup className="text-red-500">*</sup>
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address <sup className="text-red-500">*</sup>
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number <sup className="text-red-500">*</sup>
              </label>
              <input
                id="phone-number"
                name="phoneNumber"
                type="tel"
                pattern='[0-9]{10}'
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <sup className="text-red-500">*</sup>
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
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
            <div className="relative">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password <sup className="text-red-500">*</sup>
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                className="mt-1 p-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-1 mt-3 mr-3 flex items-center"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible className="h-6 w-6 text-gray-400" /> : <AiOutlineEye className="h-6 w-6 text-gray-400" />}
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
            <div className='text-center'>Already a User?<Link to="/login" className='text-blue-700 font-bold'>Login</Link></div>
          </form>
        </div>
        <div className='h-[100%] flex justify-center items-center w-full '>
                <img src="https://res.cloudinary.com/darjclpew/image/upload/v1710718669/Quiz/kyyfx2enqryosshbmc2d.webp" className='rounded-md' loading='lazy'></img>
        </div>
      </div>
    </div>
      }
    </div>
  </div>
  );
};

export default SignUpPage;
