// components/FinanceTeamSection.jsx
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa'

const financeTeam = [
  {
    name: 'Daniel Walker',
    role: 'Chief Financial Officer',
    img: 'https://source.unsplash.com/200x200/?man,business',
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Sophia Liu',
    role: 'Investment Strategist',
    img: 'https://source.unsplash.com/200x200/?woman,finance',
    linkedin: '#',
    email: '#',
  },
  {
    name: 'James Patel',
    role: 'Risk Analyst',
    img: 'https://source.unsplash.com/200x200/?business,man',
    linkedin: '#',
    email: '#',
  },
]

export default function FinanceTeamSection() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-blue-50 dark:from-gray-900 dark:to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center text-slate-800 dark:text-white mb-4"
        >
          Meet Our Executive Team
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-14 max-w-xl mx-auto">
          Trusted professionals managing strategy, compliance, and growth.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {financeTeam.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-400 dark:border-blue-600 mb-4"
              />
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">{member.name}</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">{member.role}</p>
              <div className="mt-4 flex justify-center gap-4 text-blue-600 dark:text-blue-300 text-xl">
                <a href={member.linkedin}><FaLinkedin className="hover:text-blue-800 dark:hover:text-white transition" /></a>
                <a href={member.email}><FaEnvelope className="hover:text-blue-800 dark:hover:text-white transition" /></a>
                <FaBriefcase className="cursor-default opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
