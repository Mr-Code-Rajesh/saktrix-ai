// components/StartupSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function StartupSwiper() {
  const slides = [
    {
      icon: <FaLightbulb />,
      title: 'Innovative Ideas',
      desc: 'Fuel your startup with bold and disruptive thinking.',
    },
    {
      icon: <FaChartLine />,
      title: 'Scalable Growth',
      desc: 'Build fast, grow faster with our startup suite.',
    },
    {
      icon: <FaRocket />,
      title: 'Launch Ready',
      desc: 'Everything you need to launch in days, not months.',
    },
  ]

  return (
    <section className="bg-gradient-to-tr from-yellow-100 to-orange-200 dark:from-[#1a1a1a] dark:to-[#2b2b2b] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="rounded-xl"
        >
          {slides.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="w-80 bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl text-orange-500 dark:text-yellow-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
