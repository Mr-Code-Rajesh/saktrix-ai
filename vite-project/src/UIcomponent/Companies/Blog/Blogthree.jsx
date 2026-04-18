import { useEffect } from 'react';
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
  );
};
