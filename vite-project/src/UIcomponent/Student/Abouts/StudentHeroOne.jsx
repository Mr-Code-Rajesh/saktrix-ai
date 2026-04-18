import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 80 },
  { name: 'React', icon: <FaReact />, level: 75 },
];

export default function AboutClassic() {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/student-avatar.png"
            alt="Student Avatar"
            className="w-full max-w-sm mx-auto rounded-2xl shadow-xl dark:shadow-blue-900"
          />
        </motion.div>

        {/* Bio & Skills */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate student developer focused on building web interfaces that are both functional and visually impressive. With a strong foundation in frontend tech, I love bringing designs to life.
          </p>

          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2 text-base font-medium">
                    {skill.icon} <span>{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
