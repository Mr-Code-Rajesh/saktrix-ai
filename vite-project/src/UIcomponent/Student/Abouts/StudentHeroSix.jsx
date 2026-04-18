import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const skills = [
  { subject: 'JavaScript', A: 85 },
  { subject: 'React', A: 80 },
  { subject: 'CSS/Tailwind', A: 90 },
  { subject: 'Git/GitHub', A: 75 },
  { subject: 'Firebase', A: 70 },
  { subject: 'Problem Solving', A: 88 },
];

export default function AboutRadarSkills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          My <span className="text-blue-500 dark:text-cyan-400">Skillset</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          A visual snapshot of the tools I love and use regularly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl h-[400px] sm:h-[450px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
            <PolarGrid stroke="#ccc" strokeOpacity={0.3} />
            <PolarAngleAxis dataKey="subject" stroke="#888" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Skill Level"
              dataKey="A"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}

{/* Notes 
 
  npm install recharts

*/}