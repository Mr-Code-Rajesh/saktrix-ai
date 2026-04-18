import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaStethoscope } from 'react-icons/fa';
import { SiGooglenews } from "react-icons/si";
import { FaGlobe, FaSlack } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaFacebookF, FaMedium } from 'react-icons/fa';
import { FaCopy } from "react-icons/fa";




const digitalMarketingBlogs = [
  {
    id: 1,
    title: 'Top 10 Growth Hacks for 2025',
    description: 'Discover marketing tricks that are dominating the digital space this year.',
    image: '/digital1.jpg',
    videoLink: 'https://your-video.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    title: 'Mastering SEO with AI',
    description: 'Learn how AI tools can boost your SEO rankings effortlessly.',
    image: '/digital2.jpg',
    videoLink: 'https://your-video.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    title: 'Create Viral Campaigns Like a Pro',
    description: 'Tips and templates to launch successful viral marketing campaigns.',
    image: '/digital3.jpg',
    videoLink: 'https://your-video.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];
const medicalBlog = [
  {
    id: 1,
    title: 'Revolutionizing Healthcare with AI',
    description: 'Discover how artificial intelligence is transforming diagnostics and patient care.',
    image: '/medical-blog1.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      news: 'https://news.google.com',
    },
  },
  {
    id: 2,
    title: 'Telemedicine in 2025',
    description: 'Explore how virtual consultations are reshaping the healthcare industry.',
    image: '/medical-blog2.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      news: 'https://news.google.com',
    },
  },
];
const saasBlog = [
  {
    id: 1,
    title: 'Scaling SaaS Products with Cloud Native Tools',
    description: 'Discover modern cloud-native stacks and best practices to scale your SaaS offerings seamlessly.',
    image: '/saas-blog1.png',
    link: '#',
    socials: {
      website: 'https://example.com',
      slack: 'https://slack.com',
      notion: 'https://notion.so',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 2,
    title: 'Optimizing Your SaaS Pricing Model',
    description: 'Explore frameworks and case studies on how SaaS companies optimize subscription pricing.',
    image: '/saas-blog2.png',
    link: '#',
    socials: {
      website: 'https://example.com',
      slack: 'https://slack.com',
      notion: 'https://notion.so',
      linkedin: 'https://linkedin.com',
    },
  },
];
const blogData = [
  {
    id: 1,
    title: 'Top SaaS Growth Hacks in 2025',
    description: 'Explore proven growth tactics and strategies used by top SaaS companies to scale fast.',
    image: '/blog/saas1.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      medium: 'https://medium.com',
    },
  },
  {
    id: 2,
    title: 'Design Systems that Scale',
    description: 'Learn how scalable design systems improve product consistency and team productivity.',
    image: '/blog/saas2.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      medium: 'https://medium.com',
    },
  },
  {
    id: 3,
    title: 'Mastering SaaS User Retention',
    description: 'Deep dive into retention metrics, feedback loops, and onboarding strategies.',
    image: '/blog/saas3.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      medium: 'https://medium.com',
    },
  },
];
const finalBlogs = [
  {
    id: 1,
    title: 'How to Build Brand Loyalty',
    description: 'Create long-term emotional connections between your business and customers.',
    image: '/final1.jpg',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    title: 'Trends in UX Design 2025',
    description: 'Explore futuristic UI/UX patterns to engage users more effectively.',
    image: '/final2.jpg',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    title: 'Crafting Story-Driven Marketing',
    description: 'Boost conversions with compelling narrative-based marketing strategies.',
    image: '/final3.jpg',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];
const blogDatas = [
  {
    id: 1,
    title: '5 Startup Growth Hacks That Work',
    description: 'Discover actionable tactics to scale your startup efficiently with low-cost strategies.',
    image: '/startup-blog-1.jpg',
    link: '#',
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    title: 'Pitch Deck Secrets for Startups',
    description: 'Nail your investor pitch with tips on storytelling, design, and data that drive funding.',
    image: '/startup-blog-2.jpg',
    link: '#',
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    title: 'Building a Product MVP That Wins',
    description: 'Learn the art of crafting a lean, testable MVP that proves value and attracts users.',
    image: '/startup-blog-3.jpg',
    link: '#',
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      github: 'https://github.com'
    }
  }
];



function BlogComponents ({htmlCode,reactCode,SectionShow}){
    const [view, setView] = useState("preview"); // 'preview' | 'code'
    const [codeType, setCodeType] = useState("html"); // 'html' | 'react'

    const handleCopy = () => {
    const code = codeType === "html" ? htmlCode : reactCode;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

  return(
    <>
        <section className="min-h-screen w-full my-15 bg-white  text-black dark:text-white flex flex-col items-center justify-center relative overflow-hidden  dark:bg-gray-900 rounded-2xl  shadow-2xl border border-gray-300  dark:border-gray-700 transition-all duration-500">
        
        <div className="min-h-screen w-full mx-auto">
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300  dark:border-gray-800 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView("preview")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "preview"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setView("code")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "code"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Code
              </button>
            </div>

            {view === "code" && (
              <div className="flex items-center space-x-2">
                <select
                  onChange={(e) => setCodeType(e.target.value)}
                  value={codeType}
                  className="rounded-md border-gray-300  dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
                >
                  <option value="html">HTML</option>
                  <option value="react">React</option>
                </select>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  <FaCopy />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>



    {/* Hero page view start  */} 

   {view === "preview" ? (
    (SectionShow)

   ) : (
    <section className=" w-full overflow-x-scroll bg-gray-100 dark:bg-gray-900">
      <pre className="text-left text-sm  text-gray-800 dark:text-gray-200 w-full h-[90%] p-4 rounded">
         {codeType === "html" ? htmlCode : reactCode}
      </pre>
    </section>
   )}


</div>
</section>
      
             
    </>
  )
}

{/* Covert to (Pure HTML + Tailwind + Font Awesome or other free icons cdn as your wish)*/}

export function BlogDemoone(){
 return(
<>
 <BlogComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Digital Marketing Blog</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- AOS Animation CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

  <!-- Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-p5QyWDLJ5tV6V6cncu5DhT5+j0MNlRQyS2Sh4XOK6Zz7wK9WepVrJ49O7zjqEzmtA0+iI2s5xUKr+4mCKg7FSg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="bg-white dark:bg-gray-950 transition duration-300">

  <section class="relative w-full py-20 px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
        Digital <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Marketing</span> Insights
      </h2>
      <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
        Stay updated on growth strategies, trends, and innovations in marketing.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <!-- Blog Card 1 -->
      <div class="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in-up" data-aos-delay="0">
        <div class="overflow-hidden rounded-2xl mb-5">
          <img src="/digital1.jpg" alt="Top 10 Growth Hacks for 2025" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Top 10 Growth Hacks for 2025</h3>
        <p class="mt-3 text-gray-600 dark:text-gray-300">Discover marketing tricks that are dominating the digital space this year.</p>
        <a href="https://your-video.com" target="_blank" class="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">Read More</a>
        <div class="mt-6 flex gap-4 justify-center">
          <a href="#"><i class="fa-brands fa-x-twitter text-blue-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-instagram text-pink-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-youtube text-red-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-github text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg"></i></a>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div class="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in-up" data-aos-delay="100">
        <div class="overflow-hidden rounded-2xl mb-5">
          <img src="/digital2.jpg" alt="Mastering SEO with AI" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Mastering SEO with AI</h3>
        <p class="mt-3 text-gray-600 dark:text-gray-300">Learn how AI tools can boost your SEO rankings effortlessly.</p>
        <a href="https://your-video.com" target="_blank" class="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">Read More</a>
        <div class="mt-6 flex gap-4 justify-center">
          <a href="#"><i class="fa-brands fa-x-twitter text-blue-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-instagram text-pink-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-youtube text-red-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-github text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg"></i></a>
        </div>
      </div>

      <!-- Blog Card 3 -->
      <div class="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in-up" data-aos-delay="200">
        <div class="overflow-hidden rounded-2xl mb-5">
          <img src="/digital3.jpg" alt="Create Viral Campaigns Like a Pro" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Create Viral Campaigns Like a Pro</h3>
        <p class="mt-3 text-gray-600 dark:text-gray-300">Tips and templates to launch successful viral marketing campaigns.</p>
        <a href="https://your-video.com" target="_blank" class="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">Read More</a>
        <div class="mt-6 flex gap-4 justify-center">
          <a href="#"><i class="fa-brands fa-x-twitter text-blue-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-instagram text-pink-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-youtube text-red-500 hover:text-gray-800 dark:hover:text-white text-lg"></i></a>
          <a href="#"><i class="fa-brands fa-github text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- AOS Animation JS -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 1000, once: true });
  </script>
</body>
</html>

`
}
reactCode={
`import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const digitalMarketingBlogs = [
  {
    id: 1,
    title: 'Top 10 Growth Hacks for 2025',
    description: 'Discover marketing tricks that are dominating the digital space this year.',
    image: '/digital1.jpg',
    videoLink: 'https://your-video.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    title: 'Mastering SEO with AI',
    description: 'Learn how AI tools can boost your SEO rankings effortlessly.',
    image: '/digital2.jpg',
    videoLink: 'https://your-video.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    title: 'Create Viral Campaigns Like a Pro',
    description: 'Tips and templates to launch successful viral marketing campaigns.',
    image: '/digital3.jpg',
    videoLink: 'https://your-video.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];

export const DigitalMarketingBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Marketing</span> Insights
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Stay updated on growth strategies, trends, and innovations in marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10">
        {digitalMarketingBlogs.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="zoom-in-up"
            data-aos-delay={'{index * 100}'}  
            className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300"
          >  // add $ & replace single quate to template string =  data-aos-delay={'{index * 100}'} 
            {/* Blog Image */}
            <div className="overflow-hidden rounded-2xl mb-5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{blog.description}</p>

            {/* Visit CTA */}
            <a
              href={blog.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Read More
            </a>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 justify-center">
              <a href={blog.socials.twitter}><FaXTwitter className="text-blue-500 hover:text-gray-800 dark:hover:text-white" size={20} /></a>
              <a href={blog.socials.instagram}><FaInstagram className="text-pink-500 hover:text-gray-800 dark:hover:text-white" size={20} /></a>
              <a href={blog.socials.youtube}><FaYoutube className="text-red-500 hover:text-gray-800 dark:hover:text-white" size={20} /></a>
              <a href={blog.socials.github}><FaGithub className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" size={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="relative w-full min-h-screen py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Marketing</span> Insights
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Stay updated on growth strategies, trends, and innovations in marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10">
        {digitalMarketingBlogs.map((blog, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={`${index * 100}`}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Blog Image */}
            <div className="overflow-hidden rounded-2xl mb-5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{blog.description}</p>

            {/* Visit CTA */}
            <a
              href={blog.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Read More
            </a>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 justify-center">
              <a href={blog.socials.twitter}><FaXTwitter className="text-blue-500 hover:text-gray-800 dark:hover:text-white" size={20} /></a>
              <a href={blog.socials.instagram}><FaInstagram className="text-pink-500 hover:text-gray-800 dark:hover:text-white" size={20} /></a>
              <a href={blog.socials.youtube}><FaYoutube className="text-red-500 hover:text-gray-800 dark:hover:text-white" size={20} /></a>
              <a href={blog.socials.github}><FaGithub className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" size={20} /></a>
            </div>
          </div>
        ))}
      </div>
 </section>
}
 />
</>
 ) 
}

export function BlogDemoTwo(){
 return(
<>
 <BlogComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Medical Blog</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
    <style>
      body {
        background: linear-gradient(to top right, #083344, #0c4a6e, #1e3a8a);
        color: white;
      }
    </style>
  </head>
  <body class="min-h-screen w-full py-20 px-6">
    <div class="text-center mb-16 z-10 relative">
      <h2 class="text-4xl md:text-5xl font-extrabold">
        Health<span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">Care Blogs</span>
      </h2>
      <p class="mt-4 text-blue-200 max-w-2xl mx-auto">
        Stay updated with the latest in medical tech, research, and patient innovations.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">

      <!-- Blog Card 1 -->
      <div data-aos="zoom-in-up" data-aos-delay="0" class="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col hover:shadow-[0_0_40px_5px_#22d3ee44] transition-all duration-300 group">
        <img src="/medical-blog1.png" alt="Revolutionizing Healthcare with AI" class="w-full h-52 rounded-xl object-cover mb-6" />
        <h3 class="text-2xl font-semibold group-hover:text-teal-300 transition">Revolutionizing Healthcare with AI</h3>
        <p class="text-blue-200 mt-3 flex-grow">Discover how artificial intelligence is transforming diagnostics and patient care.</p>
        <a href="#" class="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90">
          Read More
        </a>
        <div class="flex gap-4 mt-4 justify-center">
          <a href="https://linkedin.com"><i class="fab fa-linkedin text-blue-300 hover:text-white transition text-[22px]"></i></a>
          <a href="https://facebook.com"><i class="fab fa-facebook-f text-sky-400 hover:text-white transition text-[22px]"></i></a>
          <a href="https://news.google.com"><i class="fas fa-newspaper text-teal-300 hover:text-white transition text-[22px]"></i></a>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div data-aos="zoom-in-up" data-aos-delay="100" class="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col hover:shadow-[0_0_40px_5px_#22d3ee44] transition-all duration-300 group">
        <img src="/medical-blog2.png" alt="Telemedicine in 2025" class="w-full h-52 rounded-xl object-cover mb-6" />
        <h3 class="text-2xl font-semibold group-hover:text-teal-300 transition">Telemedicine in 2025</h3>
        <p class="text-blue-200 mt-3 flex-grow">Explore how virtual consultations are reshaping the healthcare industry.</p>
        <a href="#" class="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90">
          Read More
        </a>
        <div class="flex gap-4 mt-4 justify-center">
          <a href="https://linkedin.com"><i class="fab fa-linkedin text-blue-300 hover:text-white transition text-[22px]"></i></a>
          <a href="https://facebook.com"><i class="fab fa-facebook-f text-sky-400 hover:text-white transition text-[22px]"></i></a>
          <a href="https://news.google.com"><i class="fas fa-newspaper text-teal-300 hover:text-white transition text-[22px]"></i></a>
        </div>
      </div>

    </div>

    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script>
      AOS.init({ duration: 1000, once: true });
    </script>
  </body>
</html>

`
}
reactCode={
`import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaStethoscope, FaFacebookF } from 'react-icons/fa';
import { SiGooglenews } from "react-icons/si";

const medicalBlog = [
  {
    id: 1,
    title: 'Revolutionizing Healthcare with AI',
    description: 'Discover how artificial intelligence is transforming diagnostics and patient care.',
    image: '/medical-blog1.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      news: 'https://news.google.com',
    },
  },
  {
    id: 2,
    title: 'Telemedicine in 2025',
    description: 'Explore how virtual consultations are reshaping the healthcare industry.',
    image: '/medical-blog2.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      news: 'https://news.google.com',
    },
  },
];

export const MedicalBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen w-full py-20 px-6 bg-gradient-to-tr from-cyan-950 via-sky-900 to-blue-950 text-white">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Health<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">Care Blogs</span>
        </h2>
        <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          Stay updated with the latest in medical tech, research, and patient innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {medicalBlog.map((item, index) => (
          <div
            key={item.id}
            data-aos="zoom-in-up"
            data-aos-delay={'{index * 100}'}
            className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col hover:shadow-[0_0_40px_5px_#22d3ee44] transition-all duration-300 group"
          >   // add $ & replace single quate to template string =  data-aos-delay={'{index * 100}'} 

            <img src={item.image} alt={item.title} className="w-full h-52 rounded-xl object-cover mb-6" />
            <h3 className="text-2xl font-semibold group-hover:text-teal-300 transition">{item.title}</h3>
            <p className="text-blue-200 mt-3 flex-grow">{item.description}</p>
            <a
              href={item.link}
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90"
            >
              Read More
            </a>
            <div className="flex gap-4 mt-4 justify-center">
              <a href={item.socials.linkedin}><FaLinkedin className="text-blue-300 hover:text-white transition" size={22} /></a>
              <a href={item.socials.facebook}><FaFacebookF className="text-sky-400 hover:text-white transition" size={22} /></a>
              <a href={item.socials.news}><SiGooglenews className="text-teal-300 hover:text-white transition" size={22} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-tr from-cyan-950 via-sky-900 to-blue-950 text-white">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Health<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">Care Blogs</span>
        </h2>
        <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          Stay updated with the latest in medical tech, research, and patient innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {medicalBlog.map((item, index) => (
          <div
            key={item.id}
            data-aos="zoom-in-up"
            data-aos-delay={`${index * 100}`}
            className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col hover:shadow-[0_0_40px_5px_#22d3ee44] transition-all duration-300 group"
          >
            <img src={item.image} alt={item.title} className="w-full h-52 rounded-xl object-cover mb-6" />
            <h3 className="text-2xl font-semibold group-hover:text-teal-300 transition">{item.title}</h3>
            <p className="text-blue-200 mt-3 flex-grow">{item.description}</p>
            <a
              href={item.link}
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90"
            >
              Read More
            </a>
            <div className="flex gap-4 mt-4 justify-center">
              <a href={item.socials.linkedin}><FaLinkedin className="text-blue-300 hover:text-white transition" size={22} /></a>
              <a href={item.socials.facebook}><FaFacebookF className="text-sky-400 hover:text-white transition" size={22} /></a>
              <a href={item.socials.news}><SiGooglenews className="text-teal-300 hover:text-white transition" size={22} /></a>
            </div>
          </div>
        ))}
      </div>
  </section>
}
 />
</>
 ) 
}

export function BlogDemoThree(){
 return(
<>
 <BlogComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SaaS Blog</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
  </head>
  <body class="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500 min-h-screen w-full py-20 px-6">

    <div class="text-center mb-16 z-10 relative">
      <h2 class="text-4xl md:text-5xl font-extrabold">
        SaaS <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Insights</span>
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Read the latest thoughts on SaaS growth, strategies, and tooling trends.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">

      <!-- Card 1 -->
      <div data-aos="fade-up" data-aos-delay="0" class="bg-gradient-to-tr from-white via-blue-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <img src="/saas-blog1.png" alt="Scaling SaaS Products with Cloud Native Tools" class="w-full h-52 rounded-xl object-cover mb-6" />
        <h3 class="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition">
          Scaling SaaS Products with Cloud Native Tools
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mt-3 flex-grow">
          Discover modern cloud-native stacks and best practices to scale your SaaS offerings seamlessly.
        </p>
        <a href="#" class="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90">
          Read More
        </a>
        <div class="flex gap-4 mt-4 justify-center">
          <a href="https://example.com"><i class="fas fa-globe text-blue-500 hover:text-purple-600 dark:hover:text-white transition text-[22px]"></i></a>
          <a href="https://slack.com"><span class="iconify text-pink-500 hover:text-purple-500 dark:hover:text-white transition text-[22px]" data-icon="logos:slack-icon"></span></a>
          <a href="https://notion.so"><span class="iconify text-black dark:text-white hover:text-blue-400 transition text-[22px]" data-icon="logos:notion-icon"></span></a>
          <a href="https://linkedin.com"><i class="fab fa-linkedin text-blue-600 hover:text-purple-600 dark:hover:text-white transition text-[22px]"></i></a>
        </div>
      </div>

      <!-- Card 2 -->
      <div data-aos="fade-up" data-aos-delay="100" class="bg-gradient-to-tr from-white via-blue-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <img src="/saas-blog2.png" alt="Optimizing Your SaaS Pricing Model" class="w-full h-52 rounded-xl object-cover mb-6" />
        <h3 class="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition">
          Optimizing Your SaaS Pricing Model
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mt-3 flex-grow">
          Explore frameworks and case studies on how SaaS companies optimize subscription pricing.
        </p>
        <a href="#" class="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90">
          Read More
        </a>
        <div class="flex gap-4 mt-4 justify-center">
          <a href="https://example.com"><i class="fas fa-globe text-blue-500 hover:text-purple-600 dark:hover:text-white transition text-[22px]"></i></a>
          <a href="https://slack.com"><span class="iconify text-pink-500 hover:text-purple-500 dark:hover:text-white transition text-[22px]" data-icon="logos:slack-icon"></span></a>
          <a href="https://notion.so"><span class="iconify text-black dark:text-white hover:text-blue-400 transition text-[22px]" data-icon="logos:notion-icon"></span></a>
          <a href="https://linkedin.com"><i class="fab fa-linkedin text-blue-600 hover:text-purple-600 dark:hover:text-white transition text-[22px]"></i></a>
        </div>
      </div>

    </div>

    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script>
      AOS.init({ duration: 1000, once: true });
    </script>
  </body>
</html>

`
}
reactCode={
`import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobe, FaSlack, FaLinkedin } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const saasBlog = [
  {
    id: 1,
    title: 'Scaling SaaS Products with Cloud Native Tools',
    description: 'Discover modern cloud-native stacks and best practices to scale your SaaS offerings seamlessly.',
    image: '/saas-blog1.png',
    link: '#',
    socials: {
      website: 'https://example.com',
      slack: 'https://slack.com',
      notion: 'https://notion.so',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 2,
    title: 'Optimizing Your SaaS Pricing Model',
    description: 'Explore frameworks and case studies on how SaaS companies optimize subscription pricing.',
    image: '/saas-blog2.png',
    link: '#',
    socials: {
      website: 'https://example.com',
      slack: 'https://slack.com',
      notion: 'https://notion.so',
      linkedin: 'https://linkedin.com',
    },
  },
];

export const SaaSBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Insights</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Read the latest thoughts on SaaS growth, strategies, and tooling trends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {saasBlog.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={'{index * 100}'}
            className="bg-gradient-to-tr from-white via-blue-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          > // add $ & replace single quate to template string =  data-aos-delay={'{index * 100}'} 

            <img src={item.image} alt={item.title} className="w-full h-52 rounded-xl object-cover mb-6" />
            <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3 flex-grow">{item.description}</p>
            <a
              href={item.link}
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90"
            >
              Read More
            </a>
            <div className="flex gap-4 mt-4 justify-center">
              <a href={item.socials.website}><FaGlobe className="text-blue-500 hover:text-purple-600 dark:hover:text-white transition" size={22} /></a>
              <a href={item.socials.slack}><FaSlack className="text-pink-500 hover:text-purple-500 dark:hover:text-white transition" size={22} /></a>
              <a href={item.socials.notion}><SiNotion className="text-black dark:text-white hover:text-blue-400 transition" size={22} /></a>
              <a href={item.socials.linkedin}><FaLinkedin className="text-blue-600 hover:text-purple-600 dark:hover:text-white transition" size={22} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
  <section className="relative w-full min-h-screen py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Insights</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Read the latest thoughts on SaaS growth, strategies, and tooling trends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {saasBlog.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="bg-gradient-to-tr from-white via-blue-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <img src={item.image} alt={item.title} className="w-full h-52 rounded-xl object-cover mb-6" />
            <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3 flex-grow">{item.description}</p>
            <a
              href={item.link}
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90"
            >
              Read More
            </a>
            <div className="flex gap-4 mt-4 justify-center">
              <a href={item.socials.website}><FaGlobe className="text-blue-500 hover:text-purple-600 dark:hover:text-white transition" size={22} /></a>
              <a href={item.socials.slack}><FaSlack className="text-pink-500 hover:text-purple-500 dark:hover:text-white transition" size={22} /></a>
              <a href={item.socials.notion}><SiNotion className="text-black dark:text-white hover:text-blue-400 transition" size={22} /></a>
              <a href={item.socials.linkedin}><FaLinkedin className="text-blue-600 hover:text-purple-600 dark:hover:text-white transition" size={22} /></a>
            </div>
          </div>
        ))}
      </div>
  </section>
}
 />
</>
 ) 
}

export function BlogDemoFour(){
 return(
<>
 <BlogComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SaaS Insights</title>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      AOS.init({ duration: 1200, once: true });
    });
  </script>
  <script src="https://kit.fontawesome.com/your_kit_id.js" crossorigin="anonymous"></script> <!-- Replace with your own or use free CDN below -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

  <section class="relative w-full min-h-screen py-24 px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-extrabold mb-4">
        Our <span class="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">SaaS Insights</span>
      </h2>
      <p class="text-gray-300 max-w-xl mx-auto">
        Discover practical advice and emerging tech insights in the SaaS world.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      
      <!-- Blog Card 1 -->
      <div data-aos="fade-up" data-aos-delay="0"
        class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
        <img src="/blog/saas1.png" alt="Top SaaS Growth Hacks in 2025" class="rounded-xl mb-5 h-48 object-cover w-full" />
        <h3 class="text-xl font-semibold mb-2">Top SaaS Growth Hacks in 2025</h3>
        <p class="text-sm text-gray-300 flex-grow">Explore proven growth tactics and strategies used by top SaaS companies to scale fast.</p>
        <a href="#" target="_blank" class="mt-5 inline-block text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">Read Full Blog</a>
        <div class="flex gap-4 justify-center mt-5">
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin text-blue-400 hover:text-white text-lg transition-all"></i></a>
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f text-blue-300 hover:text-white text-lg transition-all"></i></a>
          <a href="https://medium.com" target="_blank"><i class="fab fa-medium text-gray-400 hover:text-white text-lg transition-all"></i></a>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div data-aos="fade-up" data-aos-delay="100"
        class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
        <img src="/blog/saas2.png" alt="Design Systems that Scale" class="rounded-xl mb-5 h-48 object-cover w-full" />
        <h3 class="text-xl font-semibold mb-2">Design Systems that Scale</h3>
        <p class="text-sm text-gray-300 flex-grow">Learn how scalable design systems improve product consistency and team productivity.</p>
        <a href="#" target="_blank" class="mt-5 inline-block text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">Read Full Blog</a>
        <div class="flex gap-4 justify-center mt-5">
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin text-blue-400 hover:text-white text-lg transition-all"></i></a>
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f text-blue-300 hover:text-white text-lg transition-all"></i></a>
          <a href="https://medium.com" target="_blank"><i class="fab fa-medium text-gray-400 hover:text-white text-lg transition-all"></i></a>
        </div>
      </div>

      <!-- Blog Card 3 -->
      <div data-aos="fade-up" data-aos-delay="200"
        class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
        <img src="/blog/saas3.png" alt="Mastering SaaS User Retention" class="rounded-xl mb-5 h-48 object-cover w-full" />
        <h3 class="text-xl font-semibold mb-2">Mastering SaaS User Retention</h3>
        <p class="text-sm text-gray-300 flex-grow">Deep dive into retention metrics, feedback loops, and onboarding strategies.</p>
        <a href="#" target="_blank" class="mt-5 inline-block text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">Read Full Blog</a>
        <div class="flex gap-4 justify-center mt-5">
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin text-blue-400 hover:text-white text-lg transition-all"></i></a>
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f text-blue-300 hover:text-white text-lg transition-all"></i></a>
          <a href="https://medium.com" target="_blank"><i class="fab fa-medium text-gray-400 hover:text-white text-lg transition-all"></i></a>
        </div>
      </div>

    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaFacebookF, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

const blogData = [
  {
    id: 1,
    title: 'Top SaaS Growth Hacks in 2025',
    description: 'Explore proven growth tactics and strategies used by top SaaS companies to scale fast.',
    image: '/blog/saas1.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      medium: 'https://medium.com',
    },
  },
  {
    id: 2,
    title: 'Design Systems that Scale',
    description: 'Learn how scalable design systems improve product consistency and team productivity.',
    image: '/blog/saas2.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      medium: 'https://medium.com',
    },
  },
  {
    id: 3,
    title: 'Mastering SaaS User Retention',
    description: 'Deep dive into retention metrics, feedback loops, and onboarding strategies.',
    image: '/blog/saas3.png',
    link: '#',
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      medium: 'https://medium.com',
    },
  },
];

export const BlogSaas = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">SaaS Insights</span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Discover practical advice and emerging tech insights in the SaaS world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogData.map((blog, index) => (
          <motion.div
            key={blog.id}
            data-aos="fade-up"
            data-aos-delay={'{index * 100}'}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
          > // add $ & replace single quate to template string =  data-aos-delay={'{index * 100}'} 

            <img src={blog.image} alt={blog.title} className="rounded-xl mb-5 h-48 object-cover w-full" />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{blog.description}</p>

            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
            >
              Read Full Blog
            </a>

            <div className="flex gap-4 justify-center mt-5">
              <a href={blog.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-400 hover:text-white transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-300 hover:text-white transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.medium} target="_blank" rel="noopener noreferrer">
                <FaMedium className="text-gray-400 hover:text-white transition-all duration-300" size={22} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="relative w-full min-h-screen py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">SaaS Insights</span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Discover practical advice and emerging tech insights in the SaaS world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogData.map((blog, index) => (
          <motion.div
            key={blog.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
          >
            <img src={blog.image} alt={blog.title} className="rounded-xl mb-5 h-48 object-cover w-full" />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{blog.description}</p>

            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
            >
              Read Full Blog
            </a>

            <div className="flex gap-4 justify-center mt-5">
              <a href={blog.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-400 hover:text-white transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-300 hover:text-white transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.medium} target="_blank" rel="noopener noreferrer">
                <FaMedium className="text-gray-400 hover:text-white transition-all duration-300" size={22} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
 </section>
}
 />
</>
 ) 
}

export function BlogDemoFive(){
 return(
<>
 <BlogComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Final Blog Component</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    rel="stylesheet"
  />
</head>
<body class="bg-gradient-to-b from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-500">

  <section class="w-full min-h-screen py-20 px-6">
    <div class="text-center mb-16 z-10 relative">
      <h2 class="text-4xl md:text-5xl font-extrabold">
        Explore <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Our Insights</span>
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Stories, strategies, and ideas from the frontlines of business and design.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10">

      <!-- Blog Card 1 -->
      <div class="relative p-6 rounded-2xl overflow-hidden border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

        <img src="/final1.jpg" alt="How to Build Brand Loyalty" class="w-full h-44 object-cover rounded-xl mb-5" />
        <h3 class="text-xl font-semibold mb-2">How to Build Brand Loyalty</h3>
        <p class="text-gray-700 dark:text-gray-300">Create long-term emotional connections between your business and customers.</p>
        <a href="https://your-video-link.com" target="_blank" class="mt-4 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">View Article</a>

        <div class="flex gap-4 justify-center mt-6 text-lg">
          <a href="#" class="text-blue-500 hover:text-black dark:hover:text-white"><i class="fab fa-x-twitter"></i></a>
          <a href="#" class="text-pink-500 hover:text-black dark:hover:text-white"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-red-500 hover:text-black dark:hover:text-white"><i class="fab fa-youtube"></i></a>
          <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"><i class="fab fa-github"></i></a>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div class="relative p-6 rounded-2xl overflow-hidden border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

        <img src="/final2.jpg" alt="Trends in UX Design 2025" class="w-full h-44 object-cover rounded-xl mb-5" />
        <h3 class="text-xl font-semibold mb-2">Trends in UX Design 2025</h3>
        <p class="text-gray-700 dark:text-gray-300">Explore futuristic UI/UX patterns to engage users more effectively.</p>
        <a href="https://your-video-link.com" target="_blank" class="mt-4 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">View Article</a>

        <div class="flex gap-4 justify-center mt-6 text-lg">
          <a href="#" class="text-blue-500 hover:text-black dark:hover:text-white"><i class="fab fa-x-twitter"></i></a>
          <a href="#" class="text-pink-500 hover:text-black dark:hover:text-white"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-red-500 hover:text-black dark:hover:text-white"><i class="fab fa-youtube"></i></a>
          <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"><i class="fab fa-github"></i></a>
        </div>
      </div>

      <!-- Blog Card 3 -->
      <div class="relative p-6 rounded-2xl overflow-hidden border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

        <img src="/final3.jpg" alt="Crafting Story-Driven Marketing" class="w-full h-44 object-cover rounded-xl mb-5" />
        <h3 class="text-xl font-semibold mb-2">Crafting Story-Driven Marketing</h3>
        <p class="text-gray-700 dark:text-gray-300">Boost conversions with compelling narrative-based marketing strategies.</p>
        <a href="https://your-video-link.com" target="_blank" class="mt-4 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">View Article</a>

        <div class="flex gap-4 justify-center mt-6 text-lg">
          <a href="#" class="text-blue-500 hover:text-black dark:hover:text-white"><i class="fab fa-x-twitter"></i></a>
          <a href="#" class="text-pink-500 hover:text-black dark:hover:text-white"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-red-500 hover:text-black dark:hover:text-white"><i class="fab fa-youtube"></i></a>
          <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"><i class="fab fa-github"></i></a>
        </div>
      </div>

    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const finalBlogs = [
  {
    id: 1,
    title: 'How to Build Brand Loyalty',
    description: 'Create long-term emotional connections between your business and customers.',
    image: '/final1.jpg',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    title: 'Trends in UX Design 2025',
    description: 'Explore futuristic UI/UX patterns to engage users more effectively.',
    image: '/final2.jpg',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    title: 'Crafting Story-Driven Marketing',
    description: 'Boost conversions with compelling narrative-based marketing strategies.',
    image: '/final3.jpg',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];

export const FinalBlogComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Our Insights</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Stories, strategies, and ideas from the frontlines of business and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10">
        {finalBlogs.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            data-aos-delay={'{index * 100}'}
            className="relative p-6 rounded-2xl overflow-hidden border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300 group"
          > // add $ & replace single quate to template string =  data-aos-delay={'{index * 100}'} 

            {/* Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />

            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover rounded-xl mb-5" />

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{blog.description}</p>

            {/* CTA */}
            <a
              href={blog.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              View Article
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-6">
              <a href={blog.socials.twitter}><FaXTwitter className="text-blue-500 hover:text-black dark:hover:text-white" size={22} /></a>
              <a href={blog.socials.instagram}><FaInstagram className="text-pink-500 hover:text-black dark:hover:text-white" size={22} /></a>
              <a href={blog.socials.youtube}><FaYoutube className="text-red-500 hover:text-black dark:hover:text-white" size={22} /></a>
              <a href={blog.socials.github}><FaGithub className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" size={22} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Our Insights</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Stories, strategies, and ideas from the frontlines of business and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10">
        {finalBlogs.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="relative p-6 rounded-2xl overflow-hidden border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            {/* Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />

            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover rounded-xl mb-5" />

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{blog.description}</p>

            {/* CTA */}
            <a
              href={blog.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              View Article
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-6">
              <a href={blog.socials.twitter}><FaXTwitter className="text-blue-500 hover:text-black dark:hover:text-white" size={22} /></a>
              <a href={blog.socials.instagram}><FaInstagram className="text-pink-500 hover:text-black dark:hover:text-white" size={22} /></a>
              <a href={blog.socials.youtube}><FaYoutube className="text-red-500 hover:text-black dark:hover:text-white" size={22} /></a>
              <a href={blog.socials.github}><FaGithub className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" size={22} /></a>
            </div>
          </div>
        ))}
      </div>
 </section>
}
 />
</>
 ) 
}

export function BlogDemSix(){
 return(
<>
 <BlogComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Startup Blogs</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Font Awesome CDN -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

  <!-- AOS Animation CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <!-- AOS Script -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      AOS.init({ duration: 1200, once: true });
    });
  </script>
</head>
<body class="bg-gradient-to-br from-white via-gray-100 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-white transition-colors duration-500">

  <section class="w-full min-h-screen px-6 py-20">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold">
        Startup <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Blogs</span>
      </h2>
      <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
        Insightful reads to fuel your journey from ideation to IPO.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

      <!-- Blog Card 1 -->
      <div class="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col" data-aos="zoom-in" data-aos-delay="0">
        <img src="/startup-blog-1.jpg" alt="5 Startup Growth Hacks That Work" class="w-full h-52 object-cover rounded-2xl mb-6" />
        <h3 class="text-xl font-bold mb-3">5 Startup Growth Hacks That Work</h3>
        <p class="text-gray-600 dark:text-gray-300 flex-grow">Discover actionable tactics to scale your startup efficiently with low-cost strategies.</p>
        <a href="#" class="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">Read More</a>
        <div class="flex gap-4 justify-center mt-6">
          <a href="https://twitter.com" target="_blank" class="text-cyan-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" class="text-pink-400 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com" target="_blank" class="text-red-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-youtube"></i></a>
          <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-github"></i></a>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div class="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col" data-aos="zoom-in" data-aos-delay="150">
        <img src="/startup-blog-2.jpg" alt="Pitch Deck Secrets for Startups" class="w-full h-52 object-cover rounded-2xl mb-6" />
        <h3 class="text-xl font-bold mb-3">Pitch Deck Secrets for Startups</h3>
        <p class="text-gray-600 dark:text-gray-300 flex-grow">Nail your investor pitch with tips on storytelling, design, and data that drive funding.</p>
        <a href="#" class="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">Read More</a>
        <div class="flex gap-4 justify-center mt-6">
          <a href="https://twitter.com" target="_blank" class="text-cyan-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" class="text-pink-400 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com" target="_blank" class="text-red-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-youtube"></i></a>
          <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-github"></i></a>
        </div>
      </div>

      <!-- Blog Card 3 -->
      <div class="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col" data-aos="zoom-in" data-aos-delay="300">
        <img src="/startup-blog-3.jpg" alt="Building a Product MVP That Wins" class="w-full h-52 object-cover rounded-2xl mb-6" />
        <h3 class="text-xl font-bold mb-3">Building a Product MVP That Wins</h3>
        <p class="text-gray-600 dark:text-gray-300 flex-grow">Learn the art of crafting a lean, testable MVP that proves value and attracts users.</p>
        <a href="#" class="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">Read More</a>
        <div class="flex gap-4 justify-center mt-6">
          <a href="https://twitter.com" target="_blank" class="text-cyan-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" class="text-pink-400 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com" target="_blank" class="text-red-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-youtube"></i></a>
          <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300"><i class="fab fa-github"></i></a>
        </div>
      </div>

    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

const blogDatas = [
  {
    id: 1,
    title: '5 Startup Growth Hacks That Work',
    description: 'Discover actionable tactics to scale your startup efficiently with low-cost strategies.',
    image: '/startup-blog-1.jpg',
    link: '#',
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    title: 'Pitch Deck Secrets for Startups',
    description: 'Nail your investor pitch with tips on storytelling, design, and data that drive funding.',
    image: '/startup-blog-2.jpg',
    link: '#',
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    title: 'Building a Product MVP That Wins',
    description: 'Learn the art of crafting a lean, testable MVP that proves value and attracts users.',
    image: '/startup-blog-3.jpg',
    link: '#',
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      github: 'https://github.com'
    }
  }
];

export const StartupBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen px-6 py-20 bg-gradient-to-br from-white via-gray-100 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Blogs</span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Insightful reads to fuel your journey from ideation to IPO.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogDatas.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="zoom-in"
            data-aos-delay={'{index * 150}'}
            className="rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 shadow-xl backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
          > // add $ & replace single quate to template string =  data-aos-delay={'{index * 100}'} 

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover rounded-2xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">
              {blog.description}
            </p>
            <a
              href={blog.link}
              className="mt-6 inline-block w-fit bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Read More
            </a>
            <div className="flex gap-4 justify-center mt-6">
              <a href={blog.socials.twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-cyan-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-400 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="relative w-full min-h-screen px-6 py-20 bg-gradient-to-br from-white via-gray-100 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Blogs</span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Insightful reads to fuel your journey from ideation to IPO.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogDatas.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="zoom-in"
            data-aos-delay={`${index * 150}`}
            className="rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 shadow-xl backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover rounded-2xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">
              {blog.description}
            </p>
            <a
              href={blog.link}
              className="mt-6 inline-block w-fit bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Read More
            </a>
            <div className="flex gap-4 justify-center mt-6">
              <a href={blog.socials.twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-cyan-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-400 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-500 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
              <a href={blog.socials.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-all duration-300" size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
  </section>
}
 />
</>
 ) 
}