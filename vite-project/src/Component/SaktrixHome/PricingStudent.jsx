import { motion } from 'framer-motion'
import { FaUserGraduate, FaCode } from 'react-icons/fa'

const studentPlans = [
  {
    name: 'Basic Portfolio',
    price: '$9',
    icon: <FaUserGraduate className="text-indigo-500 text-2xl" />,
    features: [
      'Responsive Design',
      'HTML/CSS/JS/React',
      'Contact Form Included',
      'Email Support'
    ],
    highlight: false,
  },
  {
    name: 'Portfolio + 1 React Project',
    price: '$19',
    icon: <FaCode className="text-pink-500 text-2xl" />,
    features: [
      'All from Basic Plan',
      'Includes 1 Mini React Project',
      'Project with Functional Logic',
      'Built for Student Showcases'
    ],
    highlight: true,
  },
]

export const StudentPricing =()=> {
  return (
    <div className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 neural-grid relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -track-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Educational <span className="saktrix-aurora-text">Protocols</span>
        </motion.h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto mb-16">
          Specialized deployment packages for the next generation of neural architects and developers.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {studentPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`rounded-[2.5rem] p-10 transition-all border relative overflow-hidden group ${
              plan.highlight
                ? 'bg-white/10 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.2)]'
                : 'bg-white/5 border-white/5'
            }`}
          >
            {plan.highlight && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-l from-indigo-500 to-purple-600 text-[10px] font-black uppercase tracking-widest text-white rounded-bl-2xl">
                    Elite Student
                </div>
            )}
            
            <div className="flex items-center justify-between mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-indigo-500/10 transition-colors">
                {plan.icon}
              </div>
              <div className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center text-[10px] font-black text-slate-700">
                {index + 1}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">/ Neural Term</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 px-8 rounded-2xl font-black tracking-[0.2em] uppercase text-[10px] transition-all ${
                plan.highlight
                  ? 'bg-white text-black hover:bg-indigo-400 hover:text-white shadow-[0_0_25px_rgba(255,255,255,0.1)]'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              Initialize Access
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
