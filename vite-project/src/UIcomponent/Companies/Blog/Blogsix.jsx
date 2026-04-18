import { useEffect } from 'react';
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
  );
};
