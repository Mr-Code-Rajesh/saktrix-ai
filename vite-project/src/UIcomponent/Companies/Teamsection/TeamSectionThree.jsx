// components/MedicalTeamSection.jsx
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const doctors = [
  {
    name: 'Dr. Amelia Grace',
    specialty: 'Cardiologist',
    img: 'https://source.unsplash.com/200x200/?doctor,female',
    email: '#',
    linkedin: '#',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Pediatrician',
    img: 'https://source.unsplash.com/200x200/?doctor,male',
    email: '#',
    linkedin: '#',
  },
  {
    name: 'Dr. Sofia Zhang',
    specialty: 'Neurologist',
    img: 'https://source.unsplash.com/200x200/?healthcare,woman',
    email: '#',
    linkedin: '#',
  },
]

export default function MedicalTeamSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-blue-700 dark:text-white mb-6"
        >
          Our Medical Experts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
        >
          A compassionate, skilled, and experienced team of professionals.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{doc.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{doc.specialty}</p>
              <div className="flex justify-center gap-4 text-blue-500 dark:text-blue-300 text-xl mt-3">
                <a href={doc.linkedin} aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href={doc.email} aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
