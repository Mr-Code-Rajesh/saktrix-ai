import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Education', 'Hobbies', 'Tools'];

const tabContent = {
  Education: (
    <div>
      <h3 className="text-xl font-semibold mb-2">🎓 B.Sc. Computer Science</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Graduated from XYZ University, focused on web development, algorithms, and project-based learning. Built multiple apps during coursework.
      </p>
    </div>
  ),
  Hobbies: (
    <div>
      <h3 className="text-xl font-semibold mb-2">🎮 Gaming & 🎨 Digital Art</h3>
      <p className="text-gray-600 dark:text-gray-300">
        I love exploring pixel art and immersive indie games. I also sketch UIs and occasionally stream code builds.
      </p>
    </div>
  ),
  Tools: (
    <div>
      <h3 className="text-xl font-semibold mb-2">🛠️ Tools I Use</h3>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
        <li>VS Code, Git & GitHub</li>
        <li>Figma for design</li>
        <li>React, Tailwind CSS, Firebase</li>
        <li>Framer Motion & Next.js</li>
      </ul>
    </div>
  ),
};

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <section className="w-full bg-white dark:bg-gray-950 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center text-gray-800 dark:text-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          More About Me
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition 
                ${activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content with animation */}
        <div className="mt-6 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


{/*  Tips : 

✅ Customization Tips:
You can add icons or SVG illustrations for each tab.
For even more interactivity, consider adding progress bars under Education or animated SVG hobbies.

*/}