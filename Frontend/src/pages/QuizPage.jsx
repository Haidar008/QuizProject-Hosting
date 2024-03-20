import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const topics = [
  { id: 1, name: 'Operating-System', color: 'bg-blue-500', hoverColor: 'bg-blue-600' },
  { id: 2, name: 'Data-Structures', color: 'bg-green-500', hoverColor: 'bg-green-600' },
  { id: 3, name: 'JavaScript', color: 'bg-yellow-500', hoverColor: 'bg-yellow-600' },
  { id: 4, name: 'C++', color: 'bg-red-500', hoverColor: 'bg-red-700' },
  { id: 5, name: 'DBMS', color: 'bg-purple-500', hoverColor: 'bg-purple-700' },
  { id: 6, name: 'React', color: 'bg-indigo-500', hoverColor: 'bg-indigo-700' },
  { id: 7, name: 'HTML', color: 'bg-pink-500', hoverColor: 'bg-pink-700' },
  { id: 8, name: 'Aptitude', color: 'bg-gray-500', hoverColor: 'bg-gray-700' },
  { id: 9, name: 'General-Knowledge', color: 'bg-teal-500', hoverColor: 'bg-teal-700' },
  { id: 10, name: 'CSS', color: 'bg-orange-500', hoverColor: 'bg-orange-700' },
  { id: 11, name: 'Algorithms', color: 'bg-cyan-500', hoverColor: 'bg-cyan-700' },
  { id: 12, name: 'Python', color: 'bg-yellow-500', hoverColor: 'bg-yellow-700' },
];

const TopicPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-[55px]">
      <div className="max-w-3xl w-full p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Choose a Topic</h2>
        <p className="mb-4">
          <p className='font-bold'>Important Instructions:</p>
          <ol className="list-decimal pl-4">
            <li>You will get 15 minutes to answer all questions for each topic.</li>
            <li>Each topic has 30 questions.</li>
            <li>Each question carry 1 mark.</li>
            <li>Click on a topic to start the quiz.</li>
            <li>If time gets over,quiz will automatically get submitted</li>
          </ol>
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {topics.map(topic => (
            <Link 
              key={topic.id} 
              to={`/quiz/${topic.name}`} 
              className={`text-white p-4 rounded-md transition-colors duration-300 ${topic.color} hover:${topic.hoverColor}`}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  <Footer/>
  </div>
  );
};

export default TopicPage;
