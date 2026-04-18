import { useEffect } from 'react';
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
  );
};
