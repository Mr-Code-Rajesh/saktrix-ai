// components/SaasTeamSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    desc: 'Leading our vision with strategic insight and unyielding determination.',
    image: 'https://source.unsplash.com/200x200/?woman,portrait',
  },
  {
    name: 'Michael Smith',
    role: 'CTO',
    desc: 'Innovating technology solutions that scale with our growth.',
    image: 'https://source.unsplash.com/200x200/?man,portrait',
  },
  {
    name: 'Sophia Lee',
    role: 'Product Manager',
    desc: 'Bridging ideas with execution to create outstanding products.',
    image: 'https://source.unsplash.com/200x200/?woman,tech',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    desc: 'Crafting elegant code and ensuring seamless performance.',
    image: 'https://source.unsplash.com/200x200/?man,developer',
  },
]

export default function SaasTeamSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-[#0f172a] dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Meet Our Expert Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          Our innovative SaaS team drives success with a blend of passion and expertise.
        </motion.p>

        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="rounded-xl overflow-hidden"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 mx-4 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500 dark:border-blue-400"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {member.desc}
                </p>
                {/* Fallback icon if needed */}
                <div className="mt-4 text-4xl text-gray-300 dark:text-gray-500">
                  <FaUserCircle />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
