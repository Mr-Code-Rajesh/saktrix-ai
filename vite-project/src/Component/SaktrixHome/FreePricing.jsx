import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCube, FaBolt, FaCreditCard, FaRocket, FaCrown } from 'react-icons/fa'

const freeComponents = [
  { name: 'Hero Section', icon: <FaRocket />, type: 'free' },
  { name: 'Login Form', icon: <FaCube />, type: 'free' },
  { name: 'CTA Banner', icon: <FaBolt />, type: 'free' },
  { name: 'Simple Card', icon: <FaCreditCard />, type: 'free' },
]

const premiumComponents = [
  { name: 'Pricing Table', icon: <FaCrown />, type: 'pro' },
  { name: 'Advanced Form Wizard', icon: <FaBolt />, type: 'pro' },
  { name: 'Testimonial Slider', icon: <FaCube />, type: 'pro' },
  { name: 'Animated Feature Grid', icon: <FaRocket />, type: 'pro' },
]

export  const FreeForever =()=> {
  const [type, setType] = useState('free')

  const components = type === 'free' ? freeComponents : premiumComponents

  return (
    <div className="bg-slate-950 py-24 px-6 neural-grid relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Open <span className="saktrix-aurora-text">Source Protocol</span>
        </motion.h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Begin your journey with the Saktrix core ecosystem. Access fundamental neural components at zero cost.
        </p>

        <div className="mt-6 inline-flex p-1 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
          <button
            onClick={() => setType('free')}
            className={`px-8 py-2.5 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all ${
              type === 'free' ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Saktrix Core
          </button>
          <button
            onClick={() => setType('pro')}
            className={`px-8 py-2.5 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all ${
              type === 'pro' ? 'bg-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Saktrix Elite
          </button>
        </div>
      </div>

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {components.map((comp, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl border transition-all relative overflow-hidden group ${
              comp.type === 'pro'
                ? 'bg-white/10 border-cyan-500/30'
                : 'bg-white/5 border-white/5'
            }`}
          >
            <div className={`p-4 rounded-2xl w-fit mb-6 bg-white/5 border border-white/5 group-hover:bg-indigo-500/10 transition-colors ${
                comp.type === 'pro' ? 'group-hover:bg-cyan-500/10' : ''
            }`}>
                <div className="text-2xl text-white">{comp.icon}</div>
            </div>
            <h4 className="text-lg font-bold text-white mb-4">{comp.name}</h4>
            <span
              className={`text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase ${
                comp.type === 'free'
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/20'
                  : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
              }`}
            >
              {comp.type === 'free' ? 'Protocol Access' : 'Neural Elite'}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
