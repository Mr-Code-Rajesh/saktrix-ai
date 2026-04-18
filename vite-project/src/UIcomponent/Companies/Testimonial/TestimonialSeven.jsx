// components/SaasTestimonial.jsx
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ella Roberts",
    company: "Cloudify Inc.",
    role: "CTO",
    image: "https://source.unsplash.com/100x100/?woman,tech",
    feedback:
      "Saktrix UI accelerated our frontend workflow by 3x. The components are sleek, fast, and easy to integrate.",
  },
  {
    name: "Derek Lune",
    company: "QuantumStack",
    role: "Lead Developer",
    image: "https://source.unsplash.com/100x100/?man,developer",
    feedback:
      "From day one, the design system felt like a natural fit. It's modern, responsive, and really intuitive.",
  },
  {
    name: "Tina Solis",
    company: "SaaSForge",
    role: "Product Manager",
    image: "https://source.unsplash.com/100x100/?business,woman",
    feedback:
      "The animations and UI feel delightful! Our users even complimented the clean look of our new interface.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function SaasTestimonial() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          What Our Clients Say
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={itemVariants}
            >
              <FaQuoteLeft className="text-cyan-500 text-2xl mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{item.feedback}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
