import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Elon Sparks",
    role: "CTO, NovaEdge",
    feedback:
      "The UI is ahead of its time. We loved how intuitive and sleek the whole platform feels!",
    image: "https://source.unsplash.com/100x100/?man,tech",
  },
  {
    name: "Maya Lennox",
    role: "Product Lead, QuantumLeap",
    feedback:
      "Their design system elevated our brand. Bold, fast, and responsive—just like our startup.",
    image: "https://source.unsplash.com/100x100/?woman,startup",
  },
  {
    name: "Drake Hollow",
    role: "AI Architect, SynthCore",
    feedback:
      "Every element feels intentional. It's a true fusion of design and technology.",
    image: "https://source.unsplash.com/100x100/?man,ai",
  },
];

export default function TechStartupTestimonial() {
  return (
    <div className="py-20 px-4 bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-[#000000] dark:via-[#1a1a40] dark:to-[#0f0c29] text-white transition-all duration-500">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-14 tracking-wide"
      >
        <FiZap className="inline-block mr-2 text-yellow-400 animate-pulse" />
        Startup Voices
      </motion.h2>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="max-w-sm sm:max-w-md md:max-w-xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1a2e] dark:bg-[#111827] text-white rounded-xl p-6 border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300 text-center space-y-5"
            >
              <p className="text-lg font-medium tracking-wide italic">"{item.feedback}"</p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 mx-auto"
              />
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-sm text-purple-300">{item.role}</span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
