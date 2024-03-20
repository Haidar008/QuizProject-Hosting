import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import sendOTP from "../services/operations/sendOtp";
import Loader from "../components/Loader";
import { BsArrowLeft } from "react-icons/bs";
import SignUp from "../services/operations/signUp";
import Navbar from "../components/Navbar";



const OTPInputPage = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const signUpdata=useSelector((state)=>state.auth.signUpdata);
  const loading=useSelector((state)=>state.auth.authLoading);
  console.log(signUpdata);

  const body=new FormData();
  body.append("firstName",signUpdata.firstName);
  body.append("lastName",signUpdata.lastName);
  body.append("email",signUpdata.email);
  body.append("passWord",signUpdata.password);
  body.append("phoneNumber",signUpdata.phoneNumber);
  body.append("confirmPassword",signUpdata.confirmPassword);


  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };


  //Resend OTP
  const handleResend = async() => {
      await sendOTP(signUpdata.email,navigate,dispatch);
  };

  const verifyEmail = async() => {

      for(let i=0;i<otp.length;i++){
        if(otp[i] === ""){
          alert("All fields are required");
          return;
        }
      }

      let str="";
      for(let i=0;i<otp.length;i++){
        str+=otp[i];
      }
      console.log("OTP=",str);
      body.append("otp",str);
      console.log(body);

      await SignUp(body,navigate,dispatch);
      setOTP(["","","","","",""]);
  };

  const handleClick = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <Navbar/>
      <div>
      {
      loading?
      <Loader text="Please Wait"/>
      :
      <div className="w-[100vw] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-[100vh] flex items-center pt-12">
        <div className=" w-[80%] max-w-[700px] mx-auto lg:h-[70%] h-[60%]  bg-black flex flex-col items-center justify-center   text-gray-800 rounded-md">
      <div className="mb-6">
        <p className="text-lg font-semibold text-white text-center">Verify Email</p>
        <div>
        <p className="text-sm mt-1 text-gray-400 text-center">
          A verification code has been sent to your email.
        </p>
        <p className="text-sm mt-1 text-gray-400 text-center">
         Enter the code below:
        </p>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            required
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="lg:w-12 lg:h-12 w-8 h-8 border rounded-md text-center mr-2"
            placeholder="_"
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center mb-6">
        <button
          className="py-2 px-4 rounded-md bg-blue-500 text-white mb-2 sm:mb-0 sm:mr-4"
          onClick={verifyEmail}
        >
          Verify Email
        </button>
        <button
          className="py-2 px-4 rounded-md bg-yellow-300 text-gray-700"
          onClick={handleResend}
        >
          Resend code
        </button>
      </div>
      <button
        className="flex items-center gap-2 py-2 px-4 rounded-md bg-lime-400 text-blue-500 hover:bg-lime-500 hover:text-blue-600 font-semibold"
        onClick={handleClick}
      >
        <BsArrowLeft />
        Back To Signup
      </button>
        </div>
    </div>
    }
    </div>
  </div>
  );
};

export default OTPInputPage;
