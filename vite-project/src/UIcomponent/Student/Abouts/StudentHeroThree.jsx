import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';

export default function AboutTimeline() {
  const timeline = [
    {
      year: "2021",
      title: "Started CS Degree",
      description: "Began my journey into Computer Science and software engineering.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2022",
      title: "Built First React App",
      description: "Learned JavaScript and React, created a personal task manager app.",
      icon: <FaLaptopCode />,
    },
    {
      year: "2023",
      title: "Intern @ Startup",
      description: "Worked as a frontend intern at a local tech startup building UI components.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-blue-600 dark:text-cyan-400">Journey</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A timeline of my learning and growing as a student developer.
          </p>
        </div>

        <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 relative"
            >
              <div className="absolute -left-[29px] top-1 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg dark:bg-cyan-500">
                {item.icon}
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold">{item.year} – {item.title}</h3>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
