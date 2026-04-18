// components/AISwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaRobot, FaBrain, FaNetworkWired } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

export default function AISwiper() {
  const slides = [
    {
      title: 'Cognitive AI',
      desc: 'Simulate human reasoning to automate complex tasks.',
      icon: <FaBrain />,
      image: 'https://source.unsplash.com/400x250/?ai,brain',
    },
    {
      title: 'Autonomous Systems',
      desc: 'Empower machines with independent decision-making.',
      icon: <FaRobot />,
      image: 'https://source.unsplash.com/400x250/?robotics,ai',
    },
    {
      title: 'Neural Networks',
      desc: 'Deep learning architecture for intelligent predictions.',
      icon: <FaNetworkWired />,
      image: 'https://source.unsplash.com/400x250/?neural-network,innovation',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-slate-800 dark:from-[#0e0f11] dark:to-[#1b1d1f] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          effect={'cube'}
          grabCursor={true}
          loop
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          modules={[EffectCube, Pagination, Autoplay]}
          className="swiper-cube"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="text-4xl text-teal-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
