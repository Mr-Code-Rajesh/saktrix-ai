import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap, FaPython, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';
import { SiTailwindcss, SiOpenai } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ Must import Autoplay too
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // 
import iamge from '../assets/bg/home1.png'

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-400" /> },
  { name: "Excel", icon: <FaFileExcel className="text-green-600" /> },
  { name: "PowerPoint", icon: <FaFilePowerpoint className="text-orange-500" /> },
];

const certificates = [
  iamge,
  iamge,
  iamge,
  iamge,
  iamge,
  iamge,
  iamge,
];

export const Skills = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-28">

       {/* Hero Section */}
       <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-4">About <span className="text-pink-400">Me</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
         "A Frontend Developer and Research Executive with a passion for innovation, blending creative design and technical expertise to deliver outstanding digital solutions"
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/RajeshP-Resume.pdf"
            download
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all text-white font-semibold"
          >
            Download Resume
          </a>
          <a
            href="/contact" // Update this path to your actual contact or hire me page
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all text-white font-semibold"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
      <section className=' px-10'>

     {/* Personal Info */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-items-center  mb-20">
  
  {/* Text Info */}
  <div className="space-y-4 bg-white/5 p-10 rounded-xl backdrop-blur-md shadow-xl">
    <h2 className="text-3xl font-bold mb-6">Personal Information</h2>
    <p><span className="font-semibold">Name:</span> Rajesh P</p>
    <p><span className="font-semibold">Email:</span> rajesh.p262003@gmail.com</p>
    <p><span className="font-semibold">Phone:</span> +91 6383168050</p>
    <p><span className="font-semibold">Location:</span> Kancheepuram, Tamil Nadu, India</p>
    <p><span className="font-semibold">Freelance:</span> Available</p>
    <p><span className="font-semibold">Languages:</span> English, Tamil</p>
  </div>

  {/* Profile Image */}
  <div className="flex justify-center">
    <img 
      src={iamge}  // 🔥 Replace with your real image path
      alt="Rajesh P" 
      className="w-64 h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
    />
  </div>

  </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        {/* Frontend Skills */}
        <h3 className="text-xl font-semibold mb-4">Frontend Developer Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
            { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
            { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
            { icon: <FaReact className="text-cyan-400" />, name: 'React' },
            { icon: <SiTailwindcss className="text-sky-400" />, name: 'TailwindCSS' },
            { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
            { icon: <FaGithub className="text-gray-300" />, name: 'GitHub' },
            { icon: <FaBootstrap className="text-purple-600" />, name: 'Bootstrap' },
            { icon: <SiOpenai className="text-green-400" />, name: 'AI Prompts' },
          ].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg hover:scale-110 hover:bg-gradient-to-r from-pink-500/30 to-purple-500/30 transition-all">
              <span className="text-2xl">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>

        {/* Research Skills */}
        <h3 className="text-xl font-semibold mt-12 mb-4">Research Executive Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "AI Prompt Engineering", "Secondary Research", "Data Validation", "Data Charts",
            "Excel", "MS Word", "PowerPoint", "Data Handling", "ChatGPT", "Website Scraping (Python)"
          ].map((skill, idx) => (
            <span key={idx} className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-xl flex flex-col gap-4">
          <p><span className="font-semibold">Degree:</span> Bachelor of Science in Computer Science</p>
          <p><span className="font-semibold">University:</span> Madras University</p>
          <p><span className="font-semibold">College:</span> Sri Sankara Arts and Science College</p>
          <p><span className="font-semibold">Year of Passing:</span> 2023</p>
          <p><span className="font-semibold">Percentage:</span> 80%</p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience & Awards</h2>
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-bold mb-2">Research Executive</h3>
            <p>Zinnov Consulting Pvt Ltd (May 2023 – Present)</p>
            <p className="mt-2 text-gray-300">🏆 Awarded <span className="font-semibold text-pink-400">Dashing Debut Award</span> at Zinnov for taking new initiatives and demonstrating smart work.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-bold mb-2">College Achievements</h3>
            <p>Sri Sankara Arts and Science College</p>
            <p className="mt-2 text-gray-300">🏆 Received <span className="font-semibold text-pink-400">Golden Gates Award</span> and <span className="font-semibold text-pink-400">Comfete Award</span> for creating UI designs for college events along with tech friends group.</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <div className="space-y-4">
          <p>🏆 Completed HTML, CSS, JS, React, ChatGPT Certifications at Code360.</p>
          <p>🏆 Completed Intermediate HTML/CSS/JS Course at Sololearn.</p>
          <p>🏅 Master Badges on Code360 (HTML, CSS, JS, React, ChatGPT).</p>
          <p>🏆 Ninja Dominator Title at Code360 (Top Level Achievement).</p>
        </div>
      </div>
  
      </section>

      {/* Skills Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
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
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-10 z-10"
        >
          Our <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">Woking With Tech & Research</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-3">
                {skill.icon}
              </div>
              <p className="text-white text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements & Certificates</h2>
        <Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  modules={[Pagination, Autoplay]} // ✅ Now include Autoplay properly
  className="w-full max-w-6xl mx-auto"
>
  {certificates.map((cert, index) => (
    <SwiperSlide key={index}>
      <img
        src={cert}
        alt={`Certificate ${index + 1}`}
        className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
      />
    </SwiperSlide>
  ))}
</Swiper>


      </div>

    </section>
  );
};
