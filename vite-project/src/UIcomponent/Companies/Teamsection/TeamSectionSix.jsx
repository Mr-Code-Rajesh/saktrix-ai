// components/CreativeTeamSection.jsx
import { motion } from 'framer-motion'
import { FaInstagram, FaDribbble, FaEnvelope } from 'react-icons/fa'

const creativeTeam = [
  {
    name: 'Riley Storm',
    role: 'Creative Director',
    img: 'https://source.unsplash.com/200x200/?portrait,artist',
    instagram: '#',
    dribbble: '#',
    email: '#',
  },
  {
    name: 'Kai Mendez',
    role: 'Visual Designer',
    img: 'https://source.unsplash.com/200x200/?designer,person',
    instagram: '#',
    dribbble: '#',
    email: '#',
  },
  {
    name: 'Zoe Nova',
    role: 'Motion Artist',
    img: 'https://source.unsplash.com/200x200/?creative,woman',
    instagram: '#',
    dribbble: '#',
    email: '#',
  },
]

export default function CreativeTeamSection() {
  return (
    <section className="bg-gradient-to-br from-fuchsia-100 to-purple-100 dark:from-purple-900 dark:to-fuchsia-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-fuchsia-800 dark:text-white mb-4"
        >
          Our Colorful Crew
        </motion.h2>
        <p className="text-center text-purple-700 dark:text-purple-200 mb-12 max-w-2xl mx-auto">
          Passion meets design in our wildly talented team of creators.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {creativeTeam.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-3xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-fuchsia-500 dark:border-fuchsia-300 mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-900 dark:text-white">{member.name}</h3>
              <p className="text-sm text-fuchsia-600 dark:text-fuchsia-300 italic">{member.role}</p>
              <div className="mt-4 flex justify-center gap-4 text-2xl text-fuchsia-500 dark:text-fuchsia-300">
                <a href={member.instagram}><FaInstagram className="hover:text-pink-600" /></a>
                <a href={member.dribbble}><FaDribbble className="hover:text-purple-600" /></a>
                <a href={member.email}><FaEnvelope className="hover:text-indigo-500" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
