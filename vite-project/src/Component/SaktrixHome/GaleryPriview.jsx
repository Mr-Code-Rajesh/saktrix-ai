import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";



const componentsData = [
  {
    type: "Buttons",
    name: "Primary Button",
    preview: <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-all">Click Me</button>,
    code: `<button className=\"bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-xl shadow-lg\">Click Me</button>`
  },
  {
    type: "Cards",
    name: "Feature Card",
    preview: (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Feature Title</h3>
        <p className="text-gray-600 dark:text-gray-400">Short feature description goes here.</p>
      </div>
    ),
    code: `<div className=\"p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border\">...</div>`
  },
  {
    type: "Sections",
    name: "Hero Section",
    preview: (
      <div className="text-center py-12 px-6 bg-gradient-to-br from-white to-purple-100 dark:from-gray-950 dark:to-gray-900 rounded-2xl">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Welcome to Saktrix UI</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Crafting ultra-level components for the modern web.</p>
      </div>
    ),
    code: `<div className=\"text-center py-12 px-6 bg-gradient...\">...</div>`
  },
  {
    type: "Sections",
    name: "Pricing Section",
    preview: (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Pro Plan</h3>
        <p className="text-gray-600 dark:text-gray-400">$19/mo for unlimited components.</p>
      </div>
    ),
    code: `<div className=\"p-6 bg-white dark:bg-gray-900...\">...</div>`
  }
];

export const ComponentGallery = ()=> {
  const [filter, setFilter] = useState("All");
  const [activeCode, setActiveCode] = useState(null);

  const filtered =
    filter === "All" ? componentsData : componentsData.filter(c => c.type === filter);

  return (
    <div className="py-24 px-6 bg-slate-950 neural-grid">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Premium <span className="saktrix-aurora-text">Library</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Explore our hand-crafted collection of components designed for high-performance AI applications and next-gen dashboards.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {['All', 'Buttons', 'Cards', 'Sections'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-xl text-sm font-bold tracking-wide transition-all border ${
                filter === type
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((comp, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl glass-card border-white/5 group"
            >
              <div className="mb-6 flex justify-center items-center h-32">{comp.preview}</div>
              <div className="flex justify-between items-center bg-white/5 -m-8 mt-4 p-4 rounded-b-2xl border-t border-white/5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{comp.name}</span>
                <button
                  onClick={() => setActiveCode(comp.code)}
                  className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all transform group-hover:scale-110"
                >
                  <FaCode />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {activeCode && (
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setActiveCode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card max-w-2xl w-full rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Component Code</h4>
                <button 
                   onClick={() => setActiveCode(null)}
                   className="text-slate-400 hover:text-white transition-colors"
                >
                  <RiCloseFill className="text-2xl" />
                </button>
              </div>
              <div className="p-6">
                <pre className="bg-slate-900 p-6 rounded-xl overflow-auto text-sm text-left text-cyan-400 border border-white/5 scrollbar-hide">
                  {activeCode}
                </pre>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => {
                        navigator.clipboard.writeText(activeCode);
                        alert("Copied!");
                    }}
                    className="flex-1 py-3 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-colors"
                  >
                    Copy Code
                  </button>
                  <button
                    onClick={() => setActiveCode(null)}
                    className="px-6 py-3 border border-white/10 text-slate-400 font-bold rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
