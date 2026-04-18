import React, { useState } from 'react';
// import contactImg from '../assets/contact-image.jpg'; 
import contactImg1 from '../assets/bg/snow1.jpg'
import { motion } from 'framer-motion';
import contactImg2 from '../assets/bg/snow2.jpg'
import { FaLinkedin, FaEnvelope, FaXTwitter, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa6';


export const Form = () => {
  const [selectedType, setSelectedType] = useState('individual');

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-6 pt-25">
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

     <div className=" relative z-10 animated-border w-full max-w-5xl">

     <div className="bg-white dark:bg-gray-950 dark:text-gray-100 rounded-lg shadow-md overflow-hidden flex w-full max-w-5xl">
        
        {/* Left -> Form */}
        <div className="w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-semibold">Contact us</h2>
          <p className="text-gray-600 dark:text-gray-50 ">Hi 👋! My name is...</p>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-400">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border-gray-400 focus:border-blue-500 border outline-none rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-400">I represent</label>
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                onClick={() => setSelectedType('individual')}
                className={`px-4  cursor-pointer py-2 rounded-md border border-gray-400 transition-all duration-200 ${
                  selectedType === 'individual'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                An individual
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('company')}
                className={`px-4 cursor-pointer py-2 rounded-md border border-gray-400 transition-all duration-200 ${
                  selectedType === 'company'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                A company
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${selectedType === 'company' ? 'max-h-60 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
              <label htmlFor="company" className=' block text-gray-700 font-medium text-sm mb-2 dark:text-gray-400'>by the name of... </label>
              <input
              type="text"
              placeholder="Your company name"
              className="w-full px-4 py-2 border-gray-400 focus:border-blue-500 border outline-none rounded-md focus:outline-none focus:border-2"
            />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-400">I'd love to ask about...</label>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="w-full px-4 py-2 border-gray-400 focus:border-blue-500 border outline-none rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>

            {/* Social Media Links */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-4 mt-6 text-2xl"
          >
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaLinkedin /></a>
            <a href="mailto:rajesh.p262003@gmail.com" className="hover:text-pink-400"><FaEnvelope /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaXTwitter /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaYoutube /></a>
          </motion.div>
          
        </div>

        {/* Right -> Form */}

      <div className="w-1/2 relative overflow-hidden">

      <img src={contactImg1} alt="Contact Individual"
         className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-700 ease-in-out transform ${
           selectedType === 'company' ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
      }`}/>

     {/* Company Image */}
     <img src={contactImg2} alt="Contact Company"
    className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-700 ease-in-out transform ${
      selectedType === 'company' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
     }`}/>
       


      </div>
    </div>
    </div>


    </div>
  );
};

