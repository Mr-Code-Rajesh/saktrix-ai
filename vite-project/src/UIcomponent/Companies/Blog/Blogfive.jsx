import { useEffect } from 'react';
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
            key={blog.id}
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
  );
};
