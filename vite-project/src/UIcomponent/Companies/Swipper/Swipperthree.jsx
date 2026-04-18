// components/MedicalSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaCapsules, FaVials } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

export default function MedicalSwiper() {
  const features = [
    {
      icon: <FaHeartbeat />,
      title: 'Cardio Care',
      desc: 'Advanced monitoring and care for heart health.',
    },
    {
      icon: <FaCapsules />,
      title: 'Pharmacy',
      desc: 'Quick and reliable access to prescribed medicine.',
    },
    {
      icon: <FaVials />,
      title: 'Lab Tests',
      desc: 'Accurate diagnostics and lab reporting on demand.',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-[#0f172a] dark:to-[#164e63] py-20">
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[EffectCube, Pagination, Autoplay]}
          effect="cube"
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          className="rounded-xl"
        >
          {features.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="flex justify-center items-center h-[320px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 text-center max-w-sm"
              >
                <div className="text-4xl text-cyan-600 dark:text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
