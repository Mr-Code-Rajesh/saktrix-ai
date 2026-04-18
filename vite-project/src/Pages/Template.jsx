import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { ShowcaseUI } from './UIdocs';
import { ComponentShowcase } from './UIDocsTwo';
// import { SaktrixUIDocs } from './UIdocs';

const components = [
  {
    id: 1,
    title: 'Gradient Button',
    code: `<button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg'>Click Me</button>`
  },
  {
    id: 2,
    title: 'Glass Card',
    code: `<div className='p-6 rounded-xl backdrop-blur-md bg-white/10 text-white shadow-lg'>Glassmorphism</div>`
  },
  {
    id: 3,
    title: 'Input Field',
    code: `<input className='p-2 rounded border border-white/20 bg-white/5 text-white' placeholder='Type here' />`
  },
];

export const Templates = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
    <section className="w-full py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Beautiful Components, Built for Speed 🚀
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {components.map(({ id, title, code }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.1 }}
            className="relative p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur shadow-xl group"
          >
            <div className="mb-4 text-sm font-medium text-gray-300">{title}</div>
            <div className="p-4 bg-black/20 rounded-lg text-left">
              <div dangerouslySetInnerHTML={{ __html: code }} />
            </div>
            <button
              onClick={() => copyToClipboard(code, id)}
              className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 p-2 rounded text-white transition"
            >
              {copied === id ? <FaCheck className="text-green-400" /> : <FaRegCopy />}
            </button>
          </motion.div>
        ))}
      </div>
    </section>

    {/* <SaktrixUIDocs/> */}
    <ShowcaseUI/>
    <ComponentShowcase/>
   </>
  );
};
