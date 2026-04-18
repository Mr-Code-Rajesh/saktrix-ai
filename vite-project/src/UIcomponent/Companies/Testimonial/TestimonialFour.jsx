import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FiSmile } from "react-icons/fi";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Lia Verity",
    role: "Creative Director, VividHue",
    feedback:
      "Their energy is contagious. Our brand has never looked so alive and expressive!",
    image: "https://source.unsplash.com/100x100/?woman,artist",
  },
  {
    name: "Jake Newton",
    role: "Visual Designer, MoodPop",
    feedback:
      "Designers that speak your language. They brought our dream campaign to life.",
    image: "https://source.unsplash.com/100x100/?man,designer",
  },
  {
    name: "Tara Singh",
    role: "Brand Manager, ColorCraft",
    feedback:
      "The attention to creativity and color theory made all the difference for us.",
    image: "https://source.unsplash.com/100x100/?creative,agency",
  },
];

export default function CreativeAgencyTestimonial() {
  return (
    <div className="py-20 px-5 bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-100 dark:from-[#2e1065] dark:via-[#5b21b6] dark:to-[#9f1239] transition-all duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-12"
      >
        <FiSmile className="inline-block text-pink-500 dark:text-pink-300 mr-2 animate-bounce" />
        Happy Creative Clients
      </motion.h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-violet-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-orange-300 dark:border-violet-600"
            >
              <p className="text-gray-700 dark:text-gray-100 italic text-lg mb-4">
                “{item.feedback}”
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-pink-400 dark:border-pink-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
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
