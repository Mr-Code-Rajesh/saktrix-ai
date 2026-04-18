import { useEffect } from 'react';
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
  );
};
