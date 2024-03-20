import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import ContactUsForm from '../components/ContactForm';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from '../components/Loader';

const data = [
  { category: "Active Users", value: "5K" },
  { category: "Categories", value: "10+" },
  { category: "Questions", value: "300+" },
  { category: "Awards", value: "50+" }
];


const AboutPage = () => {

  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleStartQuiz=()=>{
      setLoading(true);

      setTimeout(()=>{
        navigate("/quiz");
        setLoading(false);
      },3000)
  }

  return (
    <div className='pt-[65px]'>
        <div className="z-10"><Navbar/></div>
        <div>
        {
          loading?
          <Loader text="Please Wait"/>
          :
          <div className='w-11/12] relative'>
        {/* section1 */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  flex-col flex gap-6 pt-[50px] sm:pb-[150px] pb-[80px]">
            <div className='items-center flex gap-5 md:gap-4 lg:gap-3 flex-col lg:w-full w-[80%] mx-auto'>
              <p className='text-white text-center font-bold md:text-[30px] text-[25px]'>Empowering Learning through Interactive Quizzes</p>
              <p className='text-purple-600 text-center font-semibold md:text-[25px] text-[22px]'>Pioneering Innovation in Online Education for a <span className='text-cyan-500'>Brighter Tomorrow</span></p>
              <p className='max-w-[700px] text-center mx-auto mt-3 text-gray-600 md:text-[17px] text-[15px] font-semibold leading-5'>QuizWebsite is at the forefront of driving innovation in online Quiz. We're passionate about creating a brighter future by offering Quizess, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
              <div className='flex flex-row justify-center gap-4'>
                  <Link to={"/"} className='flex justify-center pb-8'>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out md:py-3 md:px-6 md:text-lg z-50">Home</button>
                  </Link>
                  <div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out md:py-3 md:px-6 md:text-lg z-50" onClick={handleStartQuiz}>Start Quiz</button>
                  </div>
              </div>
            </div>
        </div>
        {/* section 2 */}
        <div className='flex w-[90%] justify-center mx-auto gap-4 absolute z-10 lg:top-[18%] left-[5%] md:top-[20%] sm:top-[20%] top-[20%] '>
                <div className=''>
                    <img src="https://res.cloudinary.com/darjclpew/image/upload/v1710719030/Quiz/xj66u3lqcdcjexxrdohk.webp"></img>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/darjclpew/image/upload/v1710719100/Quiz/zfxqwhr2buslwm6zhcdi.webp"></img>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/darjclpew/image/upload/v1710719155/Quiz/kydxmcecqnrtmggsewsy.webp"></img>
                </div>
        </div>
        {/* section3 */}
        <div className='bg-black relative pt-[120px] md:pt-[250px]'>
          <div className='w-100vw h-[2px] bg-lime-400'></div>
            <div className='w-[90%] mx-auto flex lg:flex-row flex-col gap-6 mt-12 pb-12'>
                <div className=''>
                    <h1 className='text-orange-500 font-bold text-[30px] text-center'>Our vision</h1>
                    <p className='text-gray-400 font-semibold text-justify mt-12'>
                      Our vision  is to revolutionize the landscape of online education through interactive quizzes. We envision a world where learning is not just a passive activity but an engaging journey filled with discovery and growth. With a commitment to accessibility and inclusivity, we aim to democratize knowledge, providing learners of all backgrounds with the tools they need to succeed. Through innovative technology, personalized learning experiences, and a supportive community, we strive to inspire curiosity, ignite passions, and cultivate a love for lifelong learning. Our vision is to be the leading platform for interactive education, where every quiz is an opportunity for individuals to unlock their potential and shape a brighter tomorrow.
                    </p>
                </div>

                <div>
                <h1 className='text-cyan-400 font-bold text-[30px] text-center'>Our Mission</h1>
                    <p className='text-gray-400 font-semibold text-justify mt-12'>
                    our mission is to make learning engaging, accessible, and impactful for everyone, everywhere. We are dedicated to providing high-quality quiz-based educational content that caters to diverse learning styles and preferences. Our platform fosters a collaborative learning environment where users can challenge themselves, track their progress, and connect with like-minded learners. We strive to continuously innovate and improve our platform, leveraging cutting-edge technology to deliver personalized learning experiences that inspire curiosity and drive academic success. Through our commitment to excellence and inclusivity, we aim to empower individuals of all ages and backgrounds to reach their full potential and become lifelong learners.</p>
                </div>
            </div>
        </div>
        {/* section4 */}
        <div className='bg-gray-700'>
            <div className='w-[100%] justify-center flex flex-wrap items-center min-h-[150px]'>
            {
              data.map((obj,idx)=>
              {
                return <div key={idx} className='text-center md:w-[200px] w-[170px]'>
                  <h1 className='text-white font-bold text-[25px]'>{obj.value}</h1>
                  <p className='text-[18px] font-semibold text-gray-950'>{obj.category}</p>
                </div>
              })
            }
            </div>
        </div>
        {/* section 5 */}
        <div className='bg-black py-[40px]'>
            <ContactUsForm/>
        </div>
    </div>
        }
    <Footer/>
  </div>
    </div>
  );
};

export default AboutPage;
