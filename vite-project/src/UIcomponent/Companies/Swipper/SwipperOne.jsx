// components/SaasSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function SaasSwiper() {
  const items = [
    {
      title: 'Boost Productivity',
      desc: 'Automate tasks and streamline workflows with our SaaS platform.',
      icon: <FaRocket />,
    },
    {
      title: 'Scale Effortlessly',
      desc: 'Grow your business with tools built to scale.',
      icon: <FaRocket />,
    },
    {
      title: 'Secure & Reliable',
      desc: 'Enterprise-grade encryption and 99.9% uptime guaranteed.',
      icon: <FaRocket />,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-300 dark:from-[#0f172a] dark:to-[#1e3a8a] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          loop
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          className="rounded-lg overflow-hidden"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-10 text-center text-gray-800 dark:text-gray-100"
              >
                <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
