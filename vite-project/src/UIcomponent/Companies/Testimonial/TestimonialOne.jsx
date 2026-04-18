import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import { motion } from "framer-motion";
import { FiUserCheck } from "react-icons/fi";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Karen Steele",
    role: "CFO, Evergrowth Capital",
    feedback:
      "Their understanding of financial UX made our portal seamless and secure.",
    image: "https://source.unsplash.com/100x100/?woman,business",
  },
  {
    name: "Marcus Trent",
    role: "VP, LegalFlow",
    feedback:
      "Professional, fast, and compliant. A partner we trust with our digital face.",
    image: "https://source.unsplash.com/100x100/?man,suit",
  },
  {
    name: "Lena Ko",
    role: "Operations Head, VaultSecure",
    feedback:
      "Their clean UI helped us communicate security and trust to our clients better.",
    image: "https://source.unsplash.com/100x100/?woman,corporate",
  },
  {
    name: "Raymond Chu",
    role: "CEO, BlueShield Finance",
    feedback:
      "The calm, reliable aesthetic boosted our credibility significantly.",
    image: "https://source.unsplash.com/100x100/?man,finance",
  },
];

export default function CorporateTestimonial() {
  return (
    <div className="py-20 px-4 bg-gradient-to-tr from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        <FiUserCheck className="inline-block mr-2 text-blue-500 dark:text-blue-400" />
        Trusted by Professionals
      </motion.h2>

      <Swiper
        modules={[Grid, Pagination]}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: { rows: 2 },
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                “{item.feedback}”
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border border-blue-400"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h4>
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
