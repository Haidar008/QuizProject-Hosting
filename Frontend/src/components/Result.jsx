import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiCheckMark } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";


const Result = ({ score, handleRestart, questions, answers }) => {
    const [page, setPage] = useState(0);
    const [viewSolution, setViewSolution] = useState(false);

    const handleNext = () => {
        setPage(page+1);
    };

    console.log(answers);

    const handlePrev = () => {
        setPage(page-1);
    };

    return (
        <div className="container mx-auto">
            {viewSolution ? (
                <div className="-mt-[22px] p-4 bg-gray-100 rounded-md">
                    <h1 className="text-2xl font-bold mb-4">Quiz Solution:</h1>
                    <div>
                        {questions.map((ques, index) => (
                            index>=(page*5+0) && index<=(page*5+4) &&
                            <div key={index} className="mb-4">
                                <p className="text-lg font-medium">{index + 1}. {ques.question}</p>
                                <div className="flex gap-4 mt-1">
                                    <p><strong>Your Answer:</strong> {(answers[index] !== '') ? answers[index] : "Not Attempted"}</p>
                                    <p><strong>Correct Answer:</strong> {ques.answer}</p>
                                    <p><strong>Score:</strong> {(ques.answer === answers[index]) ? 1 : 0}/1</p>
                                    {
                                        (ques.answer === answers[index])?
                                        <GiCheckMark className='text-green-600 text-[20px]'/>
                                        :
                                        <HiMiniXMark className='text-red-600 text-[22px]'/>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button className={`py-2 px-4 rounded-md ${page === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`} onClick={handlePrev} disabled={page === 0}>Prev</button>
                        <button className={`py-2 px-4 rounded-md ${page === Math.floor(questions.length / 5) - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`} onClick={handleNext} disabled={page === Math.floor(questions.length / 5) - 1}>Next</button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-10 p-4 bg-gray-100 rounded-md">
                    <h1 className="text-2xl font-bold">Quiz Result</h1>
                    <p className="text-lg font-medium mt-4">Your Score: {score}/{questions.length}</p>
                </div>
            )}
            <div className="flex justify-center mt-8 space-x-4">
                <Link to="/" className="inline-block">
                    <button className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">Back To Home</button>
                </Link>
                <button className="py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800" onClick={viewSolution ? handleRestart : () => setViewSolution(true)}>{viewSolution ? "Restart Quiz" : "View Solution"}</button>
            </div>
        </div>
    );
};

export default Result;
