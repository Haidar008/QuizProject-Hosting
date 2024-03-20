import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { BsUpload } from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast"
import {updatePassword,changeProfilePicture,updateProfile} from '../services/operations/updatePassword';

const Setting = () => {

  const userData=useSelector((state)=>state.auth.userData);
  const token=useSelector((state)=>state.auth.token);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [formData,setFormData]=useState({
    newPassword:"",
    currentPassword:"",
    firstName:(userData.firstName?userData.firstName:""),
    lastName:(userData.lastName?userData.lastName:""),
    DOB:(userData.DOB?userData.DOB:""),
    gender:(userData.gender?userData.gender:""),
    phoneNumber:(userData.phoneNumber?userData.phoneNumber:""),
    about:(userData.about?userData.about:""),
  })

  const [picture,setPicture]=useState("");
  const[text,setText]=useState("Upload");
  

  function handlePicture(event){
    setPicture(event.target.files[0]);
  }

  function handleChnage(event){
      setFormData({
        ...formData,
        [event.target.name]:event.target.value
  })
  }

  //update Picture
  async function updatePicture(){
    console.log(picture);
    if(picture === ""){
      toast.error("No File Chosen");
      return;
    }
    setText("Uploading")
    const body=new FormData();
    body.append("picture",picture);
    body.append("token",token);

    await changeProfilePicture(body,navigate,dispatch);
  }

  //change password 
  async function changePassword(){
    if(formData.newPassword.length <8){
      toast.error("Password cannot be less than 8 characters");
      return;
    }
    const body={
      email:userData.email,
      currentPassword:formData.currentPassword,
      newPassword:formData.newPassword,
    }
    
    console.log(body);

    await updatePassword(body,navigate,dispatch);
  }

   //Update Profile 
  async function updateProfileDetails(){
      const body={
        email:userData.email,
        firstName:formData.firstName,
        lastName:formData.lastName,
        DOB:formData.DOB,
        gender:formData.gender,
        phoneNumber:formData.phoneNumber,
        about:formData.about,
      }

      console.log(body);

      await updateProfile(body,navigate,dispatch);
  }

  return (
    <div className='md:ml-[270px] ml-[5%] flex flex-col gap-10 mt-[350px] md:mt-[30px] w-[90%] md:w-[90%] mr-[5%] mb-8'>
        <p className='text-center text-white font-semibold text-3xl'>Edit Profile</p>

        <div className='bg-black border border-white flex gap-4 text-white rounded-xl px-8 py-4 items-center '>
              <div> 
                  <img src={userData.profilePicture} width={90} className='rounded-full aspect-square'></img>
              </div>
              <div className='flex flex-col gap-2'>
                  <p className='font-semibold'>Change Profile Picture</p>
                  <div className=" flex gap-2 items-center">
                      <input type='file' id='picture' name='picture' onChange={handlePicture} className='w-[100px]  rounded-md'></input>
                      <div>
                        <button disabled={picture === null} className='flex bg-yellow-400 px-2 py-1 gap-2 items-center text-black font-bold rounded-lg' onClick={updatePicture}>
                          {
                            picture === ""?
                            <p>No File Chosen</p>
                            :
                            <div className='flex gap-2 items-center'>
                              {text}
                              {text==="Upload"?<BsUpload />:"..."}
                            </div>
                          }
                        </button>
                      </div>
                  </div>
                  <div>
                    <p className='text-sm text-red-600'>Supported types:{" "}[png ,jpeg ,jpg ,svg]</p>
                    <p className='text-sm text-red-600'>Max Size:{" "}5MB</p>
                  </div>
              </div>
        </div>


        <div className='bg-black text-white rounded-xl px-8 py-4 border border-white flex flex-col gap-8'>
            <p className='font-semibold'>Update Profile Information</p>
            <div className=' text-white grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' id="firstName" name='firstName' value={formData.firstName} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white'
                    placeholder='Enter First Name'
                    ></input>
                </div>

                <div className='flex flex-col gap-1'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white'
                  placeholder='Enter Last Name'
                  ></input>
                </div>
            
                <div className='flex flex-col gap-1'>
                  <label htmlFor='DOB'>Date Of Birth</label>
                  <input type='date' id='DOB' name='DOB' value={formData.DOB} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white cursor-pointer'
                  placeholder='Enter Date of Birth'
                  ></input>
                </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='gender'>Gender</label>
                <select id='gender' name='gender' value={formData.gender} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white cursor-pointer'
                placeholder="Select Gender"
                >
                  <option>Add Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer Not to Say</option>
                </select>
              </div>
              <div className='flex flex-col gap-1'>
                  <label htmlFor='phoneNumber' >Contact Number</label>
                  <input type="tel" id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white'
                  placeholder='Enter Contact Number'
                  ></input>
              </div>
              <div className='flex flex-col gap-1'>
                  <label htmlFor='about'>About</label>
                  <input type="text" id='about' name='about' value={formData.about} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white'
                  placeholder='Enter Bio Details'
                  >
                  </input>
              </div>
            </div>

            <div className='flex justify-center gap-3'>
              <button className='bg-gray-600 px-5 py-2 rounded-lg text-gray-100 font-bold' onClick={()=>{navigate("/Dashboard/myprofile")}}>Cancel</button>
              <button className='bg-yellow-400 px-6 py-2 rounded-lg text-black font-bold' onClick={()=>{updateProfileDetails()}}>Save</button>
            </div>
        </div>

        <div className='bg-black text-white rounded-xl px-4 py-4 border border-white flex flex-col gap-8'>
            <p className='font-semibold'>Change Password</p>
            <div className=' text-white grid lg:grid-cols-2 grid-cols-1 gap-5'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='currentPassword'>Current Password</label>
                <input type='text' id="currentPassword" name='currentPassword' value={formData.currentPassword} onChange={handleChnage} className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white'
                placeholder='Enter Current Password'
                >
                </input>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='newPassword'>New Password</label>
                <input type='text' id="newPassword" name='newPassword' value={formData.newPassword} onChange={handleChnage}  className='h-[50px] bg-gray-600 rounded-lg px-2 py-1 border-2 border-white'
                placeholder='Enter New Password'
                ></input>
              </div>
            </div>
            <div className='flex justify-center gap-3'>
              <button className='bg-gray-600 px-5 py-2 rounded-lg text-gray-100 font-bold' onClick={()=>{navigate("/Dashboard/myprofile")}}>Cancel</button>
              <button className='bg-yellow-400 px-6 py-2 rounded-lg text-black font-bold' onClick={()=>{changePassword()}}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Setting;
