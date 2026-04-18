import { motion } from 'framer-motion';
import { FaMousePointer, FaCode, FaEdit } from 'react-icons/fa';

const steps = [
  {
    title: 'Pick a Component',
    description: 'Browse 100+ beautiful UI components tailored for modern web apps.',
    icon: <FaMousePointer size={30} className="text-indigo-500" />,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    title: 'Copy the Code',
    description: 'Get production-ready React + Tailwind code with a single click.',
    icon: <FaCode size={30} className="text-pink-500" />,
    gradient: 'from-pink-500 via-red-500 to-yellow-500',
  },
  {
    title: 'Customize Freely',
    description: 'Easily update styles, animations, and structure for your brand.',
    icon: <FaEdit size={30} className="text-yellow-500" />,
    gradient: 'from-yellow-400 via-green-400 to-blue-400',
  },
];

export const  HowItWorks = ()=> {
  return (
    <section className="py-24 bg-slate-950 neural-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Your Path to <span className="saktrix-aurora-text">Neural Perfection</span>
        </motion.h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto mb-16">
          Launch sophisticated interfaces in record time with our streamlined copy-paste-deploy workflow.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
          {/* Connection Lines (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 glass-card p-10 rounded-3xl group hover:border-cyan-500/30 transition-all"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center text-[10px] font-black text-white group-hover:border-cyan-500 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/5 mx-auto mb-8 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all transform group-hover:rotate-6">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              
              {/* Bottom Glow */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r ${step.gradient} opacity-20 group-hover:opacity-100 transition-opacity rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
