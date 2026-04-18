// components/FinanceSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaPiggyBank, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function FinanceSwiper() {
  const slides = [
    {
      title: 'Smart Investments',
      desc: 'Tailored portfolios to maximize your financial growth.',
      icon: <FaChartLine />,
      image: 'https://source.unsplash.com/400x250/?finance,stock',
    },
    {
      title: 'Secure Savings',
      desc: 'High-yield accounts with premium-grade security.',
      icon: <FaPiggyBank />,
      image: 'https://source.unsplash.com/400x250/?banking,money',
    },
    {
      title: 'Risk Protection',
      desc: 'Insure your wealth with trusted coverage plans.',
      icon: <FaShieldAlt />,
      image: 'https://source.unsplash.com/400x250/?insurance,security',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 dark:from-[#0e1013] dark:to-[#1a1c1f] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          loop
          className="rounded-xl"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <div className="text-3xl text-emerald-600 dark:text-emerald-400 mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
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
