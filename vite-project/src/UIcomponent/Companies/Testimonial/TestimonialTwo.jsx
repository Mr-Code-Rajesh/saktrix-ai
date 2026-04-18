import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aria Black",
    role: "Creative Director, Modehaus",
    text: "Luxury meets edge. Their visual storytelling elevated our brand presence instantly.",
    image: "https://source.unsplash.com/100x100/?fashion,model",
  },
  {
    name: "Zane Bishop",
    role: "Founder, Edgewear",
    text: "They understood bold fashion better than any agency we’ve worked with. Stellar visuals!",
    image: "https://source.unsplash.com/100x100/?man,fashion",
  },
  {
    name: "Kylie Raye",
    role: "Brand Manager, TrendSpire",
    text: "It’s not just beautiful — it's smart design that sells. Loved every pixel of it.",
    image: "https://source.unsplash.com/100x100/?woman,style",
  },
];

export default function FashionTestimonial() {
  return (
    <div className="py-24 px-4 bg-black dark:bg-gray-950 text-white transition-all duration-500">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center uppercase tracking-wide mb-16"
      >
        <FiStar className="inline-block text-yellow-400 mr-2" />
        Fashion Pulse
      </motion.h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-72 sm:w-80 md:w-96"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all"
            >
              <p className="italic text-base mb-6">“{item.text}”</p>
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
