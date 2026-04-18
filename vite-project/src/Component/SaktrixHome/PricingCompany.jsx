import { motion } from 'framer-motion'
import { FaGlobe, FaUnlockAlt } from 'react-icons/fa'

const demoPlans = [
  {
    name: 'Single Demo Access',
    price: '$49',
    icon: <FaGlobe className="text-cyan-500 text-2xl" />,
    features: [
      '1 Full Website Demo',
      'SEO Optimized',
      'Responsive Layout',
      'Lifetime Access to That Demo'
    ],
    highlight: false,
  },
  {
    name: 'Full Access (All Demos)',
    price: '$399',
    icon: <FaUnlockAlt className="text-yellow-400 text-2xl" />,
    features: [
      'Access to ALL Demo Websites',
      'Unlimited Usage',
      'New Demos Monthly',
      'Lifetime License + Priority Support'
    ],
    highlight: true,
  },
]

export const DemoPricing = ()=> {
  return (
    <div className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 neural-grid relative overflow-hidden">
      <div className="absolute top-0 right-1/2 -track-x-1/2 w-full h-[1px] bg-gradient-to-l from-transparent via-indigo-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Industry <span className="saktrix-aurora-text">Accelerators</span>
        </motion.h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto mb-16">
          Premium full-stack website demos tailored for specialized industry verticals and high-growth startups.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {demoPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`rounded-[2.5rem] p-10 transition-all border relative overflow-hidden group ${
              plan.highlight
                ? 'bg-white/10 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.2)]'
                : 'bg-white/5 border-white/5'
            }`}
          >
            {plan.highlight && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-l from-cyan-500 to-indigo-600 text-[10px] font-black uppercase tracking-widest text-white rounded-bl-2xl">
                    Unlimited Pass
                </div>
            )}
            
            <div className="flex items-center justify-between mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-cyan-500/10 transition-colors">
                {plan.icon}
              </div>
              <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
                Protocol v3.0
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">/ Neural Sync</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 px-8 rounded-2xl font-black tracking-[0.2em] uppercase text-[10px] transition-all ${
                plan.highlight
                  ? 'bg-white text-black hover:bg-cyan-400 hover:text-white shadow-[0_0_25px_rgba(255,255,255,0.1)]'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.name === 'Full Access (All Demos)' ? 'Unlock Multi-Verse' : 'Synchronize Demo'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
