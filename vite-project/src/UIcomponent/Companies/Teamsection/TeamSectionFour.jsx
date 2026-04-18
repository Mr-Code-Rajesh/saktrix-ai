    // components/MarketingTeamSection.jsx
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa'

const marketers = [
  {
    name: 'Ava Scott',
    role: 'Social Media Strategist',
    img: 'https://source.unsplash.com/200x200/?marketing,woman',
    twitter: '#',
    instagram: '#',
    behance: '#',
  },
  {
    name: 'Leo Torres',
    role: 'Creative Director',
    img: 'https://source.unsplash.com/200x200/?creative,man',
    twitter: '#',
    instagram: '#',
    behance: '#',
  },
  {
    name: 'Maya Chen',
    role: 'Brand Manager',
    img: 'https://source.unsplash.com/200x200/?woman,branding',
    twitter: '#',
    instagram: '#',
    behance: '#',
  },
]

export default function MarketingTeamSection() {
  return (
    <section className="bg-gradient-to-tr from-pink-100 to-violet-200 dark:from-purple-900 dark:to-indigo-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-violet-800 dark:text-white mb-6"
        >
          Meet the Creative Minds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14"
        >
          Our dynamic team crafts campaigns that connect, convert, and inspire.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {marketers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-violet-400 mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">{member.name}</h3>
              <p className="text-sm text-center text-pink-600 dark:text-pink-400 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-pink-500 dark:text-pink-300 text-xl">
                <a href={member.instagram}><FaInstagram className="hover:text-white hover:scale-110 transition" /></a>
                <a href={member.twitter}><FaTwitter className="hover:text-white hover:scale-110 transition" /></a>
                <a href={member.behance}><FaBehance className="hover:text-white hover:scale-110 transition" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
