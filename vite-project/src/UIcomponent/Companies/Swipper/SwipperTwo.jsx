// components/DigitalMarketingSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaBullhorn, FaChartPie, FaSearchDollar } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'

export default function DigitalMarketingSwiper() {
  const slides = [
    {
      title: 'SEO Optimization',
      desc: 'Boost your visibility on search engines with smart SEO strategies.',
      icon: <FaSearchDollar />,
      image: 'https://source.unsplash.com/400x250/?seo,marketing',
    },
    {
      title: 'Campaign Strategy',
      desc: 'Craft, launch, and manage ads that convert leads to loyal customers.',
      icon: <FaBullhorn />,
      image: 'https://source.unsplash.com/400x250/?campaign,digital',
    },
    {
      title: 'Analytics Insights',
      desc: 'Make data-driven decisions with powerful marketing analytics.',
      icon: <FaChartPie />,
      image: 'https://source.unsplash.com/400x250/?analytics,data',
    },
  ]

  return (
    <section className="bg-gradient-to-r from-pink-100 via-rose-200 to-purple-200 dark:from-[#1a1a1a] dark:to-[#2b2b2b] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[EffectFlip, Pagination, Autoplay]}
          effect="flip"
          grabCursor
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-lg"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <div className="text-4xl text-rose-500 dark:text-pink-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
