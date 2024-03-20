import React from 'react';
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";

const MySubmission = () => {
  const dispatch = useDispatch();
  const submissions = useSelector((state) => state.quiz.myQuizs);

  return (
    <div className="flex flex-col min-h-screen w-[100%]">
      {submissions.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center md:ml-[200px] bg-gray-200 border border-green-300 rounded-md p-6">
              <p className="text-2xl font-bold mb-4">You have not submitted any quiz.</p>
          </div>
        </div>
      ) : (
        <div className='flex flex-col mt-[350px] md:mt-[30px]  md:ml-[240px] w-[100%] gap-2'>
          <div className='bg-black text-white justify-between flex w-[100%]  md:w-[80%] px-4 py-2 font-semibold rounded-lg'>
              <p>Topic</p>
              <p>Score</p>
              <p>Submitted On</p>
          </div>

          <div className=' w-[100%]  md:w-[80%] bg-white px-4 py-2 flex flex-col gap-2 rounded-lg'>
            {
              submissions.map((quiz,index)=>{
                const timestampSeconds = Math.floor(quiz.createdAt/ 1000);
                const date=new Date(timestampSeconds*1000);
                const ISTDateString = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
                return(
                  <div className='flex justify-between border-b pb-2 border-red-500'> 
                      <p className='bg-yellow-500 py-1 px-1 rounded-lg w-[120px]'>{quiz.topic}</p>
                      <p className='text-cyan-500 font-bold'>{quiz.score}</p>
                      <p className='text-green-500 font-semibold'>{ISTDateString}</p>
                  </div>
                )
              })
            }
          </div>
          
        </div>
      )}
    </div>
  );
};

export default MySubmission;
