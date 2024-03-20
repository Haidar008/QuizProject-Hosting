import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { PiNotebookThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logout from '../services/operations/logout';
import deleteAccount from '../services/operations/deleteAccount';
import { getAllQuizes } from '../services/operations/quiz';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";


const DashBoard = () => {

  const location = useLocation();
  const tab = location.pathname.split("/").at(-1);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [confirm,setConfirm]=useState(false);
  const [confirmText,setConfirmText]=useState(null);
  const [confirmpara,setConfirmpara]=useState(null);
  const [functionName,setFunctionName]=useState(null);
  const loading=useSelector((state)=>state.auth.authLoading);
  const userData=useSelector((state)=>state.auth.userData);
  const token=useSelector((state)=>state.auth.token);


  async function getQuiz(){
      const params={
        email:userData.email,
        token:token,
      }
      await getAllQuizes(params,navigate,dispatch);
  }

  //cancel confirm
  function handleCancel(){
    setConfirm(false);
    setConfirmText(null);
    setConfirmpara(null);
  }

  //confirm your choice
  async function handleConfirm(){
    if(functionName === "logout")
    {
        logout(navigate,dispatch);
        return;
    }

    if(functionName === "delete"){
        const body={
          email:userData.email,
          token:token,
        }
        await deleteAccount(body,navigate,dispatch);
        return;
    }
  }

  //logout
  function handleLogout(){
    setConfirmText("Are you sure?")
    setConfirmpara("You will be logged out of your account.");
    setConfirm(true);
    setFunctionName("logout");
  }

  function handleDelete(){
    setConfirmText("Would you like to delete account?");
    setConfirmpara("Deleting your account is permanent and will remove all the data associated with it.");
    setConfirm(true);
    setFunctionName("delete");
  }
  
  return (
    <div>
      <Navbar/>
      {
        loading?
        <Loader text="Please Wait"/>
        :
    <div>
    <div className='flex flex-col md:flex-row md:gap-7 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-[64px]'>
      <div className='h-auto md:h-[100vh] bg-black w-full md:w-[17%] fixed left-0 border-t border-white border-r'>
        <div className='text-gray-500 mt-14 text-[16px] font-normal flex flex-col gap-2'>
          <Link to="/"><button className='flex flex-row gap-2 items-center pl-7 md:pl-10'>
          <FaHome />
            Home
          </button>
          </Link>
          <button className={`${tab === "myProfile" && "text-yellow-500 bg-green-600"} flex flex-row gap-2 items-center pl-7 md:pl-10`} onClick={() => { navigate("/DashBoard/myProfile") }}>
            <CgProfile />
            My Profile
          </button>
          <button className={`${tab === "mySubmission" && "text-yellow-500 bg-green-600"} flex flex-row gap-2 items-center pl-7 md:pl-10`} onClick={getQuiz}>
            <PiNotebookThin />
            My Submissions
          </button>
          <button className={`${tab === "setting" && "text-yellow-500 bg-green-600"} flex flex-row gap-2 items-center pl-7 md:pl-10`} onClick={() => { navigate("/DashBoard/setting") }}>
            <IoSettingsOutline />
            Setting
          </button>
          <div className='bg-gray-500 h-[2px] w-[90%] md:w-[80%] mx-auto my-4'></div>
          <button className='flex flex-row gap-2 items-center pl-7 md:pl-10' onClick={handleLogout}>
            <IoLogOutOutline />
            Logout
          </button>
          <button className='flex flex-row gap-2 items-center pl-7 md:pl-10 pb-6' onClick={handleDelete}>
            <AiOutlineDelete />
            Delete Profile
          </button>
        </div>
      </div>
      <Outlet />
      {
        confirm&&
        <div className='bg-gray-600 fixed top-0 left-0 right-0 bottom-0 opacity-90 flex justify-center items-center z-30'>
            <div className='bg-black border border-white py-6 px-8 w-[90%] md:w-auto mx-auto opacity-100 z-50 rounded-md text-white'>
                <h2 className="text-3xl font-bold">{confirmText}</h2>
                <p className="text-lg  text-yellow-400">{confirmpara}</p>
                <div className="flex justify-center mt-6">
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleConfirm}>Confirm</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>Cancel</button>
                </div>
            </div> 
        </div>
      }
    </div>
  </div>
      }
    </div>
  );
}

export default DashBoard;
