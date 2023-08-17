"use client"

import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <div className='bg-[url("/bgggg.jpg")]     flex items-center justify-center bg-cover h-screen'>
      <div className="bg-white p-8 mt-36   rounded-lg shadow-md w-96">
        <h2 className="text-4xl  font-semibold mb-4">Thank you!</h2>
        {submitted ? (
          <p className="text-purple-500 text-2xl  mb-1 space-x-1">Your form submission has been received. <br />
           <br />
          <a className='text-purple-400  hover:text-purple-600'  id='back-link' href="http://localhost:3000">← Back to our site</a></p>
          
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium  text-left mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-left mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-left mb-1" htmlFor="message ">Message</label>
            <textarea
              id="message"
              className="w-full border rounded-md py-2 px-3 h-20 focus:outline-none focus:ring focus:border-purple-500"
            ></textarea>
          </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white rounded-md py-2 px-4 hover:bg-purple-600 focus:outline-none focus:ring"
            >
              submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;