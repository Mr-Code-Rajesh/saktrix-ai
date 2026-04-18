// components/StartupTeamSection.jsx
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const team = [
  {
    name: 'Nina Patel',
    role: 'Co-Founder & Visionary',
    img: 'https://source.unsplash.com/200x200/?woman,startup',
    bio: 'Drives strategic direction with creativity and business acumen.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Leo Martinez',
    role: 'Full Stack Developer',
    img: 'https://source.unsplash.com/200x200/?man,developer',
    bio: 'Bridges backend logic and frontend experience with clean code.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Ivy Chen',
    role: 'Growth Marketer',
    img: 'https://source.unsplash.com/200x200/?woman,marketing',
    bio: 'Expert in viral loops, funnels, and startup user growth.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
]

export default function StartupTeamSection() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-white dark:from-[#0f172a] dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Our Startup Heroes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          Small team. Big vision. We’re the faces behind the next disruption.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-pink-500 dark:border-pink-400 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {member.bio}
              </p>
              <div className="flex justify-center gap-4 text-pink-500 dark:text-pink-400 text-xl">
                <a href={member.socials.twitter}>
                  <FaTwitter />
                </a>
                <a href={member.socials.linkedin}>
                  <FaLinkedin />
                </a>
                <a href={member.socials.github}>
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
