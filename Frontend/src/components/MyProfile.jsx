import React from 'react';
import { useSelector } from "react-redux";
import { LiaEdit } from "react-icons/lia";
import {useNavigate} from "react-router-dom";
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const MyProfile = () => {
  const navigate=useNavigate()
  const userData = useSelector((state) => state.auth.userData);
  
  if(userData.DOB){
    const array=userData.DOB.split("T").at(0).split("-");
    var DOB=`${array[2]} ${months[array[1]-1]},${array[0]}`
  }
  console.log(userData);
  return (
    <div className='min-h-[100vh] w-[100%] md:w-[80%] md:px-0 px-4 flex md:ml-[20%] gap-8 flex-col mt-[360px] md:mt-[30px] mr-[20px] font-sans'>
      <div className='mb-[20px] text-white text-[30px] font-bold text-center'>My Profile</div>
      <div className='bg-black flex flex-row items-center gap-10 py-6 px-6 border border-white rounded-md w-full'>
        <img src={userData.profilePicture} width={100} className='rounded-full aspect-square' alt="User profile"></img>
        <div className='flex flex-col md:flex-row  justify-between md:items-center gap-2'>
          <div className='text-white font-semibold'>
            <p className='text-2xl'>{userData.firstName} {userData.lastName}</p>
            <p>{userData.email}</p>
          </div>
          <button className='text-black bg-yellow-400 flex gap-2 items-center rounded-lg font-semibold text-lg h-[50px] w-[110px] justify-center'
          onClick={()=>{navigate("/Dashboard/setting")}}
          >
            Edit
            <LiaEdit />
          </button>
        </div>
      </div>

      <div className='bg-black rounded-lg border border-white text-white py-4 px-6 flex flex-col  gap-4'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>About</p>
            <button className='text-black bg-yellow-400 flex gap-2 items-center rounded-lg font-semibold text-lg h-[50px] w-[110px] justify-center'
             onClick={()=>{navigate("/Dashboard/setting")}}
             >
            Edit
            <LiaEdit />
          </button>
          </div>
          <p className='text-gray-500'>{userData.about?userData.about:"Write Something about yourself"}</p>
      </div>

      <div className='bg-black flex flex-col text-white gap-[50px] py-10 px-6 border border-white rounded-md mb-[80px]'>
        <div className='flex justify-between items-center'>
          <p className='mb-[20px] text-white text-2xl font-bold '>Personel Details</p>
          <button className='text-black bg-yellow-400 flex gap-2 items-center rounded-lg font-semibold text-lg h-[50px] w-[110px] justify-center'
             onClick={()=>{navigate("/Dashboard/setting")}}
             >
            Edit
            <LiaEdit />
          </button>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className='flex gap-1'>
            <p className='text-green-500 font-semibold'>First Name:</p>
            <p>{userData.firstName}</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-green-500 font-semibold'>Last Name:</p>
            <p>{userData.lastName}</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-green-500 font-semibold'>Email Address:</p>
            <p>{userData.email}</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-green-500 font-semibold'>Contact Number:</p>
            <p>+91 {userData.phoneNumber}</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-green-500 font-semibold'>Gender:</p>
            <p>{userData.gender?userData.gender:"Add Gender"}</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-green-500 font-semibold'>Date of Birth:</p>
            <p>{userData.DOB?DOB:"Add Date of Birth"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
