import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcAlarmClock } from "react-icons/fc";
import Result from '../components/Result';
import {useSelector,useDispatch} from "react-redux";
import { submitQuiz } from '../services/operations/quiz';
import Loader from "../components/Loader";


import Reactqs from "../QuestionsData/React";
import JS from "../QuestionsData/JavaScript";
import CSS from "../QuestionsData/CSS";
import CPP from "../QuestionsData/CPLUSPLUS";
import apti from "../QuestionsData/Aptitude";
import DBMS from "../QuestionsData/DBMS";
import HTML from "../QuestionsData/HTML";
import GK from "../QuestionsData/generalKnowledge";
import PY from "../QuestionsData/Python"
import algo from "../QuestionsData/Algorithms";
import OS from "../QuestionsData/OS";
import dataStructureQuestions from "../QuestionsData/DataStructure";


const QuizPage = () => {
  const location=useLocation()
  const topic=location.pathname.split("/").at(-1).split("-").join(" ");
  console.log(topic);
  let questions=[];

  if(topic === "Data Structures") questions=dataStructureQuestions;
  if(topic === "Operating System") questions=OS;
  if(topic === "DBMS") questions=DBMS;
  if(topic === "HTML") questions=HTML;
  if(topic === "CSS") questions=CSS;
  if(topic === "Python") questions=PY;
  if(topic === "General Knowledge") questions=GK;
  if(topic === "Algorithms") questions=algo;
  if(topic === "Aptitude") questions=apti;
  if(topic === "JavaScript") questions=JS;
  if(topic === "React") questions=Reactqs;
  if(topic === "C++") questions=CPP;


  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(900); // 3 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const dispatch=useDispatch();
  const userData=useSelector((state)=>state.auth.userData);
  const loading=useSelector((state)=>state.auth.authLoading);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [markedForReview, setMarkedForReview] = useState(Array(questions.length).fill(false));


  useEffect(() => {
    const timer = setInterval(() => {
      if (timerRunning) {
        setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length));
  };

  const handlePrevious = () => {
    setQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleAnswer = (e) => {
    const { value } = e.target;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  const handleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[questionIndex] = !newMarkedForReview[questionIndex];
    setMarkedForReview(newMarkedForReview);
  };

  const handleSubmit = async() => {
    let tempScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answer) {
        tempScore++;
      }
    }

    const body=new FormData();
    body.append("topic",topic);
    body.append("email",userData.email);
    body.append("score",tempScore);
    

    await submitQuiz(body,dispatch);
    console.log(tempScore);
    setScore(tempScore);
    setShowResult(true);
    setTimerRunning(false);
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setAnswers(Array(questions.length).fill(''));
    setMarkedForReview(Array(questions.length).fill(false));
    setTimeLeft(900);
    setTimerRunning(true);
    setShowResult(false);
    setScore(0);
  };

  const currentQuestion=questions[questionIndex];
  return (
    <div>
      {
        loading?
        <Loader text="Please Wait"/>
        :
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {showResult ? (
        <Result score={score} handleRestart={handleRestart} questions={questions} answers={answers}/>
      ) : (
        <div className='flex flex-col gap-4 w-[90%]  items-center'>
        <div className="flex flex-col-reverse items-center w-[full] max-w-md p-2 gap-2 bg-white shadow-lg rounded-lg -mt-10">
        <div className='flex items-center gap-2'>
            <FcAlarmClock  className='text-[25px]'/>
          <p className="text-black font-semibold">Timer: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
        </div>
        <div>
          <p className="text-black font-semibold">Current Time: <span className='text-gray-600 '>{currentTime.toLocaleTimeString()}</span></p>
        </div>
      </div>
        <div className="max-w-md p-4 bg-white shadow-lg rounded-lg min-h-[300px]">
          <p className="text-lg font-semibold mt-4 mb-2">Question {questionIndex + 1}</p>
          <p className="text-gray-700 mb-2">{currentQuestion.question}</p>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Options:</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2"
              value={answers[questionIndex]}
              onChange={handleAnswer}
            >
              <option value="" className=''>Select an option</option>
              {currentQuestion.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center gap-5">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handlePrevious}
              disabled={questionIndex === 0}
            >
              Previous
            </button>
            <button
              className={`${markedForReview[questionIndex]?"bg-red-600":"bg-green-500"} text-white px-4 py-2 rounded-lg`}
              onClick={handleMarkForReview}
            >
              {markedForReview[questionIndex] ? "Unmark" : "Mark"} for Review
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleNext}
              disabled={questionIndex === questions.length-1}
            >
              Next
            </button>
          </div>
        </div>
        <button onClick={()=>{handleSubmit()}} className='bg-yellow-500 py-2 px-6 rounded-md font-semibold'>Submit Quiz</button>
    </div>
      )}
    </div>
      }
    </div>
  );
};

export default QuizPage;
