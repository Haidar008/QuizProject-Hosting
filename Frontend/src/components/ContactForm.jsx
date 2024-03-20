// ContactUsPage.js
import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import contactUs from '../services/operations/contactUsService';


const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

    const dispatch=useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const body=new FormData();
    console.log(formData);
    body.append("name",formData.name);
    body.append("email",formData.email);
    body.append("phoneNumber",formData.mobile);
    body.append("message",formData.message);

    await contactUs(body,dispatch);

    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[27px] font-bold text-white  text-center">Got a Idea? We've got the skills. Let's team up</h1>
      <p className='mb-6 text-center text-[18px] text-blue-500 '>Tell us more about yourself and what you're got in mind.</p>
      <div className="max-w-lg mx-auto bg-gray-900 rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter Your Name'
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-700 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              required
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-white font-bold mb-2">Phone Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
              placeholder='Enter Your Phone Number'
              required
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter Your Message'
              required
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:focus:border-red-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-bold bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
