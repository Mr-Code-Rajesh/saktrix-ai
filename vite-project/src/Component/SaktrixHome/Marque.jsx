import { motion } from 'framer-motion';
import { MdVerified } from 'react-icons/md';
import { useRef } from 'react';
import { BsTwitterX } from 'react-icons/bs'; // Custom X icon
import { FaCheckCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Amritpal Chera',
    username: '@achera23',
    message: 'This looks crazy good! Congrats on the launch 🎉',
    image: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Taishi JPCA',
    username: '@taishik_',
    message: 'Congrats Dillon! Just bought one! This is fire 🔥',
    image: 'https://i.pravatar.cc/150?img=15',
  },
  {
    name: 'Sully',
    username: '@SullyOmarr',
    message: 'Bro these are cleeaann 👏',
    image: 'https://i.pravatar.cc/150?img=20',
  },
  {
    name: 'Weston Walker',
    username: '@wes_walk',
    message: 'Beautiful. Well done 💯',
    image: 'https://i.pravatar.cc/150?img=25',
  },
  {
    name: 'Gonçalo Margalho',
    username: '@DevAlien',
    message: 'Just bought it, keep delivering! Looking forward to testing it out.',
    image: 'https://i.pravatar.cc/150?img=30',
  },
  {
    name: 'Fred Maia',
    username: '@fredmaiaarantes',
    message: 'Exactly what I needed! Clean and fast. Thanks for sharing! 🚀',
    image: 'https://i.pravatar.cc/150?img=35',
  },
];

export const TestimonialsMarquee = ()=> {
  const marqueeRef = useRef(null);

  return (
    <section className="w-full overflow-hidden py-24 bg-slate-950/50 neural-grid">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted by <span className="saktrix-aurora-text">Innovators</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Join the elite developers building the future of AI interfaces with Saktrix UI.
        </p>
      </div>

      <div
        ref={marqueeRef}
        className="group relative flex overflow-x-hidden whitespace-nowrap py-10"
      >
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4 animate-marquee group-hover:[animation-play-state:paused]"
          animate={{ x: [0, -1035] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {testimonials.concat(testimonials).map((item, index) => (
            <div
              key={index}
              className="min-w-[350px] glass-card p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group/card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-40 group-hover/card:opacity-100 transition duration-500" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative w-12 h-12 rounded-full object-cover border-2 border-slate-900"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.username}</p>
                </div>
                <MdVerified className="text-cyan-400 text-xl" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-normal italic">"{item.message}"</p>
              
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <BsTwitterX className="text-slate-600 group-hover/card:text-white transition-colors" />
                <span className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">Neural Verified</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
