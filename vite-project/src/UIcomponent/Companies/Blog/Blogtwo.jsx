import { useEffect } from 'react';
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
  );
};
