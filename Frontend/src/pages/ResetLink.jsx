import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import sendResetLink from '../services/operations/SendResetLink';
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux"
import Navbar from '../components/Navbar';

function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const loading=useSelector((state)=>state.auth.authLoading);
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const body=new FormData();
  body.append("email",email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await sendResetLink(email,body,dispatch);
    setEmail('');
  };

  return (
    <div>
    <Navbar/>
        <div>
      {
        loading?
        <Loader text="Sending Reset Link"/>
        :
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg md:max-w-md w-[80%]">
        <h2 className="text-3xl font-bold mb-4 ">Reset Your Password</h2>
        <p className="text-gray-600 mb-6 text-[16px] font-medium">
          Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:<sup className='text-red-500 text-[15px]'>*</sup></label>
            <input
              type="email"
              id="email"
              className="mt-1 border-2 border-black h-[40px] focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md px-2"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Link
          </button>
        </form>
        <div className="mt-8 text-sm">
          <button onClick={()=>{navigate(-1)}} className='flex gap-1 items-center text-blue-600 text-[16px]'>
            <GoArrowLeft />
            <div className=" ">
                Back To Login
            </div>
          </button>
        </div>
      </div>
    </div>
      }
    </div>
  </div>
  );
}

export default ResetPasswordForm;
