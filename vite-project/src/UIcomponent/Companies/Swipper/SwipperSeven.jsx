// components/CreativePortfolioSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaPaintBrush, FaCameraRetro, FaPenFancy } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function CreativePortfolioSwiper() {
  const slides = [
    {
      title: 'Digital Art',
      desc: 'Expressive visuals and futuristic compositions.',
      icon: <FaPaintBrush />,
      image: 'https://source.unsplash.com/400x250/?digital-art,creative',
    },
    {
      title: 'Photography',
      desc: 'Capture life in stunning visual clarity.',
      icon: <FaCameraRetro />,
      image: 'https://source.unsplash.com/400x250/?photography,portfolio',
    },
    {
      title: 'Illustration',
      desc: 'Detailed and expressive artwork for brands.',
      icon: <FaPenFancy />,
      image: 'https://source.unsplash.com/400x250/?illustration,sketch',
    },
  ]

  return (
    <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 dark:from-[#1a1a1a] dark:to-[#2d2d2d] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop
          autoplay={{ delay: 4000 }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper-container"
        >
          {slides.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-white dark:bg-black rounded-2xl w-[300px] h-[400px] shadow-xl flex flex-col overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="text-3xl text-indigo-500 dark:text-pink-400 mb-4 text-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
