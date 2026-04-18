import { motion } from "framer-motion";
import { FaMoon, FaPalette, FaReact, FaMagic, FaCode, FaCubes, FaBolt, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Reusable Components",
    description: "Built for flexibility — drop in, customize, and deploy.",
    icon: <FaCubes className="text-indigo-500 text-3xl" />,
  },
  {
    title: "Dark Mode Ready",
    description: "Seamless light/dark UI with Tailwind’s dark: class.",
    icon: <FaMoon className="text-purple-500 text-3xl" />,
  },
  {
    title: "Framer Motion",
    description: "Powerful animations baked into every interaction.",
    icon: <FaBolt className="text-pink-500 text-3xl" />,
  },
  {
    title: "Gradient Themes",
    description: "Modern gradients for a vibrant brand presence.",
    icon: <FaPalette className="text-blue-500 text-3xl" />,
  },
  {
    title: "React Powered",
    description: "Built entirely with React for scalability and speed.",
    icon: <FaReact className="text-cyan-500 text-3xl" />,
  },
  {
    title: "Magic UI",
    description: "Visual finesse with pixel-perfect components.",
    icon: <FaMagic className="text-fuchsia-500 text-3xl" />,
  },
  {
    title: "Clean Code",
    description: "Developer-first approach with readable structure.",
    icon: <FaCode className="text-green-500 text-3xl" />,
  },
  {
    title: "Atomic Design",
    description: "Follow the atomic design methodology with ease.",
    icon: <FaLayerGroup className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Production Ready",
    description: "Every element tested, polished, and deployable.",
    icon: <FaCheckCircle className="text-emerald-500 text-3xl" />,
  },
];

export const FeatureGrid = ()=> {
  return (
    <div className="py-24 px-6 bg-slate-950 neural-grid">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Engineered for <span className="saktrix-aurora-text">Superior Performance</span>
        </motion.h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
          Every component in the Saktrix ecosystem is performance-optimized and accessibility-compliant for the modern web.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.5)' }}
              className="glass-card p-8 rounded-2xl text-left transition-all border-white/5 group"
            >
              <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-cyan-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
              
              <div className="mt-6 flex items-center gap-2 overflow-hidden">
                <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-cyan-500/20 transition-colors" />
                <div className="h-1 w-1 rounded-full bg-slate-800" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
