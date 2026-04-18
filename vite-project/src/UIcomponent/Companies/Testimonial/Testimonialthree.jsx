import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Naomi R.",
    role: "Holistic Therapist",
    text: "Their calm and focused approach made a real difference for our clinic's digital journey.",
    image: "https://source.unsplash.com/100x100/?woman,therapist",
  },
  {
    name: "Carlos Medina",
    role: "Yoga Instructor",
    text: "Their design feels like a breath of fresh air. Truly balanced and mindful execution.",
    image: "https://source.unsplash.com/100x100/?man,yoga",
  },
  {
    name: "Alina Wei",
    role: "Nutrition Expert",
    text: "A calming digital presence we needed — clean, respectful, and nurturing.",
    image: "https://source.unsplash.com/100x100/?woman,wellness",
  },
];

export default function WellnessTestimonial() {
  return (
    <div className="py-20 px-4 bg-gradient-to-bl from-green-100 to-indigo-100 dark:from-[#0f172a] dark:to-[#1e293b] transition-all duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-10"
      >
        <FiHeart className="inline-block text-pink-500 dark:text-pink-300 mr-2" />
        Wellness Voices
      </motion.h2>

      <Swiper
        effect="fade"
        pagination={{ clickable: true }}
        modules={[Pagination, EffectFade]}
        className="max-w-xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-slate-700 text-center"
            >
              <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6">
                “{item.text}”
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto rounded-full border-2 border-green-400 dark:border-green-500"
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
