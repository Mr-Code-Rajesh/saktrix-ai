// components/InnovationTeamSection.jsx
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa'

const aiTeam = [
  {
    name: 'Dr. Elara Syn',
    role: 'AI Architect',
    image: 'https://source.unsplash.com/200x200/?tech,face',
    linkedin: '#',
    github: '#',
    website: '#',
  },
  {
    name: 'Nova Qin',
    role: 'ML Researcher',
    image: 'https://source.unsplash.com/200x200/?engineer,ai',
    linkedin: '#',
    github: '#',
    website: '#',
  },
  {
    name: 'Aiden Flux',
    role: 'Robotics Engineer',
    image: 'https://source.unsplash.com/200x200/?robot,face',
    linkedin: '#',
    github: '#',
    website: '#',
  },
]

export default function InnovationTeamSection() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-950 dark:from-gray-950 dark:to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-cyan-400 mb-6"
        >
          Minds Behind the Machine
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Meet the future architects driving innovation in artificial intelligence and machine learning.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {aiTeam.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/5 dark:bg-white/10 rounded-xl backdrop-blur-lg shadow-[0_0_25px_rgba(0,255,255,0.2)] p-6 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-cyan-400 mb-4"
              />
              <h3 className="text-xl font-semibold text-cyan-300">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
              <div className="mt-4 flex justify-center gap-4 text-cyan-400 text-xl">
                <a href={member.linkedin} aria-label="LinkedIn">
                  <FaLinkedinIn className="hover:text-cyan-300" />
                </a>
                <a href={member.github} aria-label="GitHub">
                  <FaGithub className="hover:text-cyan-300" />
                </a>
                <a href={member.website} aria-label="Website">
                  <FaGlobe className="hover:text-cyan-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
