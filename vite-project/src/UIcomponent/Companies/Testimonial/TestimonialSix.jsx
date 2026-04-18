import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amanda Charles",
    title: "Chief Financial Officer",
    text: "Their strategic insights have transformed our approach. Exceptional service and dedication!",
    image: "https://source.unsplash.com/100x100/?woman,professional"
  },
  {
    name: "Michael Reynolds",
    title: "Investment Analyst",
    text: "Outstanding attention to detail and a deep understanding of the market. Highly recommend.",
    image: "https://source.unsplash.com/100x100/?man,business"
  },
  {
    name: "Sophia Li",
    title: "Risk Consultant",
    text: "Professional, prompt, and forward-thinking. A true partner in our success.",
    image: "https://source.unsplash.com/100x100/?businesswoman"
  },
];

export default function CorporateTestimonial() {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] dark:from-[#0f172a] dark:to-[#1e293b] transition-all duration-500">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="w-80">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-60 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center text-center space-y-4 border border-gray-200 dark:border-slate-700"
            >
              <FaQuoteLeft className="text-3xl text-blue-500 dark:text-blue-400" />
              <p className="text-gray-600 dark:text-gray-300 italic">"{item.text}"</p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 dark:border-blue-400"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.title}</span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
