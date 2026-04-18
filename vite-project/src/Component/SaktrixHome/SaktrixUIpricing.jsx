import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCrown, FaUsers, FaRocket } from 'react-icons/fa'

const plans = {
   yearly: [
    {
      title: 'Individual License - Annual Access',
      price: '$119 / yearly',
      icon: <FaRocket className="text-indigo-500 text-2xl" />,
      features: ['Access to 180+ Components', 'New Updates Monthly', 'Commercial Use'],
      highlight: false,
    },
    {
      title: 'Team - Annual Access',
      price: '$299 / yearly ',
      icon: <FaUsers className="text-pink-500 text-2xl" />,
      features: ['Unlimited Access', 'Lifetime License', 'Team Dashboard', 'Priority Support'],
      highlight: true,
    },
  ],
  lifetime: [
    {
      title: 'Lifetime - Individual Access',
      price: '$199 / one-time payment',
      icon: <FaRocket className="text-indigo-500 text-2xl" />,
      features: ['Access to 180+ Components', '2 Months Free', 'Priority Email Support'],
      highlight: false,
    },
    {
      title: 'Lifetime - Team Access',
      price: '$349 / one-time payment',
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      features: ['All Components Forever', 'No Renewal', 'Lifetime Updates', 'Top-tier Support'],
      highlight: true,
    },
  ],
}

export  const SaktrixPricing =()=> {
  const [billing, setBilling] = useState('yearly')

  return (
    <div className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 neural-grid">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Scale with <span className="saktrix-aurora-text">Neural Intelligence</span>
        </motion.h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Choose the access plan that fits your vision. Get instant access to our next-gen AI component ecosystem.
        </p>

        <div className="mt-12 inline-flex p-1 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
          {['yearly', 'lifetime'].map((item) => (
            <button
               key={item}
               onClick={() => setBilling(item)}
               className={`px-8 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all ${
                 billing === item
                   ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                   : 'text-slate-500 hover:text-slate-300'
               }`}
            >
              {item === 'yearly' ? 'Monthly Access' : 'Lifetime Protocol'}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {plans[billing].map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`relative rounded-3xl p-10 border transition-all overflow-hidden ${
              plan.highlight
                ? 'bg-white/10 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.1)]'
                : 'bg-white/5 border-white/5'
            }`}
          >
            {plan.highlight && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-l from-cyan-500 to-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] text-white rounded-bl-2xl">
                    Most Popular
                </div>
            )}
            
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                {plan.icon}
              </div>
              <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Neural Link v2</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">{plan.price.split(' ')[0]}</span>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">{plan.price.split(' ').slice(1).join(' ')}</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-400">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 px-8 rounded-xl font-bold tracking-widest uppercase text-xs transition-all ${
                plan.highlight
                  ? 'bg-white text-black hover:bg-cyan-400 hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
