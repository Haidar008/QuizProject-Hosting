import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import Loader from '../components/Loader';
import RunningText from '../components/RunningText';
import MiddleSection from "../components/MiddleSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const HomePage = () => {

  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleStartQuiz=()=>{
    setLoading(true);

    setTimeout(() => {
      navigate("/quiz");
      setLoading(false);
    }, 3000);
  }


  return (
    <div>
    <Navbar/>
      <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col pt-16'>
        {
          loading ? <Loader text="Please Wait"/> :
            <div>
              <Link to={"/signup"}>
                <div className="group mx-auto mt-16 w-fit rounded-full bg-green-400 p-1 font-bold  transition-all duration-200 hover:scale-95">
                  <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                    <p>Explore More</p>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
  
              <div className="text-center text-4xl text-white font-semibold py-4">
                Empower Your Future with <span className='text-cyan-500'>Quiz Skills</span>
              </div>
  
              <div className="mt-3 w-[90%] mx-auto text-center text-lg font-bold text-gray-800 pb-4">
                With our online Quiz, you can learn from
                anywhere in the world, and get access to a wealth of resources.
              </div>
              <div className='flex flex-row justify-center gap-4'>
                <Link to={"/about"} className='flex justify-center pb-8'>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out md:py-3 md:px-6 md:text-lg">Know More</button>
                </Link>
                <div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out md:py-3 md:px-6 md:text-lg" onClick={handleStartQuiz}>Start Quiz</button>
                </div>
              </div>
  
              <div className="w-[90%] max-w-[700px] mx-auto  my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-400 rounded-md">
                <video
                  className="shadow-[20px_20px_rgba(255,255,255)]"
                  muted
                  loop
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/darjclpew/video/upload/v1710722808/Quiz/lmaegupx1dbyjdvokh2e.mp4" type="video/mp4" />
                </video>
              </div>
              <MiddleSection />
              <div className='bg-white pt-6  pb-[50px]'>
                <section className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto mt-12 flex flex-col md:flex-row-reverse justify-between items-center" id="rulesContainer">
                  <div className="md:w-1/2 w-full">
                    <img src="https://res.cloudinary.com/darjclpew/image/upload/v1710719272/Quiz/f89kxi1afpz6vvghmhds.png" alt="banner" className="w-full mx-auto" />
                  </div>
  
                  <div className="md:w-1/2 w-full">
                    <h1 className="my-8 lg:text-4xl text-3xl md:w-4/6 font-medium text-[#333] lg:leading-normal leading-normal mb-3">
                      Learn new concepts for each question
                    </h1>
                    <p className="border-l-4 pl-2 py-2 mb-6 text-gray-500">
                      We help you prepare for exams and quizzes{" "}
                    </p>
                    <div className="flex items-center">
                      <button
                        onClick={handleStartQuiz}
                        className={`bg-[#FCC822] px-6 py-2 text-white rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        id="startQuiz"
                        type="button"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Start Quiz"}
                      </button>
  
                      <Link to="/about">
                        <button
                          className="px-6 py-2 text-[#FCC822] hover:bg-[#FCC822] hover:text-white rounded inline-flex ml-3 transition-all duration-300"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          know more
                        </button>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
              <div className='bg-black py-[60px]'>
                <RunningText />
              </div>
            </div>
        }
    </div>
    <Footer/> 
    </div>
  )
}
  