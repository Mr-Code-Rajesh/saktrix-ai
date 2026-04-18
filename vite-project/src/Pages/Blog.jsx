import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const blogData = [
  {
    id: 1,
    title: 'Building AI Powered Chatbots',
    description: 'Learn how to create intelligent chatbots using cutting-edge AI technologies.',
    image: '/blog1.png', // Replace with your image
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: 'https://youtube.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 2,
    title: 'Automating Your Business with AI',
    description: 'Discover how automation can transform your business operations and increase efficiency.',
    image: '/blog2.png',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: 'https://youtube.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 3,
    title: 'Securing AI Systems',
    description: 'Best practices to ensure your AI solutions are secure, reliable, and ethical.',
    image: '/blog3.png',
    videoLink: 'https://your-video-link.com',
    socials: {
      youtube: 'https://youtube.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
];

export const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-950">

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
      
      {/* Section Title */}
      <div className=" z-10 relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Blogs</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Explore our insights and latest updates on AI, automation, and technology trends.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className=" z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogData.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl hover:scale-105 transition duration-300 flex flex-col"
          >
            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="rounded-2xl mb-6 w-full h-48 object-cover" />

            {/* Blog Title */}
            <h3 className="text-2xl font-bold text-white mb-4">{blog.title}</h3>

            {/* Blog Description */}
            <p className="text-gray-400 flex-grow">{blog.description}</p>

            {/* Visit Button */}
            <a
              href={blog.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Visit Blog
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-6">
               <a href={blog.socials.twitter} target="_blank" rel="noopener noreferrer">
                 <FaXTwitter className="text-blue-400 hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
               </a>
               <a href={blog.socials.instagram} target="_blank" rel="noopener noreferrer">
                 <FaInstagram className="text-pink-400 hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
               </a>
               <a href={blog.socials.youtube} target="_blank" rel="noopener noreferrer">
                 <FaYoutube className="text-red-500 hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
               </a>
               <a href={blog.socials.github} target="_blank" rel="noopener noreferrer">
                 <FaGithub className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
               </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};
