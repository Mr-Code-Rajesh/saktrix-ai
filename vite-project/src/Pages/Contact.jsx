import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import contactImg1 from '../assets/bg/snow1.jpg';
import contactImg2 from '../assets/bg/snow2.jpg';
import { FaLinkedin, FaEnvelope, FaXTwitter, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const [selectedType, setSelectedType] = useState('individual');
  const navigate = useNavigate(); 

   //  handleSubmit function
   const handleSubmit = (e) => {
    e.preventDefault(); 
    
    navigate('/thank-you'); // 👈 redirect to thank you page
  };


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <section className="relative w-full py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 px-6">
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">

        {/* Heading */}
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Touch</span>
        </motion.h2>

        {/* Small Paragraph */}
        <motion.p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-400 max-w-2xl mx-auto text-center text-lg"
        >
          Have a project idea or just want to say hello?  
          Reach out — we’re excited to collaborate and bring your vision to life! 🚀
        </motion.p>

        {/* ====== Section 2: Your Advanced Form Section with Particles, Images, Animation ====== */}
        <div className="min-h-screen flex items-center justify-center p-6 pt-5 relative">
        
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

        {/* Advanced Form + Images */}
        <div className="relative z-10 animated-border w-full max-w-5xl">
          <div className="bg-white/5 backdrop-blur-md dark:bg-gray-950 dark:text-gray-100 rounded-lg shadow-md overflow-hidden flex  w-full max-w-5xl">

            {/* Left Side Form */}
            <div className="lg:w-1/2 p-8 space-y-6">
              <h2 className="text-3xl font-semibold">Contact us</h2>
              <p className="text-gray-400 dark:text-gray-50">Hi 👋! My name is...</p>

              {/* Name Field */}
              <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-transparent border-2 border-gray-500 rounded-md  focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>

              {/* I represent */}
              <div className=' mb-3'>
                <label className="block text-sm font-medium text-gray-400 mb-1">I represent</label>
                <div className="flex gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedType('individual')}
                    className={`px-4 py-2 rounded-md border-2 ${
                      selectedType === 'individual'
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                        : 'bg-transparent border-gray-500 text-gray-400'
                    }`}
                  >
                    An individual
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedType('company')}
                    className={`px-4 py-2 rounded-md border-2 ${
                      selectedType === 'company'
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                        : 'bg-transparent border-gray-500 text-gray-400'
                    }`}
                  >
                    A company
                  </button>
                </div>

                {/* Company Input */}
                <div className={`overflow-hidden transition-all duration-300 ${selectedType === 'company' ? 'max-h-60 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                  <label className="block text-sm font-medium text-gray-400 mb-1">By the name of...</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-2 bg-transparent border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className='mb-3'>
                <label className="block text-sm font-medium text-gray-400 mb-1">I'd love to ask about...</label>
                <textarea
                  placeholder="Type your message here..."
                  rows="4"
                  className="w-full px-4 py-2 bg-transparent border-2 border-gray-500 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit" role='button'
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
              >
                Submit
              </button>
              </form>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap gap-4 mt-6 text-2xl"
              >
                <a href="#" className="hover:text-pink-400"><FaLinkedin /></a>
                <a href="#" className="hover:text-pink-400"><FaEnvelope /></a>
                <a href="#" className="hover:text-pink-400"><FaXTwitter /></a>
                <a href="#" className="hover:text-pink-400"><FaGithub /></a>
                <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
                <a href="#" className="hover:text-pink-400"><FaYoutube /></a>
              </motion.div>

            </div>

            {/* Right Side Images */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <img src={contactImg1} alt="Contact Individual" className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-700 transform ${selectedType === 'company' ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`} />
              <img src={contactImg2} alt="Contact Company" className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-700 transform ${selectedType === 'company' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} />
            </div>

          </div>
        </div>

        </div>

        {/* Map - Center Aligned */}
        <div className="flex justify-center mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            data-aos="fade-up"
            className="rounded-3xl overflow-hidden shadow-lg w-full md:w-3/4"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.007829463179!2d80.26526807478092!3d13.084622112443167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663b6fcd5089%3A0x95e399a097e68bc6!2sChennai%20Central%20Railway%20Station!5e0!3m2!1sen!2sin!4v1714323928366!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
};
