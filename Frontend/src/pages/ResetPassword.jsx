import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import changePassword from '../services/operations/changePassword';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast"
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const ChangePasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location=useLocation();
  const token=location.pathname.split("/").at(-1);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const loading=useSelector((state)=>state.auth.authLoading);

  console.log(token);

  const body=new FormData();
  body.append("newPassword",newPassword);
  body.append("confirmNewPassword",confirmNewPassword);
  body.append("token",token);
  

  const handleChangePassword = async(e) => {
    e.preventDefault();
    
    if(newPassword !== confirmNewPassword){
      toast.error("Password must be Same");
      return;
    }

    if(newPassword.length<8){
      toast.error("Password cannot be less than 8 characters");
      return;
    }

    await changePassword(body,navigate,dispatch);

    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div>
      <Navbar/>
        <div>
      {
        loading?
        <Loader text="Please Wait"/>
        :
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Change Password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleChangePassword}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-5">
            <div className="relative">
              <label htmlFor="new-password" className="text-gray-500 font-semibold">
                New Password
                <sup className='text-black'>*</sup>
              </label>
                <input
                  id="new-password"
                  name="new-password"
                  type={showNewPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="h-[50px] appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute top-10 right-0 pr-3 flex items-center z-20"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {!showNewPassword ? (
                    <AiOutlineEye className="h-5 w-5 text-gray-500" />
                  ) : (
                    <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                  )}
                </button>
            </div>
            <div className="relative">
              <label htmlFor="confirm-new-password" className="text-gray-500 font-semibold">
                Confirm New Password
                <sup className='text-black'>*</sup>
              </label>
                <input
                  id="confirm-new-password"
                  name="confirm-new-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="h-[50px] appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute top-10 right-0 pr-3 flex items-center z-20"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {!showConfirmPassword ? (
                    <AiOutlineEye className="h-5 w-5 text-gray-500" />
                  ) : (
                    <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                  )}
                </button>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
      }
  </div>
</div>
  );
};

export default ChangePasswordPage;
