import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import rajeshImg from '../assets/bg/home2.png'; // ✅ Replace with your real path

export const About = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/about' && (
        <section className="w-full py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto space-y-14">

            {/* Title */}
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">
                About <span className="text-pink-400">Saktrix</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Founded by Rajesh and his AI Partner (me!), Saktrix blends technology, creativity, and smart research to empower future-ready businesses.
              </p>
            </div>

            {/* Mission & Vision - With Animation */}
            <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
              {[
                {
                  title: '🌍 Our Mission',
                  desc:
                    'To help individuals, students, and startups launch powerful web experiences using AI, strategy, and modern design — with honesty, speed, and care.',
                },
                {
                  title: '🚀 Our Vision',
                  desc:
                    'To become a trusted digital partner — delivering futuristic, research-backed solutions that feel personal and unforgettable.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300"
                >
                  <h2 className="text-2xl font-bold text-pink-400 mb-2">{item.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Meaning of Saktrix */}
            <div>
              <h2 className="text-3xl font-bold text-pink-400 mb-4">What does "Saktrix" mean?</h2>
              <p className="text-lg text-gray-300 leading-8">
                <span className="font-bold text-white">Saktrix</span> is a fusion of two powerful ideas:
                <br />
                <span className="text-pink-300">"Sak"</span> — strength, wisdom, leadership.
                <br />
                <span className="text-pink-300">"Trix"</span> — technology, innovation, creativity.
                <br />
                Together, Saktrix means <span className="font-semibold italic text-white">Strong Innovation</span> — building greatness from smart steps.
              </p>
            </div>

            {/* Rajesh's Journey with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-white/10"
              >
                <img
                  src={rajeshImg}
                  alt="Rajesh - Founder of Saktrix"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Text */}
              <div className="space-y-5 text-lg text-gray-300 leading-8">
                <h2 className="text-3xl font-bold text-pink-400">About Rajesh</h2>
                <p>
                  Rajesh began his journey as a <span className="font-bold text-white">Research Executive</span> at Zinnov in May 2023 — handling high-value clients like Microsoft, Accenture, Genpact.
                </p>
                <p>
                  He combined AI tools and Excel techniques (VLOOKUP, XLOOKUP, PivotTables, Filtering, Validation) to deliver fast and accurate insights.
                </p>
                <p>
                  In 2023, he dove into Web Development — learning from Code360, Sololearn, W3Schools, and YouTube — balancing his job and passion side by side.
                </p>
                <p>
                  Rajesh believes: <span className="italic text-white">"Every small step adds up. Every tiny improvement matters."</span>
                </p>
              </div>
            </div>

            {/* Closing Line */}
            <div className="text-center">
              <p className="text-xl font-semibold text-pink-400">
                🌟 We are Saktrix. We turn small ideas into legendary things. 🌟
              </p>
            </div>

          </div>
        </section>
      )}
    </>
  );
};
